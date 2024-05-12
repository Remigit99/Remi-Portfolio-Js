import { projectData } from "./projectsData.js";

AOS.init({
    duration: 1500
});


document.querySelector('form').onsubmit = (e) => {
    e.target.submit();
    e.target.reset();
    return false;
};

console.log(projectData);


const myProjects = document.querySelector(".my__projects");
const project = document.querySelector(".project");

// myProjects.innerHTML = `

// `