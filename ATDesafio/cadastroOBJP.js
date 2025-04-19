const ocorrencia = document.getElementById("ocorrencia");
const menssage = document.getElementById("menssage");

ocorrencia.addEventListener("click",function(){
    ocorrencia.textContent = "Enviar";
    menssage.textContent = "Cadastro concluido!!!";
});