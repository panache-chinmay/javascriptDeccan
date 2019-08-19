
// How the javascript code works behind the scence

// Javascript is mostly hoisted in some environment ,
//  the environment is typically browser


// There can also be some host such as node.js web server and other servers
// which basically takes javascript as code input



Host have some form of javasript engine which takes our code and execute same

In simple terms Javascript engine is a program which executes javascript code

// ----------------------------------------------------------------------->


// Behind the scences what happen our code


// First think happen inside engine that our code is first parsed by a parser
// which basically looks for syntax error



// Parse read the code line by line and check whether the syntax we had given is correct or not

// So basically the javascript knows all the javascript rules and how the
// javascript code is written(Mistakes stops the code and execution

// If every thing is correct the parser produces a data structure know as abstract parser tree
// Which is then translated to machine code

// Now the code is no longer javascript , its basically the machine code which
//can be easily understandable by the CPU processor

// When the code is converted into machine code it finally works and the code runs and
// the intended functionality is received

// Different Engine basically do different set of things in different way , it is commendable for
//you to understand this at this point
//------------------------------------------------------------------------------------------------->
// Tutorial One

// Javascript are mostly hoisted in  some environment , mostly those environment are  browser
// environment (Mozilla , Firefox )

// There can be also other server which will act as a host such as node.js which
// will take javascript as input

//Every broswer have javascript Engine which understand the javscript code

// In javascript  all the javascript code is parsed by parser which checks the line for syntax error

// (parser basically knows the javascript rule and how it has to be written)

//(If there is any mistake it throws the error and stops the execution)

// If every thing seems correct the parser will convert the javscript code into machine code

// Then the code is run by CPU processor and the intended functionality is executed

// Tutorial Two

//Execution context and Execution stack

// Execution Context (A box , a container , or a wrapper which stores variables  and in which a piece
//of our code is evaluted and executed )

// Order in which the javascript code will run , this is know as execution context

// Global execution context are for the function which are not inside any function

// You can also consider execution context as an object

// Every thing we declare in global execution context gets attached to window object (In case of broswer)

// lastname === window.lastname (this are same thing)

// properties are just variable attached to object (In above case  lastName is the property attached to )
// window object

//Global execution context is for the code which are not inside any function

// When a function is called it , it gets it new execution context

// New  context is always placed over the previous exeution context (see the image)
// the top  most context is always the active context
// Once the active execution context is executed it gets removed from top of stack
//(It gets pop out of stack when the fucntion returns)


// Tutorial 3 --> why are the execution context created and why it is so important

// Execution context in detalils
// Creation and execution phases and hoisting

// We can associate execution context with an object

// functions and varibale are hoisted in javascript they are basically available before the execution startQuiz

// Execution phase basically comes after the execution phase .

// Each execution context  has a object will store a large numbr of data which a function will use while running
//(This happens before the code is executed)










































































// Tutorial Two

// Execution context and the execution stack

// The order in which the block of code runs is known as execution context

//
