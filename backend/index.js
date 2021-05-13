const serverless = require('serverless-http');
const express = require('express')
const app = express()
const cheerio = require('cheerio');
const request = require('request')
const cors = require('cors')
 app.use(cors())
 
function func(id,callback) {
   request('https://www.alo.bg/users/artemis/obiavi?cat_id='+id, function (error, response, body) {
  
  const $ = cheerio.load(body);
     const arr = [];
     let i = 0;
  $('.content_container_list  .mb10').each(function () {
    arr.push({
      id: i++,
      img: 'https://www.alo.bg/' + $(this).find('.listvip-image a img').attr('src'),
      title: $(this).find('.listvip-params .listvip-item-header a').text(),
      href: 'https://www.alo.bg'+$(this).find('.listvip-params .listvip-item-header a').attr('href'),
      description:$(this).find('.listvip-params .listvip-item-content .listvip-desc').text()
    })
 
  })
  callback(arr);
 
  
});
 }
// naemi = 35;
// prodajbi = 34;




app.get('/', function (req, res) {
  func(35, function (naemi) {
  func(34, function (prodajbi) {
  
   res.send({naemi, prodajbi})
});
 });
})

module.exports.handler = serverless(app);