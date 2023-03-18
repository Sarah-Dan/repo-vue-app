<template>
    <!-- header component -->
    <nav class="navbar">
        <ul class="navbar_links">
            <li class="nav-link"><RouterLink to="/">Home</RouterLink></li>
            <li class="nav-link"><RouterLink to="/about">About</RouterLink> </li>
            <li class="nav-link"><RouterLink to="/repositories">My Repositories</RouterLink></li>
            <li class="nav-link"><RouterLink to="/:catchAll(.*)">NotFound</RouterLink></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;         
        background-color: #24292e;
        font-family: 'DM Sans', sans-serif;
        padding: 1rem;
    }

    .navbar_links {
        display: flex;
        list-style: none;
    }

    .logo {
        display: flex;
        align-items: center;
        color: #fff;
        text-decoration: none;
    }
    
    .logo img {
        width: 2rem;
        margin-right: 1rem;
    }
   
    .nav-link {
        margin-left: 2rem;
        font-size: 1rem;
    }
    .nav-link-test{
        padding-left: 6.8rem;
    }
    a {
        color: #fff;
        text-decoration: none;
    }
</style>
