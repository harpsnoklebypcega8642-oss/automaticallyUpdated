<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:40:"template/default_wap/html/map/index.html";i:1783483108;s:70:"/www/wwwroot/m.fundof.tv/template/default_wap/html/public/include.html";i:1783501612;s:67:"/www/wwwroot/m.fundof.tv/template/default_wap/html/public/head.html";i:1783483108;s:67:"/www/wwwroot/m.fundof.tv/template/default_wap/html/public/foot.html";i:1783483108;}*/ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <title><?php echo $maccms['site_name']; ?></title>
    <link href="<?php echo $maccms['path']; ?>static/css/home.css" rel="stylesheet" type="text/css" />
<link href="<?php echo $maccms['path_tpl']; ?>css/style.css" rel="stylesheet" type="text/css" />
<link href="<?php echo $maccms['path_tpl']; ?>css/desktop-adapt.css?v=20260708b" rel="stylesheet" type="text/css" />
<script src="<?php echo $maccms['path']; ?>static/js/jquery.js"></script>
<script src="<?php echo $maccms['path']; ?>static/js/jquery.lazyload.js"></script>
<script src="<?php echo $maccms['path']; ?>static/js/jquery.autocomplete.js"></script>
<script>var maccms={"path":"","mid":"<?php echo $maccms['mid']; ?>","aid":"<?php echo $maccms['aid']; ?>","url":"<?php echo $maccms['site_url']; ?>","wapurl":"<?php echo $maccms['site_wapurl']; ?>","mob_status":"<?php echo $maccms['mob_status']; ?>"};</script>
<script src="<?php echo $maccms['path']; ?>static/js/home.js"></script>
<script src="<?php echo $maccms['path']; ?>static/js/jquery.imageupload.js"></script>

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

<!--当前位置-->
<header class="g_header2 g_header--hero g_header2--hero">
    <a href="javascript:MAC.GoBack()"><i class="moreArrow2"></i>返回</a>
    最新更新
    <label for="navSwitch" href="javascript:;" class="s_c mac_user"><i class="i_user"><span></span></i></label>
    <label for="navSwitch" href="javascript:;" class="s_r s_bt"><i class="i_bread"><span></span></i></label>
</header>
<!--列表部分-->
<div class="ui-box ui-qire fn-clear g_header2-hero-offset" id="qire-lasted">
    <div class="ui-title fn-clear">
        <h2>最近100个更新</h2>
        <div class="lasted-time fn-right">更新时间</div>
    </div>
    <div class="ui-cnt">
        <ul class="lasted-list fn-clear">
            <?php $__TAG__ = '{"num":"100","order":"desc","by":"time","id":"vo","key":"key"}';$__LIST__ = model("Vod")->listCacheData($__TAG__); if(is_array($__LIST__['list']) || $__LIST__['list'] instanceof \think\Collection || $__LIST__['list'] instanceof \think\Paginator): $key = 0; $__LIST__ = $__LIST__['list'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?>
            <li><div class="lasted-num fn-left">∷</div>
                <div class="lasted-tit fn-left">
                    <h5 class="show-tipinfo"><a href="<?php echo mac_url_vod_detail($vo); ?>"><?php echo $vo['vod_name']; ?></a><em>/</em><?php if($vo['vod_serial'] > 0): ?>第<?php echo $vo['vod_serial']; ?>集/共<?php echo $vo['vod_total']; ?>集<?php else: ?><?php echo $vo['vod_version']; endif; ?></h5>
                </div>
                <div class="lasted-time fn-right"><?php echo date('Y-m-d H:i:s',$vo['vod_time']); ?></div>
            </li>
            <?php endforeach; endif; else: echo "" ;endif; ?>
        </ul>
    </div>
</div>

<!-- 页脚 -->
<footer class="footer">
    Copyright &#169; 2012-2018 <?php echo $maccms['site_wapurl']; ?>. All Rights Reserved.
</footer>

</body>
</html>
