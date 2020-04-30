import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    setTask(state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    completeTask(state, id) {
      let index = state.tasks.findIndex(task => task.id === id)
      state.tasks[index].status = 'completed';
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    deleteTask(state, id) {
      let index = state.tasks.findIndex(task => task.id === id)
      state.tasks.splice(index, 1)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    editTask(state, editedTask) {
      let taskid = editedTask.id;
      let index = state.tasks.findIndex(task => task.id === taskid)
      state.tasks[index] = editedTask;
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    setTask({commit}, task) {
      commit('setTask', task)
    },
    completeTask({commit}, id) {
      commit('completeTask', id)
    },
    deleteTask({commit}, id) {
      commit('deleteTask', id)
    },
    editTask({commit}, editedTask) {
      commit('editTask', editedTask)
    }
  },
  modules: {
  },
  getters: {
    tasks: state => state.tasks
  }
})
