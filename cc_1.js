//Task 1 - Employee Information
let employeeName = "Miguel Castro"; //Employee's name
const employeeID = 5; //Employee's ID
var isActive = true; //Employee's active status

console.log("Employee Name:", employeeName, "| Type:", typeof employeeName);
console.log("Employee ID:", employeeID, "| Type:", typeof employeeID);
console.log("Is Active:", isActive, "| Type:", typeof isActive);

//Task 2 - Product Details
let productName = "Wireless mouse"; //Product's name
const productPrice = 29.99; //Product's price
var isAvailable = true; //Product availability

console.log("Product Name:", productName, "| Type:", typeof productName);
console.log("Product Price:", productPrice, "| Type:", typeof productPrice);
console.log("Is Available:", isAvailable, "| Type:", typeof isAvailable);

//Task 3 - Financial Transactions
let accountBalance = 350; //Initial balance

//Calculations
accountBalance += 300; //Adding 300
console.log("Account balance after adding 300:", accountBalance);

accountBalance -= 150; //Subtracting 150
console.log("Account balance after subtracting 150:", accountBalance);

accountBalance *= 2.5; //Multiplying by 2.5
console.log("Account balance after multiplying by 2.5:", accountBalance);

accountBalance /= 4; //Dividing by 4
console.log("Account balance after dividing by 4:", accountBalance); 

//Task 4 - Customer Messaging
let customerName = "Hugo Cooper"; //Declaring a variable for the customer's name

//Personalized welcome message by concatenating strings
let welcomeMessageConcat = "Welcome, " + customerName + "! Thank you for choosing our service.";
console.log("Concatenated message:", welcomeMessageConcat);

//Personalized welcome message using template literals
let welcomeMessageTemplate = `Welcome, ${customerName}! Thank you for choosing our service.`;
console.log("Template literal message:", welcomeMessageTemplate);

//Task 5 - Access Control
//Declaring variable isLoggedIn with a boolean value for login status
let isLoggedIn = true;
if (isLoggedIn) {
    console.log("Access granted");
} else {
    console.log("Please try again.");
}

//Using AND operation
let hasAdminAccess = false;
if (isLoggedIn && hasAdminAccess) {
    console.log("Admin access granted");
} else if (isLoggedIn) {
    console.log("User access granted");
} else {
    console.log("Access denied. Please log in.");
}
