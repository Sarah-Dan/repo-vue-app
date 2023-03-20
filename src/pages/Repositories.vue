<template>
  <div id="repositories">
    <Header />
    <div class="container">
      <!-- search for repos -->
      <div class="search-container">
        <input type="text" v-model="search" placeholder="Search for a repository..." />
        <button @click="searchRepo" class="search-btn">🔍</button>
      </div>
      <!-- loading -->
      <!-- <div if="loading">
        <LoaderMain />
      </div> -->
      <!-- repos -->
      <div class="repo-container">
        <div class="repo" v-for="repo in data" :key="repo.id">
          <div>
            <h2>{{ repo.name }}</h2>
            <p>{{ repo.language }}</p>
            <!-- link to view more of repo -->
            <RouterLink :to="{ name: 'Repository', params: { id: repo.id } }" class="my_repo">
              View Repository
            </RouterLink>
          </div>
        </div>

      </div>

    </div>
    <!-- pagination -->
    <div class="pag-btn-row">
      <button class="pag-btn" @click="prevPage" :disabled="page === 1">Prev</button>


      <div>
        <button class="pag-btn" v-for="pageNumber in pageCount" :key="pageNumber" @click="goToPage(pageNumber)">
          1
        </button>
        <button class="pag-btn" v-for="pageNumber in pageCount" :key="pageNumber" @click="goToPage(pageNumber + 1)">
          2
        </button>
        <button class="pag-btn" v-for="pageNumber in pageCount" :key="pageNumber" @click="goToPage(pageNumber + 2)">
          3
        </button>
        <button class="pag-btn" v-for="pageNumber in pageCount" :key="pageNumber" @click="goToPage(pageNumber + 3)">
          4
        </button>
        <button class="pag-btn" v-for="pageNumber in pageCount" :key="pageNumber" @click="goToPage(pageNumber + 4)">
          5
        </button>
      </div>
      <button class="pag-btn" @click="nextPage" :disabled="page === 5">Next</button>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
// import LoaderMain from '../actions/loading.vue';
// import axios from 'axios';
import searchRepository from "@/service/searchRepo";
export default {
  name: 'Repositories',
  components: {
    Header,
    // LoaderMain 
  },
  data() {
    return {
      data: [],
      loading: false,
      search: '',
      page: 1,
      perPage: 6,
    }
  },
  created() {
    this.fetchRepos;
  },

  computed: {
    pageCount() {
      return Math.ceil(this.data.length / this.perPage);
    },
    lastPage() {
      return Math.ceil(this.data.length / this.perPage);
    },
    repos() {
      const start = (this.page - 1) * this.perPage;
      const end = start + this.perPage;
      return this.data.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      this.page++;
    },
    prevPage() {
      this.page--;
    },
    goToPage(page) {
      this.page = page;
    },
  },
  // fetch API data
  // methods: {
  //   async fetchRepos() {
  //     this.loading = true;
  //     axios.get(`https://api.github.com/users/Sarah-Dan/repos?page=${this.page}&per_page=${this.perPage}`, { 
  //       headers: {
  //         'Accept': 'application/json',
  //       }, 
  //     })
  //     .then((res) => {
  //       this.repos = res.data;
  //       this.loading = false;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     }); 
  //   },
  // },
  async searchRepo() {
    this.loading = true;
    this.data = await searchRepository(this.search, "Sarah-Dan");
    this.loading = false;
  },


  mounted() {
    this.loading = true;
    fetch('https://api.github.com/users/Sarah-Dan/repos', {
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => (this.data = data));
    this.loading = false;
  },

};
</script>

<style scoped>
#repositories {
  color: #d0deeb;
  background-color: rgb(14, 14, 32);
  width: 100%;
}

.container {
  margin: 0 auto;
  width: 80%;
  padding: 0 20px;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.search-container input {
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 1.2rem;
}

.search-container .search-btn {
  background-color: #6bdba8;
  color: #fff;
  font-weight: 500;
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
}

.repo-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.repo {
  width: 45%;
  margin: 20px 0;
  padding: 20px;
  background-color: #1e1e3f;
  border-radius: 10px;
}

.repo h2 {
  font-size: 1.5rem;
  margin: 0 0 10px;
}

.repo p {
  margin: 0 0 20px;
}


.table-container {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table td {
  padding: 10px;
  border: 1px solid #d0deeb;
}

.sr-btn {
  background-color: #6bdba8;
  color: #fff;
  font-weight: 500;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.sr-btn a {
  color: #fff;
  text-decoration: none;
}

.sr-btn:hover {
  background-color: #5bc89c;
}

@media screen and (max-width: 768px) {
  .repo {
    width: 100%;
  }
}

@media screen and (max-width: 480px) {
  .repo {
    width: 100%;
  }
}
</style>