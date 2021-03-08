// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAVHslV3S5O7xJlTNhUG-HH4wq2Io37HOc",
  authDomain: "nursery-platform-2b88a.firebaseapp.com",
  projectId: "nursery-platform-2b88a",
  storageBucket: "nursery-platform-2b88a.appspot.com",
  messagingSenderId: "123502169323",
  appId: "1:123502169323:web:12751e501f7e37373282ae"
};  

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export { db,auth };