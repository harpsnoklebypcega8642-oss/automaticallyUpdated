<?php
	require('./config.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>后台管理中心</title>
<?php require('header.php'); ?>
</head>
	<body>
		<div class="page-container nav">
			<?php require('top.php');?>
			<ul class="layui-nav">
				<?php config_menu($config) ?>
			</ul>
			<div class="layui-tab-content">
				<blockquote class="layui-elem-quote layui-text">
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path d="M32 15L32 15C32.6232 15.5565 33.1881 16.1797 33.6841 16.8588C35.1387 18.8504 36 21.3223 36 24C36 26.6545 35.1535 29.1067 33.7218 31.0893C33.2168 31.7885 32.6391 32.4293 32 33" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M34.2359 41.1857C40.0836 37.6953 44 31.305 44 24C44 16.8085 40.2043 10.5035 34.507 6.97906" stroke="#333" stroke-width="4" stroke-linecap="round"/></svg>
                icon图标可选填，支持外部链接填写javascript:shoutu_dialog('*');调起弹窗，站内链接填写“模块/页面”，例如topic/index，<a href="../css/font/demo.html" target="_blank">点击查看内置图标</a>。
				</blockquote>
				<?php
					$array = require('./input.php');
					foreach ($array['nav'] as $title => $val ) {
				?>

				<fieldset class="layui-elem-field">
					<legend><?php echo $title; ?></legend>
					<div class="layui-field-box">
						<form class="layui-form" method="post" action="?url=nav&array=<?php echo $val; ?>&type=add" enctype="multipart/form-data" style="margin-top: 20px;">
                        <?php 
                            if($val=='navfoot'){
                                config_foot_nav_post();
                            }else{
                                config_nav_post();
                            }
                            ?>
						</form>
					</div>
				</fieldset>
                <fieldset class="layui-elem-field">
                    <legend class="subtitle">已添加的列表组 - 支持拖拽排序哦！</legend>
					<div class="layui-field-box" style="margin-top: 10px;">

						<form class="layui-form" method="post" action="?url=nav&array=<?php echo $val; ?>&type=post" enctype="multipart/form-data">
							<?php
								if(is_array($config[$val]['data'])){
									$href = '?url=nav&array='.$val.'&';
									config_nav($config[$val]['data'],$href);
								}
							?>
							<div class="layui-form-item" style="padding-top: 20px; text-align: center;">
								<button type="submit" class="layui-btn layui-btn-normal"> 确认保存</button>
                                <a href="/" target="_back" class="layui-btn layui-btn-primary"> 打开前台</a>
							</div>
						</form>
					</div>
				</fieldset>

				<?php } ?>
			</div>
		</div>
		<?php require('footer.php'); ?>
	</body>
</html>

