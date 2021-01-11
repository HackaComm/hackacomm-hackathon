const locations = [
  { "title":"Dows Lake","lat": 45.39380, "lng": -75.70127, "row1":"<tr>"+"<td>Manav</td>"+"<td>Red</td>"+"<td>07/01/21</td>"+"</tr>" ,"row2":"<tr>"+"<td>Derek</td>"+"<td>yellow</td>"+"<td>07/01/21</td>"+"</tr>","row3":"<tr>"+"<td>Sam</td>"+"<td>Orange</td>"+"<td>07/01/21</td>"+"</tr>"  },
  { "title":"Mud Lake","lat": 45.37203, "lng": -75.79451 ,"row1":"<tr>"+"<td>Manav</td>"+"<td>Red</td>"+"<td>07/01/21</td>"+"</tr>" ,"row2":"<tr>"+"<td>Derek</td>"+"<td>yellow</td>"+"<td>07/01/21</td>"+"</tr>","row3":"<tr>"+"<td>Sam</td>"+"<td>Orange</td>"+"<td>07/01/21</td>"+"</tr>"  },
  { "title":"Brewer Pond","lat": 45.38567, "lng": -75.68678 ,"row1":"<tr>"+"<td>Manav</td>"+"<td>Red</td>"+"<td>07/01/21</td>"+"</tr>" ,"row2":"<tr>"+"<td>Derek</td>"+"<td>yellow</td>"+"<td>07/01/21</td>"+"</tr>","row3":"<tr>"+"<td>Sam</td>"+"<td>Orange</td>"+"<td>07/01/21</td>"+"</tr>"  },
  { "title":"Mckay Lake","lat": 45.45226, "lng": -75.67024 ,"row1":"<tr>"+"<td>Manav</td>"+"<td>Red</td>"+"<td>07/01/21</td>"+"</tr>" ,"row2":"<tr>"+"<td>Derek</td>"+"<td>yellow</td>"+"<td>07/01/21</td>"+"</tr>","row3":"<tr>"+"<td>Sam</td>"+"<td>Orange</td>"+"<td>07/01/21</td>"+"</tr>"  },
  { "title":"The Pond","lat": 45.45142, "lng": -75.66665 ,"row1":"<tr>"+"<td>Manav</td>"+"<td>Red</td>"+"<td>07/01/21</td>"+"</tr>" ,"row2":"<tr>"+"<td>Derek</td>"+"<td>yellow</td>"+"<td>07/01/21</td>"+"</tr>","row3":"<tr>"+"<td>Sam</td>"+"<td>Orange</td>"+"<td>07/01/21</td>"+"</tr>"  },
  { "title":"Lans End","lat": 45.34663, "lng": -75.84543 ,"row1":"<tr>"+"<td>Manav</td>"+"<td>Red</td>"+"<td>07/01/21</td>"+"</tr>" ,"row2":"<tr>"+"<td>Derek</td>"+"<td>yellow</td>"+"<td>07/01/21</td>"+"</tr>","row3":"<tr>"+"<td>Sam</td>"+"<td>Orange</td>"+"<td>07/01/21</td>"+"</tr>"  },
  { "title":"Reflection Point" ,"lat": 45.35112, "lng": -75.85073 ,"row1":"<tr>"+"<td>Manav</td>"+"<td>Red</td>"+"<td>07/01/21</td>"+"</tr>" ,"row2":"<tr>"+"<td>Derek</td>"+"<td>yellow</td>"+"<td>07/01/21</td>"+"</tr>","row3":"<tr>"+"<td>Sam</td>"+"<td>Orange</td>"+"<td>07/01/21</td>"+"</tr>"  },
  { "title":"Beaver Pond","lat": 45.33228, "lng": -75.91980 ,"row1":"<tr>"+"<td>Manav</td>"+"<td>Red</td>"+"<td>07/01/21</td>"+"</tr>" ,"row2":"<tr>"+"<td>Derek</td>"+"<td>yellow</td>"+"<td>07/01/21</td>"+"</tr>","row3":"<tr>"+"<td>Sam</td>"+"<td>Orange</td>"+"<td>07/01/21</td>"+"</tr>"  },
  { "title":"Poole Creek Holding","lat": 45.25783, "lng": -75.93189 ,"row1":"<tr>"+"<td>Manav</td>"+"<td>Red</td>"+"<td>07/01/21</td>"+"</tr>" ,"row2":"<tr>"+"<td>Derek</td>"+"<td>yellow</td>"+"<td>07/01/21</td>"+"</tr>","row3":"<tr>"+"<td>Sam</td>"+"<td>Orange</td>"+"<td>07/01/21</td>"+"</tr>"  },
  { "title":"Timbermere Holding Pond","lat": 45.27025, "lng": -75.94532 ,"row1":"<tr>"+"<td>Manav</td>"+"<td>Red</td>"+"<td>07/01/21</td>"+"</tr>" ,"row2":"<tr>"+"<td>Derek</td>"+"<td>yellow</td>"+"<td>07/01/21</td>"+"</tr>","row3":"<tr>"+"<td>Sam</td>"+"<td>Orange</td>"+"<td>07/01/21</td>"+"</tr>"  },
  { "title":"Arbour Pond","lat": 45.35262, "lng": -75.94747 ,"row1":"<tr>"+"<td>Manav</td>"+"<td>Red</td>"+"<td>07/01/21</td>"+"</tr>" ,"row2":"<tr>"+"<td>Derek</td>"+"<td>yellow</td>"+"<td>07/01/21</td>"+"</tr>","row3":"<tr>"+"<td>Sam</td>"+"<td>Orange</td>"+"<td>07/01/21</td>"+"</tr>"  },
  { "title":"Mud Pond","lat": 45.39714, "lng": -75.94098 ,"row1":"<tr>"+"<td>Manav</td>"+"<td>Red</td>"+"<td>07/01/21</td>"+"</tr>" ,"row2":"<tr>"+"<td>Derek</td>"+"<td>yellow</td>"+"<td>07/01/21</td>"+"</tr>","row3":"<tr>"+"<td>Sam</td>"+"<td>Orange</td>"+"<td>07/01/21</td>"+"</tr>"  },
  { "title":"SouthWood Lake","lat": 45.25983, "lng": -75.58426 ,"row1":"<tr>"+"<td>Manav</td>"+"<td>Red</td>"+"<td>07/01/21</td>"+"</tr>" ,"row2":"<tr>"+"<td>Derek</td>"+"<td>yellow</td>"+"<td>07/01/21</td>"+"</tr>","row3":"<tr>"+"<td>Sam</td>"+"<td>Orange</td>"+"<td>07/01/21</td>"+"</tr>"  },
  { "title":"Lake Madawaska","lat": 45.40644, "lng": -76.34181 ,"row1":"<tr>"+"<td>Manav</td>"+"<td>Red</td>"+"<td>07/01/21</td>"+"</tr>" ,"row2":"<tr>"+"<td>Derek</td>"+"<td>yellow</td>"+"<td>07/01/21</td>"+"</tr>","row3":"<tr>"+"<td>Sam</td>"+"<td>Orange</td>"+"<td>07/01/21</td>"+"</tr>"  },

];
//const lakes = [ "Dows Lake", "Mud Lake", "Brewer Pond", "Mckay Lake", "The Pond", "Lans End", "Reflection Point" , "Beaver Pond", "Poole Creek Holding", "Timbermere Holding Pond", "Arbour Pond", "Southwood Lake", "Lake Madawaska" ];

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 45.37979, lng: -75.71163 },
  });

  var infoWindow = new google.maps.InfoWindow();
  var markerArray = [];
  for(var i=0; i<locations.length; i++){
  	var data = locations[i];
  	var myLatlng = new google.maps.LatLng(data.lat, data.lng);
  	var marker = new google.maps.Marker({
  		position: myLatlng,
  		map: map,
  		title: data.title

  	});
  	(function(marker,data){
  		google.maps.event.addListener(marker, "click", function (e) {
  			infoWindow.setContent("<div style = 'width:200px;min-height:40px'>"+"<h3>"+data.title+"</h3>"+"<p>Latest Test Results</p>"+"<table>"+"<tr>"+"<th>Name</th>"+"<th>Result</th>"+"<th>Date</th>"+"</tr>" +data.row1+data.row2+data.row3+"</table>"+"</div>" );

  			infoWindow.open(map, marker);
  		});
  	})(marker, data);
  	markerArray.push(marker);

  }
  new MarkerClusterer(map, markerArray, {
  	imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
  

  //for(var i = 0; i < locations.length; i++){
  	//var x = lakes[i].toString()
  	//infowindow = new google.maps.InfoWindow({
  	//	content: " "
  	//});
  	//marker.infowindow
  	//google.maps.event.addListener(markers[i], 'click', function() {
  		//infowindow.setContent('<p>' + x + '</p>'  +
      //'<button onclick="myFunction()">Click me</button>');
  		//infowindow.open(map, this);
  	//});
  	//google.maps.event.trigger(markers[i], 'click');

  }
  
  //google.maps.event.addDomListener(window, "click", initMap);
  //function myFunction() {
 // 	infowindow.setContent('<div style="background-color: green">' + infowindow.getContent() + "</div>");
//}

//infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" </div>" +
  				//"<p>"+ data.row1 + "</p>"+
  				//"<p>"+ data.row2 +"</p>");
  


//}


