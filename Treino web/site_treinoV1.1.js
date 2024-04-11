var botaoVoltarTopo = document.getElementById("botao");

//quando o usuario rolar a pagina mais de 20px na vertical, mostra o botao
window.onscroll = function (){funcaoRolagem()};

function funcaoRolagem() {
    if(document.documentElement.scrollTop > 20){
        botaoVoltarTopo.style.display = "block";
        
    } else {
        botaoVoltarTopo.style.display = "none";
    }
}