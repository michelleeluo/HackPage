
//const organizations = document.querySelector('#organizations-list');

function renderOrg(doc){
    let li = document.createElement('li');
     li.innerHTML = `
        <p>${ doc.data().name }</p>
        <p>${ doc.data().school }</p>
        <p>${ doc.data().location }</p>
        <p>${ doc.data().startDate }</p>
        <p>${ doc.data().endDate }</p>
        <p>${ doc.data().sponsors }</p>` 
    document.getElementById("dbstuff").innerText = li.innerText;


    let name = document.createElement('span');
    let school = document.createElement('span');
    let location = document.createElement('span');
    let startDate = document.createElement('span');
    let endDate = document.createElement('span');
    let sponsors = document.createElement('span');

    li.setAttribute('org-id', doc.id);
    name.textContent = doc.data().name;
    school.textContent = doc.data().school;
    location.textContent = doc.data().location;
    startDate.textContent = doc.data().startDate;
    endDate.textContent = doc.data().endDate;
    sponsors.textContent = doc.data().sponsors;

    //document.getElementById("dbstuff").innerHTML = name;


    li.appendChild(name);
    li.appendChild(school);
    li.appendChild(location);
    li.appendChild(startDate);
    li.appendChild(endDate);
    li.appendChild(sponsors);

    console.log(li);
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
