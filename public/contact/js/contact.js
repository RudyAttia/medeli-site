const url = 'https://medeli-formation.com/'
//https://localhost/
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

    if (document.getElementById('name').value.length < 1 || !validateEmail(document.getElementById('email').value) || !validPhone(document.getElementById('tel').value) || document.getElementById('message').value.length < 1) {
        document.getElementById("messageError").innerHTML = `un ou plusieurs champs sont errone, reesayez svp`
        return
    }
    else {
        document.getElementById("messageError").innerHTML = ''
        fetch(url + "api/contact/", {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: document.getElementById('name').value,
                mail: document.getElementById('email').value,
                tel: document.getElementById('tel').value,
                message: document.getElementById('message').value
            })
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                if(res.message2 === "okkk"){
                    document.getElementById("messageOk").innerHTML = `MESSAGE ENVOYE AVEC SUCCES MERCI`
                    document.getElementById('idFormContact').reset()
                }
                else{
                    document.getElementById("messageError").innerHTML = `ERREUR - MERCI DE NOUS CONTACTER`
                }
            } );
    }


}
// "554 5.2.0 STOREDRV.Submission.Exception:OutboundSpamException; Failed to process message due to a permanent exception with message WASCL UserAction verdict is not None. Actual verdict is RefuseQuota, ShowTierUpgrade. OutboundSpamException: WASCL UserAction verdict is not None. Actual verdict is RefuseQuota, ShowTierUpgrade. [Hostname=VI1PR02MB6368.eurprd02.prod.outlook.com]"