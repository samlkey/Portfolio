<template> 
    <div class="footer">
        <div class="wrapper">
            <a target="_blank" href="https://github.com/samlkey">
                <img class="icon" src="../images/github.png">
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/samkey726/">
                <img class="icon" src="../images/linkedin.png">
            </a>
    </div>


    
        <div class="bottom-tag">
            <p class="text">Sam Key</p>
            <p class="text">samkey726@gmail.com</p>
            <p class="text"><a href="/contact">Contact Me!</a></p>
            <p class="text">Made using Vue.js</p>
        </div>
        
    </div>
</template>

<style>
.wrapper {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
}


.text + .text{
    border-left: 1px solid white;
}

.text {
    padding-left: 20px;
    padding-right: 20px;
}


.icon {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-top: 20px;
}

.wrapper img:hover {
    cursor: pointer;
}




.bottom-tag {
    display: flex;
    justify-content: center;
    padding-top: 15px;

    /* align to center */
    padding-right: 12px;

}

/* .bottom-tag{
    padding-top: 105px;
    display: flex;
    gap: 25px;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
    
} */

.bottom-tag a {
    color: white;
}

* { box-sizing: border-box; }

.footer {
    background-color: #181818;
    margin-top: -13px;
    color: white;
    bottom: 0;
    width: 100%;
    position: relative;
    
}
</style>