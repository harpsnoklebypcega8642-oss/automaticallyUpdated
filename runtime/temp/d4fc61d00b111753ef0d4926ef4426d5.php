<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:66:"D:\project\xhj_explore_video/application/admin\view\vod\batch.html";i:1770883884;s:68:"D:\project\xhj_explore_video\application\admin\view\public\head.html";i:1770883878;}*/ ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title><?php echo $title; ?> - <?php echo lang('admin/public/head/title'); ?></title>
    <link rel="stylesheet" href="/static/layui/css/layui.css?v=1024">
    <link rel="stylesheet" href="/static/css/admin_style.css?v=1024">
    <script type="text/javascript" src="/static/js/jquery.js?v=1024"></script>
    <script type="text/javascript" src="/static/layui/layui.js?v=1024"></script>
    <script>
        var ROOT_PATH="",ADMIN_PATH="<?php echo $_SERVER['SCRIPT_NAME']; ?>", MAC_VERSION="v10";
    </script>
</head>
<body>
<div class="page-container p10">

    <form class="layui-form" method="post" action="">

        <div class="my-toolbar-box">

            <div class="center mb10">

                <div class="layui-input-inline w150">
                    <select name="type">
                        <option value=""><?php echo lang('select_type'); ?></option>
                        <?php if(is_array($type_tree) || $type_tree instanceof \think\Collection || $type_tree instanceof \think\Paginator): $i = 0; $__LIST__ = $type_tree;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;if($vo['type_mid'] == 1): ?>
                        <option value="<?php echo $vo['type_id']; ?>" <?php if($param['type'] == $vo['type_id']): ?>selected <?php endif; ?>><?php echo $vo['type_name']; ?></option>
                        <?php if(is_array($vo['child']) || $vo['child'] instanceof \think\Collection || $vo['child'] instanceof \think\Paginator): $i = 0; $__LIST__ = $vo['child'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$ch): $mod = ($i % 2 );++$i;?>
                        <option value="<?php echo $ch['type_id']; ?>" <?php if($param['type'] == $ch['type_id']): ?>selected <?php endif; ?>>&nbsp;&nbsp;&nbsp;&nbsp;├&nbsp;<?php echo $ch['type_name']; ?></option>
                        <?php endforeach; endif; else: echo "" ;endif; endif; endforeach; endif; else: echo "" ;endif; ?>
                    </select>
                </div>
                <div class="layui-input-inline w150">
                    <select name="status">
                        <option value=""><?php echo lang('select_status'); ?></option>
                        <option value="0" <?php if($param['status'] == '0'): ?>selected <?php endif; ?>><?php echo lang('reviewed_not'); ?></option>
                        <option value="1" <?php if($param['status'] == '1'): ?>selected <?php endif; ?>><?php echo lang('reviewed'); ?></option>
                    </select>
                </div>
                <div class="layui-input-inline w150">
                    <select name="level">
                        <option value=""><?php echo lang('select_level'); ?></option>
                        <option value="9" <?php if($param['level'] == '9'): ?>selected <?php endif; ?>><?php echo lang('level'); ?>9-<?php echo lang('slide'); ?></option>
                        <option value="1" <?php if($param['level'] == '1'): ?>selected <?php endif; ?>><?php echo lang('level'); ?>1</option>
                        <option value="2" <?php if($param['level'] == '2'): ?>selected <?php endif; ?>><?php echo lang('level'); ?>2</option>
                        <option value="3" <?php if($param['level'] == '3'): ?>selected <?php endif; ?>><?php echo lang('level'); ?>3</option>
                        <option value="4" <?php if($param['level'] == '4'): ?>selected <?php endif; ?>><?php echo lang('level'); ?>4</option>
                        <option value="5" <?php if($param['level'] == '5'): ?>selected <?php endif; ?>><?php echo lang('level'); ?>5</option>
                        <option value="6" <?php if($param['level'] == '6'): ?>selected <?php endif; ?>><?php echo lang('level'); ?>6</option>
                        <option value="7" <?php if($param['level'] == '7'): ?>selected <?php endif; ?>><?php echo lang('level'); ?>7</option>
                        <option value="8" <?php if($param['level'] == '8'): ?>selected <?php endif; ?>><?php echo lang('level'); ?>8</option>

                    </select>
                </div>
                <div class="layui-input-inline w150">
                    <select name="lock">
                        <option value=""><?php echo lang('select_lock'); ?></option>
                        <option value="0" <?php if($param['lock'] == '0'): ?>selected <?php endif; ?>><?php echo lang('unlock'); ?></option>
                        <option value="1" <?php if($param['lock'] == '1'): ?>selected <?php endif; ?>><?php echo lang('lock'); ?></option>
                    </select>
                </div>


                <div class="layui-input-inline w150">
                    <select name="weekday">
                        <option value=""><?php echo lang('admin/vod/select_weekday'); ?></option>
                        <?php $_result=explode(',',$GLOBALS['config']['app']['vod_extend_weekday']);if(is_array($_result) || $_result instanceof \think\Collection || $_result instanceof \think\Paginator): $key2 = 0; $__LIST__ = $_result;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo2): $mod = ($key2 % 2 );++$key2;?>
                        <option value="<?php echo $vo2; ?>" <?php if($param['weekday'] == $vo2): ?>selected <?php endif; ?>><?php echo $vo2; ?></option>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </select>
                </div>

                <div class="layui-input-inline w150">
                    <select name="area">
                        <option value=""><?php echo lang('admin/vod/select_area'); ?></option>
                        <?php $_result=explode(',',$GLOBALS['config']['app']['vod_extend_area']);if(is_array($_result) || $_result instanceof \think\Collection || $_result instanceof \think\Paginator): $key2 = 0; $__LIST__ = $_result;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo2): $mod = ($key2 % 2 );++$key2;?>
                        <option value="<?php echo $vo2; ?>" <?php if($param['area'] == $vo2): ?>selected <?php endif; ?>><?php echo $vo2; ?></option>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </select>
                </div>

                <div class="layui-input-inline w150">
                    <select name="lang">
                        <option value=""><?php echo lang('admin/vod/select_lang'); ?></option>
                        <?php $_result=explode(',',$GLOBALS['config']['app']['vod_extend_lang']);if(is_array($_result) || $_result instanceof \think\Collection || $_result instanceof \think\Paginator): $key2 = 0; $__LIST__ = $_result;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo2): $mod = ($key2 % 2 );++$key2;?>
                        <option value="<?php echo $vo2; ?>" <?php if($param['lang'] == $vo2): ?>selected <?php endif; ?>><?php echo $vo2; ?></option>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </select>
                </div>

            </div>

            <div class="center mb10">

                <div class="layui-input-inline w150">
                    <select name="player">
                        <option value=""><?php echo lang('admin/vod/select_player'); ?></option>
                        <option value="no"><?php echo lang('admin/vod/player_empty'); ?></option>
                        <?php if(is_array($player_list) || $player_list instanceof \think\Collection || $player_list instanceof \think\Paginator): $i = 0; $__LIST__ = $player_list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                        <option value="<?php echo $vo['from']; ?>"><?php echo $vo['show']; ?></option>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </select>
                </div>

                <div class="layui-input-inline w150">
                    <select name="downer">
                        <option value=""><?php echo lang('admin/vod/select_downer'); ?></option>
                        <option value="no" ><?php echo lang('admin/vod/downer_empty'); ?></option>
                        <?php if(is_array($downer_list) || $downer_list instanceof \think\Collection || $downer_list instanceof \think\Paginator): $i = 0; $__LIST__ = $downer_list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                        <option value="<?php echo $vo['from']; ?>"><?php echo $vo['show']; ?></option>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </select>
                </div>

                <div class="layui-input-inline w150">
                    <select name="pic">
                        <option value=""><?php echo lang('select_pic'); ?></option>
                        <option value="1" <?php if($param['pic'] == '1'): ?>selected<?php endif; ?>><?php echo lang('pic_empty'); ?></option>
                        <option value="2" <?php if($param['pic'] == '2'): ?>selected<?php endif; ?>><?php echo lang('pic_remote'); ?></option>
                        <option value="3" <?php if($param['pic'] == '3'): ?>selected<?php endif; ?>><?php echo lang('pic_sync_err'); ?></option>
                    </select>
                </div>

                <div class="layui-input-inline w150">
                    <select name="isend">
                        <option value=""><?php echo lang('admin/vod/select_isend'); ?></option>
                        <option value="0" <?php if($param['isend'] == '0'): ?>selected <?php endif; ?>><?php echo lang('admin/vod/no_end'); ?></option>
                        <option value="1" <?php if($param['isend'] == '1'): ?>selected <?php endif; ?>><?php echo lang('admin/vod/is_end'); ?></option>
                    </select>
                </div>
                <div class="layui-input-inline w150">
                    <select name="copyright">
                        <option value=""><?php echo lang('admin/vod/select_copyright'); ?></option>
                        <option value="0" <?php if($param['copyright'] == '0'): ?>selected <?php endif; ?>><?php echo lang('close'); ?></option>
                        <option value="1" <?php if($param['copyright'] == '1'): ?>selected <?php endif; ?>><?php echo lang('open'); ?></option>
                    </select>
                </div>

                <div class="layui-input-inline">
                    <input type="text" autocomplete="off" placeholder="<?php echo lang('wd'); ?>" class="layui-input" name="wd" value="<?php echo $param['wd']; ?>">
                </div>

            </div>

        </div>

        <fieldset class="layui-elem-field">
            <legend><?php echo lang('del_multi'); ?></legend>
            <div class="layui-field-box">
                <div class="layui-form-item">
                    <div class="layui-inline">
                        <label class="layui-form-label"><input type="radio" lay-ignore value="1" name="ck_del"><?php echo lang('del_data'); ?></label>
                        <label class="layui-form-label"><input type="radio" lay-ignore value="2" name="ck_del"><?php echo lang('admin/vod/del_player'); ?></label>
                        <label class="layui-form-label"><input type="radio" lay-ignore value="3" name="ck_del"><?php echo lang('admin/vod/del_downer'); ?></label>
                    </div>
                </div>

                <div class="layui-form-item">
                    <button type="button" class="layui-btn btn_submit"><?php echo lang('del_multi'); ?></button>
                </div>
            </div>
        </fieldset>

        <fieldset class="layui-elem-field">
        <legend><?php echo lang('multi_set'); ?></legend>
        <div class="layui-field-box">

            <div class="layui-form-item">
                <div class="layui-inline">
                    <label class="layui-form-label"><input type="checkbox" lay-ignore value="1" name="ck_level" title="<?php echo lang('level'); ?>"><?php echo lang('level'); ?></label>
                    <div class="layui-input-inline" style="width: 100px;">
                        <select name="val_level">
                            <option value=""><?php echo lang('select_level'); ?></option>
                            <option value="9" ><?php echo lang('level'); ?>9-<?php echo lang('slide'); ?></option>
                            <option value="1" ><?php echo lang('level'); ?>1</option>
                            <option value="2" ><?php echo lang('level'); ?>2</option>
                            <option value="3" ><?php echo lang('level'); ?>3</option>
                            <option value="4" ><?php echo lang('level'); ?>4</option>
                            <option value="5" ><?php echo lang('level'); ?>5</option>
                            <option value="6" ><?php echo lang('level'); ?>6</option>
                            <option value="7" ><?php echo lang('level'); ?>7</option>
                            <option value="8" ><?php echo lang('level'); ?>8</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="layui-form-item">
                <div class="layui-inline">
                    <label class="layui-form-label"><input type="checkbox" lay-ignore value="1" name="ck_lock"><?php echo lang('lock'); ?></label>
                    <div class="layui-input-inline" style="width: 100px;">
                        <select name="val_lock">
                            <option value=""><?php echo lang('select_opt'); ?></option>
                            <option value="0" ><?php echo lang('unlock'); ?></option>
                            <option value="1" ><?php echo lang('lock'); ?></option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="layui-form-item">
                <div class="layui-inline">
                    <label class="layui-form-label"><input type="checkbox" lay-ignore value="1" name="ck_status"><?php echo lang('status'); ?></label>
                    <div class="layui-input-inline" style="width: 100px;">
                        <select name="val_status">
                            <option value=""><?php echo lang('select_status'); ?></option>
                            <option value="0" ><?php echo lang('reviewed_not'); ?></option>
                            <option value="1" ><?php echo lang('reviewed'); ?></option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="layui-form-item">
                <div class="layui-inline">
                    <label class="layui-form-label"><input type="checkbox" lay-ignore value="1" name="ck_copyright">版权</label>
                    <div class="layui-input-inline" style="width: 100px;">
                        <select name="val_copyright">
                            <option value=""><?php echo lang('admin/vod/select_copyright'); ?></option>
                            <option value="0" ><?php echo lang('close'); ?></option>
                            <option value="1" ><?php echo lang('open'); ?></option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="layui-form-item">
                <div class="layui-inline">
                    <label class="layui-form-label"><input type="checkbox" lay-ignore value="1" name="ck_hits"><?php echo lang('hits'); ?></label>
                    <div class="layui-input-inline" style="width: 100px;">
                        <input type="text" name="val_hits_min" required  placeholder="<?php echo lang('min_val'); ?>" autocomplete="off" class="layui-input">
                    </div>
                    <div class="layui-input-inline" style="width: 100px;">
                        <input type="text" name="val_hits_max" required  placeholder="<?php echo lang('max_val'); ?>" autocomplete="off" class="layui-input">
                    </div>
                </div>
            </div>

            <div class="layui-form-item">
                <div class="layui-inline">
                    <label class="layui-form-label"><input type="checkbox" lay-ignore value="1" name="ck_points"><?php echo lang('points'); ?></label>
                    <div class="layui-input-inline" style="width: 100px;">
                        <input type="text" name="val_points_play" required  placeholder="<?php echo lang('points_play'); ?>" autocomplete="off" class="layui-input">
                    </div>
                    <div class="layui-input-inline" style="width: 100px;">
                        <input type="text" name="val_points_down" required  placeholder="<?php echo lang('points_down'); ?>" autocomplete="off" class="layui-input">
                    </div>
                </div>
            </div>

            <div class="layui-form-item">
                <div class="layui-inline">
                    <label class="layui-form-label"><?php echo lang('page_limit'); ?></label>
                    <div class="layui-input-inline" style="width: 100px;">
                        <input type="text" name="limit" required  placeholder="" autocomplete="off" value="100" class="layui-input">
                    </div>
                </div>
            </div>
            <div class="layui-form-item">
                <button type="submit" class="layui-btn btn_submit"><?php echo lang('start_exec'); ?></button>
            </div>

        </div>
    </fieldset>
    </form>
</div>

<script type="text/javascript">
    layui.use(['form'], function () {

    });

    $('.btn_submit').click(function(){
        $('form').submit();
    })
</script>
</body>
</html>