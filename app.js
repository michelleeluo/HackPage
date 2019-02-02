
var hacks = [];
var usrs = [];

function renderUsers(doc){
    var curr = [];
    let li = document.createElement('li');
     li.innerHTML = `
        <p>${ doc.data().name }</p>
        <p>${ doc.data().school }</p>
        <p>${ doc.data().age }</p>
        <p>${ doc.data().gender }</p>
        <p>${ doc.data().shirtSize }</p>
        <p>${ doc.data().hackHist }</p>
        <p>${ doc.data().links }</p>` 
    document.getElementById("dbstuff").innerText = li.innerText;

    curr[0] = doc.data().name;
    curr[1] = doc.data().school;
    curr[2] = doc.data().age;
    curr[3] = doc.data().gender;
    curr[4] = doc.data().shirtSize;
    curr[5] = doc.data().hackHist;
    curr[6] = doc.data().links;

    usrs.push(curr);
}

function renderOrg(doc){
    var curr = [];
    let li = document.createElement('li');
     li.innerHTML = `
        <p>${ doc.data().name }</p>
        <p>${ doc.data().school }</p>
        <p>${ doc.data().location }</p>
        <p>${ doc.data().startDate }</p>
        <p>${ doc.data().endDate }</p>
        <p>${ doc.data().sponsors }</p>` 
    document.getElementById("dbstuff").innerText = li.innerText;

    curr[0] = doc.data().name;
    curr[1] = doc.data().school;
    curr[2] = doc.data().location;
    curr[3] = doc.data().startDate;
    curr[4] = doc.data().endDate;
    curr[5] = doc.data().sponsors;

    hacks.push(curr);


    // let name = document.createElement('span');
    // let school = document.createElement('span');
    // let location = document.createElement('span');
    // let startDate = document.createElement('span');
    // let endDate = document.createElement('span');
    // let sponsors = document.createElement('span');

    // li.setAttribute('org-id', doc.id);
    // name.textContent = doc.data().name;
    // school.textContent = doc.data().school;
    // location.textContent = doc.data().location;
    // startDate.textContent = doc.data().startDate;
    // endDate.textContent = doc.data().endDate;
    // sponsors.textContent = doc.data().sponsors;

    //document.getElementById("dbstuff").innerHTML = name;


    // li.appendChild(name);
    // li.appendChild(school);
    // li.appendChild(location);
    // li.appendChild(startDate);
    // li.appendChild(endDate);
    // li.appendChild(sponsors);

    //console.log(li);
    //document.getElementById("dbstuff").innerText = li;
    
    //console.log(li.ch);
    //organizations.appendChild(li);
}

// getting data
 db.collection('Organization').get().then(snapshot => {
     snapshot.docs.forEach(doc => {
         renderOrg(doc);
     });
 });

 db.collection('users').get().then(snapshot => {
     snapshot.docs.forEach(doc => {
         renderOrg(doc);
     });
 });
