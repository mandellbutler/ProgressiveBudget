//Assure indexedDB compatibility across various browsers
const indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

let db;
const request = window.indexedDB.open("budget", 1); //open the database in window object

request.onupgradeneeded = (event) => { //Determines what happens when db is created or changed
  const db = event.target.result;
  db.createObjectStore("pending", { autoIncrement: true });//sets up data structure
};

request.onsuccess = (event) => {//establishes what happens in the case of success. Establish transactions
  db = event.target.result;
  if (navigator.online) {
    checkDatabse();
  }
};

request.onerror = (event) => {
  console.log("Unfortunately. There has been an error: " + event.target.errorCode); //establishes error msg in the case of error
};

function saveRecord(record) {
  const transaction = db.transaction(["pending"], "readwrite");
  const store = transaction.objectStore("pending");
  store.add(record);
};
function checkDatabase() {
  const transaction = db.transaction(["pending"], "readwrite");
  const store = transaction.objectStore("pending");
  const getAll = store.getAll();

  getAll.onsuccess = () => {  //upon successful online connection (line 17)... 
    if (getAll.result.length > 0) { //confirm that there is existing data in indexedDb, then...
      fetch("/api/transaction/bulk", {//get all of the stored data...
        method: "POST",//and display...
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json. text/plain, */*",
          "content-Type": "application.json"
        }
      }).then(response => response.json())
        .then(() => {
          const transaction = db.transaction(["pending"], "readwrite");
          const store = transaction.objectStore("pending");
          store.clear();//once data has be retrieved and displayed...clear indexedDb
        });
    }
  }
}
window.addEventListener("online", checkDatabase); //when online connection has been established, perform "checkDatabase", line 33) 