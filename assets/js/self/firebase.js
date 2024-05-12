{/* <script src="https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.10.0/firebase-database-compat.js"></script>
<script src="./assets/js/self/firebase.js"></script> */}

function firebaseDatabase(root = "", datas = {}) {
    return new Promise(function (resolve, reject) {
        const firebaseConfig = {
            apiKey: "AIzaSyCnxjFIpXvWQjyEa6jPO08-Lt4rBu03ews",
            authDomain: "mystorage-9621a.firebaseapp.com",
            databaseURL: "https://mystorage-9621a-default-rtdb.firebaseio.com",
            projectId: "mystorage-9621a",
            storageBucket: "mystorage-9621a.appspot.com",
            messagingSenderId: "962491672083",
            appId: "1:962491672083:web:e86539d51606f2c3db81e6"
        };
        const firebaseApp = firebase.initializeApp(firebaseConfig);
        let data = firebaseApp.database().ref()
        console.log(data)
        if (typeof (datas) == "object") {

            data.child(root).push(datas, (err) => {
                if (!err) {
                    resolve(true)
                }
            })
        }
        else {
            data.child(root).on("value", (snap) => {
                
                if (snap.val()) {

                    let arr = []
                    Object.values(snap.val()).forEach(element => {
                        arr.push(element)
                    })
                    resolve(arr)
                }
                else{
                  
                    reject("error")
                }
            })
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
