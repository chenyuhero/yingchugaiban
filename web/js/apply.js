function ToggleCode(obj, codeurl) {
    $(obj).attr("src", codeurl + "?time=" + Math.random());
}
$(document).ready(function () {
    $("#form1").validate({
        submitHandler: function () { ajaxSubmitForm() },
        rules: { txtname: { required: true }, txtphone: { required: true }, txtemail: { required: true, email: true }, txtperson: { required: true }, txtmessage: { required: true }, txtUserCode: { required: true} },
        messages: { txtname: { required: "请输入项目名称！" }, txtphone: { required: "请输入联系方式！" }, txtemail: { required: "请输入邮箱！", email: "邮箱格式不正确！" },txtperson: { required: "请输入项目提交人！" }, txtmessage: { required: "请输入项目简介！" }, txtUserCode: { required: "请输入验证码！"} },
        showErrors: function (errorMap, errorList) {
            $.each(errorList, function (i, v) {
                alert(v.message);
                return false;
            });
        },
        /* 失去焦点时不验证 */
        onfocusout: false,
        onkeyup: false
    });
    jQuery.validator.addMethod("isMobile", function (value, element) {
        var length = value.length;
        return this.optional(element) || (length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value));
    }, "*");
    var isFirstTime = true;
    function ajaxSubmitForm() {
        if (isFirstTime) {
            $.ajax({
                type: "post",
                cache: false,
                url: "/tools/submit_ajax.ashx?action=prospectus&t=" + Math.random(),
                dataType: "text",
                data: $("#form1").serialize(),
                success: function (data) {
                    if (data == 1) {
                        alert("提示：请输入验证码！");
                    } else if (data == 2) {
                        alert("提示：系统找不到验证码，请刷新页面！");
                    } else if (data == 3) {
                        alert("提示：验证码不正确，请重新输入");
                    } else {
                        isFirstTime = false;
                        alert(data);
                        location.reload()
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(data)
                }
            })
        }
    };
});