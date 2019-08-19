
var playList = [
  'Sanam re',
  'Dil chahata hai',
  'Tere Naam',
  'Fakira'
]

var playListTwo = [
  'Sanam re',
  'Dil chahata hai',
  'Tere Naam',
  'Fakira',
  'Chinmay'
]

// playList
//playlisttwo
function printList(list){
  var listHTML = '<ol>';
  for(var i = 0 ; i < list.length ; i+= 1){
    listHTML += '<li>' + list[i] +'</li>';
  }
    listHTML += '</ol>';
    print(listHTML);
}

function print(html){
  document.write(html);
}

printList(playList);
printList(playListTwo);

// Iterating through the array is the most common use of for loop .


//  pop push shift unshift

// This are nearly few methods of array
// There are many methods of array

// There are too many array methods
