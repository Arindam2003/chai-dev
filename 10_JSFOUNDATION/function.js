// 1. Write a function named makeTea that thakes one pareameter , 'typeofTea',and returns a string like "Making green tea" when called with "Green tea", Store the result in a variable named teaOrder.

function makeTea(typeofTea){
    console.log(`Making ${typeofTea}`);
}
// makeTea("green tea");

// 2. Create a function named `orderTea` that takes one parameter, 'teaType'. Inside this function, create another function named 'confirmedOrder' that returns a message like "Order Confirmed for chai" . Call 'confirmOrder' from wthin 'orderTea' and return the result.

function orderTea(typeofTea)
{
    function confirmedOrder()
    {
        return `Order Confirmed for chai`;
    }
    return confirmedOrder();
}

let orderConfirmation=orderTea(".")
// console.log(orderConfirmation)


// 3. Write an arrow function named `calculatedTotal` that takes two parameters: `price` and `quantity`. The function should retur the total cost by mutiplying the `price` and `quantity`. Store the result in a variable named `totalCost`.

//? function greet (){}
//? const greet = ()=> {}
const calculatedTotal=(price,quantity)=>{
    return (quantity*price)
}

// 4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument "earl grey",return the result of calling `makeTea`,

