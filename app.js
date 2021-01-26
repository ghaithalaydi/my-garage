'use strict'

var arrayOfCars=[];
var table=document.getElementById("rendering");
var form=document.getElementById("my-form");

reRender();

function NewCar(name,model,year){
    this.name= name;
    this.model =model;
    this.year= year;
    arrayOfCars.push(this);
    storage();
}

// NewCar.prototype.getLogo =function(){

//  if (this.model == "bmw"){
//      return "bmw.png"
//  }
    
// }
form.addEventListener("submit", function(event){
    event.preventDefault();
    var inputName= event.target.name.value;
    var inputModel=event.target.model.value;
    var inputYear=event.target.year.value;

    new NewCar(inputName,inputModel,inputYear);
    tableRender();
})

function storage(){
    var localArray=JSON.stringify(arrayOfCars);
    localStorage.setItem("cars", localArray);
}

function tableRender(){
    table.innerHTML='';
    for (var index = 0; index < arrayOfCars.length; index++) {
        var tableRow = document.createElement("tr"); 
        table.appendChild(tableRow);
        var brandLogo =document.createElement("img");
        brandLogo.src= arrayOfCars[index].model;
        tableRow.appendChild(brandLogo);
        var modelSpecs = document.createElement("td");
        modelSpecs.textContent= `Car Name: ${arrayOfCars[index].name}  Model Year: ${arrayOfCars[index].year} `;       
        tableRow.appendChild(modelSpecs);
    }
}

function reRender(){
    if(localStorage.length>0){
        arrayOfCars= JSON.parse(localStorage.getItem("cars"));
        tableRender();
    }
}