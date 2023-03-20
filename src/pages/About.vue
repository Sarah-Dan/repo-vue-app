<template>
    <div class="main">
        <Header />
        <div class="about">
            <h1>Sarah Daniel</h1>
            <p>Frontend Engineer ,getting my hands dirty with codes😉</p>
            <div class="abouts">
                <img src="../assets/fact.png" alt="Facts" />
                <ul class="about_facts">
                    <li>😊 Pronouns: She/her.</li>
                    <li>💡 Fun fact: I'm currently studying at AltSchool Africa School of Software Engineering Class of
                        2022.
                    </li>
                    <li>🌱 I’m currently learning React native, Redux, Vue.js, and Python.</li>
                    <li>😊 I’m looking for help with open source projects, internships, and entry-level opportunities.</li>
                    <li>💼 Job interests: Software Engineer, Front-end Engineer, or UI Engineer (Intern or Junior level).
                    </li>
                    <li>📫 You can view my resume and contact me by emailing <a
                            href="mailto: sarahdanielprecious.com">sarahpdaniel@outlook.com.</a></li>
                </ul>
            </div>
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
    margin: 2rem 0;
}

.abouts {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.abouts img {
    width: 100%;
    height: 100%;
    max-width: 200px;
    max-height: 250px;
    border-radius: 50%;
    margin: 1rem 0.5rem;
}

.about_facts {
    display: flex;
    flex-direction: column;
}

.about_facts ul {
    margin: 0.5rem 0;
}

.about_facts li {
    margin: 0.5rem 0;
    list-style: none;
    text-align: left;
}

.about_facts li::before {
    content: "👉";
    margin-right: 0.5rem;
}

.about_facts a {
    color: #6bdba8;
    text-decoration: none;
}
</style>