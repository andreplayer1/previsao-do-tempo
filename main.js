const key = "cebcd482eda57fa9a6714c1c2ba91885"

function showData(dados) {
    console.log(dados)
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".time").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".text-prev").innerHTML = dados.weather[0].description
    document.querySelector(".moisture").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".image-prev").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function searchCity(city) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)
    .then(response => response.json())
    
    showData(dados)
    
}

function clickButton() {
    const city = document.querySelector(".input-city").value

    searchCity(city)
}