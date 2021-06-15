var firebaseConfig = {
    apiKey: "AIzaSyDxA17nLQX_HAZK4nxL8ZC-Wske7S0eiG0",
    authDomain: "kwitterhw-ac8c7.firebaseapp.com",
    databaseURL: "https://kwitterhw-ac8c7-default-rtdb.firebaseio.com",
    projectId: "kwitterhw-ac8c7",
    storageBucket: "kwitterhw-ac8c7.appspot.com",
    messagingSenderId: "606137062296",
    appId: "1:606137062296:web:c1d6b5d1f69a44a7d211ed"
  };    
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

// PASTE YOUR FIREBASE LINK HERE

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        name : "abigail joel",
        age:"9"
    });
}