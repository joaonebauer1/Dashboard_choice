$.validator.setDefaults({
    submitHandler: function() {
        window.open('dashboard.html', '_self', false)
    }
});

$().ready(function() {
    // validar o formulário de comentário quando ele for enviado
    $("#commentForm").validate();

    // validar o formulário de inscrição no keyup e enviar
    $("#signupForm").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                minlength: 1
            },
            password: {
                required: true,
                minlength: 1
            },
            confirm_password: {
                required: true,
                minlength: 2,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            topic: {
                required: "#newsletter:checked",
                minlength: 2
            },
            agree: "required"
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 1 character"
            },
            password: {
                required: "Digite sua senha!",
                minlength: "Your password must be at least 1 character long"
            },

            email: "Please enter a valid email address",
            agree: "Please accept our policy"
        }
    });

    // propor nome de usuário combinando nome e sobrenome
    $("#username").focus(function() {
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        if (firstname && lastname && !this.value) {
            this.value = firstname + "." + lastname;
        }
    });

    //código para ocultar a seleção de tópicos, desabilite para demonstração
    var newsletter = $("#newsletter");
    // newsletter tópicos são opcionais, primeiro esconda
    var inital = newsletter.is(":checked");
    var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
    var topicInputs = topics.find("input").attr("disabled", !inital);
    // mostrar quando o newsletter informativo é verificado
    newsletter.click(function() {
        topics[this.checked ? "removeClass" : "addClass"]("gray");
        topicInputs.attr("disabled", !this.checked);
    });
});
//----------------------------------------------------------
$(document).ready(function() {

    $("#btn-blog-next").click(function() {
        $('#blogCarousel').carousel('next')
    });
    $("#btn-blog-prev").click(function() {
        $('#blogCarousel').carousel('prev')
    });

    $("#btn-client-next").click(function() {
        $('#clientCarousel').carousel('next')
    });
    $("#btn-client-prev").click(function() {
        $('#clientCarousel').carousel('prev')
    });

});

$(window).load(function() {

    $('.flexslider').flexslider({
        animation: "slide",
        slideshow: true,
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });
});

//---------------------------------------------
function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}


function main() {
    let data = fazGet("http://bl.ocks.org/mbostock/3887235");
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("load");;
}

main()