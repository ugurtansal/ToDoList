var list=document.getElementById("listOfDay");
var day=new Date();
var year=day.getFullYear();
var month=day.getMonth()+1;
var today=day.getDay();
var fullDay=today.toString()+"/"+month.toString()+"/"+year.toString();
list.innerHTML="List of today: "+fullDay;