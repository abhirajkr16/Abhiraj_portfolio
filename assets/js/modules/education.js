async function showEducation() {

    const response = await fetch("./data/education.json");

    const education = await response.json();

    const container = document.getElementById("educationContainer");

    let html = "";

    education.forEach((item, index) => {

        html += `

            <div class="education-item">

                <div class="education-node ${item.current ? "current" : ""}"></div>

                <div class="education-card">

                    <div class="education-logo">

                        <img
                            src="${item.logo}"
                            alt="${item.degree}">

                    </div>

                    <div class="education-content">

                        <span class="education-status ${item.current ? "active" : ""}">

                            ${item.status}

                        </span>

                        <h3>

                            ${item.degree}

                        </h3>

                        <h4>

                            ${item.college}

                        </h4>

                        <div class="education-tags">

                            ${item.semester ? `<span>${item.semester}</span>` : ""}

                            ${item.cgpa ? `<span>${item.cgpa} CGPA</span>` : ""}

                            ${item.percentage ? `<span>${item.percentage}</span>` : ""}

                            <span>

                                ${item.duration ?? item.year}

                            </span>

                        </div>

                    </div>

                </div>

            </div>

        `;

    });

    container.innerHTML = html;

}

showEducation();