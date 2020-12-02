function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}

var $_GET = $_GET(), urlformation = $_GET['formation']
console.log('opt'+urlformation)
if(urlformation){document.getElementById('opt'+urlformation).selected = true}



const url = 'https://medeli-formation.com/'
//'https://localhost/'

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validPhone(tel) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(tel).toLowerCase());
}

const submitForm = (e) => {
    e.preventDefault()

    if (document.getElementById('name').value.length < 1 || !validateEmail(document.getElementById('email').value) || !validPhone(document.getElementById('tel').value) || document.getElementById('formation').value < 4) {
        document.getElementById("messageError").innerHTML = `un ou plusieurs champs sont errone, reesayez svp`
        return
    }
    else {
        document.getElementById("messageError").innerHTML = ''
        fetch(url + "api/inscription/", {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: document.getElementById('name').value,
                mail: document.getElementById('email').value,
                tel: document.getElementById('tel').value,
                formation: document.getElementById('formation').value,
                message: document.getElementById('message').value
            })
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.message === "okk") {
                    document.getElementById("messageOk").innerHTML = `DEMANDE ENVOYE AVEC SUCCES MERCI`
                    document.getElementById('idFormContact').reset()
                }
                else {
                    document.getElementById("messageError").innerHTML = `ERREUR - MERCI DE NOUS CONTACTER`
                }
            });
    }
}