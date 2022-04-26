/* globals require */
console.log("Hello, Airtable");

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyzYC5ngav1YfJ6l'}).base('appkrj9YWeMYrYlrh');

// Get the "songs" table from the base, specify the view to be "View 2" (which is FILTERED for indie songs and SORTED by rating) and specify the callback functions that will receive each page of data
base("lolita")
  .select({
    // add your view in here
    view: "Grid view",
  })
  .eachPage(gotPageOfData, gotAllData, err => {
  if (err) {
    console.error(err)
  }
});

// an empty array to hold our people data
let books = [];

// callback function that receives each page of data (considered here as records) and adds them to our list of songs
function gotPageOfData(records, fetchNextPage) {
  console.log("gotPageOfData()");
  console.log("There are " + records.length + " items in records");
  // This takes the list of records and add them to the songs array
  books.push(...records);
  // request more pages
  
  fetchNextPage();
}

// call back function that is called when ALL pages are loaded
function gotAllData(err) {
  console.log("gotAllData()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call function to show the data
  showData();
}

// show the data on the page
function showData(type = "") {

    window.scrollTo(0,0); 
  console.log("showData()");
  
  let bookCoverEl = document.getElementById("cover")
  
   // find the shelf element
  const booksContainer = document.querySelector("#container");

   // loop through all the people listed in the Airtable data. Inside is the code we are applying for EACH person in the list of people.
   books.forEach((book) => {
     // Print out what a single songs's data fields looks like
     //console.log("SHOWING THE SONG");
     console.log(book.fields);

     //if(type == "age"){
      //   console.log("age:" + book.fields.age);
     //}

     if(type == "age" && book.fields.age == 1){
         console.log(book.fields);
        return;
     }

    /** CREATE CONTAINER */
     const songContainer = document.createElement("div");
     songContainer.classList.add("bookContainer");
     
     /*******************
     ADD COVER ART
    *******************/
    let bookArtElement = bookCoverEl.cloneNode(true)
    bookArtElement.classList.add("cover")
     bookArtElement.src = book.fields.cover[0].url;
     bookArtElement.innerText = book.fields.cover;

     booksContainer.appendChild(bookArtElement);
     
   });
 }


  let sortLowHighSubject = document.getElementById('sortLowHighSubject');
  sortLowHighSubject.addEventListener("click", function(){
      // Clear the container div (remove all the previous elements)
      const booksContainer = document.querySelector("#container");
       booksContainer.innerHTML = "";
       // Sort the songs array according to rating from low to high
      sortRatingLowHigh("subject");

      showData();
  });

  let sortLowHighAge = document.getElementById('sortLowHighAge');
  sortLowHighAge.addEventListener("click", function(){
      // Clear the container div (remove all the previous elements)
      const booksContainer = document.querySelector("#container");
       booksContainer.innerHTML = "";
       // Sort the songs array according to rating from low to high
      sortRatingLowHigh("age");
      showData("age");
  });

  let sortLowHighColor = document.getElementById('sortLowHighColor');
  sortLowHighColor.addEventListener("click", function(){
      // Clear the container div (remove all the previous elements)
      const booksContainer = document.querySelector("#container");
       booksContainer.innerHTML = "";
       // Sort the songs array according to rating from low to high
      sortRatingLowHigh("color");
      showData();
  });

  let sortLowHighMarketability = document.getElementById('sortLowHighMarketability');
  sortLowHighMarketability.addEventListener("click", function(){
      // Clear the container div (remove all the previous elements)
      const booksContainer = document.querySelector("#container");
       booksContainer.innerHTML = "";
       // Sort the songs array according to rating from low to high
      sortRatingLowHigh("marketability");
      showData();
  });

 function sortRatingLowHigh(sortType){
    books.sort( () => .5 - Math.random() );
    books.sort(function(a, b) {
      // For any two songs in the songs array, compare them by their rating number
      // (NOTE THE ORDER HAS SWITCHED)
      return eval("a.fields." + sortType) - eval("b.fields." + sortType);
    });
 }