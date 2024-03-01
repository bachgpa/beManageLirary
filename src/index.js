const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');
const exp = require('constants');
const routes = require('./routes/index');
const cors = require('cors');

const port = 2000;
const app = express();
const database = require('./database/index');

database.database;

app.use(morgan('combined'));
app.use(cors());
// app.engine(
//   'hbs',
//   hbs.engine({
//     extname: 'hbs',
//   }),
// );
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, './static')));

// app.use("/", (req, res) => {
//   res.render("home");
// });
routes(app);

app.listen(port, () => {
  console.log(
    `App BELibraryManageApp listen at port: http://localhost:${port}`,
  );
});
