$(document).ready(function () {

    fetchData().then(data => {

        showSkills(data);

    });

    fetchData("projects").then(data => {

        showProjects(data);

    });

    fetchData("experience").then(data => {

        showExperience(data);

    });

    fetchData("blog").then(data => {

        showBlogs(data);

    });

});