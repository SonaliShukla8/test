const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app=express();
app.use(express.json());
app.use(cors());
const Fruit=require('./schema')
mongoose.set("strictQuery", false);
const db='mongodb+srv://sonali:Sonali%4012345@cluster0.x00qygu.mongodb.net/db1?retryWrites=true&w=majority';
mongoose.connect(db,{
    // useNewUrlParser:true,
    // useCreateIndex: true,
    // useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log("Connection established");
}).catch(err=>{
    console.log(err);
})

app.get('/',(req,res)=>{
    res.send("Running...")
})


// app.get('/get',(req,res)=>{
//     const data=Fruit.find();
//     res.send(data);
// })

app.get('/get', async (req,res,next)=>{
    try{
      const data = await Fruit.find();
      return res.status(200).json({
        success: true,
        count: data.length,
        data: data,
      });
    } catch(err) {
      console.log(err);
      res.status(500).json({ error: 'server error' });
    }
  });


app.listen(5000, (req,res)=>{
    console.log("Server is running...");
}
)