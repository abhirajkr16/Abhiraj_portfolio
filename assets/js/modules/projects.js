let projects = [];

let currentProject = 0;

let startX = 0;
let endX = 0;

const swipeThreshold = 60;

async function loadProjects() {

    try {

        const response = await fetch("./data/projects.json")

        projects = await response.json();

        renderProjects();

        initializeProjectSwipe();

    } catch (error) {

        console.error(error);

    }

}

function renderProjects() {

    const track = document.getElementById("projectsTrack");

    const pagination = document.getElementById("projectsPagination");

    track.innerHTML = projects
        .map(project => `<div class="project-slide">${createProject(project)}</div>`)
        .join("");

    pagination.innerHTML = projects
        .map((project, index) =>

            `
            <button
                class="pagination-dot ${index === 0 ? "active" : ""}"
                data-index="${index}">
            </button>
            `

        ).join("");

    document.querySelectorAll(".pagination-dot").forEach(dot => {

        dot.addEventListener("click", function () {

            currentProject = Number(this.dataset.index);

            updateSlider();

        });

    });
    updateSlider(false);

}

function updateSlider(animate = true) {

    const track = document.getElementById("projectsTrack");

    if (!track) return;

    if (animate) {

        track.classList.remove("project-track-animate");

        void track.offsetWidth;

        track.classList.add("project-track-animate");

    }

    track.style.transform = `translateX(-${currentProject * 100}%)`;

    document.querySelectorAll(".pagination-dot").forEach((dot, index) => {

        dot.classList.toggle("active", index === currentProject);

    });

}
function initializeProjectSwipe() {

    const track = document.getElementById("projectsTrack");

    if (!track) return;

    track.addEventListener("touchstart", (e) => {

        startX = e.touches[0].clientX;

    });

    track.addEventListener("touchmove", (e) => {

        endX = e.touches[0].clientX;

    });

    track.addEventListener("touchend", () => {

        const distance = startX - endX;

        if (Math.abs(distance) < swipeThreshold) return;

        if (distance > 0) {

            currentProject = (currentProject + 1) % projects.length;

        } else {

            currentProject =
                (currentProject - 1 + projects.length) % projects.length;

        }

        updateSlider();

        startX = 0;
        endX = 0;

    });

}
function createProject(project) {

    return `

    <article class="project-card">

        <div class="project-header">

            <div class="project-badges">

                <span class="project-status">

                    ${project.status}

                </span>

                <span class="project-type">

                    ${project.type}

                </span>

            </div>

            <h2 class="project-title">

                ${project.title}

            </h2>

            <h3 class="project-subtitle">

                ${project.subtitle}

            </h3>

            <p class="project-description">

                ${project.description}

            </p>

        </div>

        <div class="project-body">

            <div class="project-image">

                <img
                    src="./assets/images/projects/${project.image}"
                    alt="${project.title}">

            </div>

            <div class="project-right">

                <div class="project-section">

                    <h5>

                        Key Features

                    </h5>

                    <div class="feature-grid">

                        ${project.features.map(feature =>

        `
                            <div class="feature-item">

                                <i class="fas fa-check-circle"></i>

                                <span>${feature}</span>

                            </div>
                            `

    ).join("")}

                    </div>

                </div>

                <div class="project-section">

                    <h5>

                        Built With

                    </h5>

                    <div class="tech-grid">

                        ${Object.entries(project.techStack).map(([category, technologies]) =>

        `
                            <div class="tech-column">

                                <h6>

                                    ${category}

                                </h6>

                                ${technologies.map(technology =>

            `
                                    <span>

                                        ${technology}

                                    </span>
                                    `

        ).join("")}

                            </div>
                            `

    ).join("")}

                    </div>

                </div>

                <div class="project-actions">

                    <a
                        href="${project.github}"
                        target="_blank"
                        class="btn btn-secondary">

                        <i class="fab fa-github"></i>

                        GitHub

                    </a>

                    ${project.demo !== "#"

            ?

            `
                    <a
                        href="${project.demo}"
                        target="_blank"
                        class="btn btn-primary">

                        <i class="fas fa-arrow-up-right-from-square"></i>

                        Live Demo

                    </a>
                    `

            :

            ""

        }

                </div>

            </div>

        </div>

    </article>

    `;

}

loadProjects();