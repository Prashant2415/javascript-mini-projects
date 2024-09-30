window.onload = function(){
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    const loading = document.getElementById("loading");
    setTimeout(()=>{
        loader.style.display = "none";
        loading.style.display = "none";
        content.style.display = "block";
    },3000);
}