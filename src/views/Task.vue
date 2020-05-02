<template>
  <div class="tasks">
    <div v-if="!edit" class="tasks__item">
      <div class="title">
        <div class="task__title__left">
          <h4>{{ task.title }}</h4>
          <p class="task__status" :class="task.status">{{ task.status }}</p>
        </div>
        <img src="../../public/img/icons/down-arrow.svg" @click="expandTask" alt />
      </div>
      <div class="task__description">
        <p>{{ task.description }}</p>
      </div>
      <div class="tasks__item__expand">
        <p>{{ task.description }}</p>

        <div class="tasks__item__expand__btns">
          <div class="btns__left">
            <button class="edit__btn" @click="editTask">Edit</button>
            <button class="complete__btn" @click="completeTask">Complete</button>
          </div>
          <div class="btns__right">
            <button class="delete__task" @click="deleteTask">Delete Task</button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="tasks__item active">
      <form action @submit.prevent="submitEdit">
        <div class="title">
          <input
            class="input__title"
            v-model="task.title"
            type="text"
            name="description"
            id="description"
          />
          <select class="select__status" name="status" id="status" v-model="task.status">
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div class="task__description">
          <p>{{ task.description }}</p>
        </div>
        <div class="tasks__item__expand">
          <textarea v-model="task.description" name id></textarea>

          <div class="tasks__item__expand__btns">
            <button type="submit" class="edit__btn">Save</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      edit: false,
      isActive: false,
      submitStatus: null,
    };
  },
  methods: {
    expandTask() {
      let target = event.target;
      let taskItem = target.closest(".tasks__item");
      taskItem.classList.toggle("active");
    },
    completeTask() {
      this.$store.dispatch("completeTask", this.task.id);
    },
    deleteTask() {
      let question = confirm("Are you sure?");
      if (question) {
        this.$store.dispatch("deleteTask", this.task.id);
      }
    },
    editTask() {
      this.edit = true;
    },
    submitEdit() {
      let editedTask = {
        id: this.task.id,
        title: this.task.title,
        description: this.task.description,
        status: this.task.status
      };
      this.$store.dispatch("editTask", editedTask);
      this.edit = false;
    }
  }
};
</script>

<style scoped lang="scss">
.tasks {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
  & h1 {
    text-align: center;
    font-size: 40px;
    color: rgb(19, 136, 107);
  }
}
.task__title__left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.tasks__item {
  border: 2px solid rgb(52, 170, 52);
  border-radius: 3px;
  margin-top: 20px;
  padding: 10px;
  &__expand {
    position: relative;
    padding-top: 15px;
    border-top: 1px solid #e5e5e5;
    display: none;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }
}
.tasks__item.active .tasks__item__expand {
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  display: block;
}
.title {
  position: relative;
  margin-top: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  & h4 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #2b5334;
  }
  & img {
    display: block;
    width: 50px;
    padding: 10px;
    border-radius: 25px;
    cursor: pointer;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
    &:hover {
      background-color: rgb(241, 235, 235);
    }
  }
}
.task__status.active {
  position: relative;
  bottom: 2px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: rgba(73, 187, 73, 0.7);
}
.task__status.completed {
  position: relative;
  bottom: 2px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: rgba(194, 51, 26, 0.7);
}
.tasks__item.active .arrow {
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
  background-color: rgb(241, 235, 235);
}
.task__description {
  & p {
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
       text-overflow: ellipsis;
    width: 50%;
  }
}
.tasks__item.active .task__description p {
  display: none;
}
.tasks__item__expand .title {
  padding-bottom: 15px;
}
.tasks__item__expand__btns {
  margin-top: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.edit__btn,
.complete__btn,
.delete__task {
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
}
.edit__btn {
  margin-right: 20px;
  background-color: rgb(75, 131, 75);
  margin-bottom: 5px;
}
.complete__btn {
  background-color: rgb(214, 74, 74);
  margin-right: 15px;
  margin-bottom: 5px;
}
.delete__task {
  background-color: red;
}
.input__title {
  border: 1px solid green;
  font-size: 15px;
  width: 250px;
  padding: 5px;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  margin-bottom: 10px;
}
textarea {
  padding: 5px;
  font-size: 14px;
  width: 100%;
  min-height: 100px;
  border: 1px solid green;
}
.select__status {
  margin-left: 10px;
  font-size: 15px;
  border-radius: 10px;
}
@media (max-width: 400px) {
  .tasks__item__expand__btns {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
}
@media (max-width: 410px) {
  .title {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  .input__title {
    width: 100%;
  }
  .select__status {
    margin: 0 0 10px 0;
  }
}
</style>