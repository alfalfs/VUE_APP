// import firebase from 'firebase'
import firebase from 'firebase/compat/app';//compactable for firebase Sdk V9
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';//compactable for firebase Sdk V9
// import { ref, onUnmounted } from 'vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'

//login-auth
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

// firebase config
const config = {
  apiKey: "AIzaSyCTZbNzqLHm46q78FBdDM1hVBKimhWnvJg",
  authDomain: "vue-firebase-pwa-fe0cf.firebaseapp.com",  
  projectId: "vue-firebase-pwa-fe0cf",  
  storageBucket: "vue-firebase-pwa-fe0cf.appspot.com",  
  messagingSenderId: "3960253283",  
  appId: "1:3960253283:web:ac5f9dcfbca894345b0156"  
}

export const FirebaseApp = initializeApp(config)
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

//login actions
export const getUserState = () =>
  new Promise((resolve, reject) =>
    onAuthStateChanged(getAuth(), resolve, reject)
  )

export const useAuthState = () => {
  const user = ref(null)
  const error = ref(null)

  const auth = getAuth()
  let unsubscribe
  onMounted(() => {
    unsubscribe = onAuthStateChanged(
      auth,
      u => (user.value = u),
      e => (error.value = e)
    )
  })
  onUnmounted(() => unsubscribe())

  const isAuthenticated = computed(() => user.value != null)

  return { user, error, isAuthenticated }
}