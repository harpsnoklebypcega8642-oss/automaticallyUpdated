<?php
namespace app\api\controller;

use think\Cache;
use think\Request;

class Explore extends Base
{
    const API_URL = 'https://app.xhjim.app/api/v1/common/explore-list';
    const IMAGE_BASE = 'https://app.xhj.im';
    const CACHE_KEY = 'explore_idx_banner_list_v6';
    const CACHE_TTL = 300;

    public function banner_list(Request $request)
    {
        $debug = $request->param('debug', 0);

        $list = Cache::get(self::CACHE_KEY);
        if ($list !== false && is_array($list) && !empty($list)) {
            return $this->jsonResponse(1, '获取成功', $list, $debug);
        }

        $result = $this->fetchBannerList();
        $list = $result['list'];

        if (!empty($list)) {
            Cache::set(self::CACHE_KEY, $list, self::CACHE_TTL);
            return $this->jsonResponse(1, '获取成功', $list, $debug, $result['error']);
        }

        return $this->jsonResponse(0, '获取失败', [], $debug, $result['error']);
    }

    private function fetchBannerList()
    {
        $raw = $this->httpPost(self::API_URL);
        if ($raw === false || $raw === '') {
            return ['list' => [], 'error' => 'upstream_empty'];
        }

        $data = json_decode($raw, true);
        if (!is_array($data)) {
            return ['list' => [], 'error' => 'upstream_invalid_json'];
        }

        $items = [];
        if (!empty($data['items']) && is_array($data['items'])) {
            $items = $data['items'];
        } elseif (!empty($data['data']['items']) && is_array($data['data']['items'])) {
            $items = $data['data']['items'];
        }

        if (empty($items)) {
            $upstreamCode = isset($data['code']) ? strval($data['code']) : '';
            $upstreamMsg = isset($data['message']) ? strval($data['message']) : (isset($data['msg']) ? strval($data['msg']) : '');
            return ['list' => [], 'error' => 'upstream_no_items:' . $upstreamCode . ':' . $upstreamMsg];
        }

        $list = $this->filterBannerItems($items);
        if (empty($list)) {
            return ['list' => [], 'error' => 'no_idx_banner'];
        }

        return ['list' => $list, 'error' => ''];
    }

    private function filterBannerItems($items)
    {
        $filtered = [];
        foreach ($items as $item) {
            if (!is_array($item)) {
                continue;
            }
            if (!isset($item['position']) || $item['position'] !== 'idxBanner') {
                continue;
            }
            $image = isset($item['image']) ? trim($item['image']) : '';
            if ($image === '') {
                continue;
            }
            $filtered[] = [
                'id' => isset($item['id']) ? intval($item['id']) : 0,
                'title' => isset($item['title']) ? strval($item['title']) : '',
                'image' => $this->resolveImageUrl($image),
                'url' => $this->normalizeUrl(isset($item['url']) ? strval($item['url']) : ''),
                'sort' => isset($item['sort']) ? intval($item['sort']) : 0,
            ];
        }

        usort($filtered, function ($a, $b) {
            return $b['sort'] - $a['sort'];
        });

        foreach ($filtered as &$row) {
            unset($row['sort']);
        }
        unset($row);

        return $filtered;
    }

    private function httpPost($url, $body = '{}')
    {
        if (!function_exists('curl_init')) {
            return false;
        }

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
        curl_setopt($ch, CURLOPT_TIMEOUT, 20);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
            'Accept: application/json',
        ]);
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; XhjExplore/1.0)');

        $response = curl_exec($ch);
        curl_close($ch);
        return $response === false ? false : $response;
    }

    private function resolveImageUrl($image)
    {
        if (preg_match('/^https?:\/\//i', $image)) {
            return $image;
        }
        return rtrim(self::IMAGE_BASE, '/') . '/' . ltrim($image, '/');
    }

    private function normalizeUrl($url)
    {
        $url = trim($url);
        if ($url === '') {
            return '';
        }
        if (preg_match('/^https?:\/\//i', $url)) {
            return $url;
        }
        return '';
    }

    private function jsonResponse($code, $msg, $list, $debug = 0, $error = '')
    {
        $res = [
            'code' => $code,
            'msg' => $msg,
            'list' => $list,
        ];
        if (intval($debug) === 1 && $error !== '') {
            $res['debug'] = $error;
        }
        return json($res)->options(['json_encode_param' => JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE]);
    }
}
