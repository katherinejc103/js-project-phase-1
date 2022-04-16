/****Globals****/
const baseUrl = "http://localhost:3000";
let poses = [];

/*****NODE Getters ****/
const mainDiv = () => document.getElementById("main");


const renderTable = () => {
    mainDiv().innerHTML = createTable();
    console.log('hello')
}

poses.forEach(pose => {
    const a = document.createElement('a');
    a.classname = 'collection-item';
    a.innertext = pose.position;

    div.appendChild(a);
})



const createTable = () => { 
    console.log(renderPoses())
    return `
    <table class="container">
            <thead>
              <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>level</th>
              </tr>
            </thead>
    
            <tbody>
              ${ renderPoses() }
            </tbody>
          </table> `

} 

const poseTemplete = (poses) => {
    return `
        <tr>
            <td>${ poses.name }</td>
            <td>${ poses.position }</td>
            <td>${ poses.level }</td>
        </tr>
    `
}




/******Events********/
const loadPoses = () => {
    fetch(baseUrl + '/poses')
        .then(resp => resp.json())
        .then(data => {
            console.log('data', data) 
            poses = data;
            
    renderTable();
        })
}

const posesLink = () => document.getElementById("poses-link");
const medLink = () => document.getElementById("med-link");

const renderPosePage = (e) => {
    e.preventDefault();
    resetMain();

    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4');
    const h5 = document.createElement('h5');

    h3.innerText = "Yoga Pose Positions" 
    h4.innerText = "You may ask why yoga is essential to a balanced lifeystyle?"
    h5.innerText = "and it can be as easily defined as: a Hindu spiritual and ascetic discipline, a part of which, including breath control, simple meditation, and the adoption of specific bodily postures, is widely practiced for health and relaxation."
    mainDiv().appendChild(h3);
    mainDiv().appendChild(h4);
    mainDiv().appendChild(h5);

    
}

const renderMeditation = (e) => {
    e.preventDefault();
   
    alert("When your world moves too fast and you lose yourself in the chaos, introduce yourself to each color of the sunset. Reacquaint yourself with the earth beneath your feet. Thank the air that surrounds you with every breath you take. Find yourself in the appreciation of life.” ~Christy Ann Martine")
}

const renderPoses = () => {
    console.log(poses)
    return poses.map(pose => poseTemplete(pose));
}

const attachMedLinkEvent = () => {
    medLink().addEventListener('click', renderMeditation);
}

const attachPosesLinkEvent = () => {
    posesLink().addEventListener('click', renderPosePage);
}

const resetMain = () => {
    mainDiv().innerHTML = "";
}


 
/*******WHEN THE DOM LOADS*******/
document.addEventListener('DOMContentLoaded', () => {
    console.log('hi')
    attachPosesLinkEvent();
    attachMedLinkEvent();
    loadPoses();
    // renderPosePage();
    // renderMeditation();
    console.log('hello')
})

