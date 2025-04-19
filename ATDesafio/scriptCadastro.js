const cadastro = document.getElementById("cadastro");
const message = document.getElementById("message");

cadastro.addEventListener("click", function(){
         cadastro.textContent = "Salvar";
         message.textContent = "Cadastro Concluido!!!";
});