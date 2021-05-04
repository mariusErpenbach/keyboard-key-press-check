function highlightKey(e){
    console.log(e.key)
    var keys = document.getElementsByTagName("p");
    // search keyboard tables for keypress matches
    for(i=0;keys.length>i;i++){
        if (e.key.toUpperCase()==keys[i].innerHTML.toUpperCase()){
           keys[i].style ="background-color:yellow;";     
        }
    }
};
function unlightKey(e){
    var keys = document.getElementsByTagName("p");
    // search keyboard tables for keypress matches
    for(i=0;keys.length>i;i++){
        if (e.key.toUpperCase()==keys[i].innerHTML.toUpperCase()){
           keys[i].style ="background-color:;";     
        }
    }
};
const body = document.querySelector("body");
body.addEventListener("keydown", highlightKey);
body.addEventListener("keyup",unlightKey);
