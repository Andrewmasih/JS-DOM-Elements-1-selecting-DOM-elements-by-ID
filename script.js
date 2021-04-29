/* DOM is a browser APi, application programming interface,it provides a structured representation of the webpage, and means of interacting with it. We use it by writting JS and running it in the browser,it creates the DOM Tree, like a organisation chart*/

/* Each Node on the family tree has one parent and a number of children/ the 'Node' on top of the tree is 'document' or 'root node' it represents the the entire HTML page, everything else is a child of the doc. */



/* Methods attached to the 'document object, it allows us to select and manipulate elemens in the DOM. Call the differnt methods attched to the 'documnet objet' in JS.*/

/*
methods perform action or return a value it has (). Property tells us something it doesnt have ()  */

/*we look at 3 methods of selcting elements, 1st method is the most popular: 'document.getElementById ("id-name"), we call the 'getElementById' method of the 'document' object and supply the id were looking for as a parameter inside the parenthseses, the method then looks for id that natches the "id-name"*/

/*check out the HTML file */

let element = document.getElementById ("main-heading");
console.log (element);