



fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data) =>{
        console.log(data)
    })
})


 const wef=document.querySelector('form')
 const search=document.querySelector('input')
 const msg=document.querySelector('#msg1')
 const msg2=document.querySelector('#msg2')
 
 

 wef.addEventListener('submit',(e)=>{
     e.preventDefault()
     const l=search.value
     msg.textContent='loading'
fetch('/weather?address='+l).then((response)=>{
    response.json().then((d)=>{
        if(d.error)
        {
            console.log(d.error)
           //msg.textContent=d.error
        }
        else{
            
        msg.textContent=d.lat
        msg2.textContent=l
        console.log(d)
        }
    })
})


     console.log(l)
 })