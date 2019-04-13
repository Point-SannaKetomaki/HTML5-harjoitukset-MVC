function init() {
    var kolme = document.getElementById('osa3');
    kolme.onclick = muuta;
}

function muuta() {
    this.innerHTML = 'Minäkin olen uusi sisältö';
}