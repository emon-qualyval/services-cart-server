const connectDb = require('./connectDb')
const serverless =  require('serverless-http')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const app = express()

connectDb()

const model = mongoose.model('services',{
    title:String
})
const cartModel = mongoose.model('carts',{
  id:String,
  category: String,
  title: String,
  member:String,
  description: String,
  price: String,
  home:String,
  location: String,
  review: String,
  perform: String,
  img: String
}
)

app.use(cors());
app.use(bodyParser.json());



app.get('/',async (req,res) => {
    const data = await model.find();
      if (data) {
        return res
          .send(data)
      } else {
        return res
        .send(data)
      }
})
app.post('/id',async (req,res) => {
  const data = await model.find({_id:req.body.id});
    if (data) {
      return res
        .send(data)
    } else {
      return res
      .send(data)
    }
})
app.post('/cart',async(req,res) => {
  const sendData = await cartModel.create({
    id:req.body._id,
    category: req.body.category,
    title: req.body.title,
    member:req.body.member,
    description: req.body.description,
    price: req.body.price,
    home:req.body.home,
    location: req.body.location,
    review: req.body.review,
    perform: req.body.perform,
    img: req.body.img
  })
  res.send(JSON.stringify({success:'success'}))
})
app.get('/getCart',async(req,res) => {
  const data = await cartModel.find()
  if(data){
    res.send(data)
  }
})
app.post('/deleteCart',async(req,res) => {
  const data = await cartModel.findOneAndDelete({_id:req.body.id})
  if(data){
    res.send(data)
  }
})

app.listen(7000)


