/****Globals****/
const baseUrl = "http://localhost:3000";
let poses = [];


/*****NODE Getters ****/
const mainDiv = () => document.getElementById("main");

/**Templates**/
// const homePageTemplate = () => {
//     return `
//     <h1 class="center-align"></h1>
//     `
// }

/***Renders*****/
renderHomePage = () => {
    mainDiv().innerHTML = homePageTemplate();
}

poses.forEach(pose => {
    const a = document.createElement('a');
    a.classname = 'collection-item';
    a.innertext = pose.position;

    div.appendChild(a);
})


/******Events********/
const loadPoses = () => {
    fetch(baseUrl + '/poses')
        .then(resp => resp.json())
        .then(data => {
            console.log('data', data) 
            poses = data;
        })
}

// const submitMindfullness = document.getElementBy

const posesLink = () => document.getElementById("poses-link");

const renderPosePage = (e) => {
    e.preventDefault();

    alert("it works");
}

const attachPosesLinkEvent = () => {
    posesLink().addEventListener('click', renderPosePage);
}




 
/*******WHEN THE DOM LOADS*******/
document.addEventListener('DOMContentLoaded', () => {
    attachPosesLinkEvent();
    loadPoses();
    renderPosePage();
})