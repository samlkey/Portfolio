<template> 
    <div class="footer">
        <div>
            <a href="mailto: samkey726@gmail.com">
                <img class="icon" src="../images/email.png">
            </a>
        </div>
        <div>
            <a target="_blank" href="https://www.linkedin.com/in/samkey726/">
                <img class="icon" src="../images/linkedin.png">
            </a>
        </div>
            <a target="_blank" href="https://github.com/samlkey">
                <img class="icon" src="../images/github.png">
            </a>  
        </div>
        
</template>

<style>
.wrapper {

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

.footer a :hover {
    transform: translateY(-3px);

}



.bottom-tag {

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
    display: block;
    color: white;
    bottom: 0;
    width: 10%;
    height: 160px;
    position: fixed;
    margin-bottom: 100px;
}
</style>