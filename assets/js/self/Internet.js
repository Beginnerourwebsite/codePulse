
// filterandfind()
function internetOrother(time = "show", type = "danger", data = "Please Connect Internet") {
    let tags = `<div>
    <div class="alert alert-${type} position-fixed w-50  " style="font-size: medium;right: 20px;z-index:5;bottom: 0;"
    role="alert">
    ${data}
    <span style="position: absolute; right: 10px;cursor: pointer;" onclick="hidealert(this)">x</span>
    </div>
    </div>`
    if (time != "show") {
      document.getElementById("alerts").style.display = "none";
    }
    else {
      document.getElementById("alerts").style.display = "block";
  
    }
    document.getElementById("alerts").innerHTML = tags;
  
  }
window.addEventListener('online', getData);
window.addEventListener('offline', getData);
async function getData() {
    if (navigator.onLine) {

        internetOrother("show", "success", "connected successfully")


       
        setTimeout(function () {
            internetOrother("hide")
        }, 2000)

    }
    else {
        internetOrother()
       
    }
    // document.getElementById("search").addEventListener("keyup", filterandfind(result))
}
getData()