var personDeets={
        "deets":[ 
         { "firstName": "Hudson" , "lastName":"Natividad", "numberOfPips": "3 Guests max to bring" }, 
         { "firstName": "Jecelito" , "lastName": "Batac", "numberOfPips": "2 Guests max to bring"  },
         { "firstName": "Gwyneth" , "lastName": "Calica", "numberOfPips": "1 Guest max to bring"  }, 
         { "firstName": "Ben Carlo" , "lastName": "Delos Santos", "numberOfPips": "2 Guests max to bring" }, 
         { "firstName": "Jan Keith" , "lastName": "Campus", "numberOfPips": "1 Guest max to bring" }
        ]
        };

var birthday = new Birthday("Friday.February 4th",  "6:00-8:00 PM", "Ferrer Residences", "PInata.Games.cake and Fun" );
  var show = document.getElementById('showCon'); 
  show.addEventListener("click", (event) => {
    window.open("index.html", "_self");
  });
  
function showElement(){
console.log(birthday)

  var content = document.getElementById('main');
  var content2 = document.getElementById('map');
  var heading = document.createElement("h2");
  var otherHeading = document.createElement("h1");
  var mapParagraph = document.createElement("p");
  heading.innerText = "YOU ARE INVITED!";
  otherHeading.innerText = "MADISION'S TURNING 4!";
  mapParagraph.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.380216381122!2d120.590427333676!3d16.04574763347424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391144cb494b207%3A0xfd2a5a47725d0255!2sPaterno%20St%2C%20Binalonan%2C%20Pangasinan!5e0!3m2!1sen!2sph!4v1605831472656!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
  content.appendChild(heading);
  content.appendChild(otherHeading);
  content2.appendChild(mapParagraph);
  showDetails();
  }

function Birthday(date, time, location, description){
  this.date = date;
  this.time = time;
  this.location = location;
  this.description = description;
  }

  function showDetails(){

  var dateDiv = document.getElementById("date");
  var otherDetails = document.getElementById("otherDetails");
  var pDate = document.createElement("p");
  var pAddress = document.createElement("p");
  var pDesc = document.createElement("p");
  var pTime = document.createElement("p");

  pAddress.innerText = birthday.location;
  pDesc.innerText = birthday.description;
  pDate.innerText = birthday.date;
  pTime.innerText = birthday.time;
  
  date.appendChild(pTime);
  otherDetails.appendChild(pAddress);
  otherDetails.appendChild(pDesc);
  date.appendChild(pDate);
  
  }

  function showWords(){
  var dateArray = new Array();
  var content3 = document.getElementById('words');
  var word1 = prompt("Give 3 words for Madison's","First Word");
  var word2 = prompt("Give 3 words for Madison's","Second Word");
  var word3 = prompt("Give 3 words for Madison's","Third Word");
  dateArray[0]= word1;
  dateArray[1]= word2;
  dateArray[2]= word3;

  var count;
  for(count = 0; count < 3; count++) {
        var words = document.createElement("p");
        words.innerText = "word" + (count+1) + ": " + dateArray[count];
        content3.appendChild(words);

  }

}

function hideElement(){
 window.open("page.html", "_blank");  
}

var attendee;

function enterName(){
  var msg;
   attendee = prompt("Please confirm your attendance by entering your Name","");
  if (attendee == null || attendee == "") {
     alert("Cancelled.");
  } else {
    alert("Hello " + attendee + "! Thank you for confirming your attendance!");
  }

  showPips();
}


var items = JSON.parse(personDeets);

function showPips(){
console.log(personDeets);
console.log(attendee)

var show = document.getElementById("cargos");

for(var i =0; i < personDeets.deets.length; i++){
    if(personDeets.deets[i].firstName == attendee ){
        var name = document.createElement("p");
        name.innerText = personDeets.deets[i].firstName + personDeets.deets[i].lastName;

        var pips = document.createElement('p');
        pips.innerText = personDeets.deets[i].numberOfPips;


        show.appendChild(name);
        show.appendChild(pips);
    }
}


}