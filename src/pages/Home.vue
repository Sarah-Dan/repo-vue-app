<template>
  <div id="home">
    <Header />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <img alt="profile" src="../assets/gitprofile.jpg" class="profile" />
    <h1>{{ msg }}</h1>
    <p>Hey there👋, I'm Sarah. Nice to meet you!</p>
    <MyBio>
      <h2>Frontend developer</h2>
      <p>Based in Lagos, Nigeria</p>
    </MyBio>
    <RouterLink to="/repositories" class="my_repo">View my Repositories</RouterLink>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import MyBio from '../components/MyBio';
export default {
  name: 'Home',
  components: { Header, MyBio },
  data() {
    return {
      msg: 'Welcome to my GitHub Repository Portfolio.',
      data: '',
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#home {
  color: #d0deeb;
  background-color: rgb(14, 14, 32);
  width: 100%;
}

.profile {
  width: 100%;
  max-width: 220px;
  height: 100%;
  max-height: 230px;
  border-radius: 50%;
  margin: 20px 0 0;
}

h1 {
  margin: 40px 0 0;
}

.my_repo {
  background-color: #6bdba8;
  color: #03080e;
  font-weight: 800;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  text-decoration: none;
  border-radius: 4px;
}

.my_repo:hover {
  background-color: #42b983;
}
</style>
