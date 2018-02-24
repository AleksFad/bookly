/**
 * Created by Fadjuha on 21.07.2016.
 */
$(document).ready(function () {

    $('.package .button').click(function(){
        $('.package').removeClass("active");
        $(this).parent().addClass("active");
    });

    $("#subscription_form").validate({
        rules: {
            Name: {
                minlength: 2
            },
            Surname: {
                minlength: 2
            },
            Email: {
                email: true
            },
            Username: {
                minlength: 5
            },
            Company_name: {
                minlength: 2
            },
            Company_regnum: {
                minlength: 2
            },
            Password: {
                minlength: 6
            },
            Password_repeat: {
                equalTo : '[name="Password"]'
           },
            agree: {
                required: true
            }
        },
        messages: {},
        highlight: function (element) {
            $(element).parent().addClass('error')
        },
        unhighlight: function (element) {
            $(element).parent().removeClass('error')
        },

        messages: {
            Name: "First Name field cannot be blank!",
            Surname: "Last Name field cannot be blank!",
            Email: "Please enter a valid email address!",
            Username: "Username field cannot be blank!",
            Company_name: "Company name cannot be blank!",
            Company_regnum: "Company registration number cannot be blank!",
            Password: {
                required: "Password field cannot be blank!",
                minlength: "Your password must be at least 6 characters long!"
            },
            Password_repeat: {
                equalTo: "You typed wrong password!"
            },
            agree: {
                required: ""
            }
        },
        submitHandler: function(form) {
            var data = $(form).serialize();
            var package = $(".package.active").attr('data-name');
            $.ajax({
                type: 'POST',
                url: 'http://dev.fadeyev.eu/Bookly/php/saveData.php',
                data: data + '&Package=' + package,
                success: function (e) {
                    alert('success to add information');
                },
                error: function (e) {
                    alert('failed to add information');
                }
            });
        }
    });

});

