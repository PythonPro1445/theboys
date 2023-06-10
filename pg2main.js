// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC_34Ael5XZbt1QsQHB45gVMtZBVP9bEm0",
  authDomain: "the-boys-2bbeb.firebaseapp.com",
  projectId: "the-boys-2bbeb",
  databaseURL: "https://the-boys-2bbeb-default-rtdb.firebaseio.com/",
  storageBucket: "the-boys-2bbeb.appspot.com",
  messagingSenderId: "634741192362",
  appId: "1:634741192362:web:6e639cff6032da9e4542d3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "talkpage.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "talkpage.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }