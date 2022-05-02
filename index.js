// write js code here corresponding to index.html
// You should add submit event on the form

var matcharr=[];

var form=document.querySelector("form");

  form.addEventListener("submit",function(event){
    event.preventDefault();

  var data={
    matchNumber: form.matchNum.value,
    teama: form.teamA.value,
    teamb: form.teamB.value,
    date: form.date.value,
    venue: form.venue.value,
  };

// console.log(data);
matcharr.push(data);
// console.log(matcharr);
localStorage.setItem("schedule",JSON.stringify(matcharr));
})

