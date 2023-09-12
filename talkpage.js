// Firebase configuration - Initialize Firebase once with your credentials
const firebaseConfig = {
  apiKey: "AIzaSyAbz_uNYVaoEJoD3fI8fd_JeHiuz-gvl4o",
  authDomain: "the-boys-deb11.firebaseapp.com",
  databaseURL: "https://the-boys-deb11-default-rtdb.firebaseio.com",
  projectId: "the-boys-deb11",
  storageBucket: "the-boys-deb11.appspot.com",
  messagingSenderId: "722208487585",
  appId: "1:722208487585:web:886176188556bae2a898e0",
  measurementId: "G-EX9QF2154B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve user_name and room_name from local storage
const user_name = localStorage.getItem("user_name");
const room_name = localStorage.getItem("room_name");

// Function to send a message
function send() {
  const msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
      name: user_name,
      message: msg,
      like: 0
  });

  document.getElementById("msg").value = "";
}

// Function to retrieve and display messages
function getData() {
  firebase.database().ref("/" + room_name).on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
          if (childSnapshot.key !== "purpose") {
              const firebase_message_id = childSnapshot.key;
              const message_data = childSnapshot.val();

              // Extract message details
              const name = message_data['name'];
              const message = message_data['message'];
              const like = message_data['like'];

              // Create HTML elements for the message
              const name_with_tag = `<h4>${name}<img class='user_tick' src='tick.png'></h4>`;
              const message_with_tag = `<h4 class='message_h4'>${message}</h4>`;
              const like_button = `<button class='btn btn-warning' id="${firebase_message_id}" value="${like}" onclick='updateLike(this.id)'>`;
              const span_with_tag = `<span class='glyphicon glyphicon-thumbs-up'>Like: ${like}</span></button><hr>`;

              const row = name_with_tag + message_with_tag + like_button + span_with_tag;

              document.getElementById("output").innerHTML += row;
          }
      });
  });
}

// Call getData to initially load messages
getData();

// Function to update the 'like' count
function updateLike(message_id) {
  console.log("Clicked on like button - " + message_id);
  const button_id = message_id;
  const likes = document.getElementById(button_id).value;
  const updated_likes = Number(likes) + 1;

  firebase.database().ref(room_name).child(message_id).update({
      like: updated_likes
  });
}

// Function to log out and clear local storage
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}
