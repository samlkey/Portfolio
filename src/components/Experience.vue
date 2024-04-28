<template>
    <div class="expTitle">
            <h2 style="color: #808080">03.</h2>
            <h1>Experience</h1>
    </div>
    <div class="wrap">
        <div class="menu1">
            <div>
                <button v-on:click="Display('1')" class="qualBtn" id="bt1">Clarks</button> 
            </div>
            <div>
                <button v-on:click="Display('2')" class="qualBtn">Home Bargains</button>
            </div>
            <div>
                <button v-on:click="Display('3')" class="qualBtn">Gullivers</button>
            </div>
            <div>
                <button v-on:click="Display('4')" class="qualBtn">Jet Petrol</button>
            </div>
            <div>
                <button v-on:click="Display('5')" class="qualBtn">CRAM</button>
            </div>
    </div>
    <div class="exp-right">
        <div id="1">
            <h1>Clarks,</h1>
            <h2>August - January 2023</h2>
            <ul>
                <li>
                    <p>Working as a sales assistant. Working here greatly improved my ability to sell products through speaking with
                    customers. It taught me how to drive better sale numbers through being charismatic, and listening to their needs
                    and wants.</p>
                </li>
                <li>
                    <p>Jubilee Way, DN15 6RB, Scunthorpe, Telephone: 01724 866462</p>
                </li>
            </ul>
        </div>
        <div id="2" style="display:none;">
            <h1>Home Bargains,</h1>
            <h2>December - June 2022</h2>
            <ul>
                <li>
                    <p>Working as a retail assistant. Working here allowed me to further develop my customer service and customer
                    handling skills, ensuring to provide a respectable face for the company. My problem-solving was also improved as I
                    was entrusted with selling proof-of-age items to the public.</p>
                </li>
                <li>
                    <p>Queens Rd, S2 4DR, Sheffield, Telephone: 0114 272 5709</p>
                </li>
            </ul>
        </div>
        <div id="3" style="display:none;">
            <h1>Gulliver's Valley Resort,</h1>
            <h2>August - December 2020</h2>
            <ul>
                <li>
                    <p>Working as a ride operator. Working here allowed me to improve my teamwork, team leading and problem-solving
                    skills allowing me to work confidently within a team even during busy stress inducting times. As a rider operator this
                    job involved a great amount of responsibility like ensuring the safety of ride guests, this trained me to pay close
                    attention to my work.</p>
                </li>
                <li>
                    <p>Mansfield Rd, S26 5QW Sheffield, Telephone: 01925 444888</p>
                </li>
            </ul>
        </div>
        <div id="4" style="display:none;">
            <h1>Jet Petrol Station,</h1>
            <h2>August - August 2018</h2>
            <ul>
                <li>
                    <p>Working as a retail assistant. Working here allowed me to improve my customer service skills, making sure I provide
                    the customer with the best shopping experience possible. I also went beyond helping customers with abstract
                    problems such as: needing directions, giving advice on several types of cars, and making sure I can help whenever
                    possible. From this job I am now able to work effectively in fast and high stress environments.</p>
                </li>
                <li>
                    <p>Grange Ln S, Scunthorpe, Telephone: 01724 869973</p>
                </li>
            </ul>
        </div>
        <div id="5" style="display:none;">
            <h1>CRAM Computers,</h1>
            <h2>June 2015</h2>
            <ul>
                <li>
                    <p>Working as an IT assistant. Working here involved fixing and trouble-shooting different PCs and computing
                    equipment such as; printers, scanners, etc. This developed my customer service skills and problem-solving skills as I
                    had to fix issues described by customers. I was able to fix PCs in an efficient and organized manner to ensure all the
                    days jobs were completed.</p>
                </li>
                <li>
                    <p>190 Ashby Rd, Scunthorpe, Telephone: 01724 277259</p>
                </li>
            </ul>
        </div>
    </div>    
</div>
</template>
<script>
export default{
    name: 'Experience',
    data(){
        return {
            currentDisplay: '1',
        }
    },
    methods : {
        Display: function(element){
            var arr = [].slice.call(document.getElementsByClassName("qualBtn"));
            arr.forEach(element => {
                element.style.borderLeft = "solid 2px rgb(85, 85, 85)";
                element.style.backgroundColor = "#181818"
            });
            document.getElementById(this.currentDisplay).style.display = "none";
            document.getElementById(element).style.display = "block";
            arr[element-1].style.borderLeft = "solid 2px rgb(15, 15, 15)";
            arr[element-1].style.backgroundColor = '#313131'
            this.currentDisplay = element; 
        },
    },
    mounted(){
        document.getElementById("1").style.display = "block"
        document.getElementById('bt1').style.borderLeft = "solid 2px rgb(15, 15, 15)";
        document.getElementById('bt1').style.backgroundColor = '#313131'
    }
}
</script>
<style src="../css/Experience.css" />
