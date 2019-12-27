import 'bootstrap';

const projects = [
  {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-10/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-10/js-part-deux"
  },
    {
    title: "Cooler Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the betterest project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-10/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-10/js-part-deux"
  }
]

const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML = stringToPrint;
}

const createProjectCards = (projectsArr) => {
    let domString = '';
    for (let i = 0; i < projectsArr.length; i++) {
        const currentProject = projectsArr[i];
        if (currentProject.available) {
            domString += `
            <div class="card">
                <h3>${currentProject.title}</h3>
                <img src="${currentProject.screenshot}" alt="${currentProject.title}">
                <p>${currentProject.description}</p>
                <div>
                    <h4>Technologies used:</h4>
                    <p>${currentProject.technologiesUsed}</p>
                </div>
                <div><a href="${currentProject.url}">Link</a></div>
                <div><a href="${currentProject.githubUrl}">GitHub</a></div>
            </div>
            `;
        }
    }
    printToDom("projectsContainer", domString);
}

const makeNavLinksWork = () => {
    const navLinks = document.getElementById('navLinks');
    const links = navLinks.querySelectorAll('a')
    for (i = 0; i < links.length; i++) {
        links[i].addEventListener('click', (e) => {
            e.preventDefault();
            const pages = document.getElementsByClassName('fullPage');
            for (i = 0; i < pages.length; i++) {
                pages[i].className  = 'fullPage hide'; 
            }
            let page = document.getElementById(`${e.target.id.substring(5).toLowerCase()}Page`)
            page.className = 'fullPage'
            //console.log(pages.className);
        })
    }
}

const init = () => {
    createProjectCards(projects);
    makeNavLinksWork();
}

init();
