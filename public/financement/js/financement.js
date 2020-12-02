let onglet = 0

const changeF = num =>{
    if(num === onglet){return}
    
    if(num === 1){
        document.getElementById("btnPersonnel").classList.remove("dontSelectFinancement")
        document.getElementById("btnCpf").classList.remove("selectFinancement")
        document.getElementById("btnPersonnel").classList.add("selectFinancement")
        document.getElementById("btnCpf").classList.add("dontSelectFinancement")
        document.getElementById("divCpf").style.display = "none"
        document.getElementById("divPersonnel").style.display = "flex"
        onglet = 1
    }
    if(num === 0){
        document.getElementById("btnCpf").classList.remove("dontSelectFinancement")
        document.getElementById("btnPersonnel").classList.remove("selectFinancement")
        document.getElementById("btnCpf").classList.add("selectFinancement")
        document.getElementById("btnPersonnel").classList.add("dontSelectFinancement")
        document.getElementById("divPersonnel").style.display = "none"
        document.getElementById("divCpf").style.display = "flex"
        onglet = 0
    }
}