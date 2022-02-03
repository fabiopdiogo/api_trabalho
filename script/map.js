function initMap() {
  const origin = {lat:-19.89033302336409, lng: -43.80103894819641};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: origin,
  });
<<<<<<< HEAD
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent("Location found.");
        infoWindow.open(map);
        map.setCenter(pos);
      },
      () => {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  }else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  new ClickEventHandler(map, origin);  

  const tourStops = [
    [{ lat: -19.809310670494128, lng: -43.875454924852136 }, "Inovar Ambiental Coleta, Transporte e Tratamento de Resíduos"],
    [{ lat: -19.84597450970574, lng: -43.87978540781596}, "Emile Coleta de Lixo Eletronico MG"],
    [{ lat: -19.87421347285986, lng: -43.90259261807454}, "EcoTech Coleta de Lixo Eletronico"],
    [{ lat: -19.887788107203463, lng: -43.91009878854517}, "SOS GREEN Gestão de Descarte Eletrônico"],
    [{ lat: -19.8503192928919, lng: -43.91529536810176}, "Reciclar Minas"],
    [{ lat: -19.9123237547924, lng: -43.91952236074851 }, "Electra Reciclo"],
    [{ lat: -19.945245636643637, lng: -43.922955588216226}, "E-MILE Reciclagem de Lixo Eletrônico MG"],
    [{ lat: -19.91167815915478, lng: -43.931881979632294}, "Projeto Pro Verde - Lixo Eletrônico"],
    [{ lat: -19.93846816288682, lng: -43.93943508006127}, "MAB Reciclagen de Eletronicos Ltda"],
    [{ lat: -19.92620342352758, lng: -43.95316798993214}, "Ecoponto E-MILE de Lixo Eletrônico"],
    [{ lat: -19.91361493816237, lng: -43.95831783113371 }, "Ecoponto E-MILE Descarte Lixo Eletrônico- Lithium Informática"],
    [{ lat: -19.87681208418735, lng: -43.99436672124278}, "Ponto de Coleta de Lixo Eletrônico - PROPAM"],
    [{ lat: -19.947182005008468, lng: -43.994023398538815}, "BH Recicla"],
    [{ lat: -19.904576433968735, lng: -44.00054653072748}, "Ampla Minas Gestão Ambiental Ltda"],
    [{ lat: -19.94330924597336, lng: -44.005353049182276}, "M  G Recicla Reciclagem de Lixo Eletrônico"],
    [{ lat: -19.963317478237315, lng: -44.01393611785157}, "Reciclando BH - Coleta De Lixo eletrônico Sucata Em BH"],
    [{ lat: -19.956863486922305, lng:-44.03556545093386 }, "BH Recicla Reciclagem de Lixo Eletrônico e Outras Sucatas"],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,    
      title: `${title}`,      
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}

=======

  new ClickEventHandler(map, origin);

  const tourStops = [
    [{ lat: -19.809310670494128, lng: -43.875454924852136 }, "Boynton Pass"],
    [{ lat: -19.84597450970574, lng: -43.87978540781596}, "Airport Mesa"],
    [{ lat: -19.87421347285986, lng: -43.90259261807454}, "Chapel of the Holy Cross"],
    [{ lat: -19.887788107203463, lng: -43.91009878854517}, "Red Rock Crossing"],
    [{ lat: -19.8503192928919, lng: -43.91529536810176}, "Bell Rock"],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${title}`,      
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}

>>>>>>> e42969bad379fe9501f2ac671896977435bc3e95
function isIconMouseEvent(e) {
  return "placeId" in e;
}

class ClickEventHandler {
  origin;
  map;
<<<<<<< HEAD
  tourStops;
=======
>>>>>>> e42969bad379fe9501f2ac671896977435bc3e95
  directionsService;
  directionsRenderer;
  placesService;
  infowindow;
  infowindowContent;
  constructor(map, origin) {
<<<<<<< HEAD
     this.origin = origin;
=======
    this.origin = origin;
>>>>>>> e42969bad379fe9501f2ac671896977435bc3e95
    this.map = map;
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(map);
    this.placesService = new google.maps.places.PlacesService(map);
    this.infowindow = new google.maps.InfoWindow();
    this.infowindowContent = document.getElementById("infowindow-content");
    this.infowindow.setContent(this.infowindowContent);
    // Listen for clicks on the map.
    this.map.addListener("click", this.handleClick.bind(this));
  }
  handleClick(event) {
    console.log("You clicked on: " + event.latLng);
    // If the event has a placeId, use it.
    if (isIconMouseEvent(event)) {
      console.log("You clicked on place:" + event.placeId);
      // Calling e.stop() on the event prevents the default info window from
      // showing.
      // If you call stop here when there is no placeId you will prevent some
      // other map click event handlers from receiving the event.
      event.stop();
      if (event.placeId) {
        this.calculateAndDisplayRoute(event.placeId);
        this.getPlaceInformation(event.placeId);
      }
    }
  }
  calculateAndDisplayRoute(placeId) {
    const me = this;

    this.directionsService
      .route({
        origin: this.origin,
        destination: { placeId: placeId },
        travelMode: google.maps.TravelMode.WALKING,
      })
      .then((response) => {
        me.directionsRenderer.setDirections(response);
      })
      .catch((e) => window.alert("Directions request failed due to " + status));
  }
  getPlaceInformation(placeId) {
    const me = this;

    this.placesService.getDetails({ placeId: placeId }, (place, status) => {
      if (
        status === "OK" &&
        place &&
        place.geometry &&
        place.geometry.location
      ) {
        me.infowindow.close();
        me.infowindow.setPosition(place.geometry.location);
        me.infowindowContent.children["place-icon"].src = place.icon;
        me.infowindowContent.children["place-name"].textContent = place.name;
        me.infowindowContent.children["place-id"].textContent = place.place_id;
        me.infowindowContent.children["place-address"].textContent =
          place.formatted_address;
        me.infowindow.open(me.map);
      }
    });
  }
}