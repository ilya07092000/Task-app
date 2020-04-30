<template>
  <div class="main">
    <h1>Create your Task</h1>

    <form action @submit.prevent="createData">
      <div class="form__group">
        <label for="title" :class="{'label__error': $v.title.$error}">Title:</label>
        <input
          type="text"
          name="title"
          id
          v-model="title"
          :class="{'input__error': $v.title.$error}"
        />
        <p class="error" v-if="$v.title.$error">This field is required</p>
      </div>

      <div class="form__group">
        <label for="description" :class="{'label__error': $v.description.$error}">Description:</label>
        <input
          type="text"
          name="description"
          id
          v-model="description"
          :class="{'input__error': $v.description.$error}"
        />
        <p class="error" v-if="$v.description.$error">This field is required</p>
      </div>

      <div class="form__group">
        <button type="submit" class="save__btn">Create</button>
      </div>
    </form>

      <div class="description">
        <p>This app was made with Vue.js ( Vuex, Vue Router, Vue Validation) and JavaScript.</p>
        <p>On this page you can create your task. Field "Title" and "Description" is required.</p>
        <p>Your tasks will be in your local storage, so it will be your own tasks and always available, also you have opportunity to delete task.</p>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      title: "",
      description: "",
      submitStatus: null
    };
  },
  methods: {
    createData() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "error";
      } else {
        const task = {
          title: this.title,
          description: this.description,
          id: Date.now(),
          status: "active"
        };
        this.$store.dispatch("setTask", task);
        this.$router.push("/list");
      }
    }
  },
  validations: {
    title: {
      required
    },
    description: {
      required
    }
  }
};
</script>

<style scoped lang="scss">
.main {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  text-align: center;
  & h1 {
    font-size: 40px;
    margin: 50px 0;
    color: #13886b;
  }
}

input {
  border: none;
  border-bottom: 1px solid green;
  font-size: 15px;
  width: 250px;
  padding: 5px;
  transition: all 0.2s linear;
}

input:focus {
  outline: none;
  background-color: rgb(235, 224, 224);
}

label {
  font-size: 20px;
}

.form__group {
  margin-bottom: 25px;
}

.form__group button {
  background-color: transparent;
  border: none;
  background-color: #1de9b6;
  color: #fff;
  font-size: 20px;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.1s linear;
}

.form__group button:hover {
  background-color: #09f7bb;
}

.form__group button:focus {
  outline: none;
}

.input__error {
  border-bottom: 1px solid red;
}

.label__error {
  color: red;
}
.error {
  margin-top: 2px;
  color: red;
}
.description {
  margin: 0 auto;
  padding: 0 15px;
  max-width: 700px;
  & p {
    line-height: 25px;
  }
}
</style>

