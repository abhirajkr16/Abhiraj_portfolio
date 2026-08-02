/* ==========================================================================
   Experience Module
   ========================================================================== */

function showExperience(experiences) {

    const container = document.getElementById("experienceContainer");

    let html = "";

    experiences.forEach(experience => {

        html += createExperienceCard(experience);

    });

    container.innerHTML = html;

}

function createExperienceCard(experience) {

    return `

    <article class="experience-card">

        <div class="experience-header">

            <div class="experience-logo">

                <img
                    src="./assets/images/experience/${experience.logo}"
                    alt="${experience.company}">

            </div>

            <div class="experience-title">

                <span class="experience-status">

                    ${experience.status}

                </span>

                <h3>

                    ${experience.role}

                </h3>

                <h4>

                    ${experience.company}

                </h4>

                <p class="experience-duration">

                    <i class="far fa-calendar-alt"></i>

                    ${experience.duration}

                </p>

                <p class="experience-location">

                    <i class="fas fa-location-dot"></i>

                    ${experience.location}

                </p>

            </div>

        </div>

        <div class="experience-body">

            <p class="experience-description">

                ${experience.description}

            </p>

            <div class="experience-highlights">

                <h5>

                    Key Responsibilities

                </h5>

                <ul>

                    ${experience.highlights.map(item => `

                        <li>

                            <i class="fas fa-check-circle"></i>

                            ${item}

                        </li>

                    `).join("")}

                </ul>

            </div>

            <div class="experience-tech">

                ${experience.technologies.map(tech => `

                    <span>

                        ${tech}

                    </span>

                `).join("")}

            </div>

        </div>

    </article>

    `;

}