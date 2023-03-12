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
           <p class="mark" id="mark1">2.2</p>
       </div>


       <h1>John Leggott College: Sept 2016 - June 2018</h1>
       <div class="qual">
           <p>IT Extended Diploma</p>
           <p class="mark" id="mark1">D*D*D*</p>
       </div>

       <div class="qual">
           <p>IT Diploma</p>
           <p class="mark" id="mark1">D*</p>
       </div>
       
       <div class="qual">
           <p>A-Level Use of Mathematics</p>
           <p class="mark" id="mark1">C</p>
       </div>

    </div>

    <!-- <div class="right-qual">

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

      
    </div> -->

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
.qualTitle h1::after{


content: "";
display: block;
position: relative;
width: 400px;
height: 1px;
background-color: #808080;
margin-left: 233px;
margin-top: -17px;


}




.qualTitle {
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    gap: 30px;
    font-family: century;
}

.qualTitle h2{
    padding-top: 11px;
}





/* padding for marks, must be a better way to do this! */


#grade {
    right: 10px;
    position: absolute;
}

#mark1 {
    right: 200px;
    position: absolute;
}



#mark3 {
    padding-left: 300px;
}

#mark4 {

}

#mark5 {

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

    font-style: italic;
}

.content-wrap {
    margin-bottom: 5%;
    /* margin-left: auto; */
    /* margin-right: auto; */
    margin-left: 200px;
 
}

.right-qual{
    margin-left: -190px;

}

.content-wrap{
    margin-top: 20px;
}



</style>