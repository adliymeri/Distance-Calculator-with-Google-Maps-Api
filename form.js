// Autocomplete mode

let autocomplete;
let originMarker;
let destinationMarker;
let currentTravelMode = 'DRIVING';
let distance;
let numericDistance;
let distanceInInt;
let priceRange = [2.3, 1.5, 1.4, 1.35, 1.3, 1.25, 1.20, 1.15]
let price
let distanceValue;
let directionsService;
let directionsRenderer;
let autocompleteAll = [];
let destinationMarkerAll;
let markersArray = [];
let distanceValueAll;
let distanceAll;
let numericDistanceAll;
let distanceInIntAll;
let markersArrayPrevious;
let markersArrayCurrent;
let totalDistance;
let distanceValueTotal;
let distanceTotal;
let numericDistanceTotal
let distanceInIntTotal;
let finalDistance;
let distanceParts = [];
let directionsServiceAll;
let directionsRendererAll;
let directionsServiceTotal;
let directionsRendererTotal;
let waypoints = [];
let renderersArray = [];

//Only one checkbox checked

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

for (const checkbox of checkboxes) {

 
  checkbox.addEventListener('change', function() {

    if (fullTruckLoad.checked) {
        let fullInfo = document.getElementById('full-info')
        fullInfo.textContent = 'Automezzo lunghezza 13,60 mtl, larghezza 2,45 mt e altezza 2,70 mt con portata massima di 30.000 kg.'
        let lessInfo = document.getElementById('less-info')
        lessInfo.style.display = 'none'
    }

    if (!fullTruckLoad.checked) {
        let fullInfo = document.getElementById('full-info')
        fullInfo.textContent = 'Il trasporto a carico completo, conociuto con l’acronimo FTL (full truck load), consiste in un trasporto di materiale su strada, in cui il camion è caricato completamente in tutta la sua portata da un unico committente.'
        let lessInfo = document.getElementById('less-info')
        lessInfo.style.display = 'flex'
    }

    if (lessTruckLoad.checked) {
        let lessInfo = document.getElementById('less-info')
        lessInfo.textContent = 'Automezzo lunghezza 7,30 mtl, larghezza 2,45 mt e altezza 2,70 mt e con portata massima di 14.000 kg'
        let fullInfo = document.getElementById('full-info')
        fullInfo.style.display = 'none'
    }

    if (!lessTruckLoad.checked) {
        let lessInfo = document.getElementById('less-info')
        lessInfo.textContent = 'll trasporto a carico parziale è una modalità di spedizione in cui la merce viene abbinata ad altri carichi, in modo da ottimizzare il trasporto e ridurre i costi della spedizione.'
        let fullInfo = document.getElementById('full-info')
        fullInfo.style.display = 'flex'
    }

    
    for (const otherCheckbox of checkboxes) {

        if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
            otherCheckbox.style.display = 'none';
        }

        if (otherCheckbox.checked && otherCheckbox.name === "caricoParziale") {
            priceRange = priceRange.map(priceitem => priceitem * 0.75);
        }
        
    }
  })
};


//change the text of the info below the checkbox





// The multi step form 
const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];
let currentStep = formSteps.findIndex(step => {
        return step.classList.contains("active")
    })
    if (currentStep < 0) {
       currentStep = 0
       showCurrentStep()
    }




const checkGroupMerch = document.getElementsByClassName("check-group")[0];
checkGroupMerch.style.display = 'none';
const firstSixInputs =  document.querySelectorAll("input");
const selectedInputs = Array.from(firstSixInputs).slice(2, 7);
const textareaElement = document.getElementById("typeOfMerch");
let inputOne = document.getElementById('PalletQuantity');
let inputTwo = document.getElementById('totalQuantity');


document.getElementById("MerchType").addEventListener("change", function() {
    let selectedOption = this.value;
    let balancedDiv = document.getElementById("ifBalanced");
    if (selectedOption === "Merce bancalata") {
        balancedDiv.style.display = "flex";
        checkGroupMerch.style.display = 'none';
        textareaElement.value = "";
      
    } 
    
    else if (selectedOption === "Merce non bancalata") {
        balancedDiv.style.display = "none";
        dimensions.style.display = 'none';
        checkGroupMerch.style.display = 'flex';
       
      
        for (let i = 0; i < selectedInputs.length; i++) {
            selectedInputs[i].value = "";
        }
     
    }

    else {
        balancedDiv.style.display = "flex";
    }
  });

 
  
multiStepForm.addEventListener("click", e => {
    let incrementor
    
    if (e.target.matches("[data-next]")) {
        incrementor = 1
        if (!fullTruckLoad.checked && !lessTruckLoad.checked) {
            document.getElementById('checkErrorMessage').innerHTML = "Seleziona almeno un'opzione!"
            return;
        }
    } else if (e.target.matches("[data-previous]")) {
        incrementor = -1
        
    }
    if (incrementor == null) return

   

const inputs = [...formSteps[currentStep].querySelectorAll("input")];
const textareas = [...formSteps[currentStep].querySelectorAll("textarea")];
const validTextAreas = textareas.every(textarea => textarea.reportValidity());
const allValid = inputs.every(input => input.reportValidity());




if (allValid || validTextAreas && currentStep === 0 || e.target.matches("[data-previous]")) {
    currentStep += incrementor
    showCurrentStep()
}

});


let nipt = document.getElementById('nipt');

nipt.addEventListener("input", function() {
    if (nipt.value.length !== 11) {
        
        nipt.setCustomValidity("Deve essere lungo 11 caratteri"); 
      } else {
        nipt.setCustomValidity("");
      }
});




function showCurrentStep() {
    formSteps.forEach((step, index) => {
      step.classList.toggle("active", index === currentStep)
    })
}


// show on-check-1 Div when any of the checkboxes are checked

const fullTruckLoad = document.getElementById("fullTruckLoad");

const checkDiv = document.getElementsByClassName("on-check-1")[0];

const checkOne = document.getElementsByClassName("check-1")[0];

const checkTwo = document.getElementsByClassName("check-2")[0];

const lessTruckLoad = document.getElementById("lessTruckLoad");




fullTruckLoad.addEventListener("change", function() {
    if (fullTruckLoad.checked === true) {
        
        checkTwo.style.display = 'none';
        checkDiv.classList.add("check-active");
        document.getElementById('checkErrorMessage').innerHTML = ""
    
    } else {
        
        checkDiv.classList.remove("check-active");
        checkTwo.style.display = 'flex';

    }
});

// show the rest of the inputs when "Merce bancalata is selected 
//and remove the inputs when "Merce non bancalata" is selected


  let dimensions = document.getElementById("dimensions");

  dimensions.style.display = 'none';

  let palletQuantity = document.getElementById("PalletQuantity");
  let widthSize = document.getElementById("widthSize");
  let heightSize = document.getElementById("heightSize");
  let lengthSize = document.getElementById("lengthSize");
  const selectedInputsTwo = Array.from(firstSixInputs).slice(4, 7);
  palletQuantity.addEventListener('input', function(){
    if (palletQuantity.value >= 1) {
        dimensions.style.display = 'flex'
        widthSize.required = true;
        heightSize.required = true;
        lengthSize.required = true;
    }
    else {
        dimensions.style.display = 'none'
        widthSize.removeAttribute("required");
        heightSize.removeAttribute("required");
        lengthSize.removeAttribute("required");
        for (let i = 0; i < selectedInputsTwo.length; i++) {
            selectedInputsTwo[i].value = "";
        }
        
    }
  })
if (palletQuantity.value > 1) {
    dimensions.style.display = 'flex'
}


lessTruckLoad.addEventListener("change", function() {
   if (lessTruckLoad.checked === true) {
        dimensions.style.display = 'none'
        checkOne.style.display = 'none';
        checkDiv.classList.add("check-active");
        document.getElementById('checkErrorMessage').innerHTML = ""
        inputTwo.max = 14000;
        inputTwo.placeholder = "Fino ad un massimo di 14.000 kg";
        inputTwo.oninvalid = function(event) {
            event.target.setCustomValidity("Il valore deve essere minore o uguale a 14000");
        };
        for (let i = 0; i < selectedInputs.length; i++) {
            selectedInputs[i].value = "";
        }
    } else {
        dimensions.style.display = 'none'
        checkDiv.classList.remove("check-active");
        checkOne.style.display = 'flex';
        inputTwo.max = 30000;
        inputTwo.placeholder = "Fino ad un massimo di 30.000 kg"
        inputTwo.oninvalid = function(event) {
            event.target.setCustomValidity("Il valore deve essere minore o uguale a 30000");
        };
        for (let i = 0; i < selectedInputs.length; i++) {
            selectedInputs[i].value = "";
        }
    }
});

// The map launch
        
function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('origin'),
        
        {
            
            fields: ['place_id', 'geometry', 'name']
        });
    autocompleteDestination = new google.maps.places.Autocomplete(
        document.getElementById('destination'),
        {
            
            fields: ['place_id', 'geometry', 'name']
        });
    
    
    
     var location = {
        lat: 40.000,
        lng: 79.000
     } 
     var options = {
        center: location,
        zoom: 9
     }  


  
     // The default map on home page
     map = new google.maps.Map(document.getElementById('map_container'), options)

   
     // Add a marker after input origin is completed
     autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        map.setCenter(place.geometry.location);
        map.setZoom(12);
        
        originMarker = new google.maps.Marker({
            position: place.geometry.location,
            title: place.name,
            map: map

        });

        

    // Remove distance and marker if input origin is empty

        const originInput = document.getElementById("origin");
        originInput.addEventListener("input",function() {
            if (this.value === "") {
                originMarker.setMap(null)
                originMarker = null
                document.getElementById("distance").value = "Km"
                directionsRenderer.setMap(null)
                document.getElementById("price").value = '€' 
            }
        });

        // Draw the route on the map

        if (destinationMarker) {
            directionsService = new google.maps.DirectionsService();
            directionsRenderer = new google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);
            
            const origin = originMarker.getPosition();
            const destination = destinationMarker.getPosition();
            
            directionsService.route({
                origin: origin,
                destination: destination,
                travelMode: "DRIVING",
                
            }, (response, status) => {
                if (status === 'OK') {
                    directionsRenderer.setDirections(response);
                } else {
                    console.error(`Error: ${status}`);
                }
            });


            let distanceMatrixService = new google.maps.DistanceMatrixService();
            distanceMatrixService.getDistanceMatrix({
                origins: [originMarker.getPosition()],
                destinations: [destinationMarker.getPosition()],
                travelMode: "DRIVING"
                
            }, (response, status) => {
                if (status === 'OK') {
                    distance = response.rows[0].elements[0].distance.text;
                    distanceValue = `${distance}`;
                    
                    document.getElementById("distance").value = distanceValue.replace("km","Km");
                    numericDistance = distance.replace(/[^\d.]/g,'');
                    distanceInInt = parseInt(numericDistance);
                    
                    
                    if (distanceInInt <= 166) {
                        price = 380;
                        document.getElementById('price').value = price + ' €'
                    }

                    else if (distanceInInt > 166 && distanceInInt <= 250) {
                        price = parseFloat(distanceInInt * priceRange[0]).toFixed(2);
                        document.getElementById('price').value = price + ' €'
                    }
                    else if (distanceInInt > 250 && distanceInInt <= 350) {
                            
                            price = parseFloat(distanceInInt * priceRange[1]).toFixed(2);
                            document.getElementById('price').value = price + ' €'
                        }
                    else if (distanceInInt > 350 && distanceInInt <= 450) {
                            
                            price = parseFloat(distanceInInt * priceRange[2]).toFixed(2);
                            document.getElementById('price').value = price + ' €'
                        }
                        else if (distanceInInt > 450 && distanceInInt <= 550) {
                        
                            price = parseFloat(distanceInInt * priceRange[3]).toFixed(2);
                            document.getElementById('price').value = price + ' €'
                        }
                        else if (distanceInInt > 550 && distanceInInt <= 650) {
                        
                            price = parseFloat(distanceInInt * priceRange[4]).toFixed(2);
                            document.getElementById('price').value = price + ' €'
                        }
                        else if (distanceInInt > 650 && distanceInInt <= 750) {
                            
                            price = parseFloat(distanceInInt * priceRange[5]).toFixed(2);
                            document.getElementById('price').value = price + ' €'
                        }
                        else if (distanceInInt > 750 && distanceInInt <= 850) {
                        
                            price = parseFloat(distanceInInt * priceRange[6]).toFixed(2);
                            document.getElementById('price').value = price + ' €'
                        }
                        else   {

                        

                        

                            price = (distanceInInt * priceRange[7]).toFixed(2);
                            
                            document.getElementById('price').value = price + ' €'
                        }
                    
                } 

                
                
                else {
                    console.error(`Error: ${status}`);
                }

                
                
            });
        }

       
        
        
    });


     // Add a marker after input destination is completed
     autocompleteDestination.addListener("place_changed", () => {
        const place = autocompleteDestination.getPlace();
        map.setCenter(place.geometry.location);
        map.setZoom(12);
        destinationMarker = new google.maps.Marker({
            position: place.geometry.location,
            title: place.name,
            map: map
        });

        

        // Center the map to include both markers

        if(originMarker && destinationMarker) {
            let bounds = new google.maps.LatLngBounds();
            bounds.extend(originMarker.getPosition());
            bounds.extend(destinationMarker.getPosition());
            map.fitBounds(bounds);
        }

        // Remove marker and distance if input distance is empty
        const destinationInput = document.getElementById("destination");
            destinationInput.addEventListener("input",function() {
                if (this.value === "") {
                    destinationMarker.setMap(null)
                    destinationMarker = null
                    document.getElementById("distance").value = "Km"
                    document.getElementById("price").value = '€' 
                    directionsRenderer.setMap(null)
                    
                }
        });

        // Show the distance in km and price
        let distanceMatrixService = new google.maps.DistanceMatrixService();
            distanceMatrixService.getDistanceMatrix({
                origins: [originMarker.getPosition()],
                destinations: [destinationMarker.getPosition()],
                travelMode: "DRIVING"
                
            }, (response, status) => {
                if (status === 'OK') {
                    distance = response.rows[0].elements[0].distance.text;
                    distanceValue = `${distance}`;
                    
                    document.getElementById("distance").value = distanceValue.replace("km","Km");
                    numericDistance = distance.replace(/[^\d.]/g,'');
                    distanceInInt = parseInt(numericDistance);
                    
                    
                    if (distanceInInt <= 166) {
                        price = 380;
                        document.getElementById('price').value = price + ' €'
                    }

                    else if (distanceInInt > 166 && distanceInInt <= 250) {
                        price = parseFloat(distanceInInt * priceRange[0]).toFixed(2);
                        document.getElementById('price').value = price + ' €'
                    }
                   else if (distanceInInt > 250 && distanceInInt <= 350) {
                        
                        price = parseFloat(distanceInInt * priceRange[1]).toFixed(2);
                        document.getElementById('price').value = price + ' €'
                    }
                   else if (distanceInInt > 350 && distanceInInt <= 450) {
                        
                        price = parseFloat(distanceInInt * priceRange[2]).toFixed(2);
                        document.getElementById('price').value = price + ' €'
                    }
                    else if (distanceInInt > 450 && distanceInInt <= 550) {
                       
                        price = parseFloat(distanceInInt * priceRange[3]).toFixed(2);
                        document.getElementById('price').value = price + ' €'
                    }
                    else if (distanceInInt > 550 && distanceInInt <= 650) {
                       
                        price = parseFloat(distanceInInt * priceRange[4]).toFixed(2);
                        document.getElementById('price').value = price + ' €'
                    }
                    else if (distanceInInt > 650 && distanceInInt <= 750) {
                        
                        price = parseFloat(distanceInInt * priceRange[5]).toFixed(2);
                        document.getElementById('price').value = price + ' €'
                    }
                    else if (distanceInInt > 750 && distanceInInt <= 850) {
                       
                        price = parseFloat(distanceInInt * priceRange[6]).toFixed(2);
                        document.getElementById('price').value = price + ' €'
                    }
                    else   {

                     

                       

                        price = (distanceInInt * priceRange[7]).toFixed(2);
                        
                        document.getElementById('price').value = price + ' €'
                    }
                    
                } 

                
                
                else {
                    console.error(`Error: ${status}`);
                }

                
                
            });


            
        // Draw the route on the map

            directionsService = new google.maps.DirectionsService();
            directionsRenderer = new google.maps.DirectionsRenderer();
            renderersArray.push(directionsRenderer);
            directionsRenderer.setMap(map);
            
            const origin = originMarker.getPosition();
            const destination = destinationMarker.getPosition();
            
            directionsService.route({
                origin: origin,
                destination: destination,
                travelMode: "DRIVING",
                
            }, (response, status) => {
                if (status === 'OK') {
                    directionsRenderer.setDirections(response);
                } else {
                    console.error(`Error: ${status}`);
                }
            });
        

    });

    const addButton = document.getElementById('add-button')
    const formGroup = document.getElementById('formGroup');
    const buttonAddRemove = document.getElementsByClassName("add")[0]
    let inputArray = [];
    let removeButton;

    
        addButton.addEventListener("mousedown", function() {
        addButton.classList.add("button-active");
        });
        
        addButton.addEventListener("mouseup", function() {
        addButton.classList.remove("button-active");
        });
    
        let count = 1
        
    const maxInputs = 4;
    let inputCount = 0;

    addButton.addEventListener('click', function() {
        
        if (inputCount < maxInputs) {
            const inputs = [...formSteps[currentStep].querySelectorAll("input")]
            const allValid = inputs.every(input => input.reportValidity())
            
            

            
            // Create a new input element
            inputCount++;
            count++
            let input = document.createElement('input');
            input.id = 'destination-' + count;
            input.type = "text"
            input.placeholder = "inserisci indirizzo";
            input.name = 'nuovoLuogoScarico[]';
            input.className = 'new-input'
            input.setAttribute("required", "true");
            inputArray.push(input);
            

            // Append the destination input to the form-group div
            formGroup.appendChild(input);
        
            
            createButton();

        }
        else {
            alert('Hai raggiunto il numero massimo di punti di riconsegna');
        }

        
        
        // the function to add the remove button
        function createButton() {

            if (!removeButton) {
                removeButton = document.createElement('button');
                removeButton.id = 'remove-button'
                removeButton.type = 'button'
                removeButton.className = 'style-button'
                removeButton.textContent = '-'
                // Append the remove button to the form-group div
                buttonAddRemove.appendChild(removeButton);

                removeButton.addEventListener("mousedown", function() {
                    removeButton.classList.add("button-active");
                });
                    
                removeButton.addEventListener("mouseup", function() {
                    removeButton.classList.remove("button-active");
                });
            
                removeButton.addEventListener('click', function() {

                    
                    
                    if(directionsRendererTotal) {
                        markersArray.forEach(marker => marker.setLabel(null));
                        markersArrayPrevious.setLabel(null);
                        markersArrayCurrent.setLabel(null);
                        
                    }

                    for (let i = renderersArray.length - 1; i >= 0; i--) {
                        renderersArray[i].setMap(null);
                    }

                    
                    
                    if (inputArray.length > 0) {

                        let lastInput = inputArray.pop();
                        
                        formGroup.removeChild(lastInput);

                        document.getElementById('distance').value = "Km";
                        
                        document.getElementById('price').value = "€"
                        
                        inputCount--;

                        if (destinationMarkerAll && markersArray.length > 0) {
                            let removeMarker = markersArray.pop()
    
                            removeMarker.setMap(null);

                           
                        }

                        

                    }

                    if (inputArray.length === 0) {
                        buttonAddRemove.removeChild(removeButton);
                        removeButton = null;
                        directionsRenderer.setMap(null);
                        if (destinationMarkerAll && markersArray.length > 0) {
                            let removeMarker = markersArray.pop()
    
                            removeMarker.setMap(null);

                            
                        }
                    }

                   
                    
                })
            
            }

            
            
            
        } 
            
        



        
            
    });

    formGroup.addEventListener('click', function() {
        for (let i = 0; i < inputArray.length; i++) {
            
            inputArray[i].addEventListener("focus", function() {

                inputArray[i].addEventListener('input', function () {
                    if (!this.value) {
                        
                        markersArray[i].setMap(null);
                        markersArray.splice(i, 1);
                        document.getElementById('distance').value = "Km";
                        document.getElementById('price').value = "€"
                        distanceParts.length = 0;
                        directionsRenderer.setMap(null);
                        directionsRendererAll.setMap(null);
                        directionsRendererTotal.setMap(null);
                    }
                });

              autocompleteAll = new google.maps.places.Autocomplete(this, {
                    
                    fields: ['place_id', 'geometry', 'name']
                  });
                  
                  autocompleteAll.addListener("place_changed", () => {
                      
                   
                    
                      const placeAll = autocompleteAll.getPlace();
                      
                      if (!placeAll) {
                          console.error('No place selected');
                          return;
                      }
                      map.setCenter(placeAll.geometry.location);
                      map.setZoom(12);
                      destinationMarkerAll = new google.maps.Marker({
                          position: placeAll.geometry.location,
                          title: placeAll.name,
                          map: map
                      });
          
                      markersArray.push(destinationMarkerAll);

                      
                     
          
                      if(originMarker && destinationMarker && destinationMarkerAll) {
                      
                          let boundsAll = new google.maps.LatLngBounds();
                          
                          boundsAll.extend(originMarker.getPosition());
          
                          boundsAll.extend(destinationMarker.getPosition());
                          
                          markersArray.forEach(function(marker) {
                              boundsAll.extend(marker.getPosition());
                          });
          
                          map.fitBounds(boundsAll);
                      }
          
                       //get distance between destinationMarker and the first marker added
                      if (markersArray.length === 1) {
                          let distanceMatrixServiceAll = new google.maps.DistanceMatrixService();
                          distanceMatrixServiceAll.getDistanceMatrix({
                              origins: [destinationMarker.getPosition()],
                              destinations: [destinationMarkerAll.getPosition()],
                              travelMode: "DRIVING"
                              
                          }, (response, status) => {
                                  if (status === 'OK') {
                                      distanceAll = response.rows[0].elements[0].distance.text;
                                      
                                      distanceValueAll = `${distanceAll}`;
                                      numericDistanceAll = distanceAll.replace(/[^\d.]/g,'');
                                      distanceInIntAll = parseInt(numericDistanceAll);
                                      totalDistance = distanceInInt + distanceInIntAll
                                      
                                      document.getElementById('distance').value = totalDistance + ' Km'


                                      if (totalDistance <= 250) {
                    
                        
                                        price = parseFloat(totalDistance * priceRange[0]).toFixed(2);
                                        document.getElementById('price').value = price + ' €'
                                    }
                                   else if (totalDistance > 250 && totalDistance <= 350) {
                                        
                                        price = parseFloat(totalDistance * priceRange[1]).toFixed(2);
                                        document.getElementById('price').value = price + ' €'
                                    }
                                   else if (totalDistance > 350 && totalDistance <= 450) {
                                        
                                        price = parseFloat(totalDistance * priceRange[2]).toFixed(2);
                                        document.getElementById('price').value = price + ' €'
                                    }
                                    else if (totalDistance > 450 && totalDistance <= 550) {
                                       
                                        price = parseFloat(totalDistance * priceRange[3]).toFixed(2);
                                        document.getElementById('price').value = price + ' €'
                                    }
                                    else if (totalDistance > 550 && totalDistance <= 650) {
                                       
                                        price = parseFloat(totalDistance * priceRange[4]).toFixed(2);
                                        document.getElementById('price').value = price + ' €'
                                    }
                                    else if (totalDistance > 650 && totalDistance <= 750) {
                                        
                                        price = parseFloat(totalDistance * priceRange[5]).toFixed(2);
                                        document.getElementById('price').value = price + ' €'
                                    }
                                    else if (totalDistance > 750 && totalDistance <= 850) {
                                       
                                        price = parseFloat(totalDistance * priceRange[6]).toFixed(2);
                                        document.getElementById('price').value = price + ' €'
                                    }
                                    else   {
                
                                     
                
                                       
                
                                        price = (totalDistance * priceRange[7]).toFixed(2);
                                        
                                        document.getElementById('price').value = price + ' €'
                                    }
                                  }
                          });

                          directionsServiceAll = new google.maps.DirectionsService();
                          directionsRendererAll = new google.maps.DirectionsRenderer();
                          renderersArray.push(directionsRendererAll);
                          directionsRendererAll.setMap(map);
                          
                          const origin = originMarker.getPosition();
                          const destination = destinationMarkerAll.getPosition();
                          const waypoints = [{
                            location: destinationMarker.getPosition(),
                            stopover: true
                          }]
                          directionsServiceAll.route({
                              origin: origin,
                              destination: destination,
                              waypoints: waypoints,
                              travelMode: "DRIVING",
                              
                          }, (response, status) => {
                              if (status === 'OK') {
                                  directionsRendererAll.setDirections(response);
                              } else {
                                  console.error(`Error: ${status}`);
                              }
                          });
                        }
          
                      if (markersArray.length > 1) {

                        let labelCharCode = 'C'.charCodeAt(0);
                        let labelCharCodeNext = 'D'.charCodeAt(0);

                          for (let i = 1; i < markersArray.length; i++) {
                              
                              markersArrayPrevious = markersArray[i-1];
                              markersArrayCurrent = markersArray[i];
                              let distanceMatrixServiceTotal = new google.maps.DistanceMatrixService();
                              distanceMatrixServiceTotal.getDistanceMatrix({
                                  origins: [markersArrayPrevious.getPosition()],
                                  destinations: [markersArrayCurrent.getPosition()],
                                  travelMode: "DRIVING"
                                  
                              }, (response, status) => {
                                      if (status === 'OK') {
                                          distanceTotal = response.rows[0].elements[0].distance.text;
                                          distanceValueTotal = `${distance}`;
                                          numericDistanceTotal = distanceTotal.replace(/[^\d.]/g,'');
                                          distanceInIntTotal = parseInt(numericDistanceTotal);
                                          distanceParts[i - 1] = distanceInIntTotal;
                                          
                                          
                                          let sumDistanceParts =  distanceParts.reduce((sum, distance) => sum + distance, 0);
                                          let finalDistance = distanceInInt + distanceInIntAll + sumDistanceParts;
                                            document.getElementById('distance').value = finalDistance + ' Km';


 
                                            if (finalDistance <= 250) {
                    
                        
                                                price = parseFloat(finalDistance * priceRange[0]).toFixed(2);
                                                document.getElementById('price').value = price + ' €'
                                            }
                                           else if (finalDistance > 250 && finalDistance <= 350) {
                                                
                                                price = parseFloat(finalDistance * priceRange[1]).toFixed(2);
                                                document.getElementById('price').value = price + ' €'
                                            }
                                           else if (finalDistance> 350 && finalDistance <= 450) {
                                                
                                                price = parseFloat(finalDistance * priceRange[2]).toFixed(2);
                                                document.getElementById('price').value = price + ' €'
                                            }
                                            else if (finalDistance > 450 && finalDistance <= 550) {
                                               
                                                price = parseFloat(finalDistance * priceRange[3]).toFixed(2);
                                                document.getElementById('price').value = price + ' €'
                                            }
                                            else if (finalDistance > 550 && finalDistance <= 650) {
                                               
                                                price = parseFloat(finalDistance * priceRange[4]).toFixed(2);
                                                document.getElementById('price').value = price + ' €'
                                            }
                                            else if (finalDistance > 650 && finalDistance <= 750) {
                                                
                                                price = parseFloat(finalDistance * priceRange[5]).toFixed(2);
                                                document.getElementById('price').value = price + ' €'
                                            }
                                            else if (finalDistance > 750 && finalDistance <= 850) {
                                               
                                                price = parseFloat(finalDistance * priceRange[6]).toFixed(2);
                                                document.getElementById('price').value = price + ' €'
                                            }
                                            else   {
                        
                                             
                        
                                               
                        
                                                price = (finalDistance * priceRange[7]).toFixed(2);
                                                
                                                document.getElementById('price').value = price + ' €'
                                            }
                                        }
                                    });
                                

                                    directionsServiceTotal = new google.maps.DirectionsService();
                                   
                                    directionsRendererTotal = new google.maps.DirectionsRenderer({
                                        suppressMarkers: true,
                                        
                                    });
                                    
                                    renderersArray.push(directionsRendererTotal);
                                    directionsRendererTotal.setMap(map);

                                    markersArrayPrevious.setOptions({
                                        label: {
                                          text: String.fromCharCode(labelCharCode + i - 1),
                                          color: 'white',
                                          fontSize: '16px'  
                                    }});

                                    markersArrayCurrent.setOptions({
                                        label: {
                                          text: String.fromCharCode(labelCharCodeNext + i - 1),
                                          color: 'white',
                                          fontSize: '16px'  
                                    }});
                                    
                                    const origin = originMarker.getPosition();
                                    const destination = markersArrayCurrent.getPosition();
                                    
                                    const waypoints = [{
                                        location: destinationMarker.getPosition(),
                                        stopover: true
                                      }, 
                                      {
                                          location: markersArrayPrevious.getPosition(),
                                          stopover: true
                                      }
                                     ]
                                    
                                    directionsServiceTotal.route({
                                        origin: origin,
                                        destination: destination,
                                        waypoints: waypoints,
                                        travelMode: "DRIVING",
                                        
                                    }, (response, status) => {
                                        if (status === 'OK') {
                                            directionsRendererTotal.setDirections(response);
                                        } else {
                                            console.error(`Error: ${status}`);
                                        }
                                    });
                                    
          
                            }

                           
                        }

                        

                        if (inputCount === 1) {
                            price = parseInt(price * 100);
                            price += 3000;
                            price = price / 100;
                            
                        }
                        if (inputCount === 2) {
                            price = parseInt(price * 100);
                            price += 6000;
                            price = price / 100;
                            
                        }
                        if (inputCount === 3) {
                            price = parseInt(price * 100);
                            price += 9000;
                            price = price / 100;
                            
                        }
                        if (inputCount === 4) {
                            price = parseInt(price * 100);
                            price += 12000;
                            price = price / 100;
                            
                        }

                  });

            })

            
              
            
        }

        
       
        
 


    })

    

    
    
      
    
      

}

let submitButton = document.querySelector('button[type="submit"]');



submitButton.addEventListener('click', function() {
    
   
        
        if (inputOne.value == 0) {
           inputOne.removeAttribute('required');
        }

        if (inputTwo.value == 0) {
            inputTwo.removeAttribute('required');
        }

        if (widthSize.value == 0) {
            widthSize.removeAttribute('required');
        }

        if (lengthSize.value == 0) {
           lengthSize.removeAttribute('required');
        }

        if (heightSize.value == 0) {
            heightSize.removeAttribute('required');
         }
     
    

    if (textareaElement.value == 0) {
        textareaElement.removeAttribute('required');
    }
})

multiStepForm.addEventListener("submit", function(e) {
    
    document.getElementById('success').innerHTML = "Abbiamo inviato l'Offerta sulla tua e-mail. Controlla anche la posta indesiderata.<br> Se non la trovi o hai bisogno di assistenza puoi contattarci alla seguente mail commerciale@landgroup.it. Grazie per averci scelto!"
    const sheet = document.styleSheets[0];
    sheet.insertRule('.success::before {  content: "✓"; display: inline-block; margin-right: 5px; font-weight: 700;}', sheet.cssRules.length);
    
    return
})