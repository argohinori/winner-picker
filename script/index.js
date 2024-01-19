const app = Vue.createApp({
  data() {
    return {
      state: true,
      inputName: "",
      names: [],
      error: "",
      showError: false,
      result: "",
    };
  },
  computed: {
    isReady() {
      return this.names.length > 1;
    },
  },
  methods: {
    addNameToList() {
      const userName = this.inputName;
      if (this.validate(userName)) {
        this.names.push(userName);
        this.inputName = "";
        console.log(this.names);
        this.showError = false;
      } else {
        this.showError = true;
      }
    },
    validate(value) {
      this.error = "";
      //   checking input empty
      if (value === "") {
        this.error = "Can't empty";
        return false;
      }
      //   checking unique input name
      if (this.names.includes(value)) {
        this.error = "Name must be unique";
        return false;
      }
      return true;
    },
    removeName(index) {
      this.names.splice(index, 1);
    },
    showResult() {
      this.generateResult();
      this.state = false;
    },
    getRandomName() {
      return this.names[Math.floor(Math.random() * this.names.length)];
    },
    generateResult() {
      let randomName = this.getRandomName();
      if (this.result !== "") {
        while (randomName === this.result) {
          randomName = this.getRandomName();
        }
      }
      this.result = randomName;
    },
    resetApp() {
      this.state = true;
      this.inputName = "";
      this.names = [];
      this.error = "";
      this.showError = false;
      this.result = "";
    },
    getNewResult() {
      this.generateResult();
    },
  },
}).mount("#App");
