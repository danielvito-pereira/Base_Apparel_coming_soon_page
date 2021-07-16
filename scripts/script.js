window.onload = function()
{
  // primeiro tens de sacar a dimensão da janela
  // neste caso a área visível do browser
  var largura = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  if(largura>=1024)
  {
    document.getElementById("image").src="images/hero-desktop.jpg"
  } else {
    document.getElementById("image").src="images/hero-mobile.jpg"
  }
} // fim do window.onload




/*botão*/
var esconde = document.getElementById("campo_busca");
esconde.addEventListener("blur", function(event){
  event.target.style.background = "";
})

function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
  
  if ((usuario.length >=1) &&
      (dominio.length >=3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
  document.getElementById("msgemail").innerHTML="E-mail válido";
  alert("E-mail valido");
  }
  else{
  document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
  alert("E-mail invalido");
  }
  }
/*Validação de Email  
function validacaodeEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
  
  if () {
  document.getElementById("msgemail").innerHTML="E-mail válido";
  alert("E-mail valido");
  }
  else{
  document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
  alert("E-mail invalido");
  }
  }
*/

/* erro para campo vazio  */

/*
function campo (){
 
    if( document.dados.campo_busca.value=="" ||
    document.dados.campo_busca.value.indexOf('@')==-1 ||
    document.dados.campo_busca.value.indexOf('.')==-1 )
    {
    alert( "Preencha campo E-MAIL corretamente!" );
    document.dados.campo_busca.focus();
    document.dados.campo_busca.focus();
    return false;
    }
  

}




/*  
const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", event => {/* ele monitora o evendo e adiciona o nome da classe *
  event.preventDefault();

  const fields = [...document.querySelectorAll(".input-block input")];/* procura os campos  *

  fields.forEach(field => {/*se em cada campo que ele olhar estiver vazio ele vai adicionar ao formulario inteiro como validade errorr*
    if (field.value === "") form.classList.add("validate-error");
  });

});

*/