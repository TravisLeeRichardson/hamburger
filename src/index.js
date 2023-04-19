const beerDisplay = document.querySelector('.name');
const button = document.querySelector('.button');

//Send data to the API to populate the burger database using POST (37 is latest)
const data = {
	"id": 37,
	"name": "Trav-Burger",
	"restaurant": "Trav Cafe",
	"web": "www.thestreet.cz",
	"description": "The best burger out there",
	"ingredients": [
		"beef",
		"bacon",
		"onion",
		"hot peppers",
		"lettuce"
	],
	"addresses": [{
		"addressId": 0,
		"number": "1",
		"line1": "USA",
		"line2": "USA",
		"postcode": "11112",
		"country": "The USA"
	}]
}

const updatedData = {
	"id": 37,
	"name": "Trav-Burger",
	"restaurant": "Trav Cafe",
	"web": "www.thestreet.cz",
	"description": "The best burger out there",
	"ingredients": [
		"beef",
		"bacon",
		"onion",
		"hot peppers",
		"lettuce"
	],
	"addresses": [{
		"addressId": 0,
		"number": "123",
		"line1": "USA",
		"line2": "USA",
		"postcode": "11112",
		"country": "The USA"
	}]
}

function AddNewData(){

     // Posts New data
     fetch('https://my-burger-api.herokuapp.com/burgers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}

// Edits Existing Data
function updateData(){
fetch('https://my-burger-api.herokuapp.com/burgers/37', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
})
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

//USE API to GET data from the API
function getData() {
         fetch('https://my-burger-api.herokuapp.com/burgers')
          .then((response) => response.json())
          .then((data) => {
              console.log(data)
  
              const randomNumber = Math.random() * data.length
              const randomInt = Math.floor(randomNumber)
  
              const name = data[randomInt].name
              console.log(name)
              beerDisplay.innerHTML = name
          }) 
}


//USE API to DELETE data from the API
function deleteData(){
    fetch('https://my-burger-api.herokuapp.com/burgers/29', {
        method: 'DELETE'
    })
    .then((response) => response.json())
    .then((result) => {
        console.log('Success:');
    })
    .catch((error) => {
        console.error('Error:', error);
    });

}

//Update to test GET, PUT, POST, DELETE
button.addEventListener('click', getData);
