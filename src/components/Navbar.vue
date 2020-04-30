<template>
  <nav>
    <div class="container">
      <div class="nav__inner">
        <div class="nav__header">
          <h1>Task APP (Vue.js)</h1>
        </div>
        <div class="nav__menu">
          <router-link to="/" activeClass="active" exact>Create</router-link>
          <router-link to="/list" activeClass="active">List</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: #1de9b6;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  padding: 15px;
}

.nav__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__inner a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  margin-left: 15px;
  padding: 19px 10px;
  transition: all .2s linear;
}

.nav__inner a:hover  {
 background-color: #2cc09b;
}
.active {
  background-color: #3caa8f;;
}
.nav__header h1 {
  color: rgb(255, 255, 255);
}

@media (max-width: 440px) {
 .nav__header h1 {
   font-size: 16px;
 }
 .nav__inner a {
   padding: 15px 10px;
 }
}

@media (max-width: 357px) {
 .nav__header h1 {
    font-size: 11px;
 }
}
</style>