
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDUs73C_83RAU1brgiGHMpZ09v0lS_TzZM",
    authDomain: "ellehacks.firebaseapp.com",
    databaseURL: "https://ellehacks.firebaseio.com",
    projectId: "ellehacks",
    storageBucket: "ellehacks.appspot.com",
    messagingSenderId: "506229378891",

    clientId: "506229378891-s5aq2ikrpa1718jc3tuvociv513j63o6.apps.googleusercontent.com",
    scopes: [
        "email"]
};
firebase.initializeApp(config);
db = firebase.database();

// firebase.auth().onAuthStateChanged(function(user) {
//     window.user = user; // user is undefined if no user signed in
//    });

function login() {
    
}

   // This function will trigger when there is a login event
// firebase.auth().onAuthStateChanged(function(user) {
//     // Make sure there is a valid user object
//     if(user){
//       var script = document.createElement('script');
//       script.type = 'text/javascript';
//       script.src = 'https://apis.google.com/js/api.js';
//       // Once the Google API Client is loaded, you can run your code
//       script.onload = function(e){
//        // Initialize the Google API Client with the config object
//        gapi.client.init({
//          apiKey: config.apiKey,
//          clientId: config.clientID,
//          scope: config.scopes.join(' '),
//        })
//        // Loading is finished, so start the app
//        .then(function() {
//         // Make sure the Google API Client is properly signed in
//         if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
//           startApp(user);
//         } else {
//           firebase.auth().signOut(); // Something went wrong, sign out
//         }
//        })
//       }
//       // Add to the document
//       document.getElementsByTagName('head')[0].appendChild(script);  
//     }
//   })

  var provider = new firebase.auth.GoogleAuthProvider();

  function googleSignin() {
     firebase.auth()
     
     .signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
          
        console.log(token)
        console.log(user)
     }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
          
        console.log(error.code)
        console.log(error.message)
     });
  }
  
  function googleSignout() {
     firebase.auth().signOut()
      
     .then(function() {
        console.log('Signout Succesful')
     }, function(error) {
        console.log('Signout Failed')  
     });
  }



var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

var usersRef = firebase.database().ref("users/");
var hacksRef = firebase.database().ref("hacks/");

usersRef.orderByChild("name").on("child_added", function(data) {
    console.log(data.val().name);
 });

// const preObj = document.getElementById('obj');
// const dbRefObj = firebase.database().ref().child('obj');
// const dbRefList = dbRefObj.child('email');

// dbRefObj.on('value', snap => {
//     preObj.innerText = JSON.stringify(snap.val(), null, 3);
// });

// dbRefList.on('child_added', snap => {
//     const li = document.createElement('li');
//     li.innerText = snap.val();
//     li.id = snap.key;
//     ulList.appendChild(li);
// });

// dbRefList.on("child_changed", snap => {
//     const liChanged = document.getElementById(snap.key);
//     liChanged.innerText = snap.val();
// })

// dbRefList.on("child_removed", snap => {
//     const liRemove = document.getElementById(snap.key);
//     liRemove.remove();
// })

//////////////////////////////////////////////////////////////////
//var tblUsers = document.getElementById('tbl_users_list');
  var databaseRef = firebase.database().ref('users/');
   
  function saveUser(){
   var age = document.getElementById('birthDate').value;
   var email = document.getElementById('email').value;
   var gender = document.getElementById('gender').value;
   var hackHist = [];
   var lastN = document.getElementById('lastName').value;
   var links = document.getElementById('webSite').value;
   var name = document.getElementById('firstName').value;
   var school = document.getElementById('school').value;
   var shirtSize = document.getElementById('shirtSize').value;
  
   var uid = firebase.database().ref().child('users').push().key;
   
   var data = {
    age: age,
    email: email,
    gender: gender,
    hackHist: [],
    lastN: lastN,
    links: links,
    name: name,
    school: school,
    shirtSize: shirtSize
   }
   
   var updates = {};
   updates['/users/' + uid] = data;
   firebase.database().ref().update(updates);
   
   alert('The user is created successfully!');
   reload_page();
  }

  function saveHack(){
        var nam = document.getElementById('name').value;
        var sch = document.getElementById('school').value;
        var ema = document.getElementById('email').value;
        var loc = document.getElementById('location').value;
        var std = document.getElementById('startDate').value;
        var end = document.getElementById('endDate').value;
        var cap = document.getElementById('capacity').value;
        var spons = document.getElementById('sponsors').value;
   
    var uid = firebase.database().ref().child('users').push().key;
    
    var data = {
            name: nam,
            school: sch,
            location: loc,
            startDate: std,
            endDate: end,
            sponsors: spons,
            email: ema,
            capacity: cap
    }
    
    var updates = {};
    updates['/hacks/' + uid] = data;
    firebase.database().ref().update(updates);
    
    alert('The hack is created successfully!');
    reload_page();
   }
