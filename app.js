var hacks = [];
var usrs = [];



 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDUs73C_83RAU1brgiGHMpZ09v0lS_TzZM",
    authDomain: "ellehacks.firebaseapp.com",
    databaseURL: "https://ellehacks.firebaseio.com",
    projectId: "ellehacks",
    storageBucket: "ellehacks.appspot.com",
    messagingSenderId: "506229378891"
};
firebase.initializeApp(config);
db = firebase.database();


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
  //var rowIndex = 1;
  
//   databaseRef.once('value', function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//    var childKey = childSnapshot.key;
//    var childData = childSnapshot.val();
   
//    var row = tblUsers.insertRow(rowIndex);
//    var cellId = row.insertCell(0);
//    var cellName = row.insertCell(1);
//    cellId.appendChild(document.createTextNode(childKey));
//    cellName.appendChild(document.createTextNode(childData.user_name));
   
//    rowIndex = rowIndex + 1;
//     });
//   });
   
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


//         var spons = document.getElementById('sponsors').value;//.split(',');
//         //console.log(spons);
//         var nam = document.getElementById('name').value;
//         var sch = document.getElementById('school').value;
//         var ema = document.getElementById('email').value;
//         var loc = document.getElementById('location').value;
//         var std = document.getElementById('startDate').value;
//         var end = document.getElementById('endDate').value;
//         var cap = document.getElementById('capacity').value;
//         db.collection("Organization").add({

//         });



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
  
//   function update_user(){
//    var user_name = document.getElementById('user_name').value;
//    var user_id = document.getElementById('user_id').value;

//    var data = {
//         age: "20",
//         email: "michellelelel@gmail.com",
//         gender: "female",
//         lastN: "luo",
//         links: "www.com, https.ca",
//         name: "Michelle",
//         school: "Uoft",
//         shirtSize: "LLLL"
//    }
   
//    var updates = {};
//    updates['/users/' + user_id] = data;
//    firebase.database().ref().update(updates);
   
//    alert('The user is updated successfully!');
   
//    reload_page();
//   }
 
  function reload_page(){
   window.location.reload();
  }
  

// function writeUserData(name, email, imageUrl) {
//     firebase.database().ref('users/' + email).set({
//       name: name,
//       email: email,
//       profile_picture : imageUrl
//     });
//   }

// var userId = firebase.auth().currentUser.uid;
// return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
// });


// function renderUsers(doc){
//     var curr = [7];
//     let li = document.createElement('li');
//      li.innerHTML = `
//         <p>${ doc.data().name }</p>
//         <p>${ doc.data().school }</p>
//         <p>${ doc.data().age }</p>
//         <p>${ doc.data().gender }</p>
//         <p>${ doc.data().shirtSize }</p>
//         <p>${ doc.data().hackHist }</p>
//         <p>${ doc.data().links }</p>` 
//     //sdocument.getElementById("dbstuff").innerText = li.innerText;

//     curr[0] = doc.data().name;
//     curr[1] = doc.data().school;
//     curr[2] = doc.data().age;
//     curr[3] = doc.data().gender;
//     curr[4] = doc.data().shirtSize;
//     curr[5] = doc.data().hackHist;
//     curr[6] = doc.data().links;

//     usrs.push(curr);
//     //console.log(usrs);
// }

// function renderOrg(doc){
//     var curr = [8];
//     let li = document.createElement('li');
//      li.innerHTML = `
//         <p>${ doc.data().name }</p>
//         <p>${ doc.data().school }</p>
//         <p>${ doc.data().location }</p>
//         <p>${ doc.data().startDate }</p>
//         <p>${ doc.data().endDate }</p>
//         <p>${ doc.data().sponsors }</p>
//         <p>${ doc.data().email }</p>
//         <p>${ doc.data().capacity }</p>` 
//     //document.getElementById("dbstuff").innerText = li.innerText;

//     curr[0] = doc.data().name;
//     curr[1] = doc.data().school;
//     curr[2] = doc.data().location;
//     curr[3] = doc.data().startDate;
//     curr[4] = doc.data().endDate;
//     curr[5] = doc.data().sponsors;
//     curr[6] = doc.data().email;
//     curr[7] = doc.data().capacity;

//     hacks.push(curr);
//     //console.log(hacks);
// }

// // getting data
//  db.collection('Organization').get().then(snapshot => {
//      snapshot.docs.forEach(doc => {
//          renderOrg(doc);
//      });
//  });

//  db.collection('users').get().then(snapshot => {
//      snapshot.docs.forEach(doc => {
//          renderUsers(doc);
//      });
//  });

// function regUsr() {
//     var bday = document.getElementById('birthDate').value;

//     var age = '20';
//     var ema = document.getElementById('email').value;
//     var gen = document.getElementById('school').value;
//     var hhi = '';
//     var lin = document.getElementById('webSite').value;
//     var nam = document.getElementById('firstName').value;
//     var sch = document.getElementById('school').value;
//     var ssz = document.getElementById('shirtSize').value;


//     console.log(db.collection("users"));
//     console.log(db.collection("users").doc());

//     console.log(db.collection("users").firestore);
//     console.log(db.collection("users").doc()._key);

//     console.log(db.collection("users").firestore._dataConverter);
//     console.log(db.collection("users").doc()._key.path);



//     db.collection("users").add({
//         // age: age,
//         // email: ema,
//         // gender: gen,
//         // hackHist: hhi,
//         // links: lin,
//         // name: nam,
//         // school: sch,
//         // shirtSize: ssz
//         age: "20",
//         email: "michellelelel@gmail.com",
//         gender: "female",
//         hackHist: "no",
//         links: "www.com, https.ca",
//         name: "Michelle",
//         school: "Uoft",
//         shirtSize: "LLLL"
//     });

  
// }


//     function regHack() {
//         var spons = document.getElementById('sponsors').value;//.split(',');
//         //console.log(spons);
//         var nam = document.getElementById('name').value;
//         var sch = document.getElementById('school').value;
//         var ema = document.getElementById('email').value;
//         var loc = document.getElementById('location').value;
//         var std = document.getElementById('startDate').value;
//         var end = document.getElementById('endDate').value;
//         var cap = document.getElementById('capacity').value;
//         db.collection("Organization").add({
//             name: nam,
//             school: sch,
//             location: loc,
//             startDate: std,
//             endDate: end,
//             sponsors: spons,
//             email: ema,
//             capacity: cap
//         });

   // }



 //saving
//  hackForm.addEventListener('submit', (e) => {
//     console.log("asdfsafsf");
//     e.preventDefault();
//     //var spons = hackForm.sponsors.value.split(',');
//     console.log(spons);
//     // Add a new document with a generated id.
//     db.collection("Organization").add({
//         name: hackForm.name.value,
//         school: hackForm.school.value,
//         location: hackForm.location.value,
//         startDate: hackForm.startDate,
//         endDate: hackForm.endDate,
//         sponsors: hackForm.sponsors.value,
//         email: hackForm.email.value,
//         capacity: hackForm.capacity.value
//     })
//     .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });
//     hackForm.reset();

//  });
