async function fetchData(type = "skills") {

    let path = "";

    switch (type) {

        case "skills":

            path = "skills.json";

            break;

        case "projects":

            path = "./projects/projects.json";

            break;

        case "experience":

            path = "./experience/experience.json";

            break;
        case "blog":

            path = "./blog/blog.json";

            break;

        default:

            console.error("Unknown data type:", type);

            return [];

    }

    const response = await fetch(path);

    return await response.json();

}