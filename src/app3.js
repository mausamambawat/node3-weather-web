const path=require('path')
const ex=require('express')
const hbs=require('hbs')
const gc=require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')

//define path for exp config
const p=path.join(__dirname,'../public')
const viewsp=path.join(__dirname,'../temp/views')
const ppath=path.join(__dirname,'../temp/partials')
const app=ex()

const port=process.env.PORT || 3000

console.log(app)
//setup handle engine and vie wloc
app.set('view engine','hbs')
app.set('views',viewsp)
hbs.registerPartials(ppath)

//setup static directory to serve
app.use(ex.static(p))

app.get('/weather',(req,res)=>{
    if(!req.query.address)
    {
        return res.send(
            {
                err:'must provide address'
            }
        )
    }
    gc(req.query.address,(err,{lat,long,loc}={})=>{

        if(err)
  {
    return res.send(err)
  }
  forecast(lat, long,(er,d)=>{
       if(er)
       {
return res.send(er)

       }
       res.send({
           lat:lat,
           longit:long,
           data:d
          
       })
       })
  
})


   
    
})

app.get('',(req,res)=>{

   
    res.render('index',{
        title:'weather app',
        name:'mausam info'
    })
})




app.get('/product',(req,res)=>{
    if(!req.query.search)
    {
        return res.send({
            err:'must provide some search value'
        })
    }
    console.log(req.query.search)
res.send(
    {
        products: []
    }
)
})

app.get('/about',(req,res)=>{
    res.render('about',{
        name:'about info',
        title:'piccc'
    })
})


app.get('/help',(req,res)=>{

    res.render('help',{
        name:'helping',
        info:'what type of help',
        title:'help'
    })
})
app.get('/help/*',(req,res)=>{
    res.render('error',{
        err:'help page not found'
    })
})

app.get('*',(req,res)=>{
res.render('error',{
    err:'error 404 '
})
})

   

app.listen(port,()=>{
    console.log('server is on'+ port)
})