var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let products = [
    {
      name:"IPHONE",
      category: "Mobile",
      description: "This is a phone",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKrFtiqZ16FpT7Kc78Dgk72jDSSlUqHMTNw&usqp=CAU"
    },
    {
      name:"One Plus 7T",
      category: "Mobile",
      description: "This is a good phone",
      image:"https://m.media-amazon.com/images/I/612ytK4luvL._SL1500_.jpg"
    },
    {
      name:"Oppo F12",
      category: "Mobile",
      description: "This is a phone",
      image:"https://apollo-singapore.akamaized.net/v1/files/14j4taei1nxb-IN/image;s=850x0"
    },
    {
      name:"MI Note 10 pro",
      category: "Mobile",
      description: "This is a phone",
      image:"https://www.notebookcheck.net/uploads/tx_nbc2/xiaomi-mi-note-10-6gb-128gb-dual-sim-green.jpg"
    }
  ]
  res.render('index', { products, admin:false });
});

module.exports = router;
