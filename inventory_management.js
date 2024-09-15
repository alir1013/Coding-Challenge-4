//Task 1:Creating an Inventory Array of Product Objects 
//Creating an array of 5 Products 
const inventory= [
    {name: "Cotton Candy",price:2.75,quantity:27,lowStockLevel:6}, //Properties of Cotton Candy
    {name: "Hershey Chocolate",price:4.23,quantity:40,lowStockLevel:20}, //Properties of Hersheys Chocolate 
    {name:"Gum",price:1.50,quantity:56,lowStockLevel:25},//properties of Gum
    {name:"Fruit Leathers",price:6.15,quantity:36,lowStockLevel:16},//Properties of Fruit Leather
    {name:"Gummy Bears",price:3.50,quantity:32,lowStockLevel:15}//Properties of Gummy Bears
 
 ];
 
 console.log("Inventory:",(inventory)); //Logging Array of Inventory details 
 
 //Task 2: Creating a Function to Display Product Details 

// Creating a function that accepts a product and logs the products information
function displayProductDetails(product) {
    let {name,price,quantity,lowStockLevel} = product
    const inventoryLevel= quantity <= lowStockLevel ? "Low Stock" : "In Stock" //Determining Inventory Level
 
    console.log ("Product Name:", name); //Logging product name
    console.log ("Product Price:",price); //Logging product price
    console.log ("Product Quantity:",quantity); //Logging product quantity
    console.log ("Product Inventory Level:", inventoryLevel); //Logging product inventory level
 
    };
 
 let productFunctionTest = {name: "Gummy Bears", price: 3.50, quantity: 32, lowStockLevel:15}; //Testing the function 
 
 console.log(displayProductDetails(productFunctionTest)); //Output: In Stock
 
 //Task 3: Creating a Function to Update Product Stock After Sales

//Creating a function that accepts a product and determines whether the product is low on stock or out of stock
function updateStock(product,unitsSold) {
    let updatedQuantity= product.quantity -= unitsSold; //Subtracting unitsSold by quantity
 
    console.log ("Updated Product Details:");
 
    const inventoryLevel = updatedQuantity <= 0 ? "Out of Stock" : updatedQuantity <= product.lowStockLevel ? "Low Stock"://Ternary Operation to display the inventory level of a product 

    console.log("Updated Inventory Level:", inventoryLevel); 
 
    displayProductDetails(product);
 
    return product; //Returning the updated product details
 
 };
 
 updateStock(inventory[4],22); // This will subtract 22 from the quantity of gummybears 
 
 console.log ("New Updated Inventory Level:",(inventory[4])) //Output: Low Stock

 //Task 4: Creating a Function to Check Low Stock Products

 //Creating a function that iterates over the inventory array and logs the names of the products that have a low stock level
function checkLowStock(inventory) {
    const lowStock= inventory.filter(product => product.quantity <= product.lowStockLevel); //Using the filter function to filter out products
    lowStock.forEach(product => {
        console.log ("Products with Low Stock:", `${product.name}: ${product.quantity}`); //Output: Gummy Bears:10
    } );
}
 checkLowStock(inventory); //Utilizing the function created 

 // Task 5: Creating a Function to Calculate Total Inventory Value

//Creating a function that iterates over the inventory array and returns the Products in stock
function calculateInventoryValue (inventory){
    return inventory.reduce ((totalValueOfAllProducts,product) =>   // returns the total value of all products
     totalValueOfAllProducts + (product.price * product.quantity), 0);//Formula to calculate the value of all products
    }
    console.log("Total Inventory Value of All Products:",calculateInventoryValue(inventory)); // Output: 583.85
