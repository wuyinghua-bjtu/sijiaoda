window.onload = function(){

    // 改变当前城市
    var currentCity = document.getElementsByClassName("current-city");
    var currentCity_a = currentCity[0].getElementsByTagName("a");
    current_city_name = currentCity_a[0].innerHTML;

    var changeCity = document.getElementsByClassName("city-list")[0].getElementsByTagName("a");
    for(i = 0; i < changeCity.length; i++) {
        console.log(changeCity[i]);
        changeCity[i].onclick = function() {
            var changeCityName = this.innerHTML;
            document.getElementById("current-city-a").innerHTML = changeCityName;
        };
    }
}