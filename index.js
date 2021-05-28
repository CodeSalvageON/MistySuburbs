const fs = require('fs');
const express = require('express');

var app = require('express')();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var io = require('socket.io')(http);
var sanitizer = require('sanitizer');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let chat_log = "";
const splitter = process.env.splitter;

// Google Firestore

const {
	type,
	project_id,
	private_key_id,
	private_key,
	client_email,
	client_id,
	auth_uri,
	token_uri,
	auth_provider_x509_cert_url,
	client_x509_cert_url
} = process.env;

const serviceAccount = {
	type,
	project_id,
	private_key_id,
	private_key,
	client_email,
	client_id,
	auth_uri,
	token_uri,
	auth_provider_x509_cert_url,
	client_x509_cert_url
};

const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

app.get('', function (req, res) {
  const index = __dirname + '/public/static/index.html';

  res.sendFile(index);
});

app.get('/get-chat', function (req, res) {
  res.send(chat_log);
});

app.post('/get-items-from-sector', async function (req, res) {
  const sector_vertical = req.body.vertical;
  const sector_horizontal = req.body.horizontal;
  const item_taken = req.body.taken;
  
  const suiteRef = db.collection("dasmist").doc("chatlog");
  const mist = await suiteRef.get();

  const mist_array = mist.data().log.split(splitter);

  for (i = 0; i < mist_array.length; i++) {
    const mist_array_vertical = mist_array[i].vertical;
    const mist_array_horizontal = mist_array[i].horizontal;
    const mist_array_description = mist_array[i].description;

    if (mist_array_vertical === sector_vertical && mist_array_horizontal === sector_horizontal) {
      if (item_taken === "all") {
        const mist_array_item_part = mist_array_description.split("On the floor there is ");
        let save_placeholder = 0;

        save_placeholder = mist_array_item_part[1];

        mist_array[i].description = mist_array[i].description.replace("On the floor there is " + mist_array_item_part[1], "");

        await suiteRef.set({
          log : JSON.stringify(mist_array)
        });

        if (save_placeholder === "" || save_placeholder === null || save_placeholder === undefined) {
          res.send("");
        }

        else {
          res.send(save_placeholder);
        }
      }

      else {
        const mist_array_item_part = mist_array_description.split("On the floor there is ");
        let save_placeholder = 0;

        save_placeholder = mist_array_item_part[1];

        mist_array[i].description = mist_array[i].description.replace(item_taken + ",", "");

        await suiteRef.set({
          log : JSON.stringify(mist_array)
        });

        if (save_placeholder.includes(item_taken)) {
          res.send(item_taken);
        }

        else {
          res.send("");
        }
      }
    }

    else {
      // Pass
    }
  }

  res.send("");
});

app.post('/build-structure', async function (req, res) {
  const sector_vertical = req.body.vertical;
  const sector_horizontal = req.body.horizontal;
  const structure_built = req.body.structure;

  const suiteRef = db.collection("dasmist").doc("chatlog");
  const mist = await suiteRef.get();

  const mist_array = mist.data().log.split(splitter);

  for (i = 0; i < mist_array.length; i++) {
    const mist_array_vertical = mist_array[i].vertical;
    const mist_array_horizontal = mist_array[i].horizontal;
    const mist_array_description = mist_array[i].description;

    const mist_array_description_split = mist_array_description.split("On the floor there is ");
    const mist_array_description_split_struct = mist_array_description_split[0];
    const mist_array_description_split_item = mist_array_description_split[1];

    let thingy = "";

    if (mist_array_description_split_item === "" || mist_array_description_split_item === null || mist_array_description_split_item === undefined) {
      thingy = "nothing."
    }

    else {
      thingy = mist_array_description_split_item;
    }

    if (mist_array_vertical === sector_vertical && mist_array_horizontal === sector_horizontal) {
      if (mist_array_description.includes("trench") || mist_array_description.includes("wall") || mist_array_description.includes("tent") || mist_array_description.includes("phone_booth") || mist_array_description.includes("bench") || mist_array_description.includes("factory") || mist_array_description.includes("mansion") || mist_array_description.includes("house")) {
        res.send("exists");
      }

      else {
        if (structure_built === "trench") {
          mist_array[i].description = "trench" + " On the floor there is " + thingy;

          res.send(mist_array[i].description);
        }

        else if (structure_built === "wall") {
          mist_array[i].description = "wall" + " On the floor there is " + thingy;

          res.send(mist_array[i].description);
        }

        else if (structure_built === "tent") {
          mist_array[i].description = "wall" + " On the floor there is " + thingy;

          res.send(mist_array[i].description);
        }

        else if (structure_built === "phone_booth") {
          mist_array[i].description = "phone_booth" + " On the floor there is " + thingy;

          res.send(mist_array[i].description);
        }

        else if (structure_built === "bench") {
          mist_array[i].description = "bench" + " On the floor there is " + thingy;

          res.send(mist_array[i].description);
        }

        else if (structure_built === "factory") {
          mist_array[i].description = "factory" + " On the floor there is " + thingy;

          res.send(mist_array[i].description);
        }

        else if (structure_built === "mansion") {
          mist_array[i].description = "mansion" + " On the floor there is " + thingy;

          res.send(mist_array[i].description);
        }

        else if (structure_built === "house") {
          mist_array[i].description = "house" + " On the floor there is " + thingy;

          res.send(mist_array[i].description);
        }

        else {
          res.send("");
        }

        await suiteRef.set({
          log : mist_array
        });
      }
    }

    else {
      // Pass
    }
  }

  res.send("");
});

app.post('/get-sector', async function (req, res) {
  console.log("Sector Request");

  const sector_vertical = req.body.vertical;
  const sector_horizontal = req.body.horizontal;

  const suiteRef = db.collection("dasmist").doc("chatlog");
  const mist = await suiteRef.get();

  const mist_array = mist.data().log.split(splitter);

  for (i = 0; i < mist_array.length; i++) {
    const mist_array_vertical = mist_array[i].vertical;
    const mist_array_horizontal = mist_array[i].horizontal;
    const mist_array_description = mist_array[i].description;

    if (mist_array_vertical === sector_vertical && mist_array_horizontal === sector_horizontal) {
      res.send(mist_array_description);

      console.log("Sent data.");
    }

    else {
      // Pass
      console.log("No data found.");
    }
  }

  res.send("");
});

app.post('/chat', function (req, res) {
  const message = req.body.message;
  const cleaned_message = sanitizer.escape(message);

  chat_log = cleaned_message;
  res.send(chat_log);
});

http.listen(port, async function(){
  console.log('listening on *:' + port);

  const suiteRef = db.collection("dasmist").doc("chatlog");
  const fix_data = {
    log : ""
  }

  async function fixMist () {
    const mist = await suiteRef.get();

    if (!mist.exists) {
      await suiteRef.set(fix_data);
      console.log("All data fixed.");
    }

    else {
      console.log("No fix needed.");
    }
  }

  fixMist();
});