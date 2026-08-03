$(document).ready(function () {

    fetchData().then(data => {

        showSkills(data);

    });



    fetchData("experience").then(data => {

        showExperience(data);

    });



});