// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, 
// and a String representing the rating as its arguments, and sets the respective class properties to these values.

// class Movie{

//     constructor(title,studio,rating){

//         this.title = title;
//         this.studio = studio;
//         this.rate = rating;
//     }
// }
// const obj = new Movie("leo","lyca","7")
// console.log(obj.title,obj.studio,obj.rate)

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// class Movie{

//     constructor(title,studio,rating="PG"){

//         this.title = title;
//         this.studio = studio;
//         this.rate = rating;
//     }
// }
// const obj = new Movie("Master","Xavier")
// console.log(obj.title,obj.studio,obj.rate)

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies
//  in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// class Movie {
//   constructor(title, studio, rating="PG") {
//     this.title = title;
//     this.studio = studio;
//     this.rating = rating;
//   }
//   static getPG(movies) {
//     return movies.filter(movie => movie.rating === "PG");
//   }
// }

// const movies = [
//   new Movie("Master", "Xavier", "8"),
//   new Movie("Doctor", "LYCA"),
//   new Movie("leo", "7-screen", "7"),
//   new Movie("kanaa", "SK"),
// ];
// const film = Movie.getPG(movies)
// console.log(film)

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”,
// and the rating “PG­13”

// class Movie{

//     constructor(title,studio,rating){

//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
//     }
// }
// const obj = new Movie("Casino Royale","Eon Productions","PG­13")
// console.log(obj.title,obj.studio,obj.rating)
// -----------------------------------------------------------------------------------------------------------------------------------

// Convert the UML diagram to Typescript class. - use number for double :

// class Circle{
//     constructor(radius,color){
//         this.radius=radius;
//         this.color = color;
//     }
//     get Radius(){
//         return this.radius
//     }
//     set Radius(n){
//         this.radius = n;
//     }
//     get Color(){
//         return this.color;
//     }
//     set Color(c){
//         this.color = c
//     }
//     get toString(){
//         return `"Circle[radius= ${this.radius} ,color = ${this.color}]"`
//     }
//     get area(){
//         return Math.PI*Math.pow(this.radius,2)
//     }
//     get circumference(){
//         return 2*Math.PI*this.radius
//     }
// }
// let obj = new Circle(1.0,"red")
// console.log(obj.Color);
// console.log(obj.Radius);
// console.log(obj.toString);
// console.log(obj.area);
// console.log(obj.circumference);
// -----------------------------------------------------------------------------------------------------------------------------------

// Write a “person” class to hold all the details.

// class Person {
//     constructor(name,age,gender,maritalstatus,contact,email){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.maritalstatus = maritalstatus;
//         this.contact = contact;
//         this.email = email

//     }
// }

// const obj = new Person("yuge","21","male","single","213123123","yuge@gmail.com")
// console.log(obj.name,obj.age,obj.gender,obj.maritalstatus,obj.contact,obj.email)
// ------------------------------------------------------------------------------------------------------------------------------------

// write a class to calculate the Uber price.

// class UberPrice {
//   constructor(KM, Price) {
//     this.KM = KM;
//     this.Price = Price;
//   }

//   set toMeter(n) {
//     this.KM = n;
//   }

//   get toMeter() {
//     return `total = ${this.KM * this.Price}`;
//   }
// }
// const obj = new UberPrice(1, 200);
// console.log(obj.toMeter);

