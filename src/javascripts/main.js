import axios from 'axios';
import apiKeys from './helpers/apiKeys.json';
import { regular } from '../../db/techIcons.json';

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
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img class="card-img" src="${currentProject.screenshot}" alt="${currentProject.title}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3>${currentProject.title}</h3>
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
            </div>
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

const showTechIcons = () => {
  const domString = `
  <img class="tech-icon" src="${regular.dotnet}" alt=".NET icon" />
  <img class="tech-icon" src="${regular.csharp}" alt="C# icon" />
  <img class="tech-icon" src="${regular.sql}" alt="SQL icon" />
  <img class="tech-icon" src="${regular.html}" alt="HTML5 icon" />
  <img class="tech-icon" src="${regular.css}" alt="CSS3 icon" />
  <img class="tech-icon" src="${regular.javascript}" alt="JS icon" />
  <img class="tech-icon" src="${regular.bootstrap}" alt="Bootstrap icon" />
  <img class="tech-icon" src="${regular.sass}" alt="Sass icon" />
  <img class="tech-icon" src="${regular.jquery}" alt="jQuery icon" />
  <img class="tech-icon"src="${regular.webpack}" alt="Webpack icon" />
  <img class="tech-icon" src="${regular.react}" alt="React icon" />
  `;
  printToDom('technologiesPage', domString);
};

const init = () => {
  projects();
  makeNavLinksWork();
  showTechIcons();
};

init();
