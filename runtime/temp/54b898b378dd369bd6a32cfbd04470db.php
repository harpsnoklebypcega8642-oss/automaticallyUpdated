<?php if (!defined('THINK_PATH')) exit(); /*a:5:{s:42:"template/default_wap/html/gbook/index.html";i:1783483108;s:70:"/www/wwwroot/m.fundof.tv/template/default_wap/html/public/include.html";i:1783501612;s:67:"/www/wwwroot/m.fundof.tv/template/default_wap/html/public/head.html";i:1783483108;s:69:"/www/wwwroot/m.fundof.tv/template/default_wap/html/public/paging.html";i:1783483108;s:67:"/www/wwwroot/m.fundof.tv/template/default_wap/html/public/foot.html";i:1783483108;}*/ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <title>留言板 - <?php echo $maccms['site_name']; ?></title>
    <link href="<?php echo $maccms['path']; ?>static/css/home.css" rel="stylesheet" type="text/css" />
<link href="<?php echo $maccms['path_tpl']; ?>css/style.css" rel="stylesheet" type="text/css" />
<link href="<?php echo $maccms['path_tpl']; ?>css/desktop-adapt.css?v=20260708b" rel="stylesheet" type="text/css" />
<script src="<?php echo $maccms['path']; ?>static/js/jquery.js"></script>
<script src="<?php echo $maccms['path']; ?>static/js/jquery.lazyload.js"></script>
<script src="<?php echo $maccms['path']; ?>static/js/jquery.autocomplete.js"></script>
<script>var maccms={"path":"","mid":"<?php echo $maccms['mid']; ?>","aid":"<?php echo $maccms['aid']; ?>","url":"<?php echo $maccms['site_url']; ?>","wapurl":"<?php echo $maccms['site_wapurl']; ?>","mob_status":"<?php echo $maccms['mob_status']; ?>"};</script>
<script src="<?php echo $maccms['path']; ?>static/js/home.js"></script>
<script src="<?php echo $maccms['path']; ?>static/js/jquery.imageupload.js"></script>

    <script>
        $(function(){
            MAC.Gbook.Login = <?php echo $gbook['login']; ?>;
            MAC.Gbook.Verify = <?php echo $gbook['verify']; ?>;
            MAC.Gbook.Init();
        });
    </script>
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

<header class="g_header">
    <h1 class="s_l g_logo"><a href="<?php echo $maccms['path']; ?>"><img src="<?php echo mac_url_img($maccms['site_logo']); ?>"></a></h1>
    <label for="navSwitch" href="javascript:;" class="s_r s_bt"><i class="i_bread"><span></span></i></label>
</header>

<div class="wrap wrap_ff">
    <section class="reply_box clearfix">
        <!--留言开始-->
        <div class="mac_msg_r">
            <div class="msg_tit">我要留言</div>
            <form class="gbook_form">
                <p class="msg_cue">请输入您的留言内容：</p>
                <textarea class="gbook_content" name="gbook_content"></textarea>
                <div class="msg_code">
                    <?php if($gbook['verify'] == 1): ?>
                    验证码：<input type="text" name="verify" class="mac_verify">
                    <?php endif; ?>
                    <div class="remaining-w fr">还可输入<span class="gbook_remaining remaining " >200</span></div>
                </div>
                <input type="button" class="gbook_submit submit_btn" value="提交留言">
            </form>
        </div>
        <div class="mac_msg_l">
            <?php $__TAG__ = '{"num":"10","paging":"yes","order":"desc","by":"id","id":"vo","key":"key"}';$__LIST__ = model("Gbook")->listCacheData($__TAG__);$__PAGING__ = mac_page_param($__LIST__['total'],$__LIST__['limit'],$__LIST__['page'],$__LIST__['pageurl'],$__LIST__['half']); if(is_array($__LIST__['list']) || $__LIST__['list'] instanceof \think\Collection || $__LIST__['list'] instanceof \think\Paginator): $key = 0; $__LIST__ = $__LIST__['list'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?>
            <div class="mac_msg_item">
                <div class="msg_tag">
                    <div class="count_bg"></div>
                    <div class="msg_count"><strong>第<?php echo $vo['gbook_id']; ?></strong>条留言</div>
                </div>
                <div class="msg_list">
                    <div class="msg_reply">
                        <p class="msg_title"><strong><a class="name" href="javascript:;"><?php echo $vo['gbook_name']; ?></a><a target="_blank">(<?php echo mac_long2ip($vo['gbook_ip']); ?>)</a></strong><span class="time"><?php echo date('Y-m-d H:i:s',$vo['gbook_time']); ?></span></p>
                        <div class="msg_cont">
                            <?php echo $vo['gbook_content']; ?>
                        </div>
                    </div>
                    <?php if($vo['gbook_reply_time'] > 0): ?>
                    <div class="reply_answer">
                        <p class="msg_title"><strong>站长回复：</strong><span class="time"><?php echo date('Y-m-d H:i:s',$vo['gbook_reply_time']); ?></span></p>
                        <div class="msg_cont">
                            <?php echo $vo['gbook_reply']; ?>
                        </div>
                    </div>
                    <?php endif; ?>
                </div>
            </div>
            <?php endforeach; endif; else: echo "" ;endif; ?>
        </div>
        <!--留言结束-->
    </section>

    
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
<!-- 页脚 -->
<footer class="footer">
    Copyright &#169; 2012-2018 <?php echo $maccms['site_wapurl']; ?>. All Rights Reserved.
</footer>

</body>
</html>