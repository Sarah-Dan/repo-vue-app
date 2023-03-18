<template>
    <div class="main">
        <Header />
        <div class="about">
            <h1>Sarah Daniel</h1>
            <p>Frontend Engineer ,getting my hands dirty with codes😉</p>
            <ul class="about_facts">
                <li>😊 Pronouns: She/her</li>
                <li>💡 Fun fact: I'm currently studying at AltSchool Africa School of Software Engineering Class of 2022.
                </li>
                <li>🌱 I’m currently learning React native, Redux, Vue.js, and Python.</li>
                <li>😊 I’m looking for help with open source projects, hackathons, internships, and entry-level
                    opportunities.</li>
                <li>💼 Job interests: Software Engineer, Front-end Engineer, or UI Engineer (Intern or Junior level).</li>
                <li>📫 You can view my resume and contact me by emailing sarahpdaniel@outlook.com.</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
    name: "About",
    components: { Header },
};
</script>

<style scoped>
.about {
    margin: 0 auto;
    max-width: 800px;
    padding: 0 1rem;
}

.about_facts {
    display: flex;
    flex-direction: column;
}

.about_facts ul {
    margin: 0.5rem 0;
    list-style: none;
}
.about_facts li {
    margin: 0.5rem 0;
}</style>