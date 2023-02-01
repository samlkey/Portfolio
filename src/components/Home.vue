<template>
    <div class="wrapper">
        <img class="avatar" src="../images/avatar.jpg">
        <div class="right-of-image">
            <h1>About Me</h1>
            <p class="p1">Adventurous and determined student with an expanding eagerness and willingness to make a substantial contribution within
                          the workplace. At my finest when presented with a challenge, because of this I establish challenges in all aspects of my life- from
                            participating as a course representative in my initial university year to learning three thoroughly different musical instruments.
                            My time as course representative has presented me as a passionate individual, deriving from my enjoyment of communicating-
                            whether it be comprised of intriguing debate or casual conversation.
            </p>
        </div>
    </div>
    <p class="p2">
    Due to this I have also relished in team commanding roles from experience gained in instructing teams for university projects.
    For example, in my first year of studying I had to lead a team of developers working on a C++ version of the game Snake, this
    helped improve my ability to work towards deadlines and manage tasks between my team members. My time at Jet petrol
    station and Home Bargains has also improved my retail and customer service abilities, ensuring customers always want to
    return. Not only a capable team leader but a valuable team member who will strive to perform his best at any appointed task.
    </p>

    <div class="skills">
    <h1>Skills</h1>

    <div class="menu1">
        <a v-on:click="Display('1')" id="btn1">Computer & IT Related</a>
        <a v-on:click="Display('2')" id="btn2">Networking</a>
        <a v-on:click="Display('3')" id="btn3">Hardware</a>
        <a v-on:click="Display('4')" id="btn4">Social</a>
        <a v-on:click="Display('5')" id="btn5">Other</a>
    </div>

    <div class="choice-wrapper">
        <div id="1" style="display:none;">1</div>
        <div id="2" style="display:none;">2</div>
        <div id="3" style="display:none;">3</div>
        <div id="4" style="display:none;">4</div>
        <div id="5" style="display:none;">5</div>
    </div>

    </div>

</template>

<script>
export default{
    name: 'Home',
    data(){
        return {
            currentDisplay: '1',
        }
    },
    methods : {
        Display: function(element){
            //HIDE CURRENT DISPLAY
            for(var i = 1; i < 6; i++){
                document.getElementById("btn"+i).style.textDecoration = "none";
            }
            document.getElementById(this.currentDisplay).style.display = "none";
            
            //DISPLAY NEW DISPLAY
            document.getElementById(element).style.display = "block";
            document.getElementById("btn" + element).style.textDecoration = "underline"
            this.currentDisplay = element; 
        },
    },
    mounted(){
        document.getElementById("1").style.display = "block"
        document.getElementById("btn1").style.textDecoration = "underline"
    }
}

</script>



<style>
.menu1 {
    margin-left: 23%;
    display: flex;
    gap: 15px;
    font-size: 15px;
    font-weight: bold;
}

.menu1 a:hover {
  color: black;  
  background-color: #ddd;
  cursor: pointer;
}



.skills{
    margin-left: 25px;
    margin-top: 30px;
}


.right-of-image h1 {
    font-size: 25px;
    padding-left: 15px;
    padding-top: 25px;
}

.right-of-image p {
    padding-left: 16px;
    font-size: 15px;
}

.wrapper {
    display: flex;
    margin-top: 15px;
}

.p2 {
    font-size: 15px;
    padding-left: 25px;
    padding-top: 5px;
}

.avatar {
    max-width: 205px;
    max-height: 210 px;
    margin-top: 25px;
    margin-left: 25px;
    border: 5px solid black; 
    border-radius: 50%;
    box-shadow: 0 0 0 7px #fff, 
                0 0 0 8px rgb(0, 0, 0);
}

</style>