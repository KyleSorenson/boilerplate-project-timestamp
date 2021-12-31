const express = require("express");
const app = express();

app.use(express.json());

// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// Timestamp router
const timestampRouter = express.Router();

// If Date Parameter is Empty, Return Current Time
timestampRouter.get("/", (req, res) => {
  let currentTime = Date.now();
  let date = new Date(currentTime);

  let message = {
    unix: currentTime,
    utc: date.toUTCString(),
  };

  res.json(message);
});

// If Date Parameter Exists
timestampRouter.get("/:date", (req, res) => {
  let { date } = req.params;
  let message;

  // If Date Parameter is Note a Parsable Date String
  if (!Date.parse(date)) {
    // Check if the Date Parameter is a Number, Return Date based on UNIX Epoch
    if (Number(date)) {
      date = Number(date);
      date = new Date(date);

      message = {
        unix: date.getTime(),
        utc: date.toUTCString(),
      };
    } else {
      message = { error: "Invalid Date" };
    }
  } else {
    // If Date Parameter is a Date String, Return Date
    date = new Date(date);

    message = {
      unix: date.getTime(),
      utc: date.toUTCString(),
    };
  }
  res.json(message);
});

app.use("/api", timestampRouter);

module.exports = app;
