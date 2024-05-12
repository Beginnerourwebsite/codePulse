
function readFileAsBase64(data = "", file) {

    return new Promise((res, rej) => {
        let obj = { ...timeanddate() }
        if (typeof (data) != "string") {
            let bytes = file.size
            if (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
            else if (bytes >= 1048576) { bytes = (bytes / 1048576).toFixed(2) + " MB"; }
            else if (bytes >= 1024) { bytes = (bytes / 1024).toFixed(2) + " KB"; }
            else if (bytes > 1) { bytes = bytes + " bytes"; }
            else if (bytes == 1) { bytes = bytes + " byte"; }
            else { bytes = "0 bytes"; }

            var reader = new FileReader();
            reader.onload = function (event) {
                var base64 = event.target.result;

                obj.name = file.name
                obj.type = file.type
                obj.size = bytes
                obj.url = base64,

                    res(obj)
            };

            reader.readAsDataURL(file);
            // return 
        }
        else {
            var base64Text = btoa(data); // btoa() function encodes text to Base64
            // Construct the data URL with Base64-encoded text
            var dataUrl = `data:${file};base64,${base64Text}`;
            obj.url = dataUrl
            obj.type = file

            res(obj)
        }
    })
}

function timeanddate() {
    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let timeStatus = "PM"
    if (JSON.stringify(new Date().getHours()).length == 1) {
        timeStatus = 'AM'
    }
    let dateObj = {
        date: `${new Date().getDate()} ${month[[new Date().getMonth()]]},${new Date().getFullYear()}`,
        time: `${JSON.stringify(new Date().getHours()).padStart(2, 0)}:${new Date().getMinutes()} ${timeStatus}(${week[new Date().getDay()]})`,
        year: new Date().getFullYear()
    }
    return dateObj;
}