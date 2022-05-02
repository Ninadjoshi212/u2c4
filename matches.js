// write js code here corresponding to matches.html
var favarr=JSON.parse(localStorage.getItem("favourites"))||[];
var matcharr=JSON.parse(localStorage.getItem("schedule"))||[];

display(matcharr);


function ATF(ele){
    favarr.push(ele);
    localStorage.setItem("favourites",JSON.stringify(favarr));
}

var filter=document.querySelector("#filterVenue");

filter.addEventListener("change",function(){
    var selector=document.querySelector("#filterVenue").value;
    var filtered=favarr.filter(function(ele){
        return ele.venue==selector;
})
console.log(filtered);
display(filter);
});


function display(data){
    
    data.forEach(function(ele){  
    document.querySelector("tbody")==null;

    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=ele.matchNumber;

    var td2=document.createElement("td");
    td2.innerText=ele.teama;

    var td3=document.createElement("td");
    td3.innerText=ele.teamb;

    var td4=document.createElement("td");
    td4.innerText=ele.date;

    var td5=document.createElement("td");
    td5.innerText=ele.venue;

    var td6=document.createElement("td");
    td6.innerText="Favourites";
    td6.style.color="green"
    td6.style.cursor="pointer";

    td6.addEventListener("click",function(){
        ATF(ele);
    })

    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);

    })
    
}




