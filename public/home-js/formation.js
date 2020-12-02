const openFormations = num =>{

    if(num === 0){
        if(document.getElementById("divLinguistique").classList.contains("closeLB")){
            document.getElementById("divLinguistique").classList.remove("closeLB")
            document.getElementById("divLinguistique").classList.add("openLB")
        }
        else{
            document.getElementById("divLinguistique").classList.remove("openLB")
            document.getElementById("divLinguistique").classList.add("closeLB")
        }
    }
    if(num === 1){
        if(document.getElementById("divBureautique").classList.contains("closeLB")){
            document.getElementById("divBureautique").classList.remove("closeLB")
            document.getElementById("divBureautique").classList.add("openLB")
        }
        else{
            document.getElementById("divBureautique").classList.remove("openLB")
            document.getElementById("divBureautique").classList.add("closeLB")
        }
    }

}