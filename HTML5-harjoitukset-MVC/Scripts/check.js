function tarkista() {
	/*alert('lomake toimii')
	return false;*/

    var error_message = '';

    var en = document.getElementById('en').value;
    if (en == '') {
        error_message = 'Etunimi tarvitaan. \n';
    }

    var sn = document.getElementById('sn').value;
    if (sn == '') {
        error_message = 'Sukunimi tarvitaan. \n';
    }

    var sp = document.getElementById('sp').value;
    var regexp = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (!sp.match(regexp)) {
        error_message = 'Käytä sähköpostin oikeaa muotoa. \n';
    }

    if (true) {

    }

    if (error_message == "") {
        /*return true;*/
        alert("Tiedot tallennettu, kiitos.");
        return true;
    }
    else {
        error_message = "Ongelmia lomakkeella: \n \n" + error_message;
        alert(error_message);
        return false;
    }
}