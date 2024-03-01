class HomeController {
  //[get] login
  home(req, res) {
    console.log(' kết nối database thành công');
    res.send('kết nối database thành công');
  }
}

module.exports = new HomeController();
