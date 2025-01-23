//Task 1 - Employee Information
let employeeName = "Miguel Castro"; //Employee's name
const employeeID = 5; //Employee's ID
var isActive = true; //Employee's active status

console.log(employeeName, typeof employeeName);
console.log(employeeID, typeof employeeID);
console.log(isActive, typeof isActive);

//Task 2 - Product Details
let productName = "Wireless mouse"; //Product's name
const productPrice = 29.99; //Product's price
var isAvailable = true; //Product availability

console.log(productName, typeof productName);
console.log(productPrice, typeof productPrice);
console.log(isAvailable, typeof isAvailable);

//Task 3 - Financial Transactions
let accountBalance = 350; //Initial balance

//Calculations
accountBalance += 300; //Adding 300
console.log("Account balance after adding is:", accountBalance);

accountBalance -= 150; //Subtracting 150
console.log("Account balance after subtracting is:", accountBalance);

accountBalance *= 2.5; //Multiplying by 2.5
console.log("Account balance after multiplying is:", accountBalance);

accountBalance /= 4; //Dividing by 4
console.log("Account balance after dividing is:", accountBalance); 

//Task 4 - Customer Messaging
let customerName = "Hugo Cooper"; //Declaring a variable for the customer's name

//Personalized welcome message by concatenating strings
let welcomeMessage = "Welcome, " + customerName + "! Thank you for choosing our service.";

//Logging the welcome message to the console
console.log(welcomeMessage);