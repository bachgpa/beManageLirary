const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const path = require("path");
const exp = require("constants");
const route = require("./routes/index");

const port = 2000;
const app = express();

app.use(morgan("combined"));
app.engine(
  "hbs",
  hbs.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "./static")));

// app.use("/", (req, res) => {
//   res.render("home");
// });
route(app);

app.listen(port, () => {
  console.log(
    `App listen at port: http://localhost:${port}`
  );
});
