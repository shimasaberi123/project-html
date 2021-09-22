let elements = [];
const form = document.querySelector('.form-add-table');
let table= document.querySelector('#tableBody');
const btnSubmit = document.querySelector('#btn-submit');
elements[0]  = document.querySelector('#Name').value;
elements[1]= document.querySelector('#FName').value;
elements[2]= document.querySelector('#Date').value;
elements[3]= document.querySelector('#Phone').value;
elements[4]= document.querySelector('#City').value;

loadEventList();
function  loadEventList(){
    form.addEventListener('submit',add);
   

}

function add(e){


 
                 var row = document.createElement("tr");
                        for (var j = 0; j < 5; j++) {
     var cell = document.createElement("td");
     
          cell.appendChild( document.createTextNode(`${elements[j]}`));
          
      row.appendChild(cell);
                        }
                      table.insertAdjacentElement('afterbegin',row);
                  
                e.preventDefault();
              
                
}



 