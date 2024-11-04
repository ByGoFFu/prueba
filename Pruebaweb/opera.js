
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics,ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey:"AIzaSyAn2Zv2dBlXTZzPl2Nc5uoA0jZwHvKsV6U",
    authDomain: "nosequeponer1-9f076.firebaseapp.com",
    projectId: "nosequeponer1-9f076",
    storageBucket: "nosequeponer1-9f076.appspot.com",
    messagingSenderId: "271126887620",
    appId: "1:271126887620:web:a5e23a97c19675be5add91",
    measurementId: "G-KNT206X99Q"
  };

  
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click',function(e){
    set(ref(db, 'user/' + document.getElementById('username').value),
    {
        username: document.getElementById('username').value,
        email:  document.getElementById('email').value,
        phonenumber:  document.getElementById('phone').value

    });
    alert('login sucessfull !')
  })
