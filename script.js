var list=document.getElementById("listOfDay");
var day=new Date();
var year=day.getFullYear();
var month=day.getMonth()+1;//We added 1 to showing true value(Month values between 0 and 11)
var today=day.getDay();
var fullDay=today.toString()+"/"+month.toString()+"/"+year.toString();//Combining all
list.innerHTML="List of today: "+fullDay;//Print top of list

var form=document.getElementById("addToDo");
var list=document.getElementById("listTODO");

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addToList);
}

function addToList(e){

    var input=document.getElementById("txtToDo");
    var liItem=document.createElement("li");

    liItem.className="list-group-item list-group-item-secondary";
    liItem.appendChild(document.createTextNode(input.value));

    var dltBtn=document.createElement("button");
    dltBtn.classList="delete-item float-right btn btn-danger";
    dltBtn.innerHTML="Delete";
    

    liItem.appendChild(dltBtn);
    list.appendChild(liItem);//Added to list

    input.value="";//Clear input

    e.preventDefault();
 }