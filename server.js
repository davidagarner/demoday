
fetch(`https://api.crimeometer.com/v1/incidents/raw-data?lat=lat&lon=lon&distance=distance&datetime_ini=datetime_ini&datetime_end=datetime_end&page=page
`)
 
.then(res => res.json()) 
.then(response => {
  console.log(response)
  var iconcode = response.weather[0].icon;
})
.catch(err => {
  console.log(`error ${err}`)
  alert("sorry, there are no results for your search")
});