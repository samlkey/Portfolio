<template>
    <div class="expTitle">
            <h2 style="color: #808080">03.</h2>
            <h1>Experience</h1>
    </div>


    <div class="exp-wrapper">
    <!-- <div id="exp" class="exp">
        <h1>Clarks, August 2022 - Febuary 2023</h1>
        <ul>
         
                <h2>Jubile Way, DN15 6RB, Scunthorpe, Telephone: 01724 066462</h2>
          
        
        </ul>


        <h1>Home Bargains, December 2020 - June 2022</h1>
        <ul>
            <h2>
                Queens Rd, S2 4DR, Sheffield, Telephone: 0114 2725709
            </h2>
         
        </ul>

        <h1>Gulliver's Valley Resort, August 2020 - December 2020</h1>
        <ul>
            <h2>
                Mansfield Rd, S26 5QW, Sheffield, Telephone: 01925 444888
            </h2>
         
        </ul>

        <h1>Jet Petrol Station, August 2017 - August 2018</h1>
        <ul>
            <h2>
                Grange Ln S, Scunthorpe, Telephone: 01724 869973
            </h2>
        
        </ul>

        <h1>CRAM'S Computers, June 2015</h1>
        <ul>
            <h2>
                190 Ashby Rd, Scunthorpe, Telephone: 01724 277259
            </h2>
      
        </ul>


    </div>  -->

    

    </div>
    <div class="wrap">
      <div class="menu1">
        <div>
           <button v-on:click="Display('1')" class="qualBtn">Clarks</button> 
        </div>
        
        <div>
            <button v-on:click="Display('2')" class="qualBtn">Home Bargains</button>
        </div>
        
        <div>
             <button v-on:click="Display('3')" class="qualBtn">Gullivers</button>
        </div>
        <div>
             <button v-on:click="Display('4')" class="qualBtn">Jet Petrol</button>
        </div>
        <div>
             <button v-on:click="Display('5')" class="qualBtn">CRAM</button>
        </div>
    </div>
    <div class="exp-right">
        <div id="1" style="display:none;">
            <h1>Clarks,</h1>
            <h2>August - January 2023</h2>
            <ul>
                <li>
                    <p>Working as a sales assistant. Working here greatly improved my ability to sell products through speaking with
customers. It taught me how to drive better sale numbers through being charismatic, and listening to their needs
and wants.</p>
                </li>
                <li>
                    <p>Jubilee Way, DN15 6RB, Scunthorpe, Telephone: 01724 866462</p>
                </li>
            </ul>
        </div>
        <div id="2" style="display:none;">
            <h1>Home Bargains,</h1>
            <h2>December - June 2022</h2>
            <ul>
                <li>
                    <p>Working as a retail assistant. Working here allowed me to further develop my customer service and customer
handling skills, ensuring to provide a respectable face for the company. My problem-solving was also improved as I
was entrusted with selling proof-of-age items to the public.</p>
                </li>
                <li>
                    <p>Queens Rd, S2 4DR, Sheffield, Telephone: 0114 272 5709</p>
                </li>
            </ul>
        </div>
        <div id="3" style="display:none;">
            <h1>Gulliver's Valley Resort,</h1>
            <h2>August - December 2020</h2>
            <ul>
                <li>
                    <p>Working as a ride operator. Working here allowed me to improve my teamwork, team leading and problem-solving
skills allowing me to work confidently within a team even during busy stress inducting times. As a rider operator this
job involved a great amount of responsibility like ensuring the safety of ride guests, this trained me to pay close
attention to my work.</p>
                </li>
                <li>
                    <p>Mansfield Rd, S26 5QW Sheffield, Telephone: 01925 444888</p>
                </li>
            </ul>
        </div>
        <div id="4" style="display:none;">
            <h1>Jet Petrol Station,</h1>
            <h2>August - August 2018</h2>
            <ul>
                <li>
                    <p>Working as a retail assistant. Working here allowed me to improve my customer service skills, making sure I provide
the customer with the best shopping experience possible. I also went beyond helping customers with abstract
problems such as: needing directions, giving advice on several types of cars, and making sure I can help whenever
possible. From this job I am now able to work effectively in fast and high stress environments.</p>
                </li>
                <li>
                    <p>Grange Ln S, Scunthorpe, Telephone: 01724 869973</p>
                </li>
            </ul>
        </div>
        <div id="5" style="display:none;">
            <h1>CRAM Computers,</h1>
            <h2>June 2015</h2>
            <ul>
                <li>
                    <p>Working as an IT assistant. Working here involved fixing and trouble-shooting different PCs and computing
equipment such as; printers, scanners, etc. This developed my customer service skills and problem-solving skills as I
had to fix issues described by customers. I was able to fix PCs in an efficient and organized manner to ensure all the
days jobs were completed.</p>
                </li>
                <li>
                    <p>190 Ashby Rd, Scunthorpe, Telephone: 01724 277259</p>
                </li>
            </ul>
        </div>
    </div>
    
    </div>
</template>
<script>
export default{
    name: 'Experience',
    data(){
        return {
            currentDisplay: '1',
        }
    },
    methods : {
        Display: function(element){
            document.getElementById(this.currentDisplay).style.display = "none";
            
            document.getElementById(element).style.display = "block";
            this.currentDisplay = element; 
        },
    },
    mounted(){
        document.getElementById("1").style.display = "block"
    }
}

</script>

<style>
.menu1 {

    font-size: 20px;
    margin-bottom: 100px;
}

.expTitle{
    display: flex;
    font-size: 18px;
    font-weight: bold;
    gap: 30px;
    margin-left: 20%;
}

.expTitle h2{
    padding-top: 11px;
}


.menu1 button:hover{
    cursor: pointer;
    background-color: #313131;
    color:white;
}

.exp-right h2 {
    color: #808080;
    margin-top: -15px;
}

.exp-right h1 {
    font-size: 30px
}


.exp-right {
    margin-left: 70px;
    margin-top: -15px;
}

.exp-right p{
    font-size: 18px;
    margin-left: 20px;
    width: 80%;
}

.exp-right li{
    margin-left: -25px;
    margin-top: 30px;

}

.qualBtn{
  
    width: 180px;
    height: 50px;
    font-weight: bold;
    background: #181818;
    color: #cfcfcf;
    text-decoration: none;
    border: 0;



    
  -webkit-transition: background-color 0.4s linear;
  -moz-transition: background-color 0.4s linear;
  -o-transition: background-color 0.4s linear;
  transition: background-color 0.4s linear;
}

.menu1 div{
    border-left: solid 2px rgb(85, 85, 85);
}

.wrap{
    display: flex;
    margin-left: 250px;
    margin-right: auto;
}




.exp {
    margin-left: 3%;
    margin-bottom: 100px;
}


.exp-wrapper {
    display: flex;
    gap: 400px;
    margin-bottom: 65px;
}

.exp li {
    font-size: 13px;
    padding-top: 5px;
    width: 700px;
}

.title {
    margin-bottom: 35px;
    margin-left: 20px;
    margin-top: 30px;
    font-size: 25px;
    text-decoration: underline;
}

.exp h1 {
    font-size: 23px; 
    padding-top: 20px;
    font-style: italic;
   
}

.exp h2 {
    margin-top: -12px;
}



</style>