function Notificationdata(type, data = "") {
  let tags = ""
  tags = ` <div class="alert alert-${type} position-fixed w-50  "   style="font-size: medium;right: 20px;z-index:5;" role="alert">
              ${data}
              <span style="position: absolute; right: 10px;cursor: pointer;" onclick="hidealert(this)"><i class="fa-solid fa-xmark"></i></span>
              </div>`
  let AlertTag = document.getElementById("alerts")
  console.log(tags, AlertTag)
  AlertTag.innerHTML = tags;
}


function ConfirmNotification(type, data = "", work) {
  let tags = `
  <div style="display: flex;justify-content: center;width:100%; margin-left: -20px;">
                    <div class="alert alert-${type}  position-sticky  w-auto" role="alert"
                        style="font-size: medium;min-width: 200px;">
                        <!-- <span style="position: absolute; right: 10px;cursor: pointer;font-weight: bolder;padding: 10px; " onclick="this.parentElement.style.display='none'"><i class="fa-solid fa-xmark"></i></span> -->
                        <p class="pe-5">${data}</p>
                        <br>
                        <p align="right"><button class="btn btn-success me-2"
                                onclick="confirmmessage(this,2,true)">ok</button><button class="btn btn-danger"
                                onclick="cencelbtn(this,2,false)">cencel</button></p>
                    </div>
                </div>
`


  document.getElementById("alerts").innerHTML = tags;

}
let AlertTag = document.getElementById("alerts")
if (AlertTag == null) {
  let alertsdiv = document.createElement("div")
  alertsdiv.id = "alerts"
  alertsdiv.style.display = "none"
  document.querySelector(".main-content").prepend(alertsdiv)

}
function alertsshowandhide(type, data = "", time = 1500) {

  Notificationdata(type, data)

  document.getElementById("alerts").style.display = "block";
  setTimeout(function () {
    document.getElementById("alerts").style.display = "none";

  }, time)

}
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

function hidealert(self, parentCount = 1) {
  let parentElement = self
  for (let i = 0; i < parentCount; i++) {
    parentElement = parentElement.parentElement;
  }
  parentElement.style.display = "none";

}


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
 function getData() {
  if (navigator.onLine) {

    internetOrother("show", "success", "connected successfully")


    setTimeout(function () {
      internetOrother("hide")
    }, 2000)
    
    return "online"
  }
  else {
    internetOrother()
    return "offline"
  }
  // document.getElementById("search").addEventListener("keyup", filterandfind(result))
}
getData()//it returns online or offline