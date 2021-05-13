// Take input from the user

$("#command-form").submit(function () {
  event.preventDefault();

  blip.cloneNode(true).play();

  if (choosing_username === true && command_input.value !== "Click me to type in a username.") {
    localStorage.setItem("mistysuburbs-save-username", command_input.value);
    choosing_username = false;

    if (command_input.value.toLowerCase().includes("wiiu")) {
      localStorage.setItem("mistysuburbs-save-state", "defect");
      location.href = "";
    }

    else if (command_input.value.toLowerCase().includes("iready")) {
      localStorage.setItem("mistysuburbs-save-state", "defect");
      location.href = "";
    }

    else if (command_input.value.toLowerCase().includes("i-ready")) {
      localStorage.setItem("mistysuburbs-save-state", "defect");
      location.href = "";
    }

    else {
      game_text.innerHTML = game_text.innerHTML + "<span class='trophy'>Congratulations! Your username is now " + command_input.value + ".</span>";
    }
  }

  else {
    if (command_input.value.toLowerCase() === "help") {
      game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>" + help_list + "</pre></span>";
    }

    else if (command_input.value.toLowerCase() === "change_username") {
      if (localStorage.getItem("mistysuburbs-save-username") === "null" || localStorage.getItem("mistysuburbs-save-username") === null) {
        game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>Type your new username down below.</pre></span>";
        choosing_username = true;
      }

      else {
        game_text.innerHTML = game_text.innerHTML + "<span class='error'><pre>Error: Cannot change username when username is not null</pre></span>";
      }
    }

    else if (command_input.value.toLowerCase().startsWith("chat")) {
      fetch ("/chat", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          message : localStorage.getItem("mistysuburbs-save-username") + ": " + command_input.value.substr(command_input.value.indexOf(" ") + 1)
        })
      })
      .then(response => response.text())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        game_text.innerHTML = game_text.innerHTML + "<span class='error'><pre>" + error + "</pre></span>";
      })
    }

    else {
      game_text.innerHTML = game_text.innerHTML + "<span class='error'><pre>Error: Invalid command!</pre></span>"
    }
  }

  command_input.value = "";
});