// side menu
const sidenav = document.querySelector('.sidenav');
M.Sidenav.init(sidenav, {});
console.log(sidenav);


const dropdown = document.querySelector('.dropdown-trigger');
M.Dropdown.init(dropdown, {});
console.log(dropdown);

const dropdown2 = document.querySelector('.dropdown-trigger2');
M.Dropdown.init(dropdown2, {});
console.log(dropdown);

const dropdown3 = document.querySelector('.dropdown-trigger3');
M.Dropdown.init(dropdown3, {});
console.log(dropdown);

const collapsible = document.querySelector('.collapsible');
M.Collapsible.init(collapsible, {});

const select = document.querySelector('select');
M.FormSelect.init(select, {});

// function to change twitter to white logo
function changeTwitter(){
    document.getElementById('myimage1').src='../Screenshots/twitter white logo.png';
}
function normalTwitter(){
    document.getElementById('myimage1').src='../Screenshots/twitter logo.png'
}

// function to change facebook to white logo
function changeFacebook(){
    document.getElementById('myimage2').src='../Screenshots/facebook white logo.png'
}
function normalFacebook(){
    document.getElementById('myimage2').src='../Screenshots/facebook logo.png'
}

// function to change Instagram to white logo
function changeInstagram(){
    document.getElementById('myimage3').src='../Screenshots/instagram white logo.jpg'
}
function normalInstagram(){
    document.getElementById('myimage3').src='../Screenshots/instagram logo.png'
}

// function to change linked to white logo
function changeLinkedIN(){
    document.getElementById('myimage4').src='../Screenshots/linkedIN white logo.png';
}
function normalLinkedIN(){
    document.getElementById('myimage4').src='../Screenshots/linkedIN logo.png';
}


// Slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
    indicators:true,
    height:500,
    transition:500,
    interval:3000
});