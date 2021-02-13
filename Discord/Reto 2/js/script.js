async function convert() {

  

  let $icalculate = document.getElementById('calculate').value;

  let $ihora = $icalculate * 24;

  let $iminutos = $icalculate * 1440;

  let $isegundos = $icalculate * 86400;

  

  document.getElementById('horai').innerHTML = $ihora;

  document.getElementById('minutosi').innerHTML = $iminutos;

  document.getElementById('segundosi').innerHTML = $isegundos;

  document.getElementById('ress').innerHTML = $icalculate;

  

}
