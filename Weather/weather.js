const apiKey = "da1ee0b619aeb7866c7972d8d24254a8";

async function checkWeather(city) {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
     const data = await response.json();
    console.log(data);
    document.getElementById("name").innerText=data.name;
    document.getElementById("speedu").innerText=data.wind.speed;
    document.getElementById("temperature").innerText=Math.round(data.main.temp-273)+"°C";
    document.getElementById("humid").innerText=data.main.humidity;


  } catch (error) {
    console.error(error);
  }
}


 let city=document.getElementById("search_box");

 document.getElementById("btn").addEventListener("keydown", event => {
    if (event.key === "Enter") {
        checkWeather(city.value);
    }
  })
 document.getElementById("btn").addEventListener("click",()=>{
    checkWeather(city.value);
 })




