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
    let{name,price,quantity,lowStockLevel}= product
    const inventoryLevel= quantity <= lowStockLevel ? "Low Stock" : "In Stock" //Determining Inventory Level
 
    console.log ("Product Name:", name); //Logging product name
    console.log ("Product Price:",price); //Logging product price
    console.log ("Product Quantity:",quantity); //Logging product quantity
    console.log ("Product Inventory Level:", inventoryLevel); //Logging product inventory level
 
    };
 
 let productFunctionTest = {name: "Gummy Bears", price: 3.50, quantity: 32, lowStockLevel:15}; //Testing the function 
 
 console.log(displayProductDetails(productFunctionTest)); //Output: In Stock
 
 //Task 3: Create a Function to Update Product Stock After Sales

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
 
 