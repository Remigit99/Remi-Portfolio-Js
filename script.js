import { projectData, testmonialData } from "./projectsData.js";

AOS.init({
  duration: 1500,
});

document.querySelector("form").onsubmit = (e) => {
  e.target.submit();
  e.target.reset();
  return false;
};

// console.log(projectData);

const myProjects = document.querySelector(".my__projects");
const project = document.querySelector(".project");

const projectEl = projectData
  .reverse()
  .map(
    ({ name, thumbnail, description, codeLink, liveWebLink, altText, id }) => {
      let articleElOdd = `
        <article class="project">

            <div class="project__right">
                <div class="project__right-header">
                    <h4>${name}</h4>
                    <p>${description}</p>
                </div>

                <div class="code-demo">
                    <a href=${codeLink} target="_blank">
                        <span> <i class="uil uil-github"></i> </span>
                        Code
                    </a>

                    <a href=${liveWebLink} target="_blank">
                        <span> <i class="uil uil-location-arrow"></i> </span>
                        Live Demo
                    </a>

                </div>

            </div>

            <div class="project__left">
                <img src=${thumbnail} alt=${altText}>
            </div>

        </article>
        `;

      let articleElEven = `
        <article class="project">

            <div class="project__right">
                
                <img src=${thumbnail} alt=${altText}>

            </div>

            <div class="project__left">

                <div class="project__right-header">
                    <h4>${name}</h4>
                    <p>${description}</p>
                </div>

                <div class="code-demo">
                    <a href=${codeLink} target="_blank">
                        <span> <i class="uil uil-github"></i> </span>
                        Code
                    </a>

                    <a href= ${liveWebLink} target="_blank">
                        <span> <i class="uil uil-location-arrow"></i> </span>
                        Live Demo
                    </a>

                </div>
            </div>

            

        </article>
         `;

      let articleShow = id % 2 === 0 ? articleElEven : articleElOdd;

      return articleShow;
    }
  )
  .join("");

myProjects.innerHTML = projectEl;

/*============  Testimonials =========*/

const testimonialEl = document.querySelector(".testimonials");

const testimonialsEl = testmonialData.map(
  ({ img, altTexet, name, statement }) => {
    let testimonialItem = `
    
    <article class="testimonial swiper-slide">
      <div class="client__header">
          <img src=${img} alt=${altTexet} class="client__img">
          <h5>${name}</h5>
      </div>

      <p>${statement}</p>
    </article>
    `;

    return testimonialItem;
  }
);

testimonialEl.innerHTML = testimonialsEl
