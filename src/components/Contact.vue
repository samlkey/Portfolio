<template>
    <div class="conTitle">
        <h1>Send me a message!</h1>
    </div>
    <div class="contact">
        <p>
        For inquires please contact me below. I am looking forward to hearing from you!
        </p>
        <form @submit.prevent="submit" method="POST" target="_blank" action="https://formspree.io/samkey726@gmail.com">
            <input type="email" id="email" name="from_name" size="45" maxlength="35" placeholder="Your Email"><br><br>
            <input type="text" id="subject" name="subject" size="45" maxlength="40" placeholder="Subject"><br><br>
            <textarea rows="10" cols="40" placeholder="Message" maxlength="500" id="msg" name="message"></textarea><br><br>
            <input type="submit" class="submit" value="Submit">
        </form> 
    </div>
</template>
<script>
import emailjs from '@emailjs/browser';

export default{
    name: 'Contact',
    methods : {
        //todo:
        //CLEAR FORM ON SUBMIT
        //REPLACE ALERT() WITH HTML VISUALS
        submit() {
            var empty = false; 
            if (document.getElementById('email').value == "" || document.getElementById('subject').value == "" || document.getElementById('msg').value == "") empty = true
            if(empty == false){
                emailjs.sendForm('service_1x8gz0k', 'template_oy6tptt', this.$refs.form, 'v9uCAmwdCEkYwiDQc')
                    .then((result) => {
                        console.log("YES!", result.text);
                        alert("Thank you for contacting, I should be able to contact you back within the coming days")
                    }, (error) => {
                        console.log("NO!", error.text);
                })
            }else alert("Please fill out any empty fields");
        },
    }
}
</script>
<style src="../css/Contact.css" />