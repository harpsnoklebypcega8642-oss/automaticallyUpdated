<?php if (!defined('THINK_PATH')) exit(); /*a:5:{s:42:"template/default_wap/html/topic/index.html";i:1629196480;s:74:"/www/wwwroot/video.fundof.tv/template/default_wap/html/public/include.html";i:1629196480;s:71:"/www/wwwroot/video.fundof.tv/template/default_wap/html/public/head.html";i:1629196480;s:73:"/www/wwwroot/video.fundof.tv/template/default_wap/html/public/paging.html";i:1629196480;s:71:"/www/wwwroot/video.fundof.tv/template/default_wap/html/public/foot.html";i:1629196480;}*/ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <title>专题首页 - 精品专题 - 推荐专题 - <?php echo $maccms['site_name']; ?></title>
    <meta name="keywords" content="电影专题,电视剧专题,综艺专题,动漫专题,推荐专题,专题收录" />
    <meta name="description" content="本站提供最新最全精品专题数据" />
    <link href="<?php echo $maccms['path']; ?>static/css/home.css" rel="stylesheet" type="text/css" />
<link href="<?php echo $maccms['path_tpl']; ?>css/style.css" rel="stylesheet" type="text/css" />
<script src="<?php echo $maccms['path']; ?>static/js/jquery.js"></script>
<script src="<?php echo $maccms['path']; ?>static/js/jquery.lazyload.js"></script>
<script src="<?php echo $maccms['path']; ?>static/js/jquery.autocomplete.js"></script>
<script>var maccms={"path":"","mid":"<?php echo $maccms['mid']; ?>","aid":"<?php echo $maccms['aid']; ?>","url":"<?php echo $maccms['site_url']; ?>","wapurl":"<?php echo $maccms['site_wapurl']; ?>","mob_status":"<?php echo $maccms['mob_status']; ?>"};</script>
<script src="<?php echo $maccms['path']; ?>static/js/home.js"></script>
<script src="<?php echo $maccms['path']; ?>static/js/jquery.imageupload.js"></script>
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
    <ul class="g_wrap_p">
        <li><a href="<?php echo $maccms['path']; ?>">首页</a></li>
        <?php $__TAG__ = '{"ids":"parent","order":"asc","by":"sort","id":"vo","key":"key"}';$__LIST__ = model("Type")->listCacheData($__TAG__); if(is_array($__LIST__['list']) || $__LIST__['list'] instanceof \think\Collection || $__LIST__['list'] instanceof \think\Paginator): $key = 0; $__LIST__ = $__LIST__['list'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?>
        <li><a href="<?php echo mac_url_type($vo); ?>"><?php echo $vo['type_name']; ?></a></li>
        <?php endforeach; endif; else: echo "" ;endif; ?>
        <li><a href="<?php echo mac_url('topic/index'); ?>">影视专题</a></li>
        <li><a href="<?php echo mac_url('map/index'); ?>">热门排行</a></li>
    </ul>
    <div class="g_wrap_p">
        <div class="ui-search">
            <form id="search" name="search" method="get" action="<?php echo mac_url('vod/search'); ?>" onSubmit="return qrsearch();">
                <input type="text" id="wd" name="wd" class="search-input" value="请输入影片名或演员名称" onfocus="if(this.value=='请输入影片名或演员名称'){this.value='';}" onblur="if(this.value==''){this.value='请输入影片名或演员名称';};" />
                <input type="submit" id="searchbutton"  class="search-button" value="搜索" />
            </form>
        </div>
        <div class="resou">
            <?php $_69c0bc4e79634=explode(',',$maccms['search_hot']); if(is_array($_69c0bc4e79634) || $_69c0bc4e79634 instanceof \think\Collection || $_69c0bc4e79634 instanceof \think\Paginator): if( count($_69c0bc4e79634)==0 ) : echo "" ;else: foreach($_69c0bc4e79634 as $key2=>$vo2): ?>
            <a href="<?php echo mac_url('vod/search',['wd'=>$vo2]); ?>"><?php echo $vo2; ?></a>
            <?php endforeach; endif; else: echo "" ;endif; ?>
        </div>
    </div>
</header>
<!--当前位置-->
<header class="g_header2">
    <a href="javascript:MAC.GoBack()"><i class="moreArrow2"></i>返回</a>
    专题列表
    <label for="navSwitch" href="javascript:;" class="s_c mac_user"><i class="i_user"><span></span></i></label>
    <label for="navSwitch" href="javascript:;" class="s_r s_bt"><i class="i_bread"><span></span></i></label>
</header>
<!--专题-->
<div class="zhuanti-list">
    <ul>
        <?php $__TAG__ = '{"num":"10","paging":"yes","order":"desc","by":"time","id":"vo","key":"key"}';$__LIST__ = model("Topic")->listCacheData($__TAG__);$__PAGING__ = mac_page_param($__LIST__['total'],$__LIST__['limit'],$__LIST__['page'],$__LIST__['pageurl'],$__LIST__['half']); if(is_array($__LIST__['list']) || $__LIST__['list'] instanceof \think\Collection || $__LIST__['list'] instanceof \think\Paginator): $key = 0; $__LIST__ = $__LIST__['list'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?>
        <li><a class="play-img" href="<?php echo mac_url_topic_detail($vo); ?>"><img src="<?php echo mac_url_img($vo['topic_pic']); ?>" alt="<?php echo $vo['topic_name']; ?>" /></a>
            <div class="play-txt">
                <h2><a href="内页.html"><?php echo $vo['topic_name']; ?></a></h2>
                <p class="juqing">专题介绍：<?php echo $vo['topic_blurb']; ?>……<a class="link detail-desc" href="<?php echo mac_url_topic_detail($vo); ?>">【详细剧情】</a></p>
            </div>
        </li>
        <?php endforeach; endif; else: echo "" ;endif; ?>
    </ul>
    <!-- 分页 -->
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

<!-- 页脚 -->
<footer class="footer">
    Copyright &#169; 2012-2018 <?php echo $maccms['site_wapurl']; ?>. All Rights Reserved.
</footer>

</body>
</html>

