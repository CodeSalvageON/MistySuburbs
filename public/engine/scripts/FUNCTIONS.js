function initWorld () {
  choosing_username = true;

  game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>" + title + "</pre></span>";

  setTimeout(function () {
    game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>The best suburban survival game on the World Wide Web! Type help for a list of commands.</pre></span>";

    setTimeout(function () {
      command_input.value = "Click me to type in a username.";
      localStorage.setItem("mistysuburbs-save-state", "saved");
    }, 500);
  }, 500);
}

function initSave () {
  game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>" + title + "</pre></span>";

  setTimeout(function () {
    game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>The best suburban survival game on the World Wide Web! Type help for a list of commands.</pre></span>";

    setTimeout(function () {
      game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>Welcome back, " + localStorage.getItem("mistysuburbs-save-username") + "</pre></span>";
    }, 500);
  }, 500);
}

function blinkCursor () {
  command_input.value = "_ " + command_input.value;

  setTimeout(function () {
    command_input.value = command_input.value.replace("_ ", " ");
  }, 500);
}

function autoScroll () {
  window.scrollTo(0, document.body.scrollHeight);
}

const scroll = setInterval(function () {
  const scrollingElement = (document.scrollingElement || document.body);

  scrollingElement.scrollTop = scrollingElement.scrollHeight;
}, 10);