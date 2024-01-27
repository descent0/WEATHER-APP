
navigator.geolocation.getCurrentPosition(
    (position)=>{
        console.log(position);
      let apiUrl=  `https://api.tomtom.com/search/2/reverseGeocode/${position.coords.latitude},${position.coords.longitude}.json?key=gA0P6Y5QjYVYO2kXDB3GJVIMGGPgk0JS&radius=100`
      getLocation(apiUrl);
      
      
    },
    (error)=>{
        console.log("there is an error in fetching location",error);
    }
);

async function getLocation(apiUrl){
    try{
     
         const response= await fetch(apiUrl);
        
         const data= await response.json();
         console.log(data);
    }
    catch(error){
        console.log("cant fetch city name",error);
    }
}