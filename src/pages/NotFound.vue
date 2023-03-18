<template>
    <div class="main">
    <Header />
        <div class="not-found">
        <h1>Ooops! Page not found😔</h1>
        <p>Are you sure you have the right address?</p>
        <p>
        </p>
        <RouterLink to="/" class="home_link">Back to Home</RouterLink>
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
/* .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
} */
.not-found {
    background-color: #fff;
    padding: 20px;
    margin: 20px;
    border-radius: 5px;
}
.home_link {
    color: #0366d6;
    text-decoration: none;
    border-radius: 4px;
    padding: 0.8rem;
    background-color: rgba(3, 102, 214, 0.1);
    cursor: pointer;
}

.home_link:hover {
    background-color: rgba(3, 102, 214, 0.3);
}
</style>