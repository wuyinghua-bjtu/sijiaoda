window.onload = function () {
  const changeCity = document.getElementsByClassName('city-list')[0].getElementsByTagName('a')
  for (let i = 0; i < changeCity.length; i++) {
    console.log(changeCity[i])
    changeCity[i].onclick = function () {
      var changeCityName = this.innerHTML
      document.getElementById('current-city-a').innerHTML = changeCityName
    }
  }
}
