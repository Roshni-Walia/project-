
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBIHobG1ZaWerhm1lx8V-3Y7qH7c-ZXNYM",
      authDomain: "twitter-15dea.firebaseapp.com",
      projectId: "twitter-15dea",
      storageBucket: "twitter-15dea.appspot.com",
      messagingSenderId: "1045474057092",
      appId: "1:1045474057092:web:1162278e0210b81afd5bd1"
    };
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
