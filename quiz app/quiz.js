const jsQuestions = [
    {
      question: "What is the correct syntax for referring to an external script called 'script.js'?",
      options: [
        "<script href='script.js'>",
        "<script src='script.js'>",
        "<script name='script.js'>",
        "<script file='script.js'>"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      options: [
        "msg('Hello World');",
        "alertBox('Hello World');",
        "msgBox('Hello World');",
        "alert('Hello World');"
      ],
      correctAnswer: 3 // The correct answer is at index 3
    },
    {
      question: "How do you create a function in JavaScript?",
      options: [
        "function = myFunction()",
        "function:myFunction()",
        "function myFunction()",
        "create function myFunction()"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "How do you call a function named 'myFunction'?",
      options: [
        "call myFunction()",
        "myFunction()",
        "call function myFunction()",
        "run myFunction()"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "How do you write an IF statement in JavaScript?",
      options: [
        "if i = 5 then",
        "if (i == 5)",
        "if i == 5 then",
        "if i = 5"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "Which symbol is used for single-line comments in JavaScript?",
      options: [
        "//",
        "/*",
        "<!--",
        "-->"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "How do you round the number 7.25, to the nearest integer?",
      options: [
        "Math.round(7.25)",
        "Math.rnd(7.25)",
        "round(7.25)",
        "rnd(7.25)"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "How do you find the number with the highest value of x and y?",
      options: [
        "Math.max(x, y)",
        "top(x, y)",
        "Math.ceil(x, y)",
        "ceil(x, y)"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "How do you generate a random number between 0 and 1?",
      options: [
        "Math.random()",
        "random()",
        "Math.rnd()",
        "rnd()"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "How do you declare a JavaScript variable?",
      options: [
        "variable carName;",
        "v carName;",
        "var carName;",
        "declare carName;"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: [
        "=",
        "*",
        "-",
        "x"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What will the following code return: Boolean(10 > 9)?",
      options: [
        "false",
        "true",
        "NaN",
        "undefined"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "Is JavaScript case-sensitive?",
      options: [
        "Yes",
        "No",
        "Sometimes",
        "Depends on the situation"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      options: [
        "onchange",
        "onmouseclick",
        "onclick",
        "onmouseover"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What is the correct JavaScript syntax to change the content of the HTML element with id='demo'?",
      options: [
        "#demo.innerHTML = 'Hello World!';",
        "document.getElement('demo').innerHTML = 'Hello World!';",
        "document.getElementByName('p').innerHTML = 'Hello World!';",
        "document.getElementById('demo').innerHTML = 'Hello World!';"
      ],
      correctAnswer: 3 // The correct answer is at index 3
    },
    {
      question: "Where is the correct place to insert a JavaScript?",
      options: [
        "The <head> section",
        "Both the <head> section and the <body> section are correct",
        "The <body> section",
        "Anywhere is fine"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
      options: [
        "<script src='xxx.js'>",
        "<script name='xxx.js'>",
        "<script file='xxx.js'>",
        "<script href='xxx.js'>"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "The external JavaScript file must contain the <script> tag.",
      options: [
        "True",
        "False",
        "Depends on the situation",
        "None of the above"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    // Add more questions here
    {
      question: "What is the output of the following code snippet? \nconsole.log(3 + 4 + '5');",
      options: [
        "345",
        "75",
        "12",
        "7"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What does the 'use strict' directive do?",
      options: [
        "Enforces secure coding practices",
        "Defines that JavaScript code should be executed in 'strict mode'",
        "Allows JavaScript to run with elevated privileges",
        "None of the above"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What does the 'typeof' operator do?",
      options: [
        "Checks if a variable is defined",
        "Returns the data type of a variable or expression",
        "Converts a value to a specified data type",
        "Performs a type coercion"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What is the difference between '==' and '===' operators in JavaScript?",
      options: [
        "There is no difference, both operators compare values and data types",
        "'===' performs strict equality comparison, checking both value and data type",
        "'==' performs strict equality comparison, checking only value",
        "'==' performs type conversion before comparison"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What is an IIFE?",
      options: [
        "It stands for Immediately Invoked Function Expression, a function that runs as soon as it is defined",
        "It stands for Immediately Iterated Function Execution, a function that iterates over an array immediately",
        "It is a syntax error in JavaScript",
        "It stands for Immediately Instantiated Function Expression, a function that is instantiated as soon as it is defined"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is event delegation in JavaScript?",
      options: [
        "Assigning multiple event handlers to a single element",
        "Delegating events to child elements in the DOM hierarchy",
        "Using event listeners to handle user actions",
        "None of the above"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What is the purpose of the 'new' keyword in JavaScript?",
      options: [
        "To create a new instance of a class",
        "To indicate that a function is a constructor",
        "To declare a new variable",
        "To define a new property in an object"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is a closure in JavaScript?",
      options: [
        "A function that is defined inside another function",
        "The process of closing a file after reading or writing",
        "A combination of a function and the lexical environment within which that function was declared",
        "A function that has access to the global scope"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What is the difference between 'null' and 'undefined' in JavaScript?",
      options: [
        "'null' represents an absence of value, while 'undefined' means a variable has been declared but has not been assigned a value",
        "'null' represents a variable that has not been declared, while 'undefined' means a variable has been declared but has not been assigned a value",
        "'null' represents a variable that has not been assigned a value, while 'undefined' means a variable has been assigned a value of null",
        "There is no difference, they can be used interchangeably"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is event bubbling in JavaScript?",
      options: [
        "The process of an event propagating from the child elements to the parent elements in the DOM hierarchy",
        "The process of an event propagating from the parent elements to the child elements in the DOM hierarchy",
        "The process of stopping an event from propagating to parent elements",
        "The process of an event triggering multiple times"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      options: [
        "To refer to the current object",
        "To refer to the parent object",
        "To refer to the global object",
        "To refer to the previous object in the call stack"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is a promise in JavaScript?",
      options: [
        "A guarantee that a function will return a value",
        "An object representing the eventual completion or failure of an asynchronous operation",
        "A function that takes a callback and executes it immediately",
        "A value that is immediately returned by a function"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What is the difference between 'let' and 'var' in JavaScript?",
      options: [
        "'let' is block-scoped, while 'var' is function-scoped",
        "'let' is function-scoped, while 'var' is block-scoped",
        "There is no difference, they both have the same scope",
        "'let' is hoisted, while 'var' is not"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is the purpose of the 'async' and 'await' keywords in JavaScript?",
      options: [
        "To make asynchronous code synchronous",
        "To define asynchronous functions",
        "To handle errors in asynchronous code",
        "To make synchronous code asynchronous"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is the difference between 'forEach' and 'map' methods in JavaScript?",
      options: [
        "'forEach' applies a function to each element of an array and returns 'undefined', while 'map' applies a function to each element and returns a new array",
        "'forEach' applies a function to each element of an array and returns a new array, while 'map' applies a function to each element and returns 'undefined'",
        "'forEach' modifies the original array, while 'map' creates a new array",
        "'forEach' and 'map' are identical in functionality"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is the purpose of the 'use strict' directive in JavaScript?",
      options: [
        "To enforce strict type checking",
        "To enable strict mode, which catches common coding mistakes and 'unsafe' actions",
        "To improve performance by restricting certain JavaScript features",
        "To indicate that JavaScript code should be executed in a secure environment"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What is a JavaScript callback function?",
      options: [
        "A function passed as an argument to another function, which is then invoked inside the outer function",
        "A function that is called after the execution of another function",
        "A function that is executed immediately",
        "A function that returns another function"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is a higher-order function in JavaScript?",
      options: [
        "A function that operates on other functions, either by taking them as arguments or by returning them",
        "A function that has a higher priority in the call stack",
        "A function that returns a function",
        "A function that is defined within another function"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is the purpose of the 'Object.keys()' method in JavaScript?",
      options: [
        "To return an array of an object's own enumerable property names",
        "To return an array of an object's own properties",
        "To return an array of an object's prototype chain",
        "To return an array of an object's property values"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What does the 'Array.isArray()' method do in JavaScript?",
      options: [
        "Checks if a value is an array",
        "Converts an array to a string",
        "Returns the first element of an array",
        "Removes the last element from an array"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is the purpose of the 'Array.map()' method in JavaScript?",
      options: [
        "To filter elements in an array",
        "To create a new array with the results of calling a provided function on every element in the calling array",
        "To reduce the elements in an array to a single value",
        "To sort the elements of an array"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What is the purpose of the 'Array.reduce()' method in JavaScript?",
      options: [
        "To filter elements in an array",
        "To create a new array with the results of calling a provided function on every element in the calling array",
        "To reduce the elements in an array to a single value",
        "To sort the elements of an array"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What does the 'Array.filter()' method do in JavaScript?",
      options: [
        "Creates a new array with the results of calling a provided function on every element in the calling array",
        "Sorts the elements of an array",
        "Checks if a value is an array",
        "Creates a new array with all elements that pass the test implemented by the provided function"
      ],
      correctAnswer: 3 // The correct answer is at index 3
    },
    {
      question: "What is the purpose of the 'Array.forEach()' method in JavaScript?",
      options: [
        "Creates a new array with the results of calling a provided function on every element in the calling array",
        "Sorts the elements of an array",
        "Executes a provided function once for each array element",
        "Creates a new array with all elements that pass the test implemented by the provided function"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What is the purpose of the 'Array.every()' method in JavaScript?",
      options: [
        "Checks if at least one element in an array passes a test",
        "Checks if all elements in an array pass a test",
        "Checks if no elements in an array pass a test",
        "Executes a provided function once for each array element"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What does the 'Array.some()' method do in JavaScript?",
      options: [
        "Checks if all elements in an array pass a test",
        "Checks if no elements in an array pass a test",
        "Checks if at least one element in an array passes a test",
        "Executes a provided function once for each array element"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What is the purpose of the 'Array.find()' method in JavaScript?",
      options: [
        "Finds the first element in an array that passes a test",
        "Finds the last element in an array that passes a test",
        "Finds the index of the first element in an array that passes a test",
        "Finds the index of the last element in an array that passes a test"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is the purpose of the 'Array.findIndex()' method in JavaScript?",
      options: [
        "Finds the first element in an array that passes a test",
        "Finds the last element in an array that passes a test",
        "Finds the index of the first element in an array that passes a test",
        "Finds the index of the last element in an array that passes a test"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What is the purpose of the 'Array.sort()' method in JavaScript?",
      options: [
        "Sorts the elements of an array",
        "Reverses the order of the elements in an array",
        "Converts an array to a string",
        "Removes the last element from an array"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is the purpose of the 'Array.reverse()' method in JavaScript?",
      options: [
        "Sorts the elements of an array",
        "Reverses the order of the elements in an array",
        "Converts an array to a string",
        "Removes the last element from an array"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What does the 'Array.slice()' method do in JavaScript?",
      options: [
        "Sorts the elements of an array",
        "Selects a portion of an array and returns a new array",
        "Converts an array to a string",
        "Removes the last element from an array"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What is the purpose of the 'Array.join()' method in JavaScript?",
      options: [
        "Sorts the elements of an array",
        "Reverses the order of the elements in an array",
        "Converts an array to a string",
        "Joins two arrays together"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What does the 'Array.concat()' method do in JavaScript?",
      options: [
        "Sorts the elements of an array",
        "Joins two arrays together",
        "Converts an array to a string",
        "Adds one or more elements to the end of an array and returns the resulting array"
      ],
      correctAnswer: 3 // The correct answer is at index 3
    },
    {
      question: "What is the purpose of the 'Array.splice()' method in JavaScript?",
      options: [
        "Sorts the elements of an array",
        "Selects a portion of an array and returns a new array",
        "Adds or removes elements from an array",
        "Joins two arrays together"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What is the purpose of the 'Array.push()' method in JavaScript?",
      options: [
        "Adds one or more elements to the end of an array and returns the resulting array",
        "Removes the last element from an array",
        "Adds one or more elements to the beginning of an array and returns the resulting array",
        "Reverses the order of the elements in an array"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What does the 'Array.pop()' method do in JavaScript?",
      options: [
        "Adds one or more elements to the end of an array and returns the resulting array",
        "Removes the last element from an array",
        "Adds one or more elements to the beginning of an array and returns the resulting array",
        "Reverses the order of the elements in an array"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What is the purpose of the 'Array.unshift()' method in JavaScript?",
      options: [
        "Adds one or more elements to the end of an array and returns the resulting array",
        "Removes the last element from an array",
        "Adds one or more elements to the beginning of an array and returns the resulting array",
        "Reverses the order of the elements in an array"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What does the 'Array.shift()' method do in JavaScript?",
      options: [
        "Adds one or more elements to the end of an array and returns the resulting array",
        "Removes the last element from an array",
        "Adds one or more elements to the beginning of an array and returns the resulting array",
        "Removes the first element from an array and returns that element"
      ],
      correctAnswer: 3 // The correct answer is at index 3
    },
    {
      question: "What is the purpose of the 'Array.includes()' method in JavaScript?",
      options: [
        "Checks if an array includes a certain value among its entries",
        "Checks if a value is an array",
        "Converts an array to a string",
        "Removes the last element from an array"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What does the 'Array.indexOf()' method do in JavaScript?",
      options: [
        "Checks if an array includes a certain value among its entries",
        "Checks if a value is an array",
        "Returns the first index at which a given element can be found in the array, or -1 if it is not present",
        "Removes the last element from an array"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What is the purpose of the 'Array.lastIndexOf()' method in JavaScript?",
      options: [
        "Checks if an array includes a certain value among its entries",
        "Checks if a value is an array",
        "Returns the last index at which a given element can be found in the array, or -1 if it is not present",
        "Removes the last element from an array"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What does the 'Array.fill()' method do in JavaScript?",
      options: [
        "Fills all the elements of an array from a start index to an end index with a static value",
        "Sorts the elements of an array",
        "Reverses the order of the elements in an array",
        "Removes the last element from an array"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is the purpose of the 'Array.every()' method in JavaScript?",
      options: [
        "Executes a provided function once for each array element",
        "Checks if at least one element in an array passes a test",
        "Checks if all elements in an array pass a test",
        "Checks if no elements in an array pass a test"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What does the 'Array.reduceRight()' method do in JavaScript?",
      options: [
        "Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value",
        "Executes a provided function once for each array element",
        "Checks if at least one element in an array passes a test",
        "Checks if all elements in an array pass a test"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is the purpose of the 'Array.some()' method in JavaScript?",
      options: [
        "Executes a provided function once for each array element",
        "Checks if all elements in an array pass a test",
        "Checks if no elements in an array pass a test",
        "Checks if at least one element in an array passes a test"
      ],
      correctAnswer: 3 // The correct answer is at index 3
    },
    {
      question: "What does the 'Array.flat()' method do in JavaScript?",
      options: [
        "Flattens nested arrays",
        "Executes a provided function once for each array element",
        "Checks if all elements in an array pass a test",
        "Removes empty slots from an array"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is the purpose of the 'Array.flatMap()' method in JavaScript?",
      options: [
        "Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth",
        "Executes a provided function once for each array element",
        "Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value",
        "Returns the first index at which a given element can be found in the array, or -1 if it is not present"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What does the 'Array.keys()' method do in JavaScript?",
      options: [
        "Returns an iterator that yields the keys of the array",
        "Executes a provided function once for each array element",
        "Returns an iterator that yields the values of the array",
        "Returns an iterator that yields the entries of the array"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is the purpose of the 'Array.values()' method in JavaScript?",
      options: [
        "Returns an iterator that yields the keys of the array",
        "Executes a provided function once for each array element",
        "Returns an iterator that yields the values of the array",
        "Returns an iterator that yields the entries of the array"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What does the 'Array.entries()' method do in JavaScript?",
      options: [
        "Returns an iterator that yields the keys of the array",
        "Returns an iterator that yields the values of the array",
        "Returns an iterator that yields the entries of the array",
        "Executes a provided function once for each array element"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What is the purpose of the 'Array.from()' method in JavaScript?",
      options: [
        "Creates a new array with the results of calling a provided function on every element in the calling array",
        "Creates a new shallow-copied array from an array-like or iterable object",
        "Creates a new array with the results of calling a provided function on every element in the array",
        "Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What does the 'Array.of()' method do in JavaScript?",
      options: [
        "Creates a new array with the results of calling a provided function on every element in the calling array",
        "Creates a new shallow-copied array from an array-like or iterable object",
        "Creates a new array with the results of calling a provided function on every element in the array",
        "Creates a new array with the specified elements"
      ],
      correctAnswer: 3 // The correct answer is at index 3
    },
    {
      question: "What is the purpose of the 'Array.prototype[@@iterator]()' method in JavaScript?",
      options: [
        "Returns an iterator that yields the keys of the array",
        "Returns an iterator that yields the values of the array",
        "Returns an iterator that yields the entries of the array",
        "Executes a provided function once for each array element"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What does the 'Array.prototype.concat()' method do in JavaScript?",
      options: [
        "Adds one or more elements to the end of an array and returns the resulting array",
        "Joins two arrays together",
        "Converts an array to a string",
        "Creates a new shallow-copied array from an array-like or iterable object"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What is the purpose of the 'Array.prototype.copyWithin()' method in JavaScript?",
      options: [
        "Fills all the elements of an array from a start index to an end index with a static value",
        "Copies a sequence of elements within the array to another position in the same array",
        "Sorts the elements of an array",
        "Joins two arrays together"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What does the 'Array.prototype.entries()' method do in JavaScript?",
      options: [
        "Returns an iterator that yields the keys of the array",
        "Returns an iterator that yields the values of the array",
        "Returns an iterator that yields the entries of the array",
        "Executes a provided function once for each array element"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What is the purpose of the 'Array.prototype.every()' method in JavaScript?",
      options: [
        "Executes a provided function once for each array element",
        "Checks if at least one element in an array passes a test",
        "Checks if all elements in an array pass a test",
        "Checks if no elements in an array pass a test"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What does the 'Array.prototype.fill()' method do in JavaScript?",
      options: [
        "Fills all the elements of an array from a start index to an end index with a static value",
        "Copies a sequence of elements within the array to another position in the same array",
        "Joins two arrays together",
        "Sorts the elements of an array"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is the purpose of the 'Array.prototype.filter()' method in JavaScript?",
      options: [
        "Creates a new array with the results of calling a provided function on every element in the calling array",
        "Creates a new array with all elements that pass the test implemented by the provided function",
        "Creates a new array with the results of calling a provided function on every element in the array",
        "Creates a new array with all elements that do not pass the test implemented by the provided function"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What does the 'Array.prototype.find()' method do in JavaScript?",
      options: [
        "Finds the first element in an array that passes a test",
        "Finds the last element in an array that passes a test",
        "Finds the index of the first element in an array that passes a test",
        "Finds the index of the last element in an array that passes a test"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is the purpose of the 'Array.prototype.findIndex()' method in JavaScript?",
      options: [
        "Finds the first element in an array that passes a test",
        "Finds the last element in an array that passes a test",
        "Finds the index of the first element in an array that passes a test",
        "Finds the index of the last element in an array that passes a test"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What does the 'Array.prototype.flat()' method do in JavaScript?",
      options: [
        "Flattens nested arrays",
        "Executes a provided function once for each array element",
        "Checks if all elements in an array pass a test",
        "Removes empty slots from an array"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is the purpose of the 'Array.prototype.flatMap()' method in JavaScript?",
      options: [
        "Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth",
        "Executes a provided function once for each array element",
        "Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value",
        "Returns the first index at which a given element can be found in the array, or -1 if it is not present"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What does the 'Array.prototype.forEach()' method do in JavaScript?",
      options: [
        "Executes a provided function once for each array element",
        "Checks if at least one element in an array passes a test",
        "Checks if all elements in an array pass a test",
        "Checks if no elements in an array pass a test"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is the purpose of the 'Array.prototype.includes()' method in JavaScript?",
      options: [
        "Checks if an array includes a certain value among its entries",
        "Checks if a value is an array",
        "Converts an array to a string",
        "Removes the last element from an array"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What does the 'Array.prototype.indexOf()' method do in JavaScript?",
      options: [
        "Checks if an array includes a certain value among its entries",
        "Checks if a value is an array",
        "Returns the first index at which a given element can be found in the array, or -1 if it is not present",
        "Removes the last element from an array"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What is the purpose of the 'Array.prototype.join()' method in JavaScript?",
      options: [
        "Sorts the elements of an array",
        "Reverses the order of the elements in an array",
        "Converts an array to a string",
        "Joins two arrays together"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What does the 'Array.prototype.keys()' method do in JavaScript?",
      options: [
        "Returns an iterator that yields the keys of the array",
        "Returns an iterator that yields the values of the array",
        "Returns an iterator that yields the entries of the array",
        "Executes a provided function once for each array element"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is the purpose of the 'Array.prototype.lastIndexOf()' method in JavaScript?",
      options: [
        "Checks if an array includes a certain value among its entries",
        "Checks if a value is an array",
        "Returns the last index at which a given element can be found in the array, or -1 if it is not present",
        "Removes the last element from an array"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What does the 'Array.prototype.map()' method do in JavaScript?",
      options: [
        "Creates a new array with the results of calling a provided function on every element in the calling array",
        "Creates a new array with all elements that pass the test implemented by the provided function",
        "Creates a new array with the results of calling a provided function on every element in the array",
        "Creates a new array with all elements that do not pass the test implemented by the provided function"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is the purpose of the 'Array.prototype.pop()' method in JavaScript?",
      options: [
        "Adds one or more elements to the end of an array and returns the resulting array",
        "Removes the last element from an array",
        "Adds one or more elements to the beginning of an array and returns the resulting array",
        "Reverses the order of the elements in an array"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What does the 'Array.prototype.push()' method do in JavaScript?",
      options: [
        "Adds one or more elements to the end of an array and returns the resulting array",
        "Removes the last element from an array",
        "Adds one or more elements to the beginning of an array and returns the resulting array",
        "Reverses the order of the elements in an array"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What is the purpose of the 'Array.prototype.reduce()' method in JavaScript?",
      options: [
        "Executes a provided function once for each array element",
        "Creates a new array with the results of calling a provided function on every element in the calling array",
        "Reduces the elements in an array to a single value",
        "Creates a new array with all elements that do not pass the test implemented by the provided function"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What does the 'Array.prototype.reduceRight()' method do in JavaScript?",
      options: [
        "Executes a provided function once for each array element",
        "Creates a new array with the results of calling a provided function on every element in the calling array",
        "Reduces the elements in an array to a single value",
        "Creates a new array with all elements that do not pass the test implemented by the provided function"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What is the purpose of the 'Array.prototype.reverse()' method in JavaScript?",
      options: [
        "Sorts the elements of an array",
        "Reverses the order of the elements in an array",
        "Converts an array to a string",
        "Removes the last element from an array"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What does the 'Array.prototype.shift()' method do in JavaScript?",
      options: [
        "Adds one or more elements to the end of an array and returns the resulting array",
        "Removes the last element from an array",
        "Adds one or more elements to the beginning of an array and returns the resulting array",
        "Removes the first element from an array and returns that element"
      ],
      correctAnswer: 3 // The correct answer is at index 3
    },
    {
      question: "What is the purpose of the 'Array.prototype.slice()' method in JavaScript?",
      options: [
        "Sorts the elements of an array",
        "Selects a portion of an array and returns a new array",
        "Joins two arrays together",
        "Reverses the order of the elements in an array"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What does the 'Array.prototype.some()' method do in JavaScript?",
      options: [
        "Executes a provided function once for each array element",
        "Checks if all elements in an array pass a test",
        "Checks if no elements in an array pass a test",
        "Checks if at least one element in an array passes a test"
      ],
      correctAnswer: 3 // The correct answer is at index 3
    },
    {
      question: "What is the purpose of the 'Array.prototype.sort()' method in JavaScript?",
      options: [
        "Reverses the order of the elements in an array",
        "Sorts the elements of an array",
        "Converts an array to a string",
        "Joins two arrays together"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What does the 'Array.prototype.splice()' method do in JavaScript?",
      options: [
        "Sorts the elements of an array",
        "Selects a portion of an array and returns a new array",
        "Adds or removes elements from an array",
        "Joins two arrays together"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What is the purpose of the 'Array.prototype.unshift()' method in JavaScript?",
      options: [
        "Adds one or more elements to the end of an array and returns the resulting array",
        "Removes the last element from an array",
        "Adds one or more elements to the beginning of an array and returns the resulting array",
        "Reverses the order of the elements in an array"
      ],
      correctAnswer: 2 // The correct answer is at index 2
    },
    {
      question: "What does the 'Array.prototype.toLocaleString()' method do in JavaScript?",
      options: [
        "Returns a string representing the elements of the array",
        "Returns a string representing the elements of the array formatted according to locale-specific conventions",
        "Executes a provided function once for each array element",
        "Returns an iterator that yields the keys of the array"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    },
    {
      question: "What is the purpose of the 'Array.prototype.toString()' method in JavaScript?",
      options: [
        "Returns a string representing the elements of the array",
        "Returns a string representing the elements of the array formatted according to locale-specific conventions",
        "Executes a provided function once for each array element",
        "Returns an iterator that yields the keys of the array"
      ],
      correctAnswer: 0 // The correct answer is at index 0
    },
    {
      question: "What does the 'Array.prototype.values()' method do in JavaScript?",
      options: [
        "Returns an iterator that yields the keys of the array",
        "Returns an iterator that yields the values of the array",
        "Returns an iterator that yields the entries of the array",
        "Executes a provided function once for each array element"
      ],
      correctAnswer: 1 // The correct answer is at index 1
    }
  ];
  const answerelement=document.querySelectorAll('.ans')
  const optionElement = document.querySelector("#question");
  const option_1 = document.querySelector("#option_1");
  const option_2 = document.querySelector("#option_2");
  const option_3 = document.querySelector("#option_3");
  const option_4 = document.querySelector("#option_4");
  const submitbtn=document.querySelector('#submit');
  const finishbtn=document.querySelector('#finish');
  const scores=document.querySelector('.score');
  const body=document.querySelector('.body');
  const quiz=document.querySelector('.quiz');
  
  
let  currentquiz=0
let score=0
//loadthe quiz
function loadquiz(){
    const currentQuestion=jsQuestions[currentquiz]
    optionElement.innerText=`${currentquiz+1}:${currentQuestion.question}`
    // console.log(currentQuestion.question)
    // console.log(currentQuestion.options[0])
    // console.dir(currentQuestion.options)
    option_1.innerText=jsQuestions[currentquiz].options[0]
    option_2.innerText=jsQuestions[currentquiz].options[1]
    option_3.innerText=jsQuestions[currentquiz].options[2]
    option_4.innerText=jsQuestions[currentquiz].options[3]
}
loadquiz()
//getting the selected answer from the function on clicking th ebutton
function checkBox() {
  let ansIndex = -1; // Initialize to -1 to indicate no option checked
  for (let index = 0; index < answerelement.length; index++) {
    if (answerelement[index].checked) {
      ansIndex = index;
      break; // Exit the loop once a checked option is found
      //the reason to used the traditional for loop is that we  want to break the loop with break
    }
  }
  if (ansIndex === -1) {
    alert("No option selected!");
    // currentquiz--
  }
  return ansIndex;
}

function clearans(){
  answerelement.forEach(function(currentOption){
    currentOption.checked=false;
  })
}
submitbtn.addEventListener('click',function(){
  const selctedOption=checkBox()
  // console.log(selctedOption);
  //updating the score
  if(selctedOption===jsQuestions[currentquiz].correctAnswer){
    score+=1
    body.style.backgroundColor='green'

    console.log(score);
  }
  currentquiz++;
  if(currentquiz<jsQuestions.length){
    clearans();//deselcts the radio btns
    loadquiz();

  }
  
})
// Styling the click effect and validating answer
answerelement.forEach(function(element) {
  element.addEventListener('click', function(element) {
    const selectedOption = parseInt(event.currentTarget.value); // Get the selected option as an integer
    const anselem=answerelement[element]
    if (selectedOption === jsQuestions[currentquiz].correctAnswer) {
      // Correct answer: Change label color to green
      anselem.style.backgroundColor = 'green';
    } else {
      // Incorrect answer: Change label color to red
      anselem.style.backgroundColor = 'red';
    }
  },true);
});

//showing the user their reasult and end the test
finishbtn.addEventListener('click', function() {
  let confirmed = confirm("Are you sure you want to finish the test?");
  if (confirmed) {
    let scoreMessage;
    if (score < 10) {
      scoreMessage = "Work on your basics. It's the first time, don't worry, you will eventually do better.";
    } else if (score < 50) {
      scoreMessage = "You're great! Good job, time to revise and come back strong.";
    } else if (score < 90) {
      scoreMessage = "Next time you will be the king!";
    } else {
      scoreMessage = "Success usually comes to those who never wait for it. Just work hard. Good job, your hard work finally paid off!";
    }

    let attemptMessage;
    if (currentquiz < 10) {
      attemptMessage = "You could do better, champ.";
    } else if (currentquiz < 50) {
      attemptMessage = "Success is within your reach, bro.";
    } else if (currentquiz < 90) {
      attemptMessage = "Next time is your time, bro.";
    }

    quiz.innerHTML = `
      <div>
      <h1>                 Congratulations on finishing the test!               </h1>
        <h1>Your score is <span id="finalScore">${score}</span></h1>
        <p>${scoreMessage}</p>
        <h2>Questions attempted: ${currentquiz}/${jsQuestions.length}</h2>
        <p>${attemptMessage}</p>
        <button onclick="location.reload()">Reload</button>
      </div>`;
  } else {
    console.log("Not okay"); // Display a message or perform other actions if needed
  }
});


//styling by js
//styling the click effect
// answerelement.forEach(function(element){
//   element.addEventListener('click',function(event){
//     const label = event.target.parentNode.querySelector('label');
//     label.style.backgroundColor = 'yellow';
//     label.style.color = '#333';
//   })
// })

