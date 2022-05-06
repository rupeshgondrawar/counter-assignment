// write js code here corresponding to matches.html
var matches=JSON>parseFloat(localStorage.getItem("schedule"));
 var favourites = JSON.parse(localStorage.getItem("favouriteMatches"));

document.querySelector("#filterVenue").addEventListener("change",filterVenue);

function filterVenue(){
    var selected = document.querySelector("#filterVenue").value ;
    console.log(selected);

    var filterList = matches.Filter(function(elem){
        return elem.venue == selected;
    })
    console.log(filterList)
    dispalyMatches(filterList);
}
function dispalyMatches(matches){
     document.querySelector("tbody").innerHTML="";
    matches.forEach(function(elem,i){
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = elem.matchNum;

        var td2 = document.createElement("td");
        td2.innerText = elem.teamA;

       var td3 = document.createElement("td");
        td3.innerText = elem.teamB;

        var td4 = document.createElement("td");
        td4.innerText = elem.date;

        var td5 = document.createElement("td");
        td5.innerText = elem.venue;

        var td6 = document.createElement("td");
        td6.innerText = "remove";
        td6.style.color="red";
        td6.addEventListener("click",function(){
            removeItem(elem,i)
         });
         tr.append(td1,td2,td3.td4,td5,td6);
        document.querySelector("tbody").append(tr);
   })
 }
 function removeItem(elem,index){
     favourites.splice(index,1);
     localStorage.setItem("favoritematches",JSON.stringify(favourites));
     window.location.reload();
 }
function addToFavourite(elem){
    favourites.push(elem);
    localStorage.setItem("favoriteMatches",JSON.stringify(favourites));
}

