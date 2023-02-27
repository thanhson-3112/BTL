var nav = document.getElementById('nav');
var mobileMenu = document.getElementById('mobile-menu');

mobileMenu.onclick = function(){
    var isClose = nav.clientHeight == 81;
    if(isClose){
        nav.style.height = 'auto';
    } 
    else{
        nav.style.height = '81px';
    }    
}

