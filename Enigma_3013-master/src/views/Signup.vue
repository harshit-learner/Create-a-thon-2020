<template>
  <div>
    <div class="container" v-if="loader">
      <div class="row mt-5">
        <div class="col-md-12 text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <p>Signing You In...</p>
        </div>
      </div>
    </div>
    <div class="container my-5" v-else>
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <h1>Sign Up</h1>
          <input type="email" class="form-control my-2" v-model="email" placeholder="Email" />
          <input
            type="password"
            class="form-control my-2"
            v-model="password"
            placeholder="Password"
          />
          <button v-on:click="signup" class="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '@/config/firebase'
export default {
  name: 'Login',
  data:()=>({
    email:'',
    password:'',
    loader: false
  }),
  methods:{
    signup(){
        this.loader = true;
      if(this.email.length && this.password){
        console.log(this.email)
        firebase.auth.createUserWithEmailAndPassword(this.email, this.password).then(res=>{
          console.log(res)
           this.$router.replace('login')
        }).catch(e=>{
          console.log('Error')
           this.loader = false;
        })
      }else{
          this.loader = false;
        alert('Something went wrong')
      }
    }
  }
}
</script>
