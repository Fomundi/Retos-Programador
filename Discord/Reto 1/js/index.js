async function searchuser() {

  

  let $inputuno = document.getElementById('inputumoo').value;

  let $inputdos = document.getElementById('inputdos').value;

  let $result = $inputuno - $inputdos;

  

  document.getElementById('spanuno').innerHTML = $inputuno;

  document.getElementById('spandos').innerHTML = $inputdos;

  document.getElementById('spantres').innerHTML = $result;

  

  

}
