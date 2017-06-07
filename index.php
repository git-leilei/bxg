<?php 
	header('Content-Type: text/html; charset = utf-8');

	$path = 'index';
	$file = 'login';
	// 页面分发接口index
	// 判断用户访问的是根路径还是根路径下的子路径
	if (array_key_exists('PATH_INFO', $_SERVER)) {
		// 获取该文件的后缀路径
		$str = $_SERVER['PATH_INFO'];
		// 截取路径（去掉第一个字符  “/”）
		$url = substr($str, 1);
		// 根据“/”将字符串分割成数组
		$arr = explode('/', $url);
		// 判断是页面登录还是访问其他接口
		$path = $arr[0];
		$file = $arr[1];
	}
	// 在当前页面嵌入别的页码
	include('/views/'.$path.'/'.$file.'.html');
 ?>