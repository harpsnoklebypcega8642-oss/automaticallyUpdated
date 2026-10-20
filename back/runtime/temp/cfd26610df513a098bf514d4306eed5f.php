<?php if (!defined('THINK_PATH')) exit(); /*a:5:{s:41:"template/default_wap/html/vod/search.html";i:1778825509;s:74:"/www/wwwroot/video.fundof.tv/template/default_wap/html/public/include.html";i:1629196480;s:71:"/www/wwwroot/video.fundof.tv/template/default_wap/html/public/head.html";i:1778827086;s:73:"/www/wwwroot/video.fundof.tv/template/default_wap/html/public/paging.html";i:1629196480;s:71:"/www/wwwroot/video.fundof.tv/template/default_wap/html/public/foot.html";i:1629196480;}*/ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <title><?php echo $param['wd']; ?><?php echo $param['actor']; ?><?php echo $param['director']; ?><?php echo $param['area']; ?><?php echo $param['lang']; ?><?php echo $param['year']; ?><?php echo $param['class']; ?>搜索结果 - <?php echo $maccms['site_name']; ?></title>
    <meta name="keywords" content="<?php echo $param['wd']; ?><?php echo $param['actor']; ?><?php echo $param['director']; ?><?php echo $param['area']; ?><?php echo $param['lang']; ?><?php echo $param['year']; ?><?php echo $param['class']; ?>搜索结果" />
    <meta name="description" content="<?php echo $param['wd']; ?><?php echo $param['actor']; ?><?php echo $param['director']; ?><?php echo $param['area']; ?><?php echo $param['lang']; ?><?php echo $param['year']; ?><?php echo $param['class']; ?>搜索结果" />
    <link href="<?php echo $maccms['path']; ?>static/css/home.css" rel="stylesheet" type="text/css" />
<link href="<?php echo $maccms['path_tpl']; ?>css/style.css" rel="stylesheet" type="text/css" />
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

<header class="g_header2 g_header--hero g_header2--hero">
    <a href="javascript:MAC.GoBack()"><i class="moreArrow2"></i>返回</a>
    <?php echo $param['wd']; ?><?php echo $param['actor']; ?><?php echo $param['director']; ?><?php echo $param['area']; ?><?php echo $param['lang']; ?><?php echo $param['year']; ?><?php echo $param['class']; ?>搜索结果
    <label for="navSwitch" href="javascript:;" class="s_c mac_user"><i class="i_user"><span></span></i></label>
    <label for="navSwitch" href="javascript:;" class="s_r s_bt"><i class="i_bread"><span></span></i></label>
</header>
<!--搜索结果-->
<div class="fn-clear" id="list-focus">
    <ul class="show-list">
        <?php $__TAG__ = '{"num":"10","paging":"yes","pageurl":"vod\/search","order":"desc","by":"time","id":"vo","key":"key"}';$__LIST__ = model("Vod")->listCacheData($__TAG__);$__PAGING__ = mac_page_param($__LIST__['total'],$__LIST__['limit'],$__LIST__['page'],$__LIST__['pageurl'],$__LIST__['half']); if(is_array($__LIST__['list']) || $__LIST__['list'] instanceof \think\Collection || $__LIST__['list'] instanceof \think\Paginator): $key = 0; $__LIST__ = $__LIST__['list'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?>
        <li><a class="play-img" href="<?php echo mac_url_vod_detail($vo); ?>"><img src="<?php echo mac_url_img($vo['vod_pic']); ?>" alt="<?php echo $vo['vod_name']; ?>" /></a>
            <div class="play-txt">
                <h2><a href="<?php echo mac_url_vod_detail($vo); ?>"><?php echo $vo['vod_name']; ?></a></h2>
                <dl><dt>主演：</dt><dd><?php echo $vo['vod_actor']; ?></dd></dl>
                <dl><dt>状态：</dt><dd><span class="color"><?php if($vo['vod_serial'] > 0): ?>第<?php echo $vo['vod_serial']; ?>集/共<?php echo $vo['vod_total']; ?>集<?php else: ?><?php echo $vo['vod_remarks']; endif; ?></span></dd></dl>
                <dl><dt>导演：</dt><dd><?php echo $vo['vod_director']; ?></dd></dl>
                <dl><dt>类型：</dt><dd><?php echo $vo['type_name']; ?> / <?php echo $vo['vod_area']; ?> / <?php echo $vo['vod_year']; ?></dd></dl>
                <dl><dt>时间：</dt><dd><span id="addtime"><?php echo date('Y-m-d',$vo['vod_time']); ?></span></dd></dl><em>8.7分</em>
            </div>
        </li>
        <?php endforeach; endif; else: echo "" ;endif; ?>
    </ul>
    <div class="ui-bar list-page fn-clear">
        
<div class="mac_pages">
    <div class="page_tip">共<?php echo $__PAGING__['record_total']; ?>条数据,当前<?php echo $__PAGING__['page_current']; ?>/<?php echo $__PAGING__['page_total']; ?>页</div>
    <div class="page_info">
        <a class="page_link" href="<?php echo mac_url_page($__PAGING__['page_url'],1); ?>" title="首页">首页</a>
        <a class="page_link" href="<?php echo mac_url_page($__PAGING__['page_url'],$__PAGING__['page_prev']); ?>" title="上一页">上一页</a>
        <?php if(is_array($__PAGING__['page_num']) || $__PAGING__['page_num'] instanceof \think\Collection || $__PAGING__['page_num'] instanceof \think\Paginator): if( count($__PAGING__['page_num'])==0 ) : echo "" ;else: foreach($__PAGING__['page_num'] as $key=>$num): if($__PAGING__['page_current'] == $num): ?>
        <a class="page_link page_current" href="javascript:;" title="第<?php echo $num; ?>页"><?php echo $num; ?></a>
        <?php else: ?>
        <a class="page_link" href="<?php echo mac_url_page($__PAGING__['page_url'],$num); ?>" title="第<?php echo $num; ?>页" ><?php echo $num; ?></a>
        <?php endif; endforeach; endif; else: echo "" ;endif; ?>
        <a class="page_link" href="<?php echo mac_url_page($__PAGING__['page_url'],$__PAGING__['page_next']); ?>" title="下一页">下一页</a>
        <a class="page_link" href="<?php echo mac_url_page($__PAGING__['page_url'],$__PAGING__['page_total']); ?>" title="尾页">尾页</a>

        <input class="page_input" type="text" placeholder="页码"  id="page" autocomplete="off" style="width:40px">
        <button class="page_btn mac_page_go" type="button"  data-url="<?php echo $__PAGING__['page_url']; ?>" data-total="<?php echo $__PAGING__['page_total']; ?>" data-sp="<?php echo $__PAGING__['page_sp']; ?>">GO</button>
    </div>
</div>
    </div>
</div>
<!--猜你喜欢-->
<section class="box">
    <section class="title"><i class="iLine"></i><h2>喜欢<strong>“<?php echo $param['wd']; ?>”</strong>的人也喜欢</h2></section>
    <div class="box_con">
        <ul class="img-list dis">
            <?php $__TAG__ = '{"num":"6","order":"desc","by":"hits_week","id":"vo","key":"key"}';$__LIST__ = model("Vod")->listCacheData($__TAG__); if(is_array($__LIST__['list']) || $__LIST__['list'] instanceof \think\Collection || $__LIST__['list'] instanceof \think\Paginator): $key = 0; $__LIST__ = $__LIST__['list'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?>
            <li><a href="<?php echo mac_url_vod_detail($vo); ?>" title="<?php echo $vo['vod_name']; ?>"><span><img src="<?php echo mac_url_img($vo['vod_pic']); ?>" alt="<?php echo $vo['vod_name']; ?>"/></span><h2><?php echo $vo['vod_name']; ?></h2><p><?php echo $vo['vod_actor']; ?></p><i><?php echo $vo['vod_remarks']; ?></i><em></em></a></li>
            <?php endforeach; endif; else: echo "" ;endif; ?>
        </ul>
    </div>
</section>

<!-- 页脚 -->
<footer class="footer">
    Copyright &#169; 2012-2018 <?php echo $maccms['site_wapurl']; ?>. All Rights Reserved.
</footer>

</body>
</html>
