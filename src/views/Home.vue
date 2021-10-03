<template>
  <div class="home">    
    <Navbar />  
    <h4>Welcome {{ user?.email }}!</h4>  
    <div class="container">     
      <UserCreate />
      <hr>
      <UserList />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import UserCreate from '@/components/UserCreate.vue'
import UserList from '@/components/UserList.vue'

export default {
  name: 'Home',
  components: {Navbar,UserCreate, UserList }  
}
</script>
