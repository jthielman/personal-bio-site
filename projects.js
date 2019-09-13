console.log('Lifewrit');

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
                <h4>${currentProject.title}</h4>
                <img src="${currentProject.screenshot}" alt="${currentProject.title}">
                <p>${currentProject.description}</p>
                <div>
                    <h5>Technologies used:</h5>
                    <p>${currentProject.technologiesUsed}</p>
                </div>
                <div><a href="${currentProject.url}">Link</a></div>
                <div><a href="${currentProject.githubUrl}">GitHub</a></div>
            </div>
            `;
        }
    }
    printToDom("projectsPage", domString);
}

const init = () => {
    createProjectCards(projects);
}

init();
