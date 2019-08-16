// var message = " ";
// var student ;
//
// // student variable  will hold every object as we loop over the array of objects
//
//
// function getStudentReport(student){
//   var report = "<h2>Student Name :"+student.name+" </h2>"
//   report += "<p>Acheivements :"+student.acheivements+" </p>";
//   report += "<p>Track :"+student.track+" </p>";
//   report  += "<p>Points:"+student.points+" </p>";
//   return report;
// }
//
// function print(message){
//   document.write(message);
// }
//
// while(true){
//
//   var search = prompt("Please Enter the name of student you want to search ['chinmay'] or type quit to exist");
//   if(search.toLowerCase() === 'quit' || search === null){
//     break;
//   }
//
// for(var i = 0 ; i < students.length ; i++){
//     student = students[i];
//     if(search.toLowerCase() === student.name ){
//       message = getStudentReport(student);
//       print(message);
//       //break;
//     }
//
// }
//
// }


// If you click cancel button on the prompt dialouge box ,
// the browser return null value.

//challenge if ther are multiple instance of any name


//
// var message = " ";
// var student ;
// var studentsArray = [];
// //var notFound = false;
//
// // student variable  will hold every object as we loop over the array of objects
//
//
// function getStudentReport(student){
//   var report = "<h2>Student Name :"+student.name+" </h2>"
//   report += "<p>Acheivements :"+student.acheivements+" </p>";
//   report += "<p>Track :"+student.track+" </p>";
//   report  += "<p>Points:"+student.points+" </p>";
//   return report;
// }
//
// function print(message){
//   document.write(message);
// }
//
// while(true){
//   var search = prompt("Please Enter the name of student you want to search ['chinmay'] or type quit to exist");
//   if(search.toLowerCase() === 'quit' || search === null){
//     break;
//   }
//
// for(var i = 0 ; i < students.length ; i++){
//     student = students[i];
//     if(search.toLowerCase() === student.name ){
//       studentsArray.push(student);
//       message = getStudentReport(student);
//       print(message);
//     }
// }
//
// if(studentsArray.length === 0 ){
//   alert("Not found.. please search gain")
// }
//
// }
