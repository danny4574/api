const btn=document.getElementById('diceBtn');
const adviceId=document.getElementById('adviceId');
const text=document.getElementById('adviceText');
const randonmAdvice= 'https://api.adviceslip.com/advice'


btn.addEventListener('click',()=>{
    fetch(randonmAdvice, {cache:'no-cache'})
    .then((response)=>{
        if(response.ok){
            return response.json()    
        }
        else{
            throw new Error('Network RESPONSE ERROR');
        }
    })
    .then((data)=>{
         const advice=data.slip.id;
         const adviceText=data.slip.advice;
         adviceId.innerHTML="Advice #"+ advice
         text.innerHTML=`""${adviceText}""`
    })

})

const btn1=document.getElementById('greenbtn');
const btn2=document.getElementById('whitebtn');

btn1.addEventListener('click',()=>{
    document.body.style.backgroundColor='lightgreen';
})
btn2.addEventListener('click',()=> {
    document.body.style.backgroundColor='white';
} )