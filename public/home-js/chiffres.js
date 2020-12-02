function Decompte(target, debut, fin, temps) {
    let step = 1
    if (temps < fin) { step = Math.trunc((fin / temps) * 4 + 1) }
    let interval = Math.trunc((temps / (fin / step)))
    let decNum = debut
    let sinter = setInterval(() => {
        if (decNum >= fin) {
            clearInterval(sinter)
            target.innerHTML = '' + fin;
        }
        else {
            decNum += step
            target.innerHTML = '' + Math.trunc(decNum);
        }
    }, interval)
}

function ChiffresAnimation() {
    Decompte(document.getElementById('decNum1'), 0, 15458, 3000)
    Decompte(document.getElementById('decNum2'), 0, 26155, 3000)
    Decompte(document.getElementById('decNum3'), 0, 97, 3000)
}

// Check si l'element passé en param est affiché sur l'écran
function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

//Regarde si la div competence est affichée toutes les 250ms puis désactive l'interval
var interval = setInterval(function () {
    if (checkVisible(document.getElementById('flexChiffres'))) {
        ChiffresAnimation();
        clearInterval(interval); // Désactive le SetInterval
    }
}, 250);