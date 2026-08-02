/* ==========================================================================
   Blog Module
   ========================================================================== */

function showBlogs(blogs) {

    const container = document.getElementById("blogContainer");

    if (!container) return;

    let html = "";

    blogs.forEach(blog => {

        html += `
        <article class="blog-card">

            <div class="blog-image">

                <img
                    src="./assets/images/blog/${blog.image}"
                    alt="${blog.title}">

            </div>

            <div class="blog-content">

                <span class="blog-category">

                    ${blog.category}

                </span>

                <h3>

                    ${blog.title}

                </h3>

                <p>

                    ${blog.description}

                </p>

                <div class="blog-meta">

                    <span>

                        <i class="far fa-calendar"></i>

                        ${blog.date}

                    </span>

                    <span>

                        <i class="far fa-clock"></i>

                        ${blog.readTime}

                    </span>

                </div>

                <div class="blog-tags">

                    ${blog.tags.map(tag => `
                        <span>${tag}</span>
                    `).join("")}

                </div>

                <a
                    href="${blog.link}"
                    class="btn btn-secondary">

                  
                    Comming Soon

                </a>

            </div>

        </article>
        `;

    });

    container.innerHTML = html;

}