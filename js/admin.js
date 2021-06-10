function time() { // Busca hora em tempo real
    today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    document.getElementById('relogio').innerHTML = h + ":" + m + ":" + s;
    setTimeout('time()', 500);
}

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