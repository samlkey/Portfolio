<template>
    <div class="qualsTitle">
            <h2 style="color: #808080">01.</h2>
            <h1>About Me</h1>
    </div>

    <div class="wrapper">
        <img class="avatar" src="../images/avatar.jpg">
        <div class="right-of-image">
            <p class="p1">Adventurous and determined student with an expanding eagerness and willingness to make a substantial contribution within
                          the workplace. At my finest when presented with a challenge, because of this I establish challenges in all aspects of my life- from
                            participating as a course representative in my initial university year to learning three thoroughly different musical instruments.
                            My time as course representative has presented me as a passionate individual, deriving from my enjoyment of communicating-
                            whether it be comprised of intriguing debate or casual conversation.
            </p>
        </div>
    </div>
    <div class="lang-wrapper">
        <div class="lang">
            <h1>Known Languages.</h1>
            <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            
            <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
            
            <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
            

            <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          

            <div>
        
                <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />


                <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          
                
                <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
          
                
            <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          
            </div>
        </div>

        <div>
            <h1>Known Frameworks.</h1>

            <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          
            
            <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
          
          

            <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
          


            <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" />
          


        </div>
    </div>
 
</template>

<style>
.lngIcon {
    height: 50px;
    margin-top: 30px;
    padding-left: 50px;
}

.lang {
    text-align: center;
}


.lang-wrapper{
    display: flex;
    gap: 50%;
    justify-content: center;
}


.qualsTitle {
    display: flex;
    font-size: 18px;
    font-weight: bold;
    gap: 30px;
    margin-left: 22%;
}

.qualsTitle h2{
    padding-top: 11px;
}





.right-of-image p {
    padding-left: 16px;
    font-size: 20px;
}

.wrapper {
    display: flex;
    margin-top: 2%;
    margin-bottom: 5%;
}

.avatar {
    max-width: 300px;
    max-height: 300px;
    margin-top: 25px;
    margin-left: 25px;
    border: 5px solid black; 
    border-radius: 25%;
    box-shadow: 0 0 0 7px #fff, 
                0 0 0 8px rgb(0, 0, 0);
}



</style>