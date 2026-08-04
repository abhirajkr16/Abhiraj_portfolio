let blogs = [];
let currentBlog = 0;

let blogStartX = 0;
let blogEndX = 0;

const blogSwipeThreshold = 60;

async function loadBlogs() {

    try {

        const response = await fetch("./data/blog.json");

        blogs = await response.json();

        renderBlogs();

        initializeBlogSwipe();

    }

    catch (error) {

        console.error(error);

    }

}

function renderBlogs() {

    const track = document.getElementById("blogTrack");

    const pagination = document.getElementById("blogPagination");

    if (!track || !pagination) return;

    track.innerHTML = blogs
        .map(blog => `
        <div class="blog-slide">
            ${createBlogCard(blog)}
        </div>
    `)
        .join("");

    pagination.innerHTML = blogs
        .map((blog, index) =>

            `
            <button
                class="${index === 0 ? "active" : ""}"
                data-index="${index}">
            </button>
            `

        ).join("");

    document.querySelectorAll("#blogPagination button").forEach(button => {

        button.addEventListener("click", function () {

            currentBlog = Number(this.dataset.index);

            updateBlogSlider();

        });

    });
    updateBlogSlider(false);

}

function updateBlogSlider(animate = true) {

    const track = document.getElementById("blogTrack");

    if (!track) return;

    if (animate) {

        track.classList.remove("blog-track-animate");

        void track.offsetWidth;

        track.classList.add("blog-track-animate");

    }

    track.style.transform = `translateX(-${currentBlog * 100}%)`;

    document
        .querySelectorAll("#blogPagination button")
        .forEach((button, index) => {

            button.classList.toggle("active", index === currentBlog);

        });

}
function initializeBlogSwipe() {

    const track = document.getElementById("blogTrack");

    if (!track) return;

    track.addEventListener("touchstart", (e) => {

        blogStartX = e.touches[0].clientX;

    });

    track.addEventListener("touchmove", (e) => {

        blogEndX = e.touches[0].clientX;

    });

    track.addEventListener("touchend", () => {

        const distance = blogStartX - blogEndX;

        if (Math.abs(distance) < swipeThreshold) return;

        if (distance > 0 && currentBlog < blogs.length - 1) {

            currentBlog++;

        }

        else if (distance < 0 && currentBlog > 0) {

            currentBlog--;

        }

        updateBlogSlider();

        blogStartX = 0;
        blogEndX = 0;

    });

}
function createBlogCard(blog) {

    return `

    <article class="blog-card">

        <div class="blog-image">

            <img
                src="./assets/images/projects/${blog.image}"
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

                    <span>

                        ${tag}

                    </span>

                `).join("")}

            </div>

            <a
                href="${blog.link}"
                class="btn btn-secondary">

                Coming Soon

            </a>

        </div>

    </article>

    `;

}

loadBlogs();