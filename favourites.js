// write js code here corresponding to favourites.html

var favarr=JSON.parse(localStorage.getItem("favourites"))||[];



display(favarr);


function display(favarr){
    
    favarr.forEach(function(ele){
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
    td6.innerText="Delete";
    td6.style.color="red";
    td6.style.cursor="pointer";

    td6.addEventListener("click",function(){
        remove(ele.matchNumber);
    })

    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);

    })
    
}

function remove(ele){
    favarr=favarr.filter(function(element){
        return element.matchNumber!=ele;
    })
    display(favarr);
    window.location.reload();
    localStorage.setItem("favourites",JSON.stringify(favarr));
}