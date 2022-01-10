function initMap(){
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
        draggable: false
    });
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 7,
        center: {lat: 41.85, lng: -87.65},
    });



    directionsRenderer.setMap(map);

    directionsService.route({
        origin: 'Toronto, Canadá',
        destination: 'Nova Iorque, Nova Iorque',
        waypoints: [
            {location: 'Ottawa, Canadá', stopover: true}
        ],
        travelMode: google.maps.TravelMode.DRIVING
    }).then(response =>{
        console.log({response});
        directionsRenderer.setDirections(response);

    }).catch(err =>{
        console.log({err});
    });
}