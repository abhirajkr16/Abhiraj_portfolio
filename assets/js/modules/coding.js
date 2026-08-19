async function loadCodingData() {

    try {

        const response =
            await fetch(
                `${API_BASE_URL}/coding`
            );

        if (!response.ok) {

            throw new Error(
                `Coding API failed: ${response.status}`
            );

        }

        const result =
            await response.json();

        if (!result.success) {

            throw new Error(
                "Coding API returned an unsuccessful response"
            );

        }

        const data =
            result.data;

        showCoding(data);

        updateCodingLastUpdated(
            data.lastUpdated
        );

        return data;

    } catch (error) {

        console.error(
            "Failed to load coding data:",
            error
        );

        return null;

    }

}
function updateCodingLastUpdated(timestamp) {

    const element =
        document.getElementById(
            "codingLastUpdated"
        );

    if (!element || !timestamp) return;

    const updatedAt =
        new Date(timestamp);

    const time =
        updatedAt.toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );

    element.textContent =
        `Last updated: ${time}`;

}
function showCoding(data) {

    if (!data) return;

    const leetcode = data.leetcode;
    const gfg = data.gfg;
    const summary = data.summary;
    const lastUpdated = data.lastUpdated;

    const leetcodeCard =
        document.getElementById("leetcode-card");

    const gfgCard =
        document.getElementById("gfg-card");

    const section =
        document.getElementById("coding");

    if (!leetcodeCard || !gfgCard || !section) return;


    section.dataset.leetcodeTotal =
        leetcode.total;

    section.dataset.gfgTotal =
        gfg.total;

    section.dataset.totalSolved =
        summary.totalSolved;

    section.dataset.goal =
        summary.goal;
    leetcodeCard
        .querySelector(
            ".coding-difficulty .difficulty-item:nth-child(1) strong"
        )
        .textContent = leetcode.easy;

    leetcodeCard
        .querySelector(
            ".coding-difficulty .difficulty-item:nth-child(2) strong"
        )
        .textContent = leetcode.medium;

    leetcodeCard
        .querySelector(
            ".coding-difficulty .difficulty-item:nth-child(3) strong"
        )
        .textContent = leetcode.hard;


    const leetcodeStats =
        leetcodeCard.querySelectorAll(
            ".coding-platform-stat strong"
        );

    if (leetcodeStats.length >= 3) {

        leetcodeStats[0].textContent = leetcode.acceptance;

        leetcodeStats[1].textContent = "9,79,360";

        leetcodeStats[2].textContent = 0;

    }


    gfgCard
        .querySelector(
            ".coding-difficulty .difficulty-item:nth-child(1) strong"
        )
        .textContent = gfg.easy;

    gfgCard
        .querySelector(
            ".coding-difficulty .difficulty-item:nth-child(2) strong"
        )
        .textContent = gfg.medium;

    gfgCard
        .querySelector(
            ".coding-difficulty .difficulty-item:nth-child(3) strong"
        )
        .textContent = gfg.hard;


    const gfgStats =
        gfgCard.querySelectorAll(
            ".coding-platform-stat strong"
        );

    if (gfgStats.length >= 3) {

        gfgStats[0].textContent = "327";

        gfgStats[1].textContent = "103";

        gfgStats[2].textContent = "561";
    }


    const goalProgress =
        document.querySelector(
            ".coding-goal-progress"
        );

    const goalPercentage =
        document.querySelector(
            ".coding-goal span"
        );


    const totalProblems =
        leetcode.total + gfg.total;


    const percentage =
        Math.min(
            (summary.totalSolved / summary.goal) * 100,
            100
        );


    if (goalProgress) {

        goalProgress.style.width = "0%";

    }


    if (goalPercentage) {

        goalPercentage.textContent =
            `${Math.round(percentage)}%`;

    }


    const goalText =
        document.querySelector(
            ".coding-goal-text"
        );

    if (goalText) {

        goalText.textContent =
            `Goal: ${summary.goal} Problems`;

    }


    // const statCards =
    //     document.querySelectorAll(
    //         ".coding-stat-card strong"
    //     );

    // if (statCards.length >= 3) {

    //     statCards[0].textContent =
    //         summary.projects;

    //     statCards[1].textContent =
    //         summary.internships;

    //     statCards[2].textContent =
    //         summary.technologies;

    // }


    const leetcodeRing =
        leetcodeCard.querySelector(
            ".progress-ring"
        );

    const gfgRing =
        gfgCard.querySelector(
            ".progress-ring"
        );


    const leetcodePercentage =
        Math.min(
            (leetcode.total / summary.goal) * 100,
            100
        );


    const gfgPercentage =
        Math.min(
            (gfg.total / summary.goal) * 100,
            100
        );


    if (leetcodeRing) {

        leetcodeRing.style.setProperty(
            "--progress",
            `${leetcodePercentage}%`
        );

    }


    if (gfgRing) {

        gfgRing.style.setProperty(
            "--progress",
            `${gfgPercentage}%`
        );

    }

}

function animateCounter(element, target, duration = 3000) {

    if (!element) return;

    const startTime = performance.now();

    function updateCounter(currentTime) {

        const elapsed = currentTime - startTime;

        const progress =
            Math.min(elapsed / duration, 1);

        const easedProgress =
            1 - Math.pow(1 - progress, 3);

        const currentValue =
            Math.floor(target * easedProgress);

        element.textContent = currentValue;

        if (progress < 1) {

            requestAnimationFrame(updateCounter);

        } else {

            element.textContent = target;

        }

    }

    requestAnimationFrame(updateCounter);

}


function initializeCodingAnimation() {

    const section =
        document.getElementById("coding");

    if (!section) return;


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;


                    section.classList.add(
                        "coding-visible"
                    );


                    const leetcodeTotal =
                        Number(
                            section.dataset.leetcodeTotal
                        );

                    const gfgTotal =
                        Number(
                            section.dataset.gfgTotal
                        );

                    const totalSolved =
                        Number(
                            section.dataset.totalSolved
                        );

                    const goal =
                        Number(
                            section.dataset.goal
                        );


                    animateCounter(
                        section.querySelector(
                            "#leetcode-card .progress-ring-inner strong"
                        ),
                        leetcodeTotal
                    );


                    animateCounter(
                        section.querySelector(
                            "#gfg-card .progress-ring-inner strong"
                        ),
                        gfgTotal
                    );


                    animateCounter(
                        section.querySelector(
                            ".coding-total-value"
                        ),
                        totalSolved
                    );


                    const goalProgress =
                        section.querySelector(
                            ".coding-goal-progress"
                        );


                    if (
                        goalProgress &&
                        goal > 0
                    ) {

                        const percentage =
                            Math.min(
                                (totalSolved / goal) * 100,
                                100
                            );


                        requestAnimationFrame(() => {

                            goalProgress.style.width =
                                `${percentage}%`;

                        });

                    }


                    observer.unobserve(section);

                });

            },
            {
                threshold: 0.2
            }
        );


    observer.observe(section);

}
// initializeCodingAnimation();

function initializeCodingRefresh() {

    const button =
        document.getElementById(
            "codingRefreshBtn"
        );

    if (!button) return;


    button.addEventListener(
        "click",
        async () => {

            button.classList.add(
                "refreshing"
            );

            button.disabled = true;


            try {

                const response =
                    await fetch(
                        `${API_BASE_URL}/coding/refresh`,
                        {
                            method: "POST"
                        }
                    );


                if (!response.ok) {

                    throw new Error(
                        `Refresh failed: ${response.status}`
                    );

                }


                const result =
                    await response.json();


                if (!result.success) {

                    throw new Error(
                        "Backend refresh failed"
                    );

                }


                showCoding(
                    result.data
                );

                updateCodingLastUpdated(
                    result.data.lastUpdated
                );


            } catch (error) {

                console.error(
                    "Failed to refresh coding statistics:",
                    error
                );


            } finally {

                button.classList.remove(
                    "refreshing"
                );

                button.disabled = false;

            }

        }
    );

}
function initializeCodingAutoRefresh() {

    const refreshInterval =
        5 * 60 * 1000;

    setInterval(async () => {

        try {

            const response =
                await fetch(
                    `${API_BASE_URL}/coding/refresh`,
                    {
                        method: "POST"
                    }
                );

            if (!response.ok) {

                throw new Error(
                    `Auto refresh failed: ${response.status}`
                );

            }

            const result =
                await response.json();

            if (!result.success) {

                throw new Error(
                    "Auto refresh returned an unsuccessful response"
                );

            }

            showCoding(
                result.data
            );

            console.log(
                "Coding statistics automatically refreshed"
            );

        } catch (error) {

            console.error(
                "Automatic coding refresh failed:",
                error
            );

        }

    }, refreshInterval);

}
// loadCodingData();

// initializeCodingRefresh();

