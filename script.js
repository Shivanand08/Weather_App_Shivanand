async function fetchWeatherData(cityName){
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ee7966ff7cbf5a622472b1801826d986`;
	const response = await fetch(url)
	const data = await response.json();
	console.log(data)
}

function fetchCity(){
	let cityName = document.getElementById("city_name");
	if(cityName.value===""){
		alert("Enter a city name");

	}else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}
}