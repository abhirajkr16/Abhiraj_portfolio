/* App Bootstrap */

$(document).ready(function () {

    // Skills

    fetchData().then(data => {
        showSkills(data);
    });

    // Projects

    fetchData("projects").then(data => {
        showProjects(data);
    });

});