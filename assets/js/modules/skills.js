function showSkills(data) {

    const container = document.getElementById("skillsContainer");

    let html = "";

    data.forEach(category => {

        html += `

            <div class="skill-category">

                <h3 class="skill-category-title">
                    ${category.category}
                </h3>

                <div class="skill-grid">

        `;

        category.skills.forEach(skill => {

            html += `

                <div class="skill-card">

                    <img
                        src="${skill.icon}"
                        alt="${skill.name}"
                    >

                    <span>
                        ${skill.name}
                    </span>

                </div>

            `;

        });

        html += `

                </div>

            </div>

        `;

    });

    container.innerHTML = html;

}