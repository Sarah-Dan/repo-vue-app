<template>
    <div class="container">
        <Header />
      <h1>Welcome to Github</h1>
  
      <!-- Searching the repository feature -->
      <p>Search for a repository</p>
      <input type="text" v-model="search" />
      <button @click="searchRepo">Search</button>
      <div v-if="loading">
        <LoaderMain />
      </div>
      <div v-if="repos.length">
        <div v-for="repo in repos" :key="repo.id">
          <RouterLink :to="{ name: 'RepositoryGithub', params: { id: repo.id } }">
            <div>
              <h2>{{ repo.name }}</h2>
              <p>{{ repo.description }}</p>
              <p>{{ repo.language }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
  
      <!-- Searching the repository feature -->
  
      <!-- <div v-for="repo in repos" :key="repo.id">
        <RouterLink :to="{ name: 'RepoDetails', params: { id: repo.id } }">
          <div class="github-repos">
            <h3>{{ repo.name }}</h3>
            <p>{{ repo.description }}</p>
            <p>{{ repo.language }}</p>
            <a :href="repo.html_url" target="_blank" v-on:click.stop
              >View on Github</a
            >
          </div>
        </RouterLink>
      </div>
      <div v-if="loading">
        <LoaderMain />
      </div> -->
      <button @click="prevPage" :disabled="page === 1">Previous</button>
      <button @click="nextPage" :disabled="page === 5">Next</button>
  
      <div>
        <button
          v-for="pageNumber in pageCount"
          :key="pageNumber"
          @click="goToPage(pageNumber)"
        >
          1
        </button>
        <button
          v-for="pageNumber in pageCount"
          :key="pageNumber"
          @click="goToPage(pageNumber + 1)"
        >
          2
        </button>
        <button
          v-for="pageNumber in pageCount"
          :key="pageNumber"
          @click="goToPage(pageNumber + 2)"
        >
          3
        </button>
        <button
          v-for="pageNumber in pageCount"
          :key="pageNumber"
          @click="goToPage(pageNumber + 3)"
        >
          4
        </button>
        <button
          v-for="pageNumber in pageCount"
          :key="pageNumber"
          @click="goToPage(pageNumber + 4)"
        >
          5
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import Header from "../components/Header.vue";
  import axios from "axios";
  import { RouterLink } from "vue-router";
  import LoaderMain from "../actions/loading.vue";
  
  export default {
    name: "Repositories",
    components: {
        Header,
      LoaderMain,
      RouterLink,
    },
    data() {
      return {
        loading: false,
        page: 1,
        perPage: 6,
        repos: [],
      };
    },
    created() {
      this.fetchRepos();
    },
  
    methods: {
      async fetchRepos() {
        this.loading = true;
        axios
          .get(
            `https://api.github.com/users/Sarah-Dan/repos?page=${this.page}&per_page=${this.perPage}`
          )
          .then((response) => {
            this.repos = response.data;
            this.loading = false;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      goToPage(page) {
        this.page = page;
        window.scrollTo(0, 0);
        this.fetchRepos();
      },
      nextPage() {
        this.page++;
        window.scrollTo(0, 0);
        this.fetchRepos();
      },
      prevPage() {
        this.page--;
        window.scrollTo(0, 0);
        this.fetchRepos();
      },
    },
    computed: {
      pageCount() {
        return Math.ceil(this.repos.length / this.perPage);
      },
    },
  
    watch: {
      page() {
        this.fetchRepos();
      },
    },
  };
  </script>
  
  <style>
  .github-repos {
    background-color: #f5f5f5;
    padding: 20px;
    margin: 20px;
    border-radius: 5px;
  }
  </style>
<!-- <template>
    <div>My Repositories</div>
    search for repos
    <input type="text" v-model="search" placeholder="Search for a repository" />
    <button @click="searchRepo">Search</button>
    <div>
        <router-link to="/repositories">Repositories</router-link>
        <router-link to="/about">About</router-link>
    </div>
</template> -->
<!-- 
<script>

export default {
    name: 'Repositories',
    data() {
        return {
            repositories: [],
            search: ''
        }
    },
    methods: {
        searchRepo() {
            fetch(`https://api.github.com/search/repositories?q=${this.search}`)
                .then(response => response.json())
                .then(data => {
                    this.repositories = data.items
                })
        }
    },

    created() {
        fetch('https://api.github.com/users/username/repos')
            .then(response => response.json())
            .then(data => {
                this.repositories = data
            })
    }
}
</script> -->

<!-- <style scoped>
    h1 {
        font-size: 2em;
        text-align: center;
        color: #42b983;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style> -->
<!-- <template>
    <div>
        <h1>My Repositories</h1>
        <ul>
            <li v-for="repository in repositories" :key="repository.id">
                <a :href="repository.html_url" target="_blank">{{ repository.name }}</a>
            </li>
        </ul>
    </div> -->