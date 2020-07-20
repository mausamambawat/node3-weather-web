const request=require('postman-request')

const gc=(add,callb)=>{
    const l='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(add) + '.json?access_token=pk.eyJ1IjoibWF1c2FtcmFuaSIsImEiOiJja2MzNzQ2MzYxc2FvMnRuNGlzNjAwNGkzIn0.bIDrmVo85ne6MpjYoJ0Y7g&limit=1'
    request({url:l,json:true},(err,{body}={})=>{
        if(err)
        {
            callb('unable',undefined)
        }
        else if(body.features.length ===0)
        {
            callb('loc prob',undefined)
        }
        else{
            callb(undefined,{lat:body.features[0].center[0],long:body.features[0].center[1],
            loc:body.features[0].place_name})
        }
    })
    
    }
   
    module.exports= gc