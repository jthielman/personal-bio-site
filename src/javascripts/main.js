import axios from 'axios';
import apiKeys from './helpers/apiKeys.json';

import 'bootstrap';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import '../styles/main.scss';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const printToDom = (divId, stringToPrint) => {
  document.getElementById(divId).innerHTML = stringToPrint;
};

const createProjectCards = (projectsArr) => {
  let domString = '';
  for (let i = 0; i < projectsArr.length; i += 1) {
    const currentProject = projectsArr[i];
    if (currentProject.available) {
      domString += `
        <div class="card col-md-6">
          <h3>${currentProject.title}</h3>
          <img class="card-img" src="${currentProject.screenshot}" alt="${currentProject.title}">
          <p>${currentProject.description}</p>
          <div>
            <h4>Technologies used:</h4>
            <p>${currentProject.technologiesUsed}</p>
          </div>
          <div class="d-flex justify-content-around">
            <a href="${currentProject.url}" class="card-link">Link</a>
            <a href="${currentProject.githubUrl}" class="card-link">GitHub</a>
          </div>
      </div>
      `;
    }
  }
  printToDom('projectsContainer', domString);
};

const makeNavLinksWork = () => {
  const navLinks = document.getElementById('navLinks');
  const links = navLinks.querySelectorAll('a');
  for (let i = 0; i < links.length; i += 1) {
    links[i].addEventListener('click', (e) => {
      e.preventDefault();
      const pages = document.getElementsByClassName('fullPage');
      for (i = 0; i < pages.length; i += 1) {
        pages[i].className = 'fullPage hide';
      }
      const page = document.getElementById(`${e.target.id.substring(5).toLowerCase()}Page`);
      page.className = 'fullPage';
    });
  }
};

const projects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const demProjects = response.data;
      const projekts = [];
      Object.keys(demProjects).forEach((fbId) => {
        demProjects[fbId].id = fbId;
        projekts.push(demProjects[fbId]);
      });
      createProjectCards(projekts);
      resolve(projekts);
    })
    .catch((error) => reject(error));
});

const init = () => {
  projects();
  makeNavLinksWork();
};

init();
