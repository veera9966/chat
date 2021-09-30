var firebaseConfig = {
      apiKey: "AIzaSyC0nS33mw5fB_Wuc7U02ZWGNW8wJ1P6HCE",
      authDomain: "kwitter-16996.firebaseapp.com",
      databaseURL: "https://kwitter-16996-default-rtdb.firebaseio.com",
      projectId: "kwitter-16996",
      storageBucket: "kwitter-16996.appspot.com",
      messagingSenderId: "126369147682",
      appId: "1:126369147682:web:42a6387d0704cc0913137b",
      measurementId: "G-H4RMSZ32QN"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")

document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
//ADD YOUR FIREBASE LINKS HERE

function addRoom(){

room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" })

localStorage.setItem("room_name",room_name );

window.location="kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";


      document.getElementById("output").innerHTML+=row 
      //End code
      });});}
getData();

function redirectToRoomName(name){

localStorage.setItem("room_name",name);

window.location="kwitter_page.html";
}

function logout(){
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location="kwitter_page.html";
}
