<template>
    <head>
        <meta charset="UTF-8">
    </head>
    <!-- <h1> Consider Taking a Copy of my CV</h1>
    <a href="../files/CV.pdf" target="_blank" download>Yesyes</a> -->
    <div id="deets" class="details">
        <!--Implement Icons-->


        <div class="pair">

            <a href="mailto: samkey726@gmail.com" class="linked">
                <img class="icon" src="../images/email.jpg">
            </a>


        </div>

        <div class="pair">
            <a class="linked" target="_blank" href="https://www.linkedin.com/in/samkey726/">
                <img class="icon" src="../images/linkedin.png">
            </a>
    
        </div>

        <div class="pair">
            <a class="linked" target="_blank" href="https://github.com/samlkey">
                <img class="icon" src="../images/github.png">
            </a>
        </div>

        <div class="pair">
        
      


            <a class="linked" onclick='navigator.clipboard.writeText("07944994022")'>
                <img class="icon" src="../images/phone.png">
            </a>
        </div>

       
      


    </div>

    <div class="contact">
        <h1>Get in Touch</h1>
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



.details {
    text-align: center;
    padding-top: 15px;
    display: flex; 
    margin-left: 30px;
}

.details p {
    font-size: 18px;
    font-weight: bold;
}

.contact {
    margin-top: 80px;
    text-align: center;
    margin-bottom: 80px;

}

.contact p {
    width: 350px;
    margin-left: 33%;
    font-size: 15px;
}

.contact form {
    margin-top: 60px;
}

.contact input {
    height: 25px; 
}

.contact textarea {
    resize: none; 
    font-family: Verdana,Arial;
    font-size: 12px;
    width: 292px;
}

.contact h1 {
    font-size: 27px;
}

.submit {
    font-size: 15px; 
    border: 1px solid silver;
}

</style>