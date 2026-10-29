/* =========================================
   EXPERIENCE MODULE
   Centered infinite carousel
   2.5-second pause + smooth slide
========================================= */

function showExperience(experiences) {
  const container = document.getElementById("experienceContainer");

  if (!container || !Array.isArray(experiences) || experiences.length === 0) {
    return;
  }

  // Clean up an existing carousel before re-rendering.
  if (container._experienceCleanup) {
    container._experienceCleanup();
  }

  container.innerHTML = `
        <div class="experience-slider" aria-label="Professional experience">
            <div class="experience-track"></div>
        </div>
    `;

  const slider = container.querySelector(".experience-slider");
  const track = container.querySelector(".experience-track");

  // One full-width slide per experience.
  track.innerHTML = experiences
    .map(
      (experience) => `
        <div class="experience-slide">
            ${createExperienceCard(experience)}
        </div>
    `,
    )
    .join("");

  // Clone the first card for a seamless transition back to the start.
  if (experiences.length > 1) {
    track.insertAdjacentHTML(
      "beforeend",
      `
                <div class="experience-slide" aria-hidden="true">
                    ${createExperienceCard(experiences[0], true)}
                </div>
            `,
    );
  }

  let currentIndex = 0;
  let timer = null;
  let isPaused = false;
  let isTransitioning = false;
  let destroyed = false;

  const PAUSE_DURATION = 2500;
  const TRANSITION_DURATION = 600;

  // Disable the continuous marquee animation from the previous CSS.
  track.style.animation = "none";
  track.style.width = "100%";
  track.style.display = "flex";
  track.style.gap = "0";
  track.style.transition = "none";
  track.style.transform = "translate3d(0, 0, 0)";
  track.style.willChange = "transform";

  slider.style.overflow = "hidden";

  // Every slide occupies the complete carousel viewport.
  track.querySelectorAll(".experience-slide").forEach((slide) => {
    slide.style.flex = "0 0 100%";
    slide.style.width = "100%";
    slide.style.minWidth = "0";
    slide.style.display = "flex";
    slide.style.justifyContent = "center";
    slide.style.alignItems = "stretch";
  });

  // Center each card independently of its width.
  track.querySelectorAll(".experience-card").forEach((card) => {
    card.style.width = "min(100%, 900px)";
    card.style.maxWidth = "900px";
    card.style.marginLeft = "auto";
    card.style.marginRight = "auto";
    card.style.flex = "0 1 900px";
  });

  function clearTimer() {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function moveTo(index, animate = true) {
    track.style.transition = animate
      ? `transform ${TRANSITION_DURATION}ms cubic-bezier(0.22, 0.61, 0.36, 1)`
      : "none";

    track.style.transform = `translate3d(-${index * 100}%, 0, 0)`;
  }

  function scheduleNext() {
    clearTimer();

    if (destroyed || isPaused || experiences.length < 2) {
      return;
    }

    timer = setTimeout(() => {
      if (destroyed || isPaused || isTransitioning) {
        return;
      }

      isTransitioning = true;
      currentIndex++;

      moveTo(currentIndex, true);
    }, PAUSE_DURATION);
  }

  function handleTransitionEnd(event) {
    if (event.target !== track || event.propertyName !== "transform") {
      return;
    }

    isTransitioning = false;

    // The cloned first card is visually identical to the real first card.
    // Jump back without animation after reaching the clone.
    if (currentIndex === experiences.length) {
      currentIndex = 0;
      moveTo(0, false);
    }

    scheduleNext();
  }

  function pauseCarousel() {
    isPaused = true;
    clearTimer();
  }

  function resumeCarousel() {
    isPaused = false;

    if (!isTransitioning) {
      scheduleNext();
    }
  }

  function handlePointerEnter() {
    pauseCarousel();
  }

  function handlePointerLeave() {
    resumeCarousel();
  }

  function handleFocusIn() {
    pauseCarousel();
  }

  function handleFocusOut(event) {
    if (!slider.contains(event.relatedTarget)) {
      resumeCarousel();
    }
  }

  track.addEventListener("transitionend", handleTransitionEnd);

  slider.addEventListener("pointerenter", handlePointerEnter);
  slider.addEventListener("pointerleave", handlePointerLeave);
  slider.addEventListener("focusin", handleFocusIn);
  slider.addEventListener("focusout", handleFocusOut);

  // Start at the first centered card and wait 2.5 seconds.
  moveTo(0, false);
  scheduleNext();

  // Allow safe cleanup if the experience section is rendered again.
  container._experienceCleanup = function () {
    destroyed = true;
    clearTimer();

    track.removeEventListener("transitionend", handleTransitionEnd);
    slider.removeEventListener("pointerenter", handlePointerEnter);
    slider.removeEventListener("pointerleave", handlePointerLeave);
    slider.removeEventListener("focusin", handleFocusIn);
    slider.removeEventListener("focusout", handleFocusOut);
  };
}

/* =========================================
   EXPERIENCE CARD
========================================= */

function createExperienceCard(experience, isClone = false) {
  const highlights = Array.isArray(experience.highlights)
    ? experience.highlights
    : [];

  const technologies = Array.isArray(experience.technologies)
    ? experience.technologies
    : [];

  return `
        <article class="experience-card"${isClone ? ' aria-hidden="true"' : ""}>
            <div class="experience-header">
                <div class="experience-logo">
                    <img
                        src="./assets/images/experience/${experience.logo}"
                        alt="${experience.company || "Company"} logo"
                        loading="lazy"
                        decoding="async"
                    >
                </div>

                <div class="experience-info">
                    <span class="experience-status">
                        ${experience.status || ""}
                    </span>

                    <h3 class="experience-role">
                        ${experience.role || ""}
                    </h3>

                    <h4 class="experience-company">
                        ${experience.company || ""}
                    </h4>

                    <div class="experience-meta">
                        <span>
                            <i class="far fa-calendar-alt" aria-hidden="true"></i>
                            ${experience.duration || ""}
                        </span>

                        <span>
                            <i class="fas fa-location-dot" aria-hidden="true"></i>
                            ${experience.location || ""}
                        </span>
                    </div>
                </div>
            </div>

            <div class="experience-body">
                <p class="experience-description">
                    ${experience.description || ""}
                </p>

                <div class="experience-responsibilities">
                    <h4>Key Responsibilities</h4>

                    <ul>
                        ${highlights
                          .map(
                            (item) => `
                            <li>
                                <i class="fas fa-check-circle" aria-hidden="true"></i>
                                <span>${item}</span>
                            </li>
                        `,
                          )
                          .join("")}
                    </ul>
                </div>

                <div class="experience-technologies">
                    ${technologies
                      .map(
                        (tech) => `
                        <span>${tech}</span>
                    `,
                      )
                      .join("")}
                </div>
            </div>
        </article>
    `;
}
