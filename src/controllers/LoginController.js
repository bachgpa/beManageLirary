class LoginController {
  //[get] login
  login(req, res) {
    res.send("this is login page");
  }
}

module.exports = new LoginController();
