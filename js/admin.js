var usuarios = [
    { "login": "joao", "senha": "jjj" },
    { "login": "luan", "senha": "456" },
    { "login": "luis", "senha": "789" },
];

function Login() {
    debugger;
    var usuario = $('#username').val();  
    var senha = $('#password').val();       
    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login == usuario && us.senha == senha) {            
            sessionStorage.setItem('user', true);                        
        }
    }     
    if(sessionStorage.getItem('user')){                
        window.location.replace('/index.html');  
        return true;          
    }
    else{    
        alert("Dados incorretos, tente novamente.");        
        window.location.href = "./login.html";
        return false;
    }
}