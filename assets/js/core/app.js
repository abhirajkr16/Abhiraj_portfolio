/* ==========================================================================
   Core App Entrypoint / Bootstrapper
   ========================================================================== */

$(document).ready(function () {

    // Fetch and render Skills
    fetchData().then(data => {
        showSkills(data);
    });

    // Fetch and render Projects preview
    fetchData("projects").then(data => {
        showProjects(data);
    });

});
