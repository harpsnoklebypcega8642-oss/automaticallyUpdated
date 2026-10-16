<?php
	require('./config.php');
	$dialog = $config['dialog'];
    $ad = $config['ad'];
    $other = $config['other'];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>后台管理中心</title>
<?php require('header.php'); ?>
</head>
	<body>
    <div class="page-container more nav">
			<?php require('top.php');?>
			<ul class="layui-nav">
				<?php config_menu($config) ?>
			</ul>
			<div class="layui-tab-content">
                <blockquote class="layui-elem-quote layui-text">
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path d="M32 15L32 15C32.6232 15.5565 33.1881 16.1797 33.6841 16.8588C35.1387 18.8504 36 21.3223 36 24C36 26.6545 35.1535 29.1067 33.7218 31.0893C33.2168 31.7885 32.6391 32.4293 32 33" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M34.2359 41.1857C40.0836 37.6953 44 31.305 44 24C44 16.8085 40.2043 10.5035 34.507 6.97906" stroke="#333" stroke-width="4" stroke-linecap="round"/></svg>
                您可以自由的添加一个或多个自定义弹窗组，然后使用javascript:shoutu_dialog('**');这样的方式启用它，例如做一个下载APP的二维码弹窗。
				</blockquote>

                    <fieldset class="layui-elem-field dialog top">
                        <legend>弹窗设置</legend>
                        <div class="layui-field-box">
                            <form class="layui-form" method="post" action="?url=more&array=dialog&type=add" enctype="multipart/form-data">
                                <input type="hidden" name="is" value="1">
                                <div class="layui-form-item">
                                    <label class="layui-form-label color">资源路径</label>
                                    <div class="layui-input-inline w420">
                                        <textarea name="code" rows="2" class="layui-textarea" placeholder="自定义内容和样式，支持html" required lay-verify="required"></textarea>
                                    </div>
                                </div>

                                <div class="layui-form-item">
                                    <div class="layui-input-block" style="margin: 0;">
                                        <div class="layui-input-inline" style="width: 150px;">
                                            <input type="text" name="id" placeholder="id标识" class="layui-input" required lay-verify="required">
                                        </div>
                                        <div class="layui-input-inline" style="width: 180px;">
                                            <input type="text" name="title" placeholder="标题" class="layui-input" required lay-verify="required">
                                        </div>
                                        <div class="layui-input-inline" style="width: 180px;">
                                            <select name="class">
                                                <option value="center">居中弹窗</option>
                                                <option value="left">左侧划出</option>
                                                <option value="right">右侧划出</option>
                                                <option value="bottom">底部划出</option>
                                            </select>
                                        </div>
                                        <div class="layui-input-inline">
                                            <button type="submit" class="layui-btn layui-btn-warm">添加一组</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </fieldset>
                    <fieldset class="layui-elem-field body">
                    <legend class="subtitle">已添加的弹窗组</legend>
                    <form class="layui-form" method="post" action="?url=more&array=dialog&type=post" enctype="multipart/form-data">
					<div class="layui-field-box" style="margin-top: 10px;">
                            <?php
                                if(is_array($dialog['data'])){
                                foreach ($dialog['data'] as $key => $value) {
                            ?>
                            <div class="layui-form-item">
                                <div class="layui-input-block" style="margin: 0;">
                                    <div class="id">
                                        <div class="layui-input-inline" style="width: 20px;">
                                            <input type="hidden" name="data[<?php echo $key; ?>][is]" value="0">
                                            <input type="checkbox" lay-skin="primary" name="data[<?php echo $key; ?>][is]" value="1" <?php if($value['is']) { echo "checked"; }?>>
                                        </div>
                                    </div>
                                    <div class="layui-input-inline" style="width: 170px;">
                                        <input type="text" name="data[<?php echo $key; ?>][id]" placeholder="id标识" class="layui-input" value="<?php echo $value['id']; ?>">
                                    </div>
                                    <div class="layui-input-inline" style="width: 170px;">
                                        <input type="text" name="data[<?php echo $key; ?>][title]" placeholder="标题" class="layui-input" value="<?php echo $value['title']; ?>">
                                    </div>
                                    <div class="layui-input-inline" style="width: 240px;">
                                        <input type="text" class="layui-input" value="javascript:shoutu_dialog('<?php echo $value['id']; ?>');">
                                    </div>
                                    <div class="layui-input-inline" style="width: 170px;">
                                        <select name="data[<?php echo $key; ?>][class]">
                                            <option value="center"<?php if($value['class']=='center') { echo "selected"; }?>>居中弹窗</option>
                                            <option value="left"<?php if($value['class']=='left') { echo "selected"; }?>>左侧划出</option>
                                            <option value="right"<?php if($value['class']=='right') { echo "selected"; }?>>右侧划出</option>
                                            <option value="bottom"<?php if($value['class']=='bottom') { echo "selected"; }?>>底部划出</option>
                                        </select>
                                    </div>
                                    <div class="layui-input-inline add" style="width: auto;float:right;margin-right:40px">
                                        <button type="button" class="layui-btn layui-btn-warm btn-code"><span><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="8" width="40" height="32" rx="2" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V16H4V10Z" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M25 23L23 34" stroke="#333" stroke-width="4" stroke-linecap="round"/><path d="M31 23L37 28L31 34" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 22.9999L11 27.9999L17 33.9999" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>输入代码</span></button>
                                        <button type="button" class="layui-btn layui-btn-sm layui-btn-danger layer-confirm" data-url="?url=more&array=dialog&type=del&id=<?php echo $key; ?>">
                                            <span>删除</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="layui-input-block box" style="display: none; margin: 20px 0 0;">
                                    <textarea name="data[<?php echo $key; ?>][code]" rows="2" class="layui-textarea" placeholder="自定义内容和样式，支持html"><?php echo htmlspecialchars($value['code']);?></textarea>
                                </div>
                            </div>
                            <?php }} ?>
                        </div> 
                        <div class="layui-form-item" style="padding-top: 20px; text-align: center;">
                            <button type="submit" class="layui-btn layui-btn-normal"> 确认保存</button>
                            <a href="/" target="_back" class="layui-btn layui-btn-primary"> 打开前台</a>
                        </div>
                        </form>
                    </fieldset>   
                            
                    <fieldset class="layui-elem-field top slide">
                        <legend>广告设置</legend>
                        <div class="layui-field-box">
                        <blockquote class="layui-elem-quote layui-text">
                        您可以自由的添加多个广告组，然后使用“图片广告”模块参数填写广告id就可以调用它，附加参数填写背景颜色值，格式#000000，可选填。
                        </blockquote>
                        <form class="layui-form" method="post" action="?url=more&array=ad&type=add" enctype="multipart/form-data" style="margin-top: 20px;">
                            <?php config_img_post('2');?>
                        </form>
                        </div>
                    </fieldset>
                    <form class="layui-form" method="post" action="?url=more&array=ad&type=post" enctype="multipart/form-data">	
                    <fieldset class="layui-elem-field body slide">
                        <legend class="subtitle">已添加的列表组</legend>
                        <div class="layui-field-box" style="margin-top: 10px;">
                            <?php
                                if(is_array($ad['data'])){
                                    $href = '?url=more&array=ad&';
                                    config_img('2',$ad['data'],$href);
                                }
                            ?>		
                        </div>
                        <div class="layui-form-item" style="padding-top: 20px; text-align: center;">
                            <button type="submit" class="layui-btn layui-btn-normal"> 确认保存</button>
                            <a href="/" target="_back" class="layui-btn layui-btn-primary"> 打开前台</a>
                        </div>
                    </fieldset>  
                    </form> 

                    <!-- 其他设置 -->
                    <form class="layui-form" method="post" action="?url=more&array=other&type=post" enctype="multipart/form-data">
                    <fieldset class="layui-elem-field">
                        <legend>其他设置</legend>
                        <div class="layui-field-box other" style="margin-top: 15px;">
                            
                            <div class="layui-form-item">
                                <div class="layui-input-inline title">
                                    <label class="layui-form-label">主题安全</label>
                                </div>
                                <div class="layui-input-inline" style="width: auto;">
                                    <input type="hidden" name="modeno" value="0">
                                    <input type="checkbox" lay-skin="primary" title="禁止调式" name="modeno" value="1"<?php if($other['modeno']) { echo "checked"; }?>>
                                </div>
                                <div class="layui-input-inline" style="width: auto;">
                                    <input type="hidden" name="rightno" value="0">
                                    <input type="checkbox" lay-skin="primary" title="屏蔽右键" name="rightno" value="1"<?php if($other['rightno']) { echo "checked"; }?>>
                                </div>
                                <div class="layui-input-inline" style="width: auto;">
                                    <input type="hidden" name="f12no" value="0">
                                    <input type="checkbox" lay-skin="primary" title="禁用F12" name="f12no" value="1"<?php if($other['f12no']) { echo "checked"; }?>>
                                </div>
                                <div class="layui-input-inline" style="width: auto;">
                                    <input type="hidden" name="iframeno" value="0">
                                    <input type="checkbox" lay-skin="primary" title="禁止框架引用" name="iframeno" value="1"<?php if($other['iframeno']) { echo "checked"; }?>>
                                </div>
                                <div class="layui-input-inline" style="width: auto;">
                                    <input type="hidden" name="selectno" value="0">
                                    <input type="checkbox" lay-skin="primary" title="禁止选择内容" name="selectno" value="1"<?php if($other['selectno']) { echo "checked"; }?>>
                                </div>
                            </div>
                        </div>
                        <div class="layui-field-box dialog basic" style="padding-top: 20px;">
                            <div class="layui-form-item">
                                <label class="layui-form-label">屏蔽右键提示文字</label>
                                <div class="layui-input-inline w420">
                                    <textarea name="rightnotext" rows="2" placeholder="留空不启用,例如:你知道的太多啦" class="layui-textarea"><?php echo $other['rightnotext'];?></textarea>
                                </div>
                            </div>
                            <div class="layui-form-item right">
                                <label class="layui-form-label">全站变灰</label>
                                <div class="layui-input-inline" style="width: auto;">
                                    <input type="text" name="opgreytime" class="layui-input" value="<?php echo $other['opgreytime'];?>" id="laydate" placeholder="选择时间">
                                    <div class="layui-form-mid layui-word-aux">指定时间，无时间限制可留空</div>
                                </div>
                                <div class="layui-input-inline" style="width: auto;">
                                    <input type="hidden" name="opgrey" value="0">
                                    <input type="checkbox" lay-skin="primary" name="opgrey" title="" value="1"<?php if($other['opgrey']) { echo "checked"; }?>>
                                </div>
                            </div>
                        </div>
                        <div class="layui-form-item" style="padding-top: 20px; text-align: center;">
                            <button type="submit" class="layui-btn layui-btn-normal"> 确认保存</button>
                            <a href="/" target="_back" class="layui-btn layui-btn-primary"> 打开前台</a>
                        </div>
                    </fieldset>
                    </form>
			</div>
		</div>
        <script>
			$('.btn-code').click(function(){
				let $_this = $(this);
				$_this.parent().parent().parent().find('.box').show();
			});
    </script>
		<?php require('footer.php'); ?>
	</body>
</html>

