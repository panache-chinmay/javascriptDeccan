var message ='';
var student ;
var search ;

// The js containing the object should be loaded First
//
//
//
//
// //alert('Chinmay');
// var students = [
//   //Each object have same type of property name as they are same
//   // type of
// {
//    name:'Dave',
//    track:'Front end development',
//    acheivements:158,
//    points:14370
// },
// {
//   name:'Sam',
//   track:'BackendDevelopers',
//   acheivements:159,
//   points:14379
// },
// {
//   name:'Davey',
//   track:'UXI Developer',
//   acheivements:158,
//   points:14370
// },
// {
//   name:'DaveryOne',
//   track:'LinuxDeveloper',
//   acheivements:159,
//   points:14379
// },
// ]


function print(message){
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentData(student){
  var record = '<h2>Student: '+student.name +'</h2>';
  record += '<p>Track: '+ student.track+'</p>';
  record += '<p>Points: '+ student.points+'</p>';
  record += '<p> Acheivements: '+ student.acheivements + '<p>';
    return record
}

while(true){
  search = prompt('Search student records: type a name[jody](or type "quit" to end)');
  if(search === null || search.toLowerCase() === 'quit'){
    break;
  }

  for(var i =0 ; i< students.length ; i += 1){
    student = students[i];
    if(student.name === search){
      message = getStudentData(student);
      print(message);
    }
  }
}

// A variable function define inside function remains

// Search mechanism in javascript
