//! 1. While loop calculate the sum of all number formm 1 to 5 and store the result is a variable named 'sum'

let sum = 0;
n = 1;
while (n <= 5) {
    sum = sum + n;
    n++;
}
//? console.log(sum);

//! 2. store array 'Countdown' of a number 5 to 1 using while loop.

let Countdown = []
let j = 5;
while (j >= 1) {
    Countdown.push(j);
    j--;
}
//? console.log(Countdown);

//! 3. 'do while ' prompt user to enter their favorite tea type until enter "stop". Store each tea type in an array 'teaCollection'.
/*
let teaCollection=[];
let tea;
do{
    tea=prompt("Hey ,Enter Your Favorite tea: ");
    if(tea!=stop)
    {
        teaCollection.push(tea);
    }

}while(tea!=stop);
*/

//! 4. 'do while loop' that adds number form 1 to 3 and store the result in a variable 'total'.

let total = 0;
let k = 1;
do {
    total = total + k;
    k = k + 1;
} while (k <= 3)

//? console.log(total);

//! 5. Write a 'for loop' that multipliss each element in the array '[2,4,6]' by 2 and stores the results in a new array named 'multipliNumbers' .


let multipliNumbers = [];
let numbers = [2, 4, 6];
let index;
for (index = 0; index <numbers.length;index++)
{
    multipliNumbers.push (numbers[index]*2);
}
//? console.log(multipliNumbers);

//! 6. Write a 'for' loop that lists all the cities in the array '["Paris","New York", "Tokyo","Londom"]' and stores each city in a new array named 'cityList'.

let cities=["Paris","New York", "Tokyo","Londom"]
let cityList=[]
for(let i=0;i<cities.length;i++)
{
    cityList.push(cities[i]);
}
console.log(cityList)
