<template>
    <div id="languageScroll">
        <div class="mainlang-wrapper">
            <div class="lang-left">
                <h1 class="lang-left-title">Experience,</h1>
                <p>
                    blah blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda provident dicta quaerat? Placeat, dolores blanditiis animi officiis atque dolore eos quasi commodi tempore iste autem labore maxime obcaecati debitis?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident facere odit quasi iusto atque, consequuntur tenetur deserunt numquam accusantium cum excepturi saepe fugiat corrupti maiores voluptatem, minima reprehenderit, eos dolore?
                    lor.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quae, totam quibusdam provident quam asperiores officiis, quia molestias ex labore, ullam voluptatum. Exercitationem impedit consectetur rerum eligendi, repudiandae nemo est.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quae, totam quibusdam provident quam asperiores officiis, quia molestias ex labore, ullam voluptatum. Exercitationem impedit consectetur rerum eligendi, repudiandae nemo est.
                </p>
            </div>
            <div class="lang-right">
                <h1>Language,</h1>
                <div>
                    <LangBlock language="JavaScript" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
                    <LangBlock language="C#" url="../assets/c#.svg"/>
                    <LangBlock language="JS" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>           
                </div>
                
                <div>
                    <LangBlock language="JS" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
                    <LangBlock language="JS" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
                    <LangBlock language="JS" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>           
                </div>

                <h1>Frameworks,</h1>
                <div>
                    <LangBlock language="JS" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
                    <LangBlock language="JS" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
                    <LangBlock language="JS" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>           
                </div>

                <h1>Software,</h1>

                <div>
                    <LangBlock language="JS" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
                    <LangBlock language="JS" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
                    <LangBlock language="JS" url="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>           
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LangBlock from '../shared/LangBlock.vue';

export default{
    name: "Languages",
    components:{
        LangBlock
    }
}
</script>
<style src="../css/Languages.css" />