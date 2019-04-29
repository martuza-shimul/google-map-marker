
// var btn = document.getElementById("btn");

// btn.addEventListener("click", function(){
//   var ourRequest = new XMLHttpRequest();
//   ourRequest.open('GET', 'http://data.goteborg.se/AirQualityService/v1.0/LatestMeasurement/dc858352-3a0b-4ab0-aa45-14e53cef5941?format=json');
//   ourRequest.onload = function(){
//     var ourData = JSON.parse(ourRequest.responseText);
//     console.log(ourData);
//   };

//   ourRequest.send();
// });


$(function (){

    var $NO2 = $('#NO2');  
    $.ajax({
      type:'GET',
      url: 'http://data.goteborg.se/AirQualityService/v1.0/LatestMeasurement/dc858352-3a0b-4ab0-aa45-14e53cef5941?format=json',
      dataType: 'json',
      success: function(data){
        // console.log(data);

        $("#NO2").append('<li> Value '+  data.AirQuality.NO2.Value  +'</li>');

        // $.each(data, function(i, order){
        //   $data.append(data.AirQuality);
        // });
      }
    });
  });


