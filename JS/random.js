function randomNumber(){
    for(let i=1; i<=5; i++){
        var random= Math.floor(Math.random() * 100)+1;
        document.getElementById("n"+i).innerHTML=random;
    }
}
