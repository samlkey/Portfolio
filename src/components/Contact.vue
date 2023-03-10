<template>
    <head>
        <meta charset="UTF-8">
    </head>


    <div class="qualTitle">
            <h1 style="color: #808080">04.</h1>
            <h1>Contact</h1>
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





.contact {
    margin-top: 70px;
    text-align: center;
    margin-bottom: 200px;

}

.contact p {
    width: 500px;
    margin-left: 33%;
    font-size: 20px;
}

.contact form {
    margin-top: 120px;
    margin-left: 45px;
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