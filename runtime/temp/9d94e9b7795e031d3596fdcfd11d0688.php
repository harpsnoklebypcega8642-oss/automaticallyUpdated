<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:42:"template/default_wap/html/index/index.html";i:1792465063;s:70:"/www/wwwroot/m.fundof.tv/template/default_wap/html/public/include.html";i:1792465063;s:67:"/www/wwwroot/m.fundof.tv/template/default_wap/html/public/head.html";i:1792465063;s:67:"/www/wwwroot/m.fundof.tv/template/default_wap/html/public/foot.html";i:1792465063;}*/ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <title><?php echo $maccms['site_name']; ?></title>
    <meta name="keywords" content="<?php echo $maccms['site_keywords']; ?>" />
    <meta name="description" content="<?php echo $maccms['site_description']; ?>" />
    <link href="<?php echo $maccms['path']; ?>static/css/home.css" rel="stylesheet" type="text/css" />
<link href="<?php echo $maccms['path_tpl']; ?>css/style.css" rel="stylesheet" type="text/css" />
<link href="<?php echo $maccms['path_tpl']; ?>css/desktop-adapt.css?v=20260708b" rel="stylesheet" type="text/css" />
<script src="<?php echo $maccms['path']; ?>static/js/jquery.js"></script>
<script src="<?php echo $maccms['path']; ?>static/js/jquery.lazyload.js"></script>
<script src="<?php echo $maccms['path']; ?>static/js/jquery.autocomplete.js"></script>
<script>var maccms={"path":"","mid":"<?php echo $maccms['mid']; ?>","aid":"<?php echo $maccms['aid']; ?>","url":"<?php echo $maccms['site_url']; ?>","wapurl":"<?php echo $maccms['site_wapurl']; ?>","mob_status":"<?php echo $maccms['mob_status']; ?>"};</script>
<script src="<?php echo $maccms['path']; ?>static/js/home.js"></script>
<script src="<?php echo $maccms['path']; ?>static/js/jquery.imageupload.js"></script>

    <script defer src="<?php echo $maccms['path_tpl']; ?>js/index-home.js"></script>
    <script defer src="<?php echo $maccms['path_tpl']; ?>js/banner-api.js"></script>
</head>
<body>
<!-- 页头 -->
<input type="checkbox" id="navSwitch">
<header class="g_nav trans">
    <div class="g_wrap_p g_nav__shell">
        <div class="g_nav__search">
            <form id="search" name="search" method="get" action="<?php echo mac_url('vod/search'); ?>" class="g_nav__searchForm" onSubmit="return qrsearch();">
                <input type="text" id="wd" name="wd" class="g_nav__searchInput" placeholder="我想赚几个亿很合理吧" />
                <button type="submit" id="searchbutton" class="g_nav__searchButton" aria-label="搜索">
                    <svg class="g_nav__searchIcon" width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <circle cx="24.1415" cy="24.1429" r="17.9524" stroke="#3F4652" stroke-width="4.95238"/>
                        <path d="M37.7598 39L47.0457 48.5253" stroke="#3F4652" stroke-width="4.95238"/>
                    </svg>
                </button>
            </form>
        </div>
        <div class="g_nav__chips">
            <a class="g_nav__chip" href="<?php echo mac_url('vod/search',['wd'=>'变形金刚']); ?>">变形金刚</a>
            <a class="g_nav__chip" href="<?php echo mac_url('vod/search',['wd'=>'火影忍者']); ?>">火影忍者</a>
            <a class="g_nav__chip" href="<?php echo mac_url('vod/search',['wd'=>'复仇者联盟']); ?>">复仇者联盟</a>
            <a class="g_nav__chip" href="<?php echo mac_url('vod/search',['wd'=>'狼']); ?>">狼</a>
            <a class="g_nav__chip" href="<?php echo mac_url('vod/search',['wd'=>'红海行动']); ?>">红海行动</a>
        </div>
    </div>
</header>

<header class="g_header g_header--hero">
    <!-- <h1 class="s_l g_logo"><a href="<?php echo $maccms['path']; ?>"><img src="<?php echo mac_url_img($maccms['site_logo']); ?>"></a></h1> -->
    <label for="navSwitch" href="javascript:;" class="s_c mac_user"><i class="i_user"><span></span></i></label>
    <label for="navSwitch" href="javascript:;" class="s_r s_bt"><i class="i_bread"><span></span></i></label>
</header>
<!-- banner 开始 -->
<div class="xhj-carousel xhj-carousel--hero" data-carousel data-banner-api data-interval="4200">
    <div class="xhj-carousel__track"></div>
    <div class="xhj-carousel__dots" aria-label="顶部轮播切换"></div>
</div>
<nav class="menuNavList">
    <?php $__TAG__ = '{"ids":"parent","order":"asc","by":"sort","id":"vo","key":"key"}';$__LIST__ = model("Type")->listCacheData($__TAG__); if(is_array($__LIST__['list']) || $__LIST__['list'] instanceof \think\Collection || $__LIST__['list'] instanceof \think\Paginator): $key = 0; $__LIST__ = $__LIST__['list'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?>
    <a href="<?php echo mac_url_type($vo); ?>">
        <i class="menuNavIcon 
        <?php if($vo['type_name'] == '体育'): ?>tyIcon
        <?php else: switch($vo['type_id']): case "1": ?>dyIcon<?php break; case "2": ?>dsjIcon<?php break; case "3": ?>zyIcon<?php break; case "4": ?>dmIcon<?php break; case "5": ?>dspIcon<?php break; case "6": ?>dspIcon<?php break; case "7": ?>tyIcon<?php break; endswitch; endif; ?>">
        </i>
        <span class="sTit"><?php echo $vo['type_name']; ?></span>
    </a>
    <?php endforeach; endif; else: echo "" ;endif; ?>
    <a href="<?php echo mac_url('map/index'); ?>"><i class="menuNavIcon bdIcon"></i><span class="sTit">排行</span></a>
</nav>
<section class="homeRecommendWrap">
    <p class="homeRecommendMeta">本站由小火箭M团队运营 资源已更新至2026年</p>
    <section class="homeRecommendCard">
        <div class="homeRecommendHead">
            <div class="homeRecommendTitle">最新推荐</div>
            <a class="homeRecommendMore" href="<?php echo mac_url('map/index'); ?>">更多</a>
        </div>
        <div class="homeRecommendBody">
            <ul class="homeRecommendGrid">
                <?php $__TAG__ = '{"num":"9","type":"1,2,3,4","order":"desc","by":"time","id":"vo","key":"key"}';$__LIST__ = model("Vod")->listCacheData($__TAG__); if(is_array($__LIST__['list']) || $__LIST__['list'] instanceof \think\Collection || $__LIST__['list'] instanceof \think\Paginator): $key = 0; $__LIST__ = $__LIST__['list'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?>
                <li class="homeRecommendItem">
                    <a href="<?php echo mac_url_vod_detail($vo); ?>" title="<?php echo $vo['vod_name']; ?>">
                        <span class="homeRecommendPoster">
                            <img src="<?php echo mac_url_img($vo['vod_pic']); ?>" alt="<?php echo $vo['vod_name']; ?>"/>
                        </span>
                        <strong><?php echo $vo['vod_name']; ?></strong>
                        <p><?php if($vo['vod_actor'] != ''): ?><?php echo mac_substring($vo['vod_actor'],18); else: ?><?php echo $vo['type']['type_name']; endif; ?></p>
                    </a>
                </li>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </ul>
        </div>
    </section>
</section>
<!-- 友情链接 -->
<div id="link" class="block">
    <div id="title">友情链接 LINK</div>
    <ul>
        <li><a href="https://www.maccms.pro/" target="_blank">苹果CMS-官网</a></li>
        <li><a href="https://github.com/maccmspro" target="_blank">苹果CMS-Github</a></li>
        <?php $__TAG__ = '{"num":"10","order":"desc","by":"id","id":"vo","key":"key"}';$__LIST__ = model("Link")->listCacheData($__TAG__); if(is_array($__LIST__['list']) || $__LIST__['list'] instanceof \think\Collection || $__LIST__['list'] instanceof \think\Paginator): $key = 0; $__LIST__ = $__LIST__['list'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?>
        <li><a href="<?php echo $vo['link_url']; ?>" target="_blank"><?php echo $vo['link_name']; ?></a></li>
        <?php endforeach; endif; else: echo "" ;endif; ?>
        <div class="clear"></div>
    </ul>
</div>
<!-- 页脚 -->
<footer class="footer">
    Copyright &#169; 2012-2018 <?php echo $maccms['site_wapurl']; ?>. All Rights Reserved.
</footer>

</body>
</html>
