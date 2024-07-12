<template>
    <div class="scrollBar">
        <div class="bar">        
            <div class="pointer"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ScrollBar',
    mounted() {
        let pageIndex = 0; 
        let pageTags = ["top", "aboutMe", "languageScroll", "projectScroll", "contactScroll", "footerScroll"];
        let pointer = document.querySelector(".pointer");

        window.addEventListener("wheel", (e) => {
            if(e.deltaY > 0 && pageIndex < pageTags.length - 1){
                //go down
                pageIndex++
                document.getElementById(pageTags[pageIndex]).scrollIntoView()
                pointer.style.marginTop = "100px"
            }
            else if(pageIndex != 0)
            {
                //go up
                pageIndex--
                document.getElementById(pageTags[pageIndex]).scrollIntoView()
            }
        })
    }
}







// $("html").bind("click", function(){
//    $("This is a click Event").appendTo( "body" );
// });

</script>

<style src="../css/ScrollBar.css" />