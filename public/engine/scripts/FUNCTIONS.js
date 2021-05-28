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

function drawStuff (desc) {
  if (desc.includes("trench")) {
    game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>You are standing in a trench. Around you, there is barbed wire. The trench is very muddy.</pre></span><span class='normal'><pre>" + trench + "</pre></span>";
  }

  else if (desc.includes("wall")) {
    game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>You are standing in front of a wall. That's all there is to it.</pre></span><span class='normal'><pre>" + wall + "</pre></span>";
  }

  else if (desc.includes("tent")) {
    game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>A tent is on your path. It is somewhat small but it is more than enough to keep away from the foggy weather. Inside, it feels warm and even cozy to an extent.</pre></span><span class='normal'><pre>" + tent + "</pre></span>";
  }

  else if (desc.includes("phone_booth")) {
    game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>A dimly lit phone booth stands in front of you. The phone inside is useless, no matter what you try.</pre></span><span class='normal'><pre>" + phone_booth + "</pre></span>";
  }

  else if (desc.includes("bench")) {
    game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>A comfortable looking bench is in front of you. It is cold to the touch, but it is still comfortable.</pre></span><span class='normal'><pre>" + bench + "</pre></span>";
  }

  else if (desc.includes("factory")) {
    game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>There is a large factory looming over you. Inside, machines are set to work- making nothing.</pre></span><span class='normal'><pre>" + factory + "</pre></span>";
  }

  else if (desc.includes("mansion")) {
    game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>In front of you, there is a fancy mansion, but you have seen it hundreds of times before. It is burned into your memory. Inside, the many rooms are comforting- but you can't help but feel that it is c̷̨̭̥̣̮͍̻̬͉͍̻̼̝̱̱̾̐͑͑͗̔̾͆̒̉͜͠͝͝ǫ̸̨̢̙̗̬̪̦͓͍̦̻̝͖͇̬̲͔͚̟̅̀̌̾͂̌̀̒̆͌̚͘̚͘m̴̹͚̲̔̾͐i̸̹͍̰̳̭̖͔̘̗̘̅̿͂͌͑̄̉̈́̈͑́̉̏̊̅͊̔̍͠͠n̷̟̥̲̈́͑͛̌̌̒̈́̌̍̂͐͝ͅǧ̶̡̢̦̱̺̟̣̀͋</pre></span><span class='normal'><pre>" + mansion + "</pre></span>";
  }

  else if (desc.includes("house")) {
    game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>A cozy looking home stands in front of you. It is a very simple design, but it invokes feelings of coziness and comfort. The inside of the home feels like a nice Thanksgiving day.</pre></span><span class='normal'><pre>" + house + "</pre></span>";
  }
}

function drawItems (desc) {
  const desc_split = desc.split("On the floor there is ");
  const desc_split_struct = desc_split[0];
  const desc_split_item = desc_split[1];

  game_text.innerHTML = game_text.innerHTML + "<span class='normal'><pre>" + desc.replace(desc_split_struct, "") + "</pre></span>";
}

const scroll = setInterval(function () {
  const scrollingElement = (document.scrollingElement || document.body);

  scrollingElement.scrollTop = scrollingElement.scrollHeight;
}, 10);