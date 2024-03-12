const firebaseConfig = {
    apiKey: "AIzaSyBo6P8bIgC8LMWxrgzRGXQsx0039HVqxcY",
    authDomain: "ledebut-a29ff.firebaseapp.com",
    databaseURL: "https://ledebut-a29ff-default-rtdb.firebaseio.com",
    projectId: "ledebut-a29ff",
    storageBucket: "ledebut-a29ff.appspot.com",
    messagingSenderId: "204040384341",
    appId: "1:204040384341:web:d337fa31dca2f1b1efc9dc",
    measurementId: "G-CHCXC1C0FN"
  };
  firebase.initializeApp(firebaseConfig)

var database  = firebase.database().ref('registrations')

document.getElementById('registartion_form').addEventListener('submit' , submit_form)



function submit_form(e){
    e.preventDefault();
    var name = getElementVal("Name")
    var college = getElementVal("college")
    var year  = 0;
    if( document.getElementById('year1').checked){
      var year = 1;
    };
    if( document.getElementById('year2').checked){
      var year = 2;
    };
    if( document.getElementById('year3').checked){
      var year = 3;
    };
    if( document.getElementById('year4').checked){
      var year = 4;
    };

    console.log(year)

    console.log(name)
    saveMessages(name,college,year)

}

const saveMessages = (name,college,year) =>{
  var newdatabase = database.push()
  newdatabase.set({name:name,college:college,year:year})
}
const getElementVal = (id)=>{return document.getElementById(id).value}
