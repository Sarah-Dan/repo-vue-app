<template>
    <Header />
    <div class="repo-container" v-if="repo">
        <div class="repo-card">
            <h2>{{ repo.name }}</h2>
            <p>{{ repo.description }}</p>
            <div class="table-container">
                <table class="table">
                    <tr>
                        <td>Language:</td>
                        <td>{{ repo.language }}</td>
                    </tr>
                    <tr>
                        <td>Stars:</td>
                        <td>{{ repo.stargazers_count }}</td>
                    </tr>
                    <tr>
                        <td>Watchers:</td>
                        <td>{{ repo.watchers_count }}</td>
                    </tr>
                    <tr>
                        <td>Forks:</td>
                        <td>{{ repo.forks_count }}</td>
                    </tr>
                </table>
            </div>
            <div class="repo-links">
                <a :href="repo.html_url" target="_blank" class="my_repo">View on Github</a>
                <RouterLink :to="{ name: 'Repositories' }" class="my_repo">
                    ⬅ Back to Repositories
                </RouterLink>
            </div>
        </div>
    </div>
</template>
  
<script>
import Header from "../components/Header.vue";
import axios from "axios";
export default {
    name: "Repository",
    components: {
        Header,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            repo: {},
        };
    },
    async mounted() {
        try {
            const response = await axios.get(
                `https://api.github.com/repositories/${this.id}`
            );
            this.repo = response.data;
        } catch (error) {
            console.error(error);
        }
    },
};

</script>
  
<style>
.repo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

.repo-card {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 20px 0;
    padding: 1.5rem;
    background-color: #1e1e3f;
    border-radius: 10px;
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

.repo-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    margin-top: 1.5rem;
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