<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const auth = getAuth()
    const router = useRouter()
    const handleSubmit = async e => {
      const { email, password } = e.target.elements
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
        router.push('/')
      } catch (e) {
        alert(e.message)
      }
    }
    return { handleSubmit }
  }
}
</script>


<template>
    <div class="row">
        <div class="col-12 text-center mb-4">
            <h1>Log In</h1>
        </div>
        <div class="col-sm-5 m-auto">            
            <form @submit.prevent="handleSubmit" id="login-form">
                <div class="row text-left">
                    <div class="col-sm-12 form-group">
                        <label for="email">Email Address</label>
                        <input type="email"  id="email" class="form-control form-control-lg">
                    </div>
                    <div class="col-sm-12 form-group">
                        <label for="password">Password</label>
                        <input  name="password" placeholder="password" type="password" class="form-control form-control-lg">
                    </div>
                    <div class="col-sm-12 text-center form-group">
                        <button  class="btn btn-lg btn-primary px-4" type="submit">Login</button>                        
                    </div>
                    <div class="col-sm-12 text-center form-group mt-5">
                        <p>Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.loader {
    position:relative;
    top:6px;
    left:10px;
}
</style>