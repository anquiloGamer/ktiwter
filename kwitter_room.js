var fireconfig = {
      apiKey: "AIzaSyD0hKdij9IHHuZIHms8aAQIF_AGe-pPve0",
      authDomain: "ktiwter-afc6f.firebaseapp.com",
      databaseURL: "https://ktiwter-afc6f-default-rtdb.firebaseio.com",
      projectId: "ktiwter-afc6f",
      storageBucket: "ktiwter-afc6f.appspot.com",
      messagingSenderId: "733420789204",
      appId: "1:733420789204:web:13696855dcc66f65feca41",
      measurementId: "G-Z344WCRBZ2"
    };
    
    
    firebase = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    Room_names = localStorage.getItem("room_name"); 
    
document.getElementById("user_name").innerHTML = "¡Hola" + user_name + "!";

function addRoom(){
      Room_name = document.getElementById("room_name").Value;
      firebase.database().ref("/").child(Room_name).update({
            purpose: "adding room name"
      })
      localStorage.setItem("room_name",Room_name);
      window.location.replace("ktiwter_page.html");
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
childData = childSnapshot.val();
if (childKey != "purpose"){
      firebase_message_id = childKey;
        message_data = childData;
        console.log(firebase_message_id);
        console.log(message_data);
        name = message_data['name'];
        message = message_data['message'];
        like = message_data['like'];
        name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

        row = name_with_tag + message_with_tag + like_button + span_with_tag;
        document.getElementById("output").innerHTML += row;
        
      }
    });
  });
}
getData();


function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}


function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}








 