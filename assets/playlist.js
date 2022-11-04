// Trocanco o button de cor.


  // validando o butão
  window.onload = init;
  function init() {
      var button = document.getElementById("addButton");
      button.onclick = handleButtonClick;   
      loadplaylist();
      
    }
  
  function handleButtonClick() {
    alert("Button was clicked!");
}

 // validando quando adicionar a musica
 function handleButtonClick() {
    var textInput = document.getElementById("songTextInput");
   
    var songName = textInput.value;
       alert("Adding " + songName);
    
}

 // validando o input se esta vazio
 function handleButtonClick() {
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;
    if(songName == "") {
        alert("Digite a Musica!");
    } else {
        alert("adding " + songName);
    }
    // adicionando a musica a uma lista
    var li = document.createElement("li");
    
    li.innerHTML = songName;
    
    var ul = document.getElementById("playlist");
    
    ul.appendChild(li);
    save(songName);
}