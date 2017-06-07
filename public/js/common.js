define(['jquery', 'cookie'], function ($) {

	// 控制左侧菜单的展开和折叠
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });

	// 判断用户登录状态，并设置用户名和用户头像
	var url = location.pathname;
	if(url != '/' && url != '/index/login' && !$.cookie('PHPSESSID')) {
		location.href = '/';
	}
	
	if($.cookie('userInfo')) {
		var userInfo = JSON.parse($.cookie('userInfo'));
		$('.aside .profile').find('img').attr('src',userInfo.tc_avatar);
        $('.aside .profile').find('h4').text(userInfo.tc_name);
	}

	// 退出登录
	$('#logout').on('click', function () {
		$.ajax({
			url: '/api/logout',
			type: 'post',
			dataType: 'json',
			success: function (data) {
				if(data.code == 200){
					location.href = '/';
				}
			}
		})
	});
});