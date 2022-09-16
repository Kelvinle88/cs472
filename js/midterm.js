var value = 10;
var getsize;
var search;
window.onload = page;
function page(){
    document.getElementById("size").onchange = changeSize;
    search = document.getElementById("search")
    search.onclick = Search;
    setInterval(CountTime,1000)
}

function changeSize(){
    getsize = document.getElementById("size").value;
    document.getElementById("main-content").style.fontSize = getsize;

}
function CountTime(){
    document.getElementById("counter").innerHTML = value;
    value--;
    if(value<0){
        value = 10;
    }
}
function Search(){
    document.getElementById("counter").innerHTML = 11;
}




