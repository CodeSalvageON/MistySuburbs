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

    else if (command_input.value.toLowerCase() === "north" || command_input.value.toLowerCase() === "n") {
      if (localStorage.getItem("mistysuburbs-save-sector-vertical") === "" || localStorage.getItem("mistysuburbs-save-sector-vertical") === null || localStorage.getItem("mistysuburbs-save-sector-vertical") === undefined) {
        localStorage.setItem("mistysuburbs-save-sector-vertical", "0");
        localStorage.setItem("mistysuburbs-save-sector-horizontal", "0");
      }

      else {
        localStorage.setItem("mistysuburbs-save-sector-vertical", String(parseInt(localStorage.getItem("mistysuburbs-save-sector-vertical")) + parseInt("1")));
        localStorage.setItem("mistysuburbs-save-sector-horizontal", String(parseInt(localStorage.getItem("mistysuburbs-save-sector-horizontal")) + parseInt("0")));

        fetch ("/get-sector", {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            vertical : localStorage.getItem("mistysuburbs-save-sector-vertical"),
            horizontal : localStorage.getItem("mistysuburbs-save-sector-horizontal")
          })
        })
        .then(response => response.text())
        .then(data => {
          if (data === "" || data === null || data === undefined) {
            game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>There...seems to be nothing here.</pre></span>";
          }

          else {
            drawStuff(data);
            drawItems(data);
          }
        })
        .catch(error => {
          throw error;
        });
      }  
    }

    else if (command_input.value.toLowerCase() === "south" || command_input.value.toLowerCase() === "s") {
      if (localStorage.getItem("mistysuburbs-save-sector-vertical") === "" || localStorage.getItem("mistysuburbs-save-sector-vertical") === null || localStorage.getItem("mistysuburbs-save-sector-vertical") === undefined) {
        localStorage.setItem("mistysuburbs-save-sector-vertical", "0");
        localStorage.setItem("mistysuburbs-save-sector-horizontal", "0");
      }

      else {
        localStorage.setItem("mistysuburbs-save-sector-vertical", String(parseInt(localStorage.getItem("mistysuburbs-save-sector-vertical")) - parseInt("1")));
        localStorage.setItem("mistysuburbs-save-sector-horizontal", String(parseInt(localStorage.getItem("mistysuburbs-save-sector-horizontal")) - parseInt("0")));

        fetch ("/get-sector", {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            vertical : localStorage.getItem("mistysuburbs-save-sector-vertical"),
            horizontal : localStorage.getItem("mistysuburbs-save-sector-horizontal")
          })
        })
        .then(response => response.text())
        .then(data => {
          if (data === "" || data === null || data === undefined) {
            game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>There...seems to be nothing here.</pre></span>";
          }

          else {
            drawStuff(data);
            drawItems(data);
          }
        })
        .catch(error => {
          throw error;
        });
      }
    }

    else if (command_input.value.toLowerCase() === "east" || command_input.value.toLowerCase() === "e") {
      if (localStorage.getItem("mistysuburbs-save-sector-vertical") === "" || localStorage.getItem("mistysuburbs-save-sector-vertical") === null || localStorage.getItem("mistysuburbs-save-sector-vertical") === undefined) {
        localStorage.setItem("mistysuburbs-save-sector-vertical", "0");
        localStorage.setItem("mistysuburbs-save-sector-horizontal", "0");
      }

      else {
        localStorage.setItem("mistysuburbs-save-sector-vertical", String(parseInt(localStorage.getItem("mistysuburbs-save-sector-vertical")) + parseInt("0")));
        localStorage.setItem("mistysuburbs-save-sector-horizontal", String(parseInt(localStorage.getItem("mistysuburbs-save-sector-horizontal")) + parseInt("1")));

        fetch ("/get-sector", {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            vertical : localStorage.getItem("mistysuburbs-save-sector-vertical"),
            horizontal : localStorage.getItem("mistysuburbs-save-sector-horizontal")
          })
        })
        .then(response => response.text())
        .then(data => {
          if (data === "" || data === null || data === undefined) {
            game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>There...seems to be nothing here.</pre></span>";
          }

          else {
            drawStuff(data);
            drawItems(data);
          }
        })
        .catch(error => {
          throw error;
        });
      }
    }

    else if (command_input.value.toLowerCase() === "west" || command_input.value.toLowerCase() === "w") {
      if (localStorage.getItem("mistysuburbs-save-sector-vertical") === "" || localStorage.getItem("mistysuburbs-save-sector-vertical") === null || localStorage.getItem("mistysuburbs-save-sector-vertical") === undefined) {
        localStorage.setItem("mistysuburbs-save-sector-vertical", "0");
        localStorage.setItem("mistysuburbs-save-sector-horizontal", "0");
      }

      else {
        localStorage.setItem("mistysuburbs-save-sector-vertical", String(parseInt(localStorage.getItem("mistysuburbs-save-sector-vertical")) + parseInt("0")));
        localStorage.setItem("mistysuburbs-save-sector-horizontal", String(parseInt(localStorage.getItem("mistysuburbs-save-sector-horizontal")) - parseInt("1")));

        fetch ("/get-sector", {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            vertical : localStorage.getItem("mistysuburbs-save-sector-vertical"),
            horizontal : localStorage.getItem("mistysuburbs-save-sector-horizontal")
          })
        })
        .then(response => response.text())
        .then(data => {
          if (data === "" || data === null || data === undefined) {
            game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>There...seems to be nothing here.</pre></span>";
          }

          else {
            drawStuff(data);
            drawItems(data);
          }
        })
        .catch(error => {
          throw error;
        });
      }
    }

    else if (command_input.value.toLowerCase() === "show_sector") {
      game_text.innerHTML = game_text.innerHTML + "<span class='location'><pre>Sector Vertical: " + localStorage.getItem("mistysuburbs-save-sector-vertical") + ", Sector Horizontal: " + localStorage.getItem("mistysuburbs-save-sector-horizontal") + "</pre></span>";
    }

    else if (command_input.value.toLowerCase() === "get_health") {
      game_text.innerHTML = game_text.innerHTML + "<span class='location'><pre>Health: " + localStorage.getItem("mistysuburbs-save-health") + "</pre></span>";
    }

    else if (command_input.value.toLowerCase() === "inventory") {
      game_text.innerHTML = game_text.innerHTML + "<span class='location'><pre>Inventory: " + localStorage.getItem("mistysuburbs-save-inventory") + "</pre></span>";
    }  

    else if (command_input.value.toLowerCase().startsWith("take")) {
      if (command_input.value.substr(command_input.value.indexOf(" ") + 1) === "all".toLowerCase()) {
        fetch ("/get-items-from-sector", {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            vertical : localStorage.getItem("mistysuburbs-save-sector-vertical"),
            horizontal : localStorage.getItem("mistysuburbs-save-sector-horizontal"),
            taken : "all"
          })
        })
        .then(response => response.text())
        .then(data => {
          if (data === "" || data === null || data === undefined) {
            game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>There's nothing here you can take. Except for your own life, of course.</pre></span>";
          }

          else {
            localStorage.setItem("mistysuburbs-save-inventory", localStorage.getItem("mistysuburbs-save-inventory") + ", " + data);

            const substr_one = command_input.value.substr(command_input.value.indexOf(" ") + 1);

            game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>You took " + substr_one + ".</pre></span>";
          }
        })
        .catch(error => {
          throw error;
        });
      }

      else {
        fetch ("/get-items-from-sector", {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            vertical : localStorage.getItem("mistysuburbs-save-sector-vertical"),
            horizontal : localStorage.getItem("mistysuburbs-save-sector-horizontal"),
            taken : command_input.value.substr(command_input.value.indexOf(" ") + 1)
          })
        })
        .then(response => response.text())
        .then(data => {
          if (data === "" || data === null || data === undefined) {
            game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>There's nothing here you can take. Except for your own life, of course.</pre></span>";
          }

          else {
            localStorage.setItem("mistysuburbs-save-inventory", localStorage.getItem("mistysuburbs-save-inventory") + ", " + data);

            const substr_one = command_input.value.substr(command_input.value.indexOf(" ") + 1);

            game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>You took " + substr_one + ".</pre></span>";
          }
        })
        .catch(error => {
          throw error;
        });
      }
    }

    else if (command_input.value.toLowerCase().startsWith("build")) {
      if (command_input.value.substr(command_input.value.indexOf(" ") + 1) === "trench".toLowerCase()) {
        if (parseInt(localStorage.getItem("mistysuburbs-save-mistyplast")) > 10) {
          saw_sound.cloneNode(true).play();

          fetch ("/build-structure", {
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              vertical : localStorage.getItem("mistysuburbs-save-vertical"),
              horizontal : localStorage.getItem("mistysuburbs-save-horizontal"),
              structure : "trench"
            })
          })
          .then(response => response.text())
          .then(data => {
            drawStuff(data);
            drawItems(data);
          })
          .catch(error => {
            throw error;
          });
        }
      }

      else if (command_input.value.substr(command_input.value.indexOf(" ") + 1) === "wall".toLowerCase()) {
        if (parseInt(localStorage.getItem("mistysuburbs-save-mistyplast")) > 30) {
          saw_sound.cloneNode(true).play();

          fetch ("/build-structure", {
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              vertical : localStorage.getItem("mistysuburbs-save-vertical"),
              horizontal : localStorage.getItem("mistysuburbs-save-horizontal"),
              structure : "wall"
            })
          })
          .then(response => response.text())
          .then(data => {
            drawStuff(data);
            drawItems(data);
          })
          .catch(error => {
            throw error;
          });
        }

        else {
          game_text.innerHTML = game_text.innerHTML + "<span class='error'><pre>You don't have enough mistyplast to build a wall!</pre></span>"
        }
      }

      else if (command_input.value.substr(command_input.value.indexOf(" ") + 1) === "tent".toLowerCase()) {
        if (parseInt(localStorage.getItem("mistysuburbs-save-mistyplast")) > 10) {
          saw_sound.cloneNode(true).play();

          fetch ("/build-structure", {
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              vertical : localStorage.getItem("mistysuburbs-save-vertical"),
              horizontal : localStorage.getItem("mistysuburbs-save-horizontal"),
              structure : "tent"
            })
          })
          .then(response => response.text())
          .then(data => {
            drawStuff(data);
            drawItems(data);
          })
          .catch(error => {
            throw error;
          });
        }

        else {
          game_text.innerHTML = game_text.innerHTML + "<span class='error'><pre>You don't have enough mistyplast to build a tent!</pre></span>"
        }
      }

      else if (command_input.value.substr(command_input.value.indexOf(" ") + 1) === "phone_booth".toLowerCase()) {
        if (parseInt(localStorage.getItem("mistysuburbs-save-mistyplast")) > 20) {
          saw_sound.cloneNode(true).play();

          fetch ("/build-structure", {
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              vertical : localStorage.getItem("mistysuburbs-save-vertical"),
              horizontal : localStorage.getItem("mistysuburbs-save-horizontal"),
              structure : "phone_booth"
            })
          })
          .then(response => response.text())
          .then(data => {
            drawStuff(data);
            drawItems(data);
          })
          .catch(error => {
            throw error;
          });
        }

        else {
          game_text.innerHTML = game_text.innerHTML + "<span class='error'><pre>You don't have enough mistyplast to build a phone booth!</pre></span>"
        }
      }

      else if (command_input.value.substr(command_input.value.indexOf(" ") + 1) === "bench".toLowerCase()) {
        if (parseInt(localStorage.getItem("mistysuburbs-save-mistyplast")) > 20) {
          saw_sound.cloneNode(true).play();

          fetch ("/build-structure", {
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              vertical : localStorage.getItem("mistysuburbs-save-vertical"),
              horizontal : localStorage.getItem("mistysuburbs-save-horizontal"),
              structure : "bench"
            })
          })
          .then(response => response.text())
          .then(data => {
            drawStuff(data);
            drawItems(data);
          })
          .catch(error => {
            throw error;
          });
        }

        else {
          game_text.innerHTML = game_text.innerHTML + "<span class='error'><pre>You don't have enough mistyplast to build a bench!</pre></span>"
        }
      }

      else if (command_input.value.substr(command_input.value.indexOf(" ") + 1) === "factory".toLowerCase()) {
        if (parseInt(localStorage.getItem("mistysuburbs-save-mistyplast")) > 90) {
          saw_sound.cloneNode(true).play();

          fetch ("/build-structure", {
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              vertical : localStorage.getItem("mistysuburbs-save-vertical"),
              horizontal : localStorage.getItem("mistysuburbs-save-horizontal"),
              structure : "factory"
            })
          })
          .then(response => response.text())
          .then(data => {
            drawStuff(data);
            drawItems(data);
          })
          .catch(error => {
            throw error;
          });
        }

        else {
          game_text.innerHTML = game_text.innerHTML + "<span class='error'><pre>You don't have enough mistyplast to build a factory!</pre></span>"
        }
      }

      else if (command_input.value.substr(command_input.value.indexOf(" ") + 1) === "mansion".toLowerCase()) {
        if (parseInt(localStorage.getItem("mistysuburbs-save-mistyplast")) > 50) {
          saw_sound.cloneNode(true).play();

          fetch ("/build-structure", {
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              vertical : localStorage.getItem("mistysuburbs-save-vertical"),
              horizontal : localStorage.getItem("mistysuburbs-save-horizontal"),
              structure : "mansion"
            })
          })
          .then(response => response.text())
          .then(data => {
            drawStuff(data);
            drawItems(data);
          })
          .catch(error => {
            throw error;
          });
        }

        else {
          game_text.innerHTML = game_text.innerHTML + "<span class='error'><pre>You don't have enough mistyplast to build a mansion!</pre></span>"
        }
      }

      else if (command_input.value.substr(command_input.value.indexOf(" ") + 1) === "house".toLowerCase()) {
        if (parseInt(localStorage.getItem("mistysuburbs-save-mistyplast")) > 30) {
          saw_sound.cloneNode(true).play();

          fetch ("/build-structure", {
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              vertical : localStorage.getItem("mistysuburbs-save-vertical"),
              horizontal : localStorage.getItem("mistysuburbs-save-horizontal"),
              structure : "house"
            })
          })
          .then(response => response.text())
          .then(data => {
            drawStuff(data);
            drawItems(data);
          })
          .catch(error => {
            throw error;
          });
        }

        else {
          game_text.innerHTML = game_text.innerHTML + "<span class='error'><pre>You don't have enough mistyplast to build a house!</pre></span>"
        }
      }

      else {
        game_text.innerHTML = game_text.innerHTML + "<span class='error'><pre>That isn't a valid structure to build.</pre></span>";
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