$(document).ready(function() {

    var validator = $("#form-download").validate({
        rules: {
            email: {required: true, email: true},
            phone: {required: true}
        },
        messages: {
            email: {required: "Это поле должно быть заполнено", email: "Неправильный формат Email"},
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
                // window.location.href = 'assets/files/%D0%A2%D0%B5%D0%BE%D1%80%D0%B8%D1%8F%20%D0%B7%D1%80%D0%B5%D0%BB%D0%BE%D1%81%D1%82%D0%B8%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0%20BS%20Technology.pdf';
                window.open('assets/files/%D0%A2%D0%B5%D0%BE%D1%80%D0%B8%D1%8F%20%D0%B7%D1%80%D0%B5%D0%BB%D0%BE%D1%81%D1%82%D0%B8%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0%20BS%20Technology.pdf','_blank');
                $.magnificPopup.open({
                    items:{
                        src:$('#popup-thankyou-download')
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

    $("#form-download input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-download button").click(function (e) {
        $("#form-download .invalid-field").removeClass("hidden").css({"display":""});
        validator.resetForm();
        return true;
    });

});
