// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyCT_BohNxIwcq7Cvc_wQygbAtBJVWXFImE",
    authDomain: "c-101-8f3d3.firebaseapp.com",
    projectId: "c-101-8f3d3",
    storageBucket: "c-101-8f3d3.appspot.com",
    messagingSenderId: "284883085942",
    appId: "1:284883085942:web:3e88741b177614d6950d57"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}
row="<div class="room_name"  id= "+Room_names" onclick="redirecToName(this.id")#"+Room_names+><div ><hr></hr></div>



