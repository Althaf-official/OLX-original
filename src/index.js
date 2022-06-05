import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './store/FirebaseContext'
import firebase from './firebase/config'

ReactDOM.render(//^ i create one config file for firebase and we create one context file for firebase and we put the app inside the FirebaseContext and i pass the ".provider" & value for firebaseContext. now i can call the firebase anywhere from the App . because its declared as globally
    <FirebaseContext.Provider value={{firebase}}>
        <App />
    </FirebaseContext.Provider>
, document.getElementById('root'));
// i wrapped the App inside the firebaseContext
//now we can call anywhere from the app. we will get this context. we declared as globally
