<template>

    <h1 class="title">Contact Me!</h1>
    <!-- <h1> Consider Taking a Copy of my CV</h1>
    <a href="../files/CV.pdf" target="_blank" download>Yesyes</a> -->
    <div class="contact">
        <h1>Get in Touch</h1>
        <p>
        It would be a pleasure if you could consider me for any upcoming opportunities. For inquires please contact me below. I am looking forward to hearing from you!
        </p>

        <form @submit="submit">
            <input type="email" id="email" name="email" size="45" maxlength="35" placeholder="Email"><br><br>
            <input type="text" id="name" name="name" size="45" maxlength="40" placeholder="Name"><br><br>
            <textarea rows="10" cols="40" placeholder="Message" maxlength="500"></textarea><br><br>
            <input type="submit" class="submit" value="Submit">
        </form> 

    </div>
</template>

<script>
import axios from 'axios'


export default{
   

    name: 'Contact',

    methods : {
        submit(e) {
            e.preventDefault();
            console.log("working!")

            const headers = {
                'Access-Control-Allow-Origin' : '*'
            }


            axios.post("http://127.0.0.1:8000/Submit.php", "hi", {
                headers: headers
            })
        }
    }
}


</script>



<style>
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