function showProjects(projects) {

  const featuredContainer = document.getElementById("featuredProject");
  const projectsContainer = document.getElementById("projectsContainer");

  const featuredProject = projects.find(project => project.featured);

  const otherProjects = projects.filter(project => !project.featured);

  if (featuredProject) {

    featuredContainer.innerHTML = createFeaturedProject(featuredProject);

  }

  let html = "";

  otherProjects.forEach(project => {

    html += createProjectCard(project);

  });

  projectsContainer.innerHTML = html;

}

function createFeaturedProject(project) {

  return `

    <article class="featured-project">

        <div class="featured-image">

            <img
                src="./assets/images/projects/${project.image}"
                alt="${project.title}">

        </div>

        <div class="featured-content">

            <span class="project-category">

                ${project.category}

            </span>

            <h3>

                ${project.title}

            </h3>

            <h4>

                ${project.subtitle}

            </h4>

           <p>

${project.description}

</p>

<div class="project-highlights">

    <h5>

        Highlights

    </h5>

    <ul>

        ${project.highlights.map(item => `

            <li>

                <i class="fas fa-check-circle"></i>

                ${item}

            </li>

        `).join("")}

    </ul>

</div>

            <div class="project-tech">

                ${project.technologies.map(technology => `

                    <span>

                        ${technology}

                    </span>

                `).join("")}

            </div>

            <div class="project-actions">

                <a
                    href="${project.github}"
                    target="_blank"
                    class="btn btn-secondary">

                    <i class="fab fa-github"></i>

                    GitHub

                </a>

                ${project.demo ?

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

    </article>

    `;

}

function createProjectCard(project) {

  return `

    <article class="project-card">

        <div class="project-image">

            <img
                src="./assets/images/projects/${project.image}"
                alt="${project.title}">

        </div>

        <div class="project-content">

            <span class="project-category">

                ${project.category}

            </span>

            <h3>

                ${project.title}

            </h3>

            <p>

                ${project.description}

            </p>

            <div class="project-tech">

                ${project.technologies.slice(0, 4).map(technology => `

                    <span>

                        ${technology}

                    </span>

                `).join("")}

            </div>

            <div class="project-actions">

                <a
                    href="${project.github}"
                    target="_blank"
                    class="btn btn-secondary">

                    GitHub

                </a>

                ${project.demo ?

      `

                <a
                    href="${project.demo}"
                    target="_blank"
                    class="btn btn-primary">

                    Demo

                </a>

                `

      :

      ""

    }

            </div>

        </div>

    </article>

    `;

}