// Updates the chatroom via fetches

const chatroom_interval = setInterval(function () {
  if (choosing_username === false) {
    fetch ("/get-chat")
    .then(response => response.text())
    .then(data => {
      if (data === chatroom_save_slot) {
        // Do nothing 
      }

      else {
        game_text.innerHTML = game_text.innerHTML + "<span class='chat'><pre>" + data + "</pre></span>";
        chatroom_save_slot = data;
      }
    })
  }

  else {
    // Do nothing here
  }
}, 500);