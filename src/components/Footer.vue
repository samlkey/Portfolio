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
            <p>Sam Key</p>
            <p>samkey726@gmail.com</p>
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


.icon {
    height: 55px;
    width: 55px;
    border-radius: 50%;
    margin-top: 50px;
}

.wrapper img:hover {
    cursor: pointer;
}


.bottom-tag p {
    align-self: center;
}


.bottom-tag{
    padding-top: 220px;
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
}


.footer {
    background-color: #181818;
    margin-top: -13px;
    height: 100%;
    color: white;
    text-align: center;
}
</style>