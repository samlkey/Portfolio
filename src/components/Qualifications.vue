<template>

    <div class="qualTitle">
            <h2 style="color: #808080">02.</h2>
            <h1>Qualifications</h1>
    </div>
    
    
   

  

    <div class="exp-wrapper">
    <div id="quals" class="content-wrap">
       
        
       <h1>Sheffield Hallam University: Sept 2021 - Present</h1>
       <div class="qual">
           <p>MSc Cyber Security</p>
           <p class="mark" id="mark1">2.1 (est)</p>
       </div>

       <h1>Sheffield Hallam University: Sept 2018 - June 2021</h1>
       <div class="qual">
           <p>BSc Honours Computer Science</p>
           <p class="mark" id="mark2">2.2</p>
       </div>

       <h1>John Leggott College: Sept 2016 - June 2018</h1>
       <div class="qual">
           <p>IT Extended Diploma</p>
           <p class="mark" id="mark3">D*D*D*</p>
       </div>

       <div class="qual">
           <p>IT Diploma</p>
           <p class="mark" id="mark4">D*</p>
       </div>
       
       <div class="qual">
           <p>A-Level Use of Mathematics</p>
           <p class="mark" id="mark5">C</p>
       </div>

       <h1>Additional Qualifications</h1>
       <div class="qual">
           <p>RSL Grade 4 Drum Performance</p>
               <p class="mark" id="mark6">M</p>
       </div>

       <div class="qual">
           <p>RSL Grade 3 Drum Performance</p>
               <p class="mark" id="mark7">M</p>
       </div>
   </div>

</div>




</template>

<script>
export default{
    name: 'Qualifications',
    methods: {
        Display: function(e){
            console.log(e)
        }
    }
}

</script>



<style>



.qualTitle {
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    gap: 30px;
}

.qualTitle h2{
    padding-top: 11px;
}





/* padding for marks, must be a better way to do this! */
#mark7{
    padding-left: 220px;
}

#mark6 {
    padding-left: 220px;
}

#mark5 {
    padding-left: 252px;
}

#mark4 {
    padding-left: 380px;
}

#mark3 {
    padding-left: 283px;
}

#mark2 {
    padding-left: 217px;
}

#mark1 {
    padding-left: 290px;
}


.qual {
    display: flex;
    gap: 200px;
    margin-left: 50px;
    width: 90%;
}

.mark {
    font-weight: bold;
}

.qual p {
    font-size: 15px;
    padding-left: 20px;
}



.content-wrap h1 {
    font-size: 20px; 
    padding-top: 5px;
    margin-left: 3%;
    font-style: italic;
}

.content-wrap {
    margin-bottom: 10%;
    margin-left: 10px;
}



</style>