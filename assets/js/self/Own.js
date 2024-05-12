// navbar code start
/*
 {
        "label": "Upload",
        "url": "#",
        "icon": "<i class='fa-solid fa-cloud'></i>",
        "submenu": [
            {
                "subname": "File",
                "subUrl": "file.html",
                "icon": "<i class='fa-solid fa-file-export'></i>"
            },
            {
                "subname": "Link",
                "subUrl": "Link.html",
                "icon": "<i class='fa-solid fa-link'></i>"
            }
        ]
    },


*/



// map code start
function lonandlag() {
    let inputValue = document.getElementById("searchMap").value

    let data = inputValue.split(",")
    if (inputValue.length > 0) {

        if (data.length == 2) {
            longandleg(data[0], data[1])
        }

        else {
            alert("please choose option not write manually")
            document.getElementById("searchMap").value=""
        }
    }
}
var map = null;

function longandleg(data1=20.593684,data2=78.96288) {
 
    if (map !== null) {
        map.off();
        map.remove(); // Remove the existing map if it exists
    }

    map = L.map('map').setView([data1, data2], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([data1, data2]).addTo(map)
        .bindPopup('Your Location')
        .openPopup();
}

longandleg()

function Tracklocation(){
    if (navigator.geolocation) {
        // navigator.geolocation.getCurrentPosition(showPosition, showError);
       (navigator.geolocation.getCurrentPosition(data=>{
        longandleg(data.coords.latitude, data.coords.longitude)
        }))
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}


// map code end
