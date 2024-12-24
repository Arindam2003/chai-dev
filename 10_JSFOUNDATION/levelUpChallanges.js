//! 1. Write a 'for' loop that loops through the array ["green tea","black tea","chai","oolong tea"] and stop the loop when it finds "chai", store all teas before "chai" in a new array named 'selectedTeas'.

let teas=["green tea","black tea","chai","oolong tea"];
let selectedTeas=[]

for (let i=0;i<teas.length;i++)
{
    if(teas[i]==="chai"){
        break;
    }
    selectedTeas.push(teas[i]);
}
// console.log(selectedTeas)


// 2. write a for loop that through the array  ["London","New York","Paris","Berlin"] and skips "Paris". store the other cities in a new array named 'visitedCities' .

let cities=["London","New York","Paris","Berlin"]
let visitedCities=[]

for (let i = 0; i < cities.length; i++) {
    if(cities[i]==="Paris")
    {
        continue;
    }
    visitedCities.push(cities[i]);
}
// console.log(visitedCities)

// 3. Use a for-of loop to iterate through the array '[1,2,3,4,5]' and stop when the '4' is found. Store the Number before '4' in an array named 'smallNumber' .

let number=[1,2,3,4,5]
let smallNumber=[]
for (const num of number) {
    if(num===4)
    {
        break;
    }
    smallNumber.push(num);
}
// console.log(smallNumber)


// 4.Use a 'for-of' loop to iterate through the array ["chai","green tea","herbal tea","black tea"] and skip the "herbal tea" , store the other teas in an array named 'preferredTeas'

let t=["chai","green tea","herbal tea","black tea"]
let preferredTeas=[]

for (const elem of t) {
    if(elem==="herbal tea")
    {
        continue;
    }
    preferredTeas.push(elem)
}
// console.log(preferredTeas)


// 5. Use a 'for-in' loop to loop throuogh an object containing city population. Stop the loop when the population of "Berlin" is found and store all previous cities population in a new object named 'citynewPopulation'.

// Object

let citiesPoulation ={
    "London":8900000,
    "New York":8400000,
    "Paris":2200000,
    "Berlin":3500000
}
let citynewPopulation=[]
// console.log(Object.values(citiesPoulation));
for(const city in citiesPoulation)
{
    // key=value
    if(city=="Berlin")
    {
        break;
    }
    citynewPopulation[city]=citiesPoulation[city];
}

// console.log(citynewPopulation)

//! 6. Use a 'for-in' loop through an object containing city population. Skip any city with a population . Skip any city with a population below 3 million and store the rest in a new object named 'largCities'.

let worldcities={
    "Sydney":5000000,
    "Tokyo":9000000,
    "Berlin":3500000,
    "Paris":2200000
}
let largCities={};
for (const city in worldcities)
{
    if(worldcities[city]<3000000){
        continue;
    }
    largCities[city]=worldcities[city]
}
// console.log(largCities)

// 7. Write a forEach loop that iterates the array ["earl grey" ,"green tea","chai","oolong tea"], Stop the loop when "chai" is found, and store all previous tea types om an array named 'avalableTeas'.

let teaColection = ["earl grey" ,"green tea","chai","oolong tea"];
let avalableTeas=[]

teaColection.forEach(function(tea){
    if(tea==="chai"){
        return;
    }
    avalableTeas.push(tea);
});
// console.log(avalableTeas);

//8. Write a 'forEach' loop that iterates through the array ["Berlin","Tokyo","Sydney","Paris"], Skip "Sydney" and Store the other cities in a new array named 'traveledCities'.

let checkcities=["Berlin","Tokyo","Sydney","Paris"];
let traveledCities=[]
checkcities.forEach(function(elem){
    if(elem==="Sydney")
    {
        return;
    }
    traveledCities.push(elem);
})
// console.log(traveledCities);

// 9. Write a for loop that iterates through the array [2,5,7,9] , skip the value '7' and mutiply the rest by 2 and store the result in a new array named 'doubleNumbers'.

let array=[2,5,7,9]
let doubleNumbers=[]
for (let i=0;i<array.length;i++)
{
    if(array[i]===7)
    {
        continue;
    }
    doubleNumbers.push(array[i]*2);
}
// console.log(doubleNumbers);


// 10. Use a 'for of' loop to iterate through the array ["chai","green tea","lack tea","jasmine tea","herbal tea"] . and stoop when the length of the current tea name is greataer than 10. store the teas iterated over in an array named 'shortTeas' .

let teasare =["chai","green tea","black tea","jasmine tea","herbal tea"];
let shortTeas=[];

for(const elem of teasare){
    if((elem.length)>10)
    {
        break;
    }
    shortTeas.push(elem);
}
console.log(shortTeas);