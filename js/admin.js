var usuarios = [
    { "login": "joao", "senha": "jjj" },
    { "login": "luan", "senha": "456" },
    { "login": "luis", "senha": "789" },
];

function Login() {
    var usuario = document.getElementsByName('username')[0].value.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            window.location.href = "http://127.0.0.1:5500/index.html";
            return true;
        }
    }
    alert("Dados incorretos, tente novamente.");
    window.location = "login.html";
    return false;
}

$.validator.setDefaults({
    submitHandler: function() {
        window.open('dashboard.html', '_self', false)
    }
});



//----------------------------------------------------------

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