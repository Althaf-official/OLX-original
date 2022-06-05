import firebase from "firebase/compat/app";
//take the sdk and configuration from firebase.com>project settings>config  then copy the data
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGG9BL4osat3wRSbcdkR_AkVBR6PzVrgE",
    authDomain: "olx-demo-e1568.firebaseapp.com",
    projectId: "olx-demo-e1568",
    storageBucket: "olx-demo-e1568.appspot.com",
    messagingSenderId: "836762922355",
    appId: "1:836762922355:web:cda19b59a24527d9326906",
    measurementId: "G-1Y80YRHFS3"
  };

  // then need pass the firebase and export it save it as a variable
export default firebase.initializeApp(firebaseConfig)