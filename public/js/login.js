define(['jquery', 'cookie'], function ($) {

    // 登录功能
    $("#submit").on('click', function () {
        $.ajax({
            url: '/api/login',
            type: 'post',
            data: $("#formData").serialize(),
            dataType: 'json',
            success: function (data) {
                if(data.code == '200') {
                    $.cookie('userInfo', JSON.stringify(data.result), {path: '/'});
                    location.href = '/index/index';
                }
            }
        });
        return false;
    });
});