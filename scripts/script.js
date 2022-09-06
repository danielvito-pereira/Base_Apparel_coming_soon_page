
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
    img.setAttribute('src', "./images/hero-desktop.jpg");
  
  } else {
    img.setAttribute('src', "/images/hero-mobile.jpg");
   
  }
} // fim do window.onload





const enviar = document.getElementById("enviar");

enviar.addEventListener('click', validate);

function validate(e) {
  e.preventDefault();

  const campo_busca = document.getElementById('campo_busca');
  let valid = true;

  if (!campo_busca.value) {
    const emailError = document.getElementById('emailError');
    emailError.classList.add("visible");
    enviar.classList.add("invalid");
    emailError.setAttribute('aria-hidden', false);
    emailError.setAttribute('aria-invalid', true);
  }
  return valid;

}


