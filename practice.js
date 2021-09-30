
//ADD YOUR FIREBASE LINKS
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

function Adduser(){
add_user=document.getElementById("user").value;
firebase.database().ref("/").child(add_user).update({
    key : "i miss my dog"
})
}
