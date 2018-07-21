
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA3kVbII0b-vmCFDMEMTbWDclJh2sGQ2fM",
    authDomain: "final-project-knews-or-eventsk.firebaseapp.com",
    databaseURL: "https://final-project-knews-or-eventsk.firebaseio.com",
    projectId: "final-project-knews-or-eventsk",
    storageBucket: "final-project-knews-or-eventsk.appspot.com",
    messagingSenderId: "925867494588"
  };
  firebase.initializeApp(config);

  var messagesRef = firebase.database().ref('messages');
  document.getElementById('form2').addEventListener('submit', submitForm);
    // Function to get get form values
  function getInputVal(id){
      return document.getElementById(id).value;
  }

    
  function submitForm(e){

              e.preventDefault();  
         var chosen = getInputVal('browsers');
          var text = getInputVal('comments');
    
          saveMessage(chosen,text);
          document.getElementById('form2').reset();
      }
  // Cl
    
    // Initialize Firebase
  
    // References the messages collection

  
  // Save message to firebase
  function saveMessage(text,chosen){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        text,
        chosen,

      });
    }
