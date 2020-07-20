const request=require('postman-request')
const forecast=(latitude,longitude,callb)=>{
const l='http://api.weatherstack.com/current?access_key=030fb546acade8fdc4a5bba386681f6e&query='+latitude+','+longitude+'&units=f'
request({url:l , json:true},(err,{body})=>{
    if(err)
    {
        callb('connection prob',undefined)
    }
    else if(body.error)
    {
        callb('error',undefined)
    }
    else{
        callb(undefined,"temp is "+body.current.temperature+" and chances of rain is "+body.current.precip)
    }
})
}

module.exports=forecast
