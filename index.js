let todayWeather = document.getElementById("todayWeather");
let todayDayWeather = document.getElementById("todayDayWeather");
let todayMonthWeather = document.getElementById("todayMonthWeather");
let todayCountryWeather = document.getElementById("todayCountryWeather");
let todayDegreeWeather = document.getElementById("todayDegreeWeather");
let todayIconWeather = document.getElementById("todayIconWeather");
let todayStatusWeather = document.getElementById("todayStatusWeather");
let todayUmbrealCountWeather = document.getElementById("todayUmbrealCountWeather");
let todayWindSpeadWeather = document.getElementById("todayWindSpeadWeather");
let todayNinSpeadWeather = document.getElementById("todayNinSpeadWeather");

let tomorrowWeather = document.getElementById("tomorrowWeather");
let tomorrowDayWeather = document.getElementById("tomorrowDayWeather");
let tomorrowMonthWeather = document.getElementById("tomorrowMonthWeather");
let tomorrowCountryWeather = document.getElementById("tomorrowCountryWeather");
let tomorrowDegreeWeather = document.getElementById("tomorrowDegreeWeather");
let tomorrowIconWeather = document.getElementById("tomorrowIconWeather");
let tomorrowStatusWeather = document.getElementById("tomorrowStatusWeather");
let tomorrowUmbrealWeather = document.getElementById("tomorrowUmbrealWeather");
let tomorrowUmbrealCountWeather = document.getElementById("tomorrowUmbrealCountWeather");
let tomorrowWindSpeadWeather = document.getElementById("tomorrowWindSpeadWeather");
let tomorrowNinWeather = document.getElementById("tomorrowNinWeather");
let tomorrowNinSpeadWeather = document.getElementById("tomorrowNinSpeadWeather");
// console.log(tomorrowIconWeather)

let afterTomorrowWeather = document.getElementById("afterTomorrowWeather");
let afterTomorrowDayWeather = document.getElementById("afterTomorrowDayWeather");
let afterTomorrowMonthWeather = document.getElementById("afterTomorrowMonthWeather");
let afterTomorrowCountryWeather = document.getElementById("afterTomorrowCountryWeather");
let afterTomorrowDegreeWeather = document.getElementById("afterTomorrowDegreeWeather");
let afterTomorrowIconWeather = document.getElementById("afterTomorrowIconWeather");
let afterTomorrowStatusWeather = document.getElementById("afterTomorrowStatusWeather");
let afterTomorrowUmbrealWeather = document.getElementById("afterTomorrowUmbrealWeather");
let afterTomorrowUmbrealCountWeather = document.getElementById("afterTomorrowUmbrealCountWeather");
let afterTomorrowWindSpeadWeather = document.getElementById("afterTomorrowWindSpeadWeather");
let afterTomorrowNinWeather = document.getElementById("afterTomorrowNinWeather");
let afterTomorrowNinSpeadWeather = document.getElementById("afterTomorrowNinSpeadWeather");


let searchWeather = document.getElementById("searchWeather")

// console.log(searchWeather )
let dateLine = new Date();
console.log(dateLine.getDate())
console.log(dateLine.toLocaleDateString("en-us",{weekday:"long"}))
console.log(dateLine.toLocaleDateString("en-us",{month:"long"}))


async function getNews(country) {
    let apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9d977af487b44d3593190115241501&q=${country}&days=7`);
    let finallyApi  = await apiResponse.json();
    return finallyApi;
}

function displayTodayWeather(data) {

    todayWeather.innerHTML = dateLine.toLocaleDateString("en-us",{weekday:"long"})
    todayDayWeather.innerHTML=dateLine.getDate(); 
    todayMonthWeather.innerHTML= dateLine.toLocaleDateString("en-us",{month:"long"})
    
    todayCountryWeather.innerHTML = data.location.name;
    todayDegreeWeather.innerHTML = data.current.temp_c;
    todayIconWeather.setAttribute("src",data.current.condition.icon);
    todayStatusWeather.innerHTML=data.current.condition.text;
    todayUmbrealCountWeather.innerHTML = data.current.humidity+"%";
    todayWindSpeadWeather.innerHTML = data.current.wind_kph+"km/h";
    todayNinSpeadWeather.innerHTML = data.current.wind_dir;
}
function displayTomorrowWeather(data) {
    let forecastData= data.forecast.forecastday;
    let dateNext=new Date(forecastData[1].date)
    tomorrowWeather.innerHTML = dateNext.toLocaleDateString("en-us",{weekday:"long"})
    tomorrowDayWeather.innerHTML=dateNext.getDate(); 
    tomorrowMonthWeather.innerHTML= dateNext.toLocaleDateString("en-us",{month:"long"})
    tomorrowCountryWeather.innerHTML = data.location.name;
    tomorrowDegreeWeather.innerHTML = forecastData[1].hour[0].temp_c;
    tomorrowIconWeather.setAttribute("src",forecastData[1].day.condition.icon);
    tomorrowStatusWeather.innerHTML=forecastData[1].day.condition.text;
    tomorrowUmbrealCountWeather.innerHTML = forecastData[1].hour[0].humidity+"%";
    tomorrowWindSpeadWeather.innerHTML = forecastData[1].hour[0].wind_kph+"km/h";
    tomorrowNinSpeadWeather.innerHTML = forecastData[1].hour[0].wind_dir;
}
function displayAfterTomorrowWeather(data) {
    let forecastDataTwo= data.forecast.forecastday;
    
    let dateAfter=new Date(forecastDataTwo[2].date)
    afterTomorrowWeather.innerHTML = dateAfter.toLocaleDateString("en-us",{weekday:"long"})
    afterTomorrowDayWeather.innerHTML=dateAfter.getDate(); 
    afterTomorrowMonthWeather.innerHTML= dateAfter.toLocaleDateString("en-us",{month:"long"})
    
    // console.log(forecastDataTwo[2].date)
    afterTomorrowCountryWeather.innerHTML = data.location.name;
    afterTomorrowDegreeWeather.innerHTML = forecastDataTwo[2].hour[0].temp_c;
    afterTomorrowIconWeather.setAttribute("src",forecastDataTwo[2].day.condition.icon);
    afterTomorrowStatusWeather.innerHTML=forecastDataTwo[2].day.condition.text;
    afterTomorrowUmbrealCountWeather.innerHTML = forecastDataTwo[2].hour[0].humidity+"%";
    afterTomorrowWindSpeadWeather.innerHTML = forecastDataTwo[2].hour[0].wind_kph+"km/h";
    afterTomorrowNinSpeadWeather.innerHTML = forecastDataTwo[2].hour[0].wind_dir;
}

async function startApp(city="cairo") {
    let weatherData = await getNews(city);
    displayTodayWeather(weatherData)
    displayTomorrowWeather(weatherData)
    displayAfterTomorrowWeather(weatherData)
}



console.log(searchWeather)
searchWeather.addEventListener("input",function () {
      
    startApp(searchWeather.value)
    // startApp(buttonSearch.value)
})
