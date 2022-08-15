
// convém estar no onload da janela
window.onload = function()
{

  // primeiro tens de sacar a dimensão da janela
  // neste caso a área visível do browser
  var largura = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var img = document.querySelector("#image");

  // depois é brincar com if's e colocar o banner que queiras:

  if(largura>=1024)
  {
    img.setAttribute('src', 'images/hero-desktop.jpg');
  
  } else {
    img.setAttribute('src', 'images/hero-mobile.jpg');
   
  }
} // fim do window.onload


function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
  var error = document.getElementById('campo_busca');

  if ((usuario.length >=1)&&
      (dominio.length >= 3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
      document.getElementById("campo_busca").innerHTML="E-mail válido";
      alert("E-mail valido");
    } else {
      document.getElementById('campo_busca').innerHTML="E-mail inválido";
      alert("E-mail inválido");
    }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}