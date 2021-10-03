<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
export default {     
    setup() {       
    const auth = getAuth()
    const router = useRouter()
    const handleSubmit = async e => {       
        const { email, password } = e.target.elements
        try {
        await createUserWithEmailAndPassword(auth, email.value, password.value)      
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
            <h1>Sign Up</h1>
        </div>        
         <div class="col-sm-5 m-auto"> 
            <form @submit.prevent="handleSubmit" id="signup-form">
                <div class="row text-left">
                    <div class="col-sm-12 form-group">
                        <label for="email">Email Address</label>                        
                        <input name="email" placeholder="email" type="email" class="form-control form-control-lg">
                    </div>
                    <div class="col-sm-12 form-group">
                        <label for="password">Password</label>                        
                        <input name="password" placeholder="password" type="password"  class="form-control form-control-lg" >

                    </div>
                    <div class="col-sm-12 text-center form-group">
                        <button type="submit" class="btn btn-lg btn-primary px-4">Register</button>                                                   
                    </div>
                    <div class="col-sm-12 text-center form-group mt-5">
                        <p>
                            Already have an account? 
                            <router-link to="/login">Login</router-link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
._loader {
    position:relative;
    top:6px;
    left:10px;
}
</style>


