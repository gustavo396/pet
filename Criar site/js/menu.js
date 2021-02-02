
var conteudo = document.getElementById('container_button_desktop')
var barra = document.getElementById('barra_menu')

$( "#container_header" ).click(function() {
  $( "#container_button_desktop" ).slideToggle(100)
  conteudo.style.display = 'inline-grid';
  	document.getElementById("barra_menu").classList.toggle('giro');

});

