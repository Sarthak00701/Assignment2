function APP () {
  var income = 0;
  var total = 0;
  var expense = 0;


class Customer {
    
  ie:string;
  date:string;
  name:string;
  amount:number;
  
  constructor(ie:string,date:string,name:string,amount:number) {
      this.ie = ie;
      this.date = date;
      this.name = name;
      this.amount = amount;
  }
}



class UI {
addCustomerToList(customer:Customer) {
  const list = document.getElementById('customer-list');
  // Create tr element
  const row = document.createElement('tr');
  row.id=`rowbg${total}_${customer.ie}_${customer.amount}`;
  // Insert cols
  row.innerHTML = `
    <td>${customer.ie}</td>
    <td>${customer.date}</td>
    <td>${customer.name}</td>
    <td>${customer.amount}</td>
    <td><a href="#" class="delete">X<a></td>
  `;

  list!.appendChild(row);
}

showAlert(message:string, className:string) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#customer-form');
  // Insert alert
  container!.insertBefore(div, form);

  // Timeout after 3 sec
  setTimeout(function(){
    document.querySelector('.alert')!.remove();
  }, 3000);
}

deletecustomer(target:HTMLElement) {

  // console.log(target);
  if(target.className === 'delete') {
    target.parentElement!.parentElement!.remove();
  }
}

clearFields() {
  (<HTMLInputElement>document.getElementById("myTextArea"))!.value = '';
}

color_green(ie:string,amount:number) {
  document.getElementById(`rowbg${total}_${ie}_${amount}`)!.style.backgroundColor = "green";
}

color_red(ie:string,amount:number) {
  document.getElementById(`rowbg${total}_${ie}_${amount}`)!.style.backgroundColor = "red";
}


}

// Event Listener for add customer
document.getElementById('customer-form')!.addEventListener('submit', function(e){
console.log(document.getElementById("myTextArea"));
const myValue = (document.getElementById("myTextArea")! as HTMLInputElement).value;
//Get the rows into array
const theRows = myValue.split("\n");
// Loop over all the rows
var amoun = "";
for (var row = 1; row < theRows.length; row++) {
  total++;
  //getting columns of this row into an array
  var columns = theRows[row].split(",");
  // console.log(columns.length);
  const ie = columns[0];
  const date=columns[1];
  const name=columns[2];
  const amount=columns[3];
  var exp = parseInt(amount);
  if (ie === "E") {
    expense+=exp;
  }
  else income+=exp;
  // console.log(exp);
  // Instantiate customer
  const customer = new Customer(ie, date, name,parseInt(amount));

  // Instantiate UI
  const ui = new UI();

  // Validate
  if(ie === '' || date === '' || name === ''|| amount === '') {
    // Error alert
    ui.showAlert(`Please enter valid csv for row number ${row}`, 'error');

  } else {
    // Add customer to list
    ui.addCustomerToList(customer);
  }

  if (ie === "I") ui.color_green(ie,parseInt(amount));
  else ui.color_red(ie,parseInt(amount));

}
const ui = new UI();
e.preventDefault();
ui.clearFields();

document.getElementById("total-expense")!.innerHTML =`<h3><br>Total expenses: ${expense}</h3>`;
document.getElementById("total-income")!.innerHTML =`<h3><br>Total income: ${income}</h3>`;
});

// Event Listener for delete
document.getElementById('customer-list')!.addEventListener('click', function(e){
// Instantiate UI
const ui = new UI();
// console.log(typeof(e.target.parentElement.parentElement.id));
const p1=  (<HTMLElement>e.target).parentElement!.parentElement!.id ;
var p2 = p1.split("_");
// console.log(p2);
const ie = p2[1];
const amount = p2[2];
var exp = parseInt(amount);
  if (ie === "E") {
    expense-=exp;
  }
  else income-=exp;
 // Delete customer
ui.deletecustomer(e.target as HTMLElement);

// Show message
ui.showAlert('customer Removed!', 'success');
// console.log(e.target);
e.preventDefault();

document.getElementById("total-expense")!.innerHTML =`<h3><br>Total expenses: ${expense}</h3>`;
document.getElementById("total-income")!.innerHTML =`<h3><br>Total income: ${income}</h3>`;


});

document.getElementById("total-expense")!.innerHTML =`<h3><br>Total expenses: ${expense}</h3>`;
document.getElementById("total-income")!.innerHTML =`<h3><br>Total income: ${income}</h3>`;

};

APP();
