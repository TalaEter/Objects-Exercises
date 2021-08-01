//Exercise 1

console.log("Exercise 1 - Address Object");

//create an address object with 3 properties : street , city , zipcode
// function showAddress(address) returns all properties with their values

let address={
    street: "1st street",
    city: "amman",
    zipcode: 0001
};

function showAddress(address){
    for(let key in address){
        console.log(key + " : " + address[key]);
    }
}
showAddress(address);





//Exercise 2

console.log("\nExercise 2 - Factory and Constructor Functions");

//Initializing the same address object done previosly with factory and constructor functions

function factoryFunction(street, city, zipcode){
    return{
        street,
        city,
        zipcode
    };
}
console.log("Address created with factory function : ");
console.log( factoryFunction("2nd street", "Irbid", 0010));

function Address(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}
let addressConstrucion = new Address("3rd street" , "Madaba" , 0100);
console.log("Address created with construction function : ");
console.log(addressConstrucion);




//Exercise 3

console.log("\nExercise 3 - Object Equality");

//create 2 function: areEqual(address1 , address2) ->same properties values , areSame(address1 , address2) -> reference the same object

let address1 = new Address("4th street" , "Jarash" , 1000);
let address2 = new Address("4th street" , "Jarash" , 1000);
console.log(address1 , address2)

function areEqual(address1 , address2){
    for(let key in address1){
        if(address1[key] !== address2[key]) return false;
    }
    return true;
}
console.log("are address1 and address equal ? : ");
console.log(areEqual(address1 , address2));


function areSame(address1 , address2){
    return address1 === address2;
}
console.log("are address1 and address the same ? : ");
console.log(areSame(address1 , address2));




//Exercise 4

console.log("\nExercise4 - Blog Post Object");
//create blog post object with properties: title, body. author, views, comments (author, body), isLive

let blogPost = {
    title:"Blog Post",
    body:"this blog post is created to solve an exercise on creating objects ... ",
    author:"Tala Eter",
    views: 3,
    comments : [
        { author:"Sarah", body:"this is the 1st comment on the blog post ... " },
        { author:"Sarah", body:"this is the 2nd comment on the blog post ... " }
    ]
    ,
    isLive:true
}
console.log(blogPost);



//Exercise 5

console.log("\nExercise5 - Constructor Functions");
//a constructor function that writes adraft of the blog post

let post= new Post("Draft Title", "Draft body of new blog post ..." , "Draft Author");

console.log(post)

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments=[];
    this.isLive = false;
}



//Exercise 6

console.log("\nExercise6 - Price Range Object");

let priceRanges = [
    {label:"$" , tooltip: "Inexpensive" , minPerPerson: 0 , maxPerPerson: 10},
    {label:"$$" , tooltip: "Moderate" , minPerPerson: 11 , maxPerPerson: 20},
    {label:"$$$" , tooltip: "Expensive" , minPerPerson: 21 , maxPerPerson: 50}
]
let restaurants=[
    {averagePerPerson: 5}
]
