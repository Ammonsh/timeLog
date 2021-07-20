<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1> Hello and welcome </h1>
    <button @click = addStartTime> Start </button>
    <button @click = calculateHours> End </button>
    <p></p>
    <div v-for="hours in allHours" :key="hours.id">
      <h2>{{hours.hours}}</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import moment from 'moment';
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      startTime: 0,
      endTime: 0,
      hoursPassed: 0,
      allHours: [],
    }
  },
  created() {
    this.getHours()
  },
  methods: {
    addStartTime() {
      this.startTime = Date.now();
    },
    async calculateHours() {
      try {
        this.endTime = Date.now()
        this.hoursPassed = ((this.endTime - this.startTime) / 1000) / (60*60);
        console.log(this.hoursPassed)
        //let myStr = moment(Date.now()).format('dddd h:mma');
        await axios.post("/api/times", {
          hours: this.hoursPassed
        });
        this.getHours();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getHours() {
      try {
        let response = await axios.get("/api/times");
        this.allHours = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
}

</script>
