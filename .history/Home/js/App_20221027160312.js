// real-time:
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyD4cwhokuCgjPwsQcSv_MTMGYOQ0PbyKr8",
    authDomain: "realtime-view-counter-378a2.firebaseapp.com",
    projectId: "realtime-view-counter-378a2",
    storageBucket: "realtime-view-counter-378a2.appspot.com",
    messagingSenderId: "2609144954",
    appId: "1:2609144954:web:0c23e76eb0db06367d87c3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function get_viewers_ip(json){
    viewers_ip = json.ip;
    // count view with ip
    count_view(viewers_ip);
  }

  function count_view(viewers_ip){
    var views;
    var ip_to_string = viewers_ip.tostring();
    for(var i, i = 0; i < ip_to_string.length; i++) {
        ip_to_string = ip_to_string.replace("." , "-")
    }
  }