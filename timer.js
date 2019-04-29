function odliczanie(){
    var dzisaj = new Date();
    
    var godzina = dzisaj.getHours();
        if(godzina<10) godzina = "0"+godzina;
    
    var minuta = dzisaj.getMinutes();
        if(minuta<10) minuta = "0"+minuta;
    
    var sekunda = dzisaj.getSeconds();
        if(sekunda<10) sekunda = "0"+sekunda;
    
    document.getElementById("zegar").innerHTML = godzina+":"+minuta+":"+sekunda;
    
    setTimeout("odliczanie()",1000);
}