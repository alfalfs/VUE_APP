import firebase from 'firebase';
// import { initializeApp } from 'firebase/app';
// import * as firebase from 'firebase';
// import firebase from 'firebase/app';
import 'firebase/firestore';

import { ref, onUnmounted } from 'vue'

const config = {
    apiKey: "AIzaSyCTZbNzqLHm46q78FBdDM1hVBKimhWnvJg",
    authDomain: "vue-firebase-pwa-fe0cf.firebaseapp.com",  
    projectId: "vue-firebase-pwa-fe0cf",  
    storageBucket: "vue-firebase-pwa-fe0cf.appspot.com",  
    messagingSenderId: "3960253283",  
    appId: "1:3960253283:web:ac5f9dcfbca894345b0156"  
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}











// // import firebase from 'firebase'
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection } from 'firebase/firestore/lite';
// import { ref, onUnmounted } from 'vue'

// const firebaseConfig = {
//     apiKey: "AIzaSyCTZbNzqLHm46q78FBdDM1hVBKimhWnvJg",
//     authDomain: "vue-firebase-pwa-fe0cf.firebaseapp.com",  
//     projectId: "vue-firebase-pwa-fe0cf",  
//     storageBucket: "vue-firebase-pwa-fe0cf.appspot.com",  
//     messagingSenderId: "3960253283",  
//     appId: "1:3960253283:web:ac5f9dcfbca894345b0156"  
// }
// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// // const FirebaseApp = firebase.initializeApp(config)

// // const db = FirebaseApp.firestore()
// const usersCollection = collection(db,'users') // ETbkTPbf4mphvl6YIFVP

// export const createUser = user => {
//   // return usersCollection.add(user) 
//   return usersCollection.add(user)   
//   // console.log(user)   
//   return db.collection('users').add(user)
// }


