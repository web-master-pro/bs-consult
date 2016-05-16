$(document).ready(function() {

    var validator = $("#form-main").validate({
        rules: {
            name: {required: true},
            phone: {required: true}
        },
        messages: {
            name: {required: "Это поле должно быть заполнено"},
            phone: {required: "Это поле должно быть заполнено"}
        },
        focusInvalid: false,
        errorClass: "invalid-field",
        submitHandler: function(form) {
            form.preventDefault;
            $.ajax({
                type: "POST",
                url: $(form).attr("action"),
                data: $(form).serialize()
            }).done(function() {
                $.magnificPopup.open({
                    items:{
                        src:$('#popup-thankyou')
                    },
                    type:'inline',
                    midClick: true,
                    removalDelay: 500,
                    mainClass: 'mfp-zoom-in',
                    overflowY: 'scroll',
                    fixedContentPos: false
                });
                yaCounter36986630.reachGoal("zaiavka");
            });
            return false;
        }
    });

    $("#form-main input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-main button").click(function (e) {
        $("#form-main .invalid-field").removeClass("hidden").css({"display":""});
        validator.resetForm();
        return true;
    });

});
