let key = "44c186ac7c279f3d5bf54f63cc9e9666";

let container = document.getElementById('container')

let map = document.getElementById('gmap_canvas')


async function getWeatherData(){
     try{
         let city = document.getElementById('city').value;
          let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${key}&units=metric`)

          let data = await res.json()

          console.log(data)
          getdata(data)
     }catch(err){
        console.log('error')
        alert('check spelling')
        map.src="";
     }
}

function getdata(data){
    let d=data.city;
    console.log(d)
    container.innerHTML=`<table>
    <tr>
        <td>${d.name}</td>
    </tr>
    <tr>
        <td><img src=" http://openweathermap.org/img/wn/10d@4x.png" alt=""></td>
        <th>Latitude :${d.coord.lat}</th>
    </tr>
    <tr>
        <td>Longitude :</td>
        <td>${d.coord.lon}</td>
    </tr>
    <tr>
        <td>country :</td>
        <td> ${d.country}</td>
    </tr>
 </table>`; 
 map.src = `https://maps.google.com/maps?q=${d.name}&t=&z=13&ie=UTF8&iwloc=&output=embed` 
   
 
  let arr = data.list;
  document.querySelector('.another').innerHTML=""
   arr.map(function(elem){
          
        let box = document.createElement('div')
        
        let date = document.createElement('h2')
        date.textContent=`date/time :${elem.dt_txt}`
        
        let image = document.createElement('img')
        image.src='http://openweathermap.org/img/wn/10d@2x.png'

        let temp = document.createElement('h3')
        temp.textContent=`temp :${elem.main.temp} C`

        let des = document.createElement('h3')
        des.textContent=elem.weather[0].description;

        let wind = document.createElement('h3')
        wind.textContent=`wind speen:${elem.wind.speed} and deg:${elem.wind.deg}`

        box.append(date,image,temp,des,wind)

        document.querySelector('.another').append(box)

   })
}


