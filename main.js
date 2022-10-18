var buttons= document.querySelectorAll('.buy-btn');
var openElement = document.querySelector('.modal');
var closeBtn= document.querySelector('.modal-close');
function handleModal(){
    buttons.forEach(button => {
        button.onclick = function(){
            openElement.classList.add('open')
            
        }
        closeBtn.onclick = ()=>{
            openElement.classList.remove('open')
        }
        
        
    });
}
handleModal();

var btnMenu = document.querySelector('.icon-menu');
var head = document.getElementById('header');
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
var isClose = true;
handleMenu =  ()=>{
btnMenu.onclick = function(){   
    if(isClose){
        isClose = false;
        head.style.height = ('auto');
    }
    else{
        isClose = true;
        head.style.height = null;
       
    }
};


for(var i=0; i < menuItems.length;i++ ){
    var menuItem = menuItems[i];
    menuItem.onclick = function(event){
            var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
            if(isParentMenu){
                event.preventDefault();
            }
            else{
               head.style.height = null;
           }
    }
   // menuItems[i].onclick = ()=>{
   // console.log(menuItems[i])
    //     var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
    //     if(!isParentMenu){
       //head.style.height = null;
    // }

 }

}

handleMenu();

