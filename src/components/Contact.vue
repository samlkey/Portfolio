<template>
    <h1> Consider taking a copy of my CV</h1>
    <div class="contact">
        <h1>Get in Touch</h1>
        <p></p>
        For inquires please contact me below. I am looking forward to hearing from you!


        <form action="/action_page.php">
            <input type="email" id="email" name="email" size="35" maxlength="35" placeholder="Email"><br><br>
            <input type="text" id="name" name="name" size="35" maxlength="40" placeholder="Name"><br><br>
            <textarea rows="10" cols="40" placeholder="Message" maxlength="500"></textarea><br><br>
            <input type="submit" value="Submit">
        </form> 

    </div>
</template>

<style>
.contact {
    margin-top: 80px;
    text-align: center;
    margin-bottom: 80px;
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
}

</style>