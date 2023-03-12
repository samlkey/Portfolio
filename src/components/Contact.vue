<template>
    <head>
        <meta charset="UTF-8">
    </head>


    <div class="conTitle">
            <h1 style="color: #808080">04.</h1>
            <h1>Contact Me</h1>
    </div>
    


    <div class="contact">
        <p>
        It would be a pleasure if you could consider me for any upcoming opportunities. For inquires please contact me below. I am looking forward to hearing from you!
        </p>

        <form @submit.prevent="submit" ref="form">
            <input type="email" id="email" name="from_name" size="45" maxlength="35" placeholder="Your Email"><br><br>
            <input type="text" id="subject" name="subject" size="45" maxlength="40" placeholder="Subject"><br><br>
            <textarea rows="10" cols="40" placeholder="Message" maxlength="500" id="msg" name="message"></textarea><br><br>
            <input type="submit" class="submit" value="Submit">
        </form> 

    </div>


    <div class="credit">
        <p>Created using Vue.js</p>

        <a class="credlink" target="_blank" href="https://github.com/samlkey/Portfolio">
            <p>View my Respository!</p>
        </a>
    </div>
   
</template>

<script>
// import axios from 'axios' //needs removing
import emailjs from '@emailjs/browser';


export default{
   

    name: 'Contact',

    methods : {
        submit() {
            //PREVENT EMPTY
            var empty = false; 
            var email = document.getElementById('email').value; 
            if (email == "") empty = true

            var subj = document.getElementById('subject').value;
            if (subj == "") empty = true

            var msg = document.getElementById('msg').value; 
            if(msg == "") empty = true


            if(empty == false){
                emailjs.sendForm('service_1x8gz0k', 'template_oy6tptt', this.$refs.form, 'v9uCAmwdCEkYwiDQc')
                    .then((result) => {
                        console.log("YES!", result.text);
                        alert("Thank you for contacting, I should be able to contact you back within the coming days")
                }, (error) => {
                    console.log("NO!", error.text);
            })
            }else{
                alert("Please fill out any empty fields")
            }
        },
    }
}


</script>



<style>
.credit {
    font-size: 13px;
    justify-content: center;
    display: flex;
    gap: 5%;
    margin-left: 50px;

}

.credlink{
    text-decoration: underline;
    color: white;
}



.conTitle {
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    gap: 30px;
    font-family: century;
    padding-top: 100px;
}

.conTitle h2{
    padding-top: 11px;
}



.linked {
    height: 30px;
    width: 30px;
    margin-top: 10px;
    
}

.linked :hover {
    cursor: pointer;
}


.pair{
    display: flex; 
    /* justify-content: center; */
    padding-left: 70px;
    gap: 15px;
    margin-top: 15px;
}





.contact {
    margin-top: 70px;
    text-align: center;
    margin-bottom: 130px;

}

.contact p {
    width: 500px;
    margin-left: 33%;
    font-size: 20px;
    margin-top: -50px;
}

.contact form {
    margin-top: 120px;
    margin-left: 45px;
    font-size: 10px;
    
}

.contact input {
    height: 25px; 
    background-color:   #181818;
    color: white;
    border-radius: 0.5em;
    
    border: solid 2px #808080;

}

.contact textarea {
    resize: none; 
    font-family: Verdana,Arial;
    font-size: 12px;
    width: 300px;
    background-color:   #181818;
    color: white;
    text-decoration: none;

   
    border: solid 2px #808080;


    border-radius: 0.5em;

}

.contact h1 {
    font-size: 27px;
}

.submit {
    font-size: 15px; 
    border: 1px solid silver;
    width: 100px;
    font-size: 12px;

    -webkit-transition: color 0.4s linear;
  -moz-transition: color 0.4s linear;
  -o-transition: color 0.4s linear;
  transition: color 0.4s linear;
 

}


input:hover[type="submit"]{
    cursor: pointer;
    background-color: #c9c9c9;
    color: black; 
    border: #c9c9c9;
}


</style>