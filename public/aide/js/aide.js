const openArticle = num =>{
    // if(num === 0){
        if(document.getElementById("article"+num).classList.contains("ocClose")){
            document.getElementById("article"+num).classList.remove("ocClose")
            document.getElementById("article"+num).classList.add("ocOpen")
        }
        else{
            document.getElementById("article"+num).classList.remove("ocOpen")
            document.getElementById("article"+num).classList.add("ocClose")
        }
    // }
    // if(num === 1){
    //     if(document.getElementById("article1").classList.contains("ocClose")){
    //         document.getElementById("article1").classList.remove("ocClose")
    //         document.getElementById("article1").classList.add("ocOpen")
    //     }
    //     else{
    //         document.getElementById("article1").classList.remove("ocOpen")
    //         document.getElementById("article1").classList.add("ocClose")
    //     }
    // }
}