<template>
    <div class="main">
        <Header />
        <div class="not-found">
            <h1>Ooops! Page not found😔</h1>
            <img src="../assets/404.png" alt="404" />
            <p>Are you sure you have the right address?🤔</p>
            <div>
                <RouterLink to="/" class="home_link">Back to Home</RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
    name: "NotFound",
    components: { Header },
};
</script>

<style>
.not-found {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 5px;
}

.not-found img {
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 500px;
    margin: 1rem auto;
}

.home_link {
    color: #95c8da;
    text-decoration: none;
    border-radius: 4px;
    padding: 0.8rem;
    background-color: rgb(14, 134, 110);
    cursor: pointer;
}

.home_link:hover {
    background-color: rgba(3, 196, 214, 0.3);
}
</style>