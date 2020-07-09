<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <!--<h4 class="display-5">Dashboard</h4>-->
        
      </div>
    </div>
    <div class="container" v-if="loader">
        <div class="row mt-5">
          <div class="col-md-12 text-center">
            <div class="spinner-border" role="status">
               <span class="sr-only">Loading...</span>
            </div>
            <p>Getting All Applicants...</p>
          </div>
        </div>
    </div>   
    <div class="row mt-2" v-else>
      <div class="col-md-3 col-6" v-for="(item,index) in resData" :key="index">
        <div class="card">
          <div class="card-body">
          <img :src="item.img" width="100%" alt="">
            <h4 class="card-title">{{item.name}}</h4>
            <h5 class="card-subtitle mb-2 text-muted">Skills : {{item.skills}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{item.score}}/10</h6>
            <p class="card-text">{{item.contact}}</p>
            <a :href="item.github" class="card-link">Github</a>
            <a :href="item.linkedin" class="card-link">LinkedIn</a>
            <br>
            <a :href="item.resume"><button class="btn btn-success">View Resume</button></a>
            <p> </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "@/config/firebase";
export default {
  name: "Dashboard",
  components: {},
  data: () => ({
    resData: [],
    loader: true
  }),
  mounted() {
    this.showData();
  },
  methods: {
    showData() {
      this.loader = true;
      this.resData = [];
      firebase.firestore
        .collection("applicants")
        .get()
        .then(res => {
          res.forEach(doc => {
            let obj = doc.data();
            //obj["id"] = doc.id;
            this.resData.push(obj);
          });
          this.loader = false;
        })
        .catch(e => {
          this.loader = false;
          console.log(e);
        });
    }
  }
};
</script>