<template>
    <head>
        <meta charset="UTF-8">
    </head>
    <!-- <h1> Consider Taking a Copy of my CV</h1>
    <a href="../files/CV.pdf" target="_blank" download>Yesyes</a> -->
    <div class="details">
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

        <form @submit="submit">
            <input type="email" id="email" name="email" size="45" maxlength="35" placeholder="Your Email"><br><br>
            <input type="text" id="name" name="name" size="45" maxlength="40" placeholder="Subject"><br><br>
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
        },


        //could escilate to main copy to clipboard function widely used
        t: function() {
            console.log("hi")
            
            navigator.clipboard.writeText('07')
          

        }
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