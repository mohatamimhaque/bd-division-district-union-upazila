<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    * {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

*,
*:focus,
*:visited {
  outline: none;
}

body {
  position: relative;
  overflow: hidden;
  
  background: linear-gradient(50deg, #F9BF3B 0%,#F9BF3B 30%,#00B16A 30%,#00B16A 50%, #D64541 50%, #D64541 70%, #446CB3 70%, #446CB3 100%);
  
  width: 100vw;
  height: 100vh;
  
  text-align: center;
  color: #fff;
}

.container {
  position: relative;
  
  top: 20%;
  left: 50%;
  
  -webkit-transform: translate(-50%, -30%);
  -moz-transform: translate(-50%, -30%);
  -ms-transform: translate(-50%, -30%);
  transform: translate(-50%, -30%);
}

h2 {
  text-transform: uppercase;
  letter-spacing: 3px;
}

.wrapper-dropdown {
  position: relative;
  
  display: inline-block; 
  min-width: 290px;
  padding: 0 5px 0 15px;
  
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 2px 0 rgba(0 ,0 , 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12), 0 1px 5px 0 rgba(0, 0, 0, .2);
  
  text-align: left;
  line-height: 45px;
  color: #444;
  
  cursor: pointer;
  
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.wrapper-dropdown::before {
  content: '';
  position: absolute;
  top: 50%;
  right: 16px;
  
  margin-top: -2px;
  width: 0;
  height: 0;
  
  border-width: 6px 6px 0 6px;
  border-style: solid;
  border-color: #a0a0a0 transparent;
}

.wrapper-dropdown.active::before {
  border-width: 0 6px 6px 6px;
}

.wrapper-dropdown .dropdown {
  position: absolute;
  top:45px;
  right: 0;
  left: 0;
  overflow: scroll;
  max-height: 230px;
  
  
  margin: 0;
  padding: 0;
  
  list-style: none;
  
  border-radius: inherit;
  box-shadow: inherit;
  background: inherit;
  background: rgba(255, 255, 255, 1);

  -webkit-transition: .5s ease;
  -moz-transition: .5s ease;
  -ms-transition: .5s ease;
  transition: .5s ease;
  
  -webkit-transform: scaleY(0);
  -moz-transform: scaleY(0);
  -ms-transform: scaleY(0);
  transform: scaleY(0);
  
  -webkit-transform-origin: top;
  -moz-transform-origin: top;
  -ms-transform-origin: top;
  transform-origin: top;
  
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  opacity: 0;
  visibility: hidden;
  
}

.wrapper-dropdown .dropdown li {
  padding: 0 15px;
  border-bottom: 1px solid rgba(255, 255, 255, .2);
  overflow: hidden;
  
  -webkit-transition: .5s ease;
  -moz-transition: .5s ease;
  -ms-transition: .5s ease;
  transition: .5s ease;
}

.wrapper-dropdown .dropdown li:last-child {
  border-bottom: none;
}

.wrapper-dropdown .dropdown li:hover {
  background: rgba(197, 239, 247, .55);
}
.wrapper-dropdown label{
  pointer-events:none;
}
.wrapper-dropdown input{
  position:absolute;
  visibility: hidden;
}
.wrapper-dropdown.active .dropdown {
  opacity: 1;
  visibility: visible;
  -webkit-transform: scaleY(1);
  -moz-transform: scaleY(1);
  -ms-transform: scaleY(1);
  transform: scaleY(1);
}
  </style>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js" integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>


<body>
  
  <div class="container">
     <h2>Division</h2>
    <div class="division">  <div class="wrapper-dropdown" style="z-index: 3;" id="sdiv">
    <input type="checkbox" id="" value="0">
    <label>--Select Division--</label>
    <ul class="dropdown"></ul>
  </div>
</div>




  <h2>District</h2>
    <div class="district">
     <div class="wrapper-dropdown" style="z-index: 2;" id="sdis">
    <input type="checkbox" id="" value="0">
    <label>--Select District--</label>
    <ul class="dropdown"></ul>
  </div>

</div>

  <h2>Upzilla</h2>
     <div class="upzilla">

  <div class="wrapper-dropdown" style="z-index: 1;" id="su">
    <input type="checkbox" id="" value="0">
    <label>--Select Upazila--</label>
    <ul class="dropdown"></ul>
  </div>
</div>


  <h2>union</h2>
     <div class="union">

  <div class="wrapper-dropdown" style="z-index: 0;" id="up">
    <input type="checkbox" id="" value="0">
    <label>--Select Union--</label>
    <ul class="dropdown"></ul>
  </div>
</div>


</div>


<script>
  function lower(text){
  return text.toLowerCase();
}
function removeClass(e){
  for(let i=0;i<e.length;i++){
   e[i].classList.remove('active');
  }
}

const sdiv = document.querySelector("#sdiv");
const sdis = document.querySelector("#sdis");
const su = document.querySelector("#su");
const up = document.querySelector("#up");
const dropdowns = document.querySelectorAll(".wrapper-dropdown")
if (dropdowns) {
for(let i=0;i<dropdowns.length;i++){
  dropdowns[i].addEventListener('click',(e)=>{
    removeClass(dropdowns)
      e.target.classList.toggle('active');
  })}
  }
 if (sdiv) {

let divisions = ['Dhaka', 'Chattogram', 'Rajshahi', 'Khulna', 'Barishal', 'Sylhet', 'Rangpur'];
for (let i = 0; i < divisions.length; i++) {
  sdiv.querySelector('ul').innerHTML+=`<li data-value="${divisions[i]}">${divisions[i]}</li>`
}
var divisionsList = sdiv.querySelectorAll('li');

for (var i = 0; i < divisionsList.length; i++) {
  divisionsList[i].addEventListener('click',(e)=>{
    const data2 = event.target.getAttribute("data-value");
    sdiv.querySelector('label').innerHTML=data2;
    sdiv.querySelector('input').value=data2;
if (su) {
 su.querySelector('label').innerHTML="--Select Upazila--";
    su.querySelector('input').value='0';
   su.querySelector('ul').innerHTML='';
}
if (up) {
 up.querySelector('label').innerHTML="--Select Union--";
    up.querySelector('input').value='0';
   up.querySelector('ul').innerHTML='';
}
if (sdis) {
   sdis.querySelector('label').innerHTML="--Select District--";
   sdis.querySelector('input').value='0';
  }
  district(data2)
    removeClass(dropdowns)
    
      })
}
}



function district(data){
  $.ajax({
  url: "fetch-data.php",
 method: 'POST',
  data: {division:data},
  success: function(response) {
    $('#sdis .dropdown').html(response);
       }
  
});
  
  
}

  
  
</script>
<script>
  
</script>
</body>
</html>
