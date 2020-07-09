<template>
  <div>
  <div class="container">
    
  </div>
    <div class="container" v-if="loader">
      <div class="row mt-5">
        <div class="col-md-12 text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <p>Logging You In...</p>
        </div>
      </div>
    </div>
    <div class="container my-5" v-else>
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <h1>Login</h1>
          <input type="email" class="form-control my-2" v-model="email" placeholder="Email" />
          <input
            type="password"
            class="form-control my-2"
            v-model="password"
            placeholder="Password"
          />
          <button v-on:click="login" class="btn btn-primary">Login</button>
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
    login(){
    this.loader = true;
      if(this.email.length > 0 && this.password){
        console.log(this.email)
        firebase.auth.signInWithEmailAndPassword(this.email, this.password).then(res=>{
          console.log(res)
          this.$router.replace('dashboard')
        }).catch(e=>{
          alert('Invalid Username or Password')
          this.loader = false;
        })
      }
      else{
            this.loader = false;
        alert('Something went wrong!!')

        }
    }
    // signup(){
    //   if(this.email.length && this.password){
    //     console.log(this.email)
    //     firebase.auth.createUserWithEmailAndPassword(this.email, this.password).then(res=>{
    //       console.log(res)
    //     }).catch(e=>{
    //       console.log('Error')
    //     })
    //   }else{
    //     alert('Something went wrong')
    //   }
    // }
  }
}
</script>
