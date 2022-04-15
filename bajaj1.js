const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const bodyParser = require("body-parser");

const app = express();

dotenv.config({path: "./config.env"});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`${PORT}`);
});

app.use(cors());

const url = bodyParser.urlencoded({ extended: false });

app.post("/bfhl", url, (req, res) => {
  const even = [];

  const odd = [];

  const name = "Jayesh_Purohit_15042001";

  var c = 0,
    c1 = 0;

  const a = req.query.n;

  var flag = 0;

  for (let i = 0; i < a.length; i++) {
    const x = parseInt(a[i]);

    if (/[a-zA-Z]/.test(x)) {
      flag = 1;
      break;
    } else if (x % 2 == 0) even[c++] = a[i];
    else odd[c1++] = a[i];
  }

  if (flag == 1) {
    json = { is_success: false, name: name };

    res.send(json);
  } else {
    json = { is_success: true, name: name, even: even, odd: odd };

    res.send(json);
  }
});

module.exports = app;
