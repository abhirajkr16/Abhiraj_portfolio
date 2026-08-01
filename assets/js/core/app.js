/* App Bootstrap */

$(document).ready(function () {
    // Skills

    fetchData().then(data => {

        showSkills(data);

    });

    fetchData("projects").then(data => {
        // Projects
        showProjects(data);

    });

});