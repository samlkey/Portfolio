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


        <div class="lng-container">
            <div class="flexlng">
            <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            
            <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
            
            <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
            

            <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          
        </div>
            <div class="flexlng">
        
                <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />


                <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          
                
                <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
          
                
            <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          
            </div>
        </div>
        </div>

        <div class="lang">
            <h1>Known Frameworks.</h1>

            <div class="lng-container">
            <div class="flexlng">

            <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          
            
            <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
          
          

            <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
          


            <img class="lngIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" />
            
            </div>

            <div class="flexlng">



                
            </div>
        </div>


        </div>
    </div>
 
</template>

<style>
.lng-container {
    background-color: rgb(41, 41, 41);
    /* border: solid 5px black; */
    border-radius: 5%;
    width: 350px;
    height: 190px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

}






.qualsTitle h1::after{


content: "";
display: block;
position: relative;
width: 400px;
height: 1px;
background-color: #808080;
margin-left: 180px;
margin-top: -17px;


}




.lngIcon {
    height: 50px;
    margin-top: 30px;


}

.flexlng {
    display: flex;
    gap: 30px;
    justify-content: center;
}

.lang {
    text-align: center;
    
}


.lang-wrapper{
    display: flex;
    gap: 20%;
    justify-content: center;
    margin-top: 100px;
}


.qualsTitle {
    display: flex;
    font-size: 18px;
    font-weight: bold;
    gap: 30px;
    margin-left: 25%;
    font-family: century;
}

.qualsTitle h2{
    padding-top: 11px;
}





.right-of-image p {
    padding-left: 16px;
    font-size: 20px;
    margin-top: -70px;
    width: 100%;
}

.wrapper {
    display: flex;
    margin-top: 2%;
    margin-bottom: 5%;
}

.avatar {
    /* box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px; */
    border: solid 4px black;
    box-shadow: -25px 25px #181818, -25px 25px 0 4px rgb(0, 0, 0);
    border-radius: 5%;
    height: 280px;
    width: 280px;
}

</style>