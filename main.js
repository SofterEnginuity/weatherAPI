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
  document.querySelector('body').style.backgroundImage = "url('https://i.imgur.com/5vcDCYa.jpeg')";
}else if(temp < 60){
  console.log("You should bundle up. for sure")
  document.querySelector('p').innerText = "You should bundle up. for sure"
  document.querySelector('body').style.backgroundImage = "url('https://i.imgur.com/ZhwWk3U.jpeg')";
}
else if(temp < 70){
  console.log("You'll probably need a jacket if you go out")
  document.querySelector('p').innerText = "You'll probably need a jacket if you go out "
  document.querySelector('body').style.backgroundImage = "url('https://i.imgur.com/9p6rdlz.jpeg')";
}else if(temp < 80){
  console.log( "Soak up some sun, perfect midrange temp!")
  document.querySelector('p').innerText = "Soak up some sun!!"
  document.querySelector('body').style.backgroundImage = "url('https://i.imgur.com/9p6rdlz.jpeg')";
}else{
  console.log("It's summa summa summa tiiiiime!")
  document.querySelector('p').innerText = "It's summa summa summa tiiiiime!"
  document.querySelector('body').style.backgroundImage = "url('https://i.imgur.com/WTHcHzN.jpeg')";
  
} 
       
      }
       
        )
    .catch(err => {
      console.log(`error ${err}`)
  });
}
   


  

      