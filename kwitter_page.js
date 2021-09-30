//YOUR FIREBASE LINKS
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
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
document.getElementById("msg").value= "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

