/*
// Define an object to map routes to HTML pages
const routes = {
    '/': 'index.html',
    '/about': 'about.html',
    '/contact': 'contact.html',
    // Add more routes as needed
};

// Function to handle routing
function handleRoute() {
    // Get the current URL path
    const path = window.location.pathname;

    // Check if the path exists in the routes object
    if (routes.hasOwnProperty(path)) {
        // Load the corresponding HTML page
        const page = routes[path];
        fetch(page)
            .then(response => response.text())
            .then(html => {
                // Replace the content of the <body> element with the loaded HTML
                document.body.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading page:', error);
            });
    } else {
        // Handle 404 - Page not found
        console.error('Page not found');
    }
}

// Call the handleRoute function when the page loads or when the URL changes
window.addEventListener('load', handleRoute);
window.addEventListener('popstate', handleRoute);
*/

// create document click that watches the nav links only
document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("nav-item a")) {
        return;
    }
    e.preventDefault();
    routing();
});

const routes = {
    "/": {
        template: "index.html",
        title: "Home"
    },
    "/about": {
        template: "about.html",
        title: "About"
    },
    "/contact": {
        template: "contact.html",
        title: "Contact"
    },
    "/programs": {
        template: "programs.html",
        title: "Community & Programs"
    },
    "/features": {
        template: "features.html",
        title: "Features"
    },
};

const routing = (event) => {
    event = event || window.event; // get window.event if event argument not provided
    event.preventDefault();
    // window.history.pushState(state, unused, target link);
    window.history.pushState({}, "", event.target.href);
    locationHandler();
};

const locationHandler = async () => {
    const url = window.location.pathname;
    let lastSlashIndex = url.lastIndexOf('/');
    let location = url.slice(lastSlashIndex);

    // get the route object from the urlRoutes object
    const route = routes[location] || routes["/"];
    console.log(route.template);
    // get the html from the template
    //const html = await fetch(route.template).then((response) => response.text());

    fetch(route.template)
    .then(response => response.text())
    .then(html => {
        document.body.innerHTML = html;
    })
    .catch(error => {
        console.error('Error loading page:', error);
    });

    // set the content of the content div to the html
    //document.getElementById("content").innerHTML = html;

    // set the title of the document to the title of the route
    document.title = route.title;
    // set the description of the document to the description of the route
};

// add an event listener to the window that watches for url changes
window.onpopstate = locationHandler;
// call the urlLocationHandler function to handle the initial url
//window.route = routing;
// call the urlLocationHandler function to handle the initial url
//locationHandler();