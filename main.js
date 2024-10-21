document.querySelector('button').addEventListener('click', getLocation)

function getLocation(){
    const userInput = document.querySelector('#city').value
    const userCountry = document.querySelector('#country').value

// const url = `http://api.openweathermap.org/geo/1.0/direct?q=Philadelphia,Pennsylvania,+1&limit=1&appid=cf5630e57562c1ce6f6fe23034748471`
// const url2= `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=cf5630e57562c1ce6f6fe23034748471`      

fetch(`http://api.weatherapi.com/v1/current.json?key=a15ee75a3d2c4ef5bf7174050241710&q=${userInput}&aqi=no`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        console.log(data.location.lat)
        console.log(data.location.lon)
    const temp = data.current.temp_f     
        document.querySelector('h3').innerText = data.current.temp_f
      
         if(temp < 40){
  console.log("You should just stay home, it's an icebox out there!!")
  document.querySelector('p').innerText = "You should just stay home, it's an icebox out there!!"
  document.querySelector('body').style.backgroundColor = 'rgb(92, 93, 245)'
}else if(temp < 60){
  console.log("You're probably going to need a jacket if you go out")
  document.querySelector('p').innerText = "You're probably going to need a jacket if you go out"
    document.querySelector('body').style.backgroundColor = 'rgb(113, 163, 193)'
}
else if(temp < 70){
  console.log("Get out the house, it's getting nice out!")
  document.querySelector('p').innerText = "Get out the house, it's getting nice out!"
    document.querySelector('body').style.backgroundColor = 'rgb(92, 245, 196)'
}else if(temp < 80){
  console.log( "It's summa summa summa tiiiiime!")
  document.querySelector('p').innerText = "It's summa summa summa tiiiiime!"
    document.querySelector('body').style.backgroundColor = 'rgb(245, 172, 92)'
}else{
  console.log("Go to the beach, it's too hot!")
  document.querySelector('p').innerText = "Go to the beach, it's too hot!"
  document.querySelector('body').style.backgroundColor = 'rgb(245, 128, 92)'
  // document.querySelector('body').style.color = 'white'
} 
       
      }
       
        )
    .catch(err => {
      console.log(`error ${err}`)
  });
}
   


  

      