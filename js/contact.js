// Initialize Firebase
    var config = {
        apiKey: "AIzaSyB42N2boet_Cw3FuCoxah_TNdCImeL8ffE",
        authDomain: "final-project-8c9fd.firebaseapp.com",
        databaseURL: "https://final-project-8c9fd.firebaseio.com",
        projectId: "final-project-8c9fd",
        storageBucket: "final-project-8c9fd.appspot.com",
        messagingSenderId: "143911463967"
      };
      firebase.initializeApp(config);
   

  var messagesRef = firebase.database().ref('messages');
  document.getElementById('formulaire').addEventListener('submit', submitForm);
    // Function to get get form values
  function getInputVal(id){
      return document.getElementById(id).value;
  }

    
  function submitForm(e){

              e.preventDefault();  
         var gender = getInputVal('radio_experience');
          var name = getInputVal('name');
          var email = getInputVal('email');
          var date = getInputVal('date');
          var textarea = getInputVal('text1');
          var textareaa = getInputVal('text2');
          saveMessage(gender,name,email,date,textarea,textareaa);
          document.getElementById('formulaire').reset();
      }
  // Cl
    
    // Initialize Firebase
  
    // References the messages collection

  
  // Save message to firebase
  function saveMessage(gender,name,email,date,textarea,textareaa){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        gender,
        name,
        email,
        date,
        textarea,
       textareaa,
      });
    }