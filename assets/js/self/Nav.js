const apiUrl = './assets/js/self/Api.json';
function ApiurlFetch(match = "") {
    return new Promise(function (resolve, reject) {
        fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // console.clear();
                createNavbar(data);
                if (match != "") {

                    resolve(data.findIndex(x => x.url.split("./")[1] == match.split("/")[1]))
                }

            })
            .catch(function (error) {
                console.error('Error fetching data:', error);
            });
    })
}
ApiurlFetch()
function createNavbar(apiData) {



    let navbarHTML = '';
    apiData.forEach((menuItem, index) => {
        if (menuItem.submenu) {

            navbarHTML += `<li class="has-sub"> <a href="${menuItem.url}">${menuItem.icon}<span class="title">${menuItem.label}</span></a>
            <ul >`;
            menuItem.submenu.forEach(subItem => {

                navbarHTML += `<li> <a href="${subItem.subUrl}">${subItem.icon}<span
                class="title">${subItem.subname}</span></a> </li>`;
            });
            navbarHTML += `</ul></li>`;
        } else {
            navbarHTML += `<li id="${index}" onclick="activateOrNot(this)" > <a href="${menuItem.url}" >${menuItem.icon}<span
            class="title" >${menuItem.label}</span></a> </li>`;
        }
    });
    document.getElementById('main-menu').innerHTML = navbarHTML;

}

function activateOrNot(a) {
    
    sessionStorage.setItem('active', (a.id));

}

window.addEventListener("load", async function () {
    console.log(window.location.pathname)
    let index = await ApiurlFetch(window.location.pathname)
    console.log(index)
    sessionStorage.setItem('active', index)

    // console.log("first")
    setTimeout(async () => {
        let sessionStoragedata = sessionStorage.getItem('active')
        if (sessionStoragedata == null) {
            document.getElementById(sessionStorage.getItem('active')).setAttribute("class", 'active');

        }
        else {
            document.getElementById(sessionStorage.getItem('active')).setAttribute("class", 'active');
        }
    }, 1000)
    // document.getElementById(sessionStorage.getItem('active')).setAttribute("class", 'active');
})

// navbar code end


function Addclass(self, className) {
    self.classList.add(className);
}
function removeclass(self, className) {
    self.classList.remove(className);
}

let titletag = document.querySelector("title")
if (titletag == null) {
    let createTitleTag = document.createElement("title")
    createTitleTag.innerHTML = "Code Pulse"
}
else {
    titletag.innerHTML = "Code Pulse"
}
let logoLink = document.querySelector("link[rel='icon'")

if (logoLink == null) {
    let createLogoLink = document.createElement("link")
    createLogoLink.rel = "icon"
    createLogoLink.href = "./assets/images/logo-removebg-preview.png"
}
else {
    logoLink.href = "./assets/images/logo-removebg-preview.png"
}
{/* <link rel="icon" href="./assets/images/logo.png"> */ }
