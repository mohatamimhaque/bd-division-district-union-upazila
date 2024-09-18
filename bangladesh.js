
function divisionDropdown(){
  let checkbox = document.createElement("input");
checkbox.id = "";
checkbox.type = "checkbox";
checkbox.value = "0";
let dropdownList = document.createElement("ul");
dropdownList.classList.add("dropdown");
let label = document.createElement("label");
    const divisionDropdown = document.createElement("div");
    divisionDropdown.classList.add("wrapper-dropdown");
    divisionDropdown.style.zIndex = "3";
    divisionDropdown.id = "sdiv";
    divisionDropdown.appendChild(checkbox);
label.textContent = "--Select Division--";
divisionDropdown.appendChild(label);
dropdownList.style.zIndex = "3";
divisionDropdown.appendChild(dropdownList);
return divisionDropdown;

}

function districtDropdown(){
  let checkbox = document.createElement("input");
checkbox.id = "";
checkbox.type = "checkbox";
checkbox.value = "0";
let dropdownList = document.createElement("ul");
dropdownList.classList.add("dropdown");
let label = document.createElement("label");
    const districtDropdown = document.createElement("div");
    districtDropdown.classList.add("wrapper-dropdown");
    districtDropdown.style.zIndex = "2";
    districtDropdown.id = "sdis";
    districtDropdown.appendChild(checkbox);
label.textContent = "--Select District--";
districtDropdown.appendChild(label);
dropdownList.style.zIndex = "2";
districtDropdown.appendChild(dropdownList);
return districtDropdown;

}




function upazilaDropdown(){
  let checkbox = document.createElement("input");
checkbox.id = "";
checkbox.type = "checkbox";
checkbox.value = "0";
let dropdownList = document.createElement("ul");
dropdownList.classList.add("dropdown");
let label = document.createElement("label");
    const upazilaDropdown = document.createElement("div");
    upazilaDropdown.classList.add("wrapper-dropdown");
    upazilaDropdown.style.zIndex = "1";
    upazilaDropdown.id = "su";
    upazilaDropdown.appendChild(checkbox);
label.textContent = "--Select Upazila--";
upazilaDropdown.appendChild(label);
dropdownList.style.zIndex = "1";
upazilaDropdown.appendChild(dropdownList);
return upazilaDropdown;

}



//divisionDropdown
//districtDropdown

function control(){
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
if (sdis) {
   sdis.querySelector('label').innerHTML="--Select District--";
   sdis.querySelector('input').value='0';
  district(data2)}
    removeClass(dropdowns)
    
      })
}
}

function district(data){
  
  const district = {
  "Barishal": ["Barguna", "", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur"],
  "Chattogram": ["Bandarban", "Brahmanbaria", "Chandpur", "Chattogram", "Cumilla", "Cox's Bazar", "Feni", "Khagrachhari", "Lakshmipur", "Noakhali", "Rangamati"],
  "Dhaka": ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail"],
  /**/"Khulna": ["Bagerhat", "Chuadanga", "Jashore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"],/**/
 "Mymensingh": ["Jamalpur", "Mymensingh", "Netrokona", "Sherpur"],
 "Rajshahi": ["Bogura", "Chapainawabganj", "Joypurhat", "Naogaon", "Natore", "Pabna", "Rajshahi", "Sirajganj"],
  "Rangpur": ["Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon"],
  "Sylhet": ["Habiganj", "Maulvibazar", "Sunamganj", "Sylhet"]
};

for (let d in district) {
 if(data == d){
   let dt= '';
  for (let i = 0; i < district[d].length; i++) {
    dt+=`<li data-value="${district[d][i]}">${district[d][i]}</li>`
  }
  sdis.querySelector('ul').innerHTML=dt
  
}}

let districtList = sdis.querySelectorAll('li');

for (let i = 0; i < districtList.length; i++) {
  districtList[i].addEventListener('click',(e)=>{
    let data = event.target.getAttribute("data-value");
    sdis.querySelector('label').innerHTML=data;
    
    sdis.querySelector('input').value=data;
    if (su) {
    su.querySelector('label').innerHTML="--Select Upazila--";
    su.querySelector('input').value='0';
    upazila(data)}
    removeClass(dropdowns)
   
      })
}

}

function upazila(data){
  const upazila = {
    //Barisal division
  "Bhola": ['Bhola Sadar', 'Borhanuddin', 'Char Fasson', 'Daulatkhan', 'Lalmohan', 'Manpura', 'Tazumuddin'],
  "Barguna": ['Amtali', 'Bamna', 'Barguna Sadar', 'Betagi', 'Patharghata','Taltoli'],
  "Jhalokati": ['Jhalokati Sadar', 'Kathalia', 'Nalchity', 'Rajapur'],
  "Patuakhali": ['Bauphal', 'Dashmina', 'Galachipa', 'Kalapara', 'Mirzaganj', 'Patuakhali Sadar', 'Rangabali'],
  "Pirojpur": ['Bhandaria', 'Kawkhali', 'Mathbaria', 'Nazirpur', 'Nesarabad (Swarupkathi)', 'Pirojpur Sadar', 'Zianagar','Indurkandi'],
  "Barisal": ['Agailjhara', 'Babuganj', 'Bakerganj', 'Banaripara', 'Gaurnadi', 'Hizla', 'Barisal Sadar', 'Mahendiganj', 'Muladi', 'Wazirpur'],
  //Chattogram division
  "Bandarban": ["Ali Kadam", "Bandarban Sadar", "Lama", "Naikhongchhari", "Rowangchhari", "Ruma", "Thanchi"],
  "Brahmanbaria": ["Akhaura","Ashuganj", "Bancharampur", "Brahamanbaria Sadar","Bijoynagar","Kasba", "Nabinagar", "Nasirnagar", "Sarail"],
  "Chandpur": ["Chandpur Sadar", "Faridganj", "Haimchar", "Haziganj", "Kachua", "Matlab Dakshin", "Matlab Uttar", "Shahrasti"],
  "Chattogram": ["Anwara", "Banshkhali", "Boalkhali", "Chattogram Sadar", "East Joara", "Fatikchhari", "Hathazari", "Jaldi", "Lohagara", "Mirsharai", "Patiya", "Rangunia", "Raozan", "Sandwip", "Satkania", "Sitakunda"],
  "Cumilla": ["Barura", "Brahmanpara", "Burichang", "Chandina", "Chauddagram", "Cumilla Sadar Dakshin", "Cumilla Sadar Uttar", "Daudkandi", "Debidwar", "Homna", "Laksam", " Lalmai","Muradnagar"," Monohorganj", "Nangalkot", "Meghna", "Titas"],
  "Cox's Bazar": ["Chakaria", "Cox's Bazar Sadar", "Kutubdia", "Maheshkhali","Pekuya", "Ramu", "Teknaf", "Ukhia"],
  "Feni": ["Chagalnaiya", "Daganbhuiyan", "Feni Sadar","Fulgazi", "Parshuram", "Sonagazi"],
  "Khagrachhari": ["Dighinala", "Khagrachhari Sadar"," Guimara", "Lakshmichhari", "Mahalchhari", "Manikchhari", "Matiranga", "Panchhari", "Ramgarh"],
  "Lakshmipur": ["Kamalnagar", "Lakshmipur Sadar", "Ramganj"," Ramgati", "Raypur"],
  "Noakhali": ["Begumganj", "Chatkhil", "Companiganj", "Hatiya"," Kabirganj", "Noakhali Sadar", "Senbag", "Sonaimuri", "Subarnachar"],
  "Rangamati": ["Bagaichhari","Bilaichhari", "Barkal", "Kaptai","Kawkhali", "Juraichhari", "Langadu", "Nannerchar", "Rajasthali", "Rangamati Sadar"],
  //Mymensingh division
  "Netrokona": ["Atpara", "Barhatta", "Durgapur", "Khaliajuri"," Kenduya", "Kalmakanda", "Madan", "Mohanganj", "Netrokona Sadar", "Purbadhala"],
  "Mymensingh": ["Bhaluka","Dhobaurha","Fulbariya","Ghouripur","Ishwarganj", "Trishal", "Haluaghat", "Muktagachha", "Gaffargaon", "Nandail", "Phulpur", "Mymensingh Sadar","Tarakanda"],
  "Jamalpur": ["Baksiganj", "Dewanganj", "Islampur", "Jamalpur Sadar", "Madarganj", "Melandaha", "Sarishabari"],
  "Sherpur": ["Jhenaigati", "Nakla", "Nalitabari", "Sherpur Sadar", "Sreebardi"],
//Rajshahi division
  "Bogura": ["Adamdighi", "Bogura Sadar", "Dhunat", "Dhupchanchia", "Gabtali", "Kahalu", "Nandigram", "Sariakandi", "Shajahanpur", "Sherpur"," Shibganj", "Sonatala"],
  "Chapainawabganj": ["Bholahat", "Chapainawabganj Sadar", "Gomastapur", "Nachole", "Rohanpur", "Shibganj"],
  "Joypurhat": ["Akkelpur", "Joypurhat Sadar", "Kalai", "Khetlal", "Panchbibi"],
  "Naogaon": ["Ahsanganj", "Badalgachhi", "Dhamoirhat", "Manda", "Mohadevpur", "Naogaon Sadar", "Niamatpur", "Patnitala", "Porsha", "Raninagar", "Sapahar"],
  "Natore": ["Bagatipara", "Baraigram", "Gurudaspur", "Lalpur", "Natore Sadar", "Naldanga", "Singra"],
  "Pabna": ["Atgharia", "Bera", "Bhangura", "Chatmohar", "Faridpur", "Ishwardi", "Pabna Sadar", "Santhia", "Sujanagar"],
  "Rajshahi": ["Bagha", "Bagmara", "Charghat", "Durgapur", "Godagari", "Mohanpur", "Paba", "Puthia", "Rajshahi Sadar", "Tanore"],
  "Sirajganj": ["Belkuchi", "Chauhali", "Kamarkhanda", "Kazipur", "Raiganj", "Shahjadpur", "Sirajganj Sadar", "Tarash", "Ullahpara"],
  //Rangpur division
  "Dinajpur": ["Birampur", "Birganj", "Bochaganj"," Birol", "Chirirbandar", "Phulbari", "Ghoraghat", "Hakimpur", "Kaharole", "Khansama", "Dinajpur Sadar", "Nawabganj", "Parbatipur"],
  "Gaibandha": ["Gaibandha Sadar", "Gobindaganj", "Palashbari", "Phulchari", "Sadullapur", "Saghata", "Sundarganj"],
  "Kurigram": ["Bhurungamari", "Char Rajibpur", "Chilmari", "Phulbari", "Kurigram Sadar", "Nageshwari", "Rajarhat", "Rowmari", "Ulipur"],
  "Lalmonirhat": ["Aditmari", "Hatibandha", "Kaliganj", "Lalmonirhat Sadar", "Patgram"],
  "Nilphamari": ["Dimla", "Domar", "Jaldhaka", "Kishoreganj", "Nilphamari Sadar", "Saidpur"],
  "Panchagarh": ["Atwari", "Boda", "Debiganj", "Panchagarh Sadar", "Tetulia",
  ],
  "Rangpur": ["Badarganj", "Gangachara", "Kaunia", "Mithapukur", "Pirganj"," Pirgacha", "Rangpur Sadar", "Taraganj"],
  "Thakurgaon": ["Baliadangi", "Haripur", "Pirganj", "Ranisankail", "Thakurgaon Sadar"],
//Sylhet division
  "Sylhet": ["Balaganj", "Beanibazar", "Bishwanath","Companiganj", "Dakshin Surma", "Fenchuganj", "Golapganj", "Gowainghat", "Jaintiapur"," Jakiganj", "Kanaighat", "Sylhet Sadar"],
  "Moulvibazar": ["Baralekha", "Juri", "Kamalganj", "Kulaura", "Moulvibazar Sadar", "Rajnagar", "Sreemangal"],
  "Habiganj": ["Ajmiriganj", "Baniachang","Bahuball", "Chunarughat", "Habiganj Sadar", "Lakhai", "Madhabpur", "Nabiganj","Shayestaganj"],
  "Sunamganj": ["Bishwamvarpur", "Chhatak", "Derai","Dakshin Sunamganj", "Dharmapasha", "Dowarabazar", "Jagannathpur", "Jamalganj", "Sullah", "Sunamganj Sadar", "Tahirpur"],
//Dhaka division
  "Dhaka": ["Dhamrai", "Dohar", "Keraniganj", "Nawabganj", "Savar"],
  "Faridpur": ["Alfadanga", "Bhanga", "Boalmari", "Charbhadrasan", "Faridpur Sadar", "Madukhali", "Nagarkanda", "Sadarpur", "Saltha"],
  "Gazipur": ["Gazipur Sadar", "Kaliakair", "Kaliganj", "Kapasia", "Sreepur"],
  "Gopalganj": ["Gopalganj Sadar", "Kashiani", "Kotalipara", "Muksudpur", "Tungipara"],
  "Kishoreganj": ["Bajitpur", "Bhairab", "Hossainpur", "Itna", "Karimganj", "Katiadi", "Kishoreganj Sadar", "Kuliarchar", "Mithamain", "Nikli"," Ostogram", "Pakundia", "Tarail"],
  "Madaripur": ["Barhamganj", "Kalkini", "Madaripur Sadar", "Rajoir", "Shibchar"],
  "Manikganj": ["Daulatpur", "Ghior", " Harirampur","Manikganj Sadar", "Saturia", "Shibaloy", "Singair"],
  "Munshiganj": ["Gazaria", "Lohajang", "Munshiganj Sadar", "Sirajdikhan", "Sreenagar", "Tongibari"],
  "Narayanganj": ["Araihazar", "Bandar", "Narayanganj Sadar", "Rupganj", "Sonargaon"],
  "Narsingdi": ["Belabo", "Monohardi", "Narsingdi Sadar", "Palash", "Raipura", "Shibpur"],
  "Rajbari": ["Baliakandi", "Goalandaghat", "Khalukhali","Pangsha", "Rajbari Sadar"],
  "Shariatpur": ["Bhedarganj", "Damudya", "Goshairhat","Naria", "Shariatpur Sadar", "Zajira"],
   "Tangail": ["Bashail","Bhuapur", "Delduar", "Dhonbari","Ghatail", "Gopalpur", "Kalihati", "Madhupur", "Mirzapur", "Nagarpur", "Sakhipur"," Tangail Sadar"],
   //Khulna division
  "Bagerhat": ["Bagerhat Sadar", "Chitalmari", "Fakirhat", "Kachua", "Mollahat", "Mongla", "Morrelganj", "Rampal", "Sarankhola"],
  "Chuadanga": ["Alamdanga", "Chuadanga Sadar", "Damurhuda", "Jibannagar"],
  "Jessore": ["Abhaynagar", "Bagherpara", "Chaugachha", "Jessore Sadar", "Jhikargachha", "Keshabpur", "Manirampur", "Sharsha"],
  "Jhenaidah": ["Harinakunda", "Jhenaidah Sadar", "Kaliganj", "Kotchandpur", "Maheshpur", "Shailkupa"],
  "Khulna": ["Batiaghata", "Dacope", "Dumuria", "Dighalia", "Koyra", "Paikgachha", "Phultala", "Rupsa", "Terokhada"],
  "Kushtia": ["Bheramara", "Daulatpur", "Kumarkhali"," Khoksha", "Kushtia Sadar", "Mirpur"],
  "Magura": ["Magura Sadar", "Mohammadpur", "Shalikha", "Sreepur"],
  "Meherpur": ["Gangni", "Meherpur Sadar", "Mujibnagar"],
  "Narail": ["Kalia", "Lohagara", "Narail Sadar"],
  "Satkhira": ["Assasuni", "Debhata", "Kalaroa", "Kaliganj", "Satkhira Sadar", "Shyamnagar", "Tala"]
};





let k=0;
for (let d in upazila) {
  if(data == d){
  for (let i = 0; i < upazila[d].length; i++) {
    let dt= '';
  for (let i = 0; i < upazila[d].length; i++) {
    dt+=`<li data-value="${upazila[d][i]}">${upazila[d][i]}</li>`
  }
  su.querySelector('ul').innerHTML=dt
  }
  }
  
  
  
}

let upazilaList = su.querySelectorAll('li');

for (let i = 0; i < upazilaList.length; i++) {
  upazilaList[i].addEventListener('click',(e)=>{
    let data3 = event.target.getAttribute("data-value");
    su.querySelector('label').innerHTML=data3;
    su.querySelector('input').value=data3;
 
      })
}

}
}