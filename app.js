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
const db = firebase.firestore();

function renderUsers(doc){
    var curr = [7];
    let li = document.createElement('li');
     li.innerHTML = `
        <p>${ doc.data().name }</p>
        <p>${ doc.data().school }</p>
        <p>${ doc.data().age }</p>
        <p>${ doc.data().gender }</p>
        <p>${ doc.data().shirtSize }</p>
        <p>${ doc.data().hackHist }</p>
        <p>${ doc.data().links }</p>` 
    //sdocument.getElementById("dbstuff").innerText = li.innerText;

    curr[0] = doc.data().name;
    curr[1] = doc.data().school;
    curr[2] = doc.data().age;
    curr[3] = doc.data().gender;
    curr[4] = doc.data().shirtSize;
    curr[5] = doc.data().hackHist;
    curr[6] = doc.data().links;

    usrs.push(curr);
    //console.log(usrs);
}

function renderOrg(doc){
    var curr = [8];
    let li = document.createElement('li');
     li.innerHTML = `
        <p>${ doc.data().name }</p>
        <p>${ doc.data().school }</p>
        <p>${ doc.data().location }</p>
        <p>${ doc.data().startDate }</p>
        <p>${ doc.data().endDate }</p>
        <p>${ doc.data().sponsors }</p>
        <p>${ doc.data().email }</p>
        <p>${ doc.data().capacity }</p>` 
    //document.getElementById("dbstuff").innerText = li.innerText;

    curr[0] = doc.data().name;
    curr[1] = doc.data().school;
    curr[2] = doc.data().location;
    curr[3] = doc.data().startDate;
    curr[4] = doc.data().endDate;
    curr[5] = doc.data().sponsors;
    curr[6] = doc.data().email;
    curr[7] = doc.data().capacity;

    hacks.push(curr);
    //console.log(hacks);
}

// getting data
 db.collection('Organization').get().then(snapshot => {
     snapshot.docs.forEach(doc => {
         renderOrg(doc);
     });
 });

 db.collection('users').get().then(snapshot => {
     snapshot.docs.forEach(doc => {
         renderUsers(doc);
     });
 });

// function store() {
//     //var inp = (document.getElementById("sponsors").value).split(',');
//     // Add a new document with a generated id.
//     db.collection("Organization").doc().set({
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
// }


// document.getElementById("btnSubmit").addEventListener("click", function(){
//     console.log("hi");
// });


    function regHack() {
        var spons = document.getElementById('sponsors').value.split(',');
        console.log(spons);
        var nam = document.getElementById('name').value;
        var sch = document.getElementById('school').value;
        var ema = document.getElementById('email').value;
        var loc = document.getElementById('location').value;
        var std = document.getElementById('startDate').value;
        var end = document.getElementById('endDate').value;
        var cap = document.getElementById('capacity').value;
        db.collection("Organization").doc().set({
            name: nam,
            school: sch,
            location: loc,
            startDate: std,
            endDate: end,
            sponsors: spons,
            email: ema,
            capacity: cap
        });


    }
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
