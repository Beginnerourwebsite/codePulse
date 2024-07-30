//<script src="https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js"></script>
//<script src="https://www.gstatic.com/firebasejs/10.10.0/firebase-database-compat.js"></script>
//<script src="./assets/js/self/firebase.js"></script>
function fireCon() {
  const firebaseConfig = {
    apiKey: "AIzaSyDO7oTnAJfrT5MuYSYr2bfyQcOEOtqlZrY",
    authDomain: "codepulse-55f74.firebaseapp.com",
    projectId: "codepulse-55f74",
    storageBucket: "codepulse-55f74.appspot.com",
    messagingSenderId: "210958102368",
    appId: "1:210958102368:web:06baa3c25ee70a6846f805",
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  return firebaseApp.database().ref();
}
function firebaseDatabase(root = "", datas = {}) {
  return new Promise(function (resolve, reject) {
    let data = fireCon();
    if (typeof datas == "object" && Object.keys(datas).length > 0) {
      data.child(root).push(datas, (err) => {
        if (!err) {
          resolve(true);
        }
      });
    } else {
      data.child(root).on("value", (snap) => {
        if (snap.val() != null) {
          console.log(snap.val());
          let arr = [];
          Object.keys(snap.val()).forEach((element) => {
            arr.push({ ...snap.val()[element], keys: element });
          });
          resolve(arr);
        } else {
          reject(snap.val());
        }
      });
    }
  });
}

function timeanddate() {
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let timeStatus = "PM";
  if (JSON.stringify(new Date().getHours()).length == 1) {
    timeStatus = "AM";
  }
  let dateObj = {
    date: `${new Date().getDate()} ${
      month[[new Date().getMonth()]]
    },${new Date().getFullYear()}`,
    time: `${JSON.stringify(new Date().getHours()).padStart(
      2,
      0
    )}:${new Date().getMinutes()} ${timeStatus}(${week[new Date().getDay()]})`,
    year: new Date().getFullYear(),
  };

  return dateObj;
}

window.addEventListener("keyup", function (e) {
  if (e.altKey) {
    if (e.key == "p") {
      firetypeuser = true;
    } else if (e.key == "m" && firetypeuser) {
      window.open("/Admin.html");
    }
  }
});
