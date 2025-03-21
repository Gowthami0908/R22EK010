
const express = require("express"); 
const bodyParser = require("body-parser"); 


const app = express();
const port = 3000;


app.use(bodyParser.json());


app.post("/calculate-average", (req, res) => {
  const { numbers } = req.body;

 
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return res
      .status(400)
      .json({ error: "Please provide a non-empty array of numbers." });
  }


  const total = numbers.reduce((sum, num) => sum + num, 0);
  const average = total / numbers.length;

 
  res.json({ average });
});

app.listen(port, () => {
  console.log(
    `Average calculator HTTP service is now running at http://localhost:${port}`
  );
});
