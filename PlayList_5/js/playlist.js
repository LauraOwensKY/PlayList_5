var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];
var message = '';
for (var i=0; i < playList.length; i += 1) {
  listHTML = listHTML + "<p>" + listHTML(playList[i]);
}


function print(message) {
  document.write(message);
}

function printList( list ) {
  var listHTML = '<ol>';
  for (var i=0; i < playList.length; i += 1) {
    listHTML += '<li>' + list[i] + '/li';
  }
  listHTML =+ '</ol>';
  print(listHTML);
}

printList(playlist);
