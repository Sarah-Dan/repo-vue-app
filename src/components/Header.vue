<template>
    <!-- header component -->
    <div id="header">
        <div class="logo">
            <img src="../assets/logo.png" alt="logo">
        </div>
        <nav class="navbar">
            <ul class="navbar_links">
                <li>
                    <RouterLink to="/" class="nav-link">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about" class="nav-link">About</RouterLink>
                </li>
                <li>
                    <RouterLink to="/repositories" class="nav-link">My Repositories</RouterLink>
                </li>
                <li>
                    <RouterLink to="/:catchAll(.*)" class="nav-link">NotFound</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style>
#header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    text-decoration: none;
    margin-left: 2rem;
    font-size: 1.2rem;
    font-weight: 700;
    color: rgb(158, 232, 204);
}


.nav-link:hover {
    color: rgb(33, 208, 141);
    border-bottom: 2px solid rgb(111, 155, 211);
}
</style>
