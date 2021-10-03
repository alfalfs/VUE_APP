<template>
   <nav class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left">Firebase Vue CRUD PWA</a>
        <ul class="nav navbar-nav flex-row float-right">         
              <router-link
                v-for="item in list"
                  :key="item.to"
                    class="nav-link pr-3"
                   :to="item.to"
                >{{ item.title }}
              </router-link>            
          <li class="nav-item">
            <!-- <router-link class="nav-link pr-3" to="/">Login</router-link> -->
           <button @click="signOutUser">Sign Out</button> 
          </li>       
        </ul>        
      </div>        
    </nav>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from '../firebase'
import { useRouter } from 'vue-router'
export default {
  name: 'main-nav',  
  data() {
    return {
      list: [
        // { title: "Home", to: "/" },
        // { title: "LogOut", to: "/Login" },
      ]
    };
  },
  setup() {
    const { user } = useAuthState()
    const auth = getAuth()
    const router = useRouter()
    const signOutUser = async () => {
      try {
        await signOut(auth)
        router.push('/login')
      } catch (e) {
        alert(e.message)
      }
    }
    return { user, signOutUser }
  }
}
</script>

<style>
  .main-nav {
    text-align: center;
    margin: 40px auto;
  }
  .main-nav a{
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    color: #999;
    font-size: 18px;
  }
  a.router-link-active {
    border-bottom: 2px solid #00ce89;
    padding-bottom: 4px;
  }
</style> 