function highlightKey(e){
    console.log(e.code)
    // search keyboard tables for keypress matches
};


const body = document.querySelector("body");
body.addEventListener("keypress", highlightKey);
