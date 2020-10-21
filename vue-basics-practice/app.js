const app = Vue.createApp({
  data() {
    return {
      name: "Jenny Gao",
      age: 100,
      imgUrl:
        "https://images.pexels.com/photos/2395256/pexels-photo-2395256.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      inputVal: 'Enter your search...'  
    };
  },
  methods: {
    generateNum() {
      const randomNum = Math.random().toString().slice(0, 4);
      return randomNum;
    },
  },
});

app.mount("#assignment");
