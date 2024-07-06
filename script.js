var info=document.getElementById("infoDay");
var date=new Date();
var year=date.getFullYear();    
var month=date.getMonth()+1;     //We added 1 to showing true value(Month values between 0 and 11)
var today=date.getDay();
var fullDay=today.toString()+"/"+month.toString()+"/"+year.toString();  //Combining all date objects
info.innerHTML="List of today: "+fullDay;   //Print top of list

var form=document.getElementById("addToDo");
var list=document.getElementById("listTODO");
var btnDelete=document.getElementById("btnDeleteAll");

eventListeners();

function eventListeners(){

    //Add event
    form.addEventListener("submit",addToList);

    //Delete All Items
    btnDelete.addEventListener("click",deleteAllItems);
}

function addToList(){

    var input=document.getElementById("txtToDo");
    var liItem=document.createElement("li");

    liItem.className="list-group-item list-group-item-secondary";
    liItem.appendChild(document.createTextNode(input.value));

    var dltBtn=document.createElement("button");        //Creating delete button for every task
    dltBtn.classList="delete-item float-right btn btn-danger";
    dltBtn.innerHTML="Delete";
    dltBtn.onclick=function(){
        list.removeChild(this.parentNode);   //Delete an item
    };
    

    liItem.appendChild(dltBtn);  //Add button and content to li item
    list.appendChild(liItem);       //Added to list

    input.value="";         //Clear input

   
 }


 function deleteAllItems(){
    
    list.innerHTML="";   //Delete All items
 }