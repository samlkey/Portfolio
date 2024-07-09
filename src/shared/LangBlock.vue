<template>
    <div class="knownlang">
        <div class="box">
            <img class="lngIcon" :src="url" />
            <h1>{{ language }}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LangBlock",
        props: {
            language: String,
            url: String 
        }
    }
</script>
<style src="../css/LangBlock.css" /> 