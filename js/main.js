

     var header = document.getElementById('header');
        var mobileMenu = document.getElementById('mobile-menu');
        var headerHeight = header.clientHeight; // gán chiều cao của header vào biến headerHeight
        
        // Đóng/mở mobile menu
        mobileMenu.onclick = function () {
            var isClose = header.clientHeight === headerHeight;
            if (isClose) {
                header.style.height = 'auto';
            } else {
                header.style.height = null;
            }
        }

// Ẩn menu khi nhấn vào item
var isHidden = true;
var menuItemElements = document.querySelectorAll('#hide-on-click');
for (var i = 0; i < menuItemElements.length; i++) {
    var menuItemElement = menuItemElements[i];
    menuItemElement.onclick = function (e) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            if (window.innerWidth < 740) {
                var subnav =  document.querySelectorAll('.subnav');
                if (isHidden) {
                    subnav.style.display = 'block';
                    isHidden = false;
                }
                else {
                    subnav.style.display = 'none';
                    isHidden = true;
                }
            }
            e.preventDefault();
        } 
        
        else { 
            header.style.height = null;
         } 
    }

}

 // Automatic Slideshow - change image every 4 seconds
 var myIndex = 0;
 carousel();

 function carousel() {
 var i;
 var x = document.getElementsByClassName("slider");
 for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
 }
 myIndex++;
 if (myIndex > x.length) {myIndex = 1}    
 x[myIndex-1].style.display = "block";  
 setTimeout(carousel, 4000);    
 }



const buys = document.querySelectorAll('#js-buy-ticket')
const modal = document.querySelector('#js-modal')
const modalClose = document.querySelector('#js-modal-close')
const modalContainer = document.querySelector('#js-modal-container')

// open modal
function showBuyTicket (){
    modal.classList.add('open')
}

//close modal
function hideBuyTicket (){
    modal.classList.remove('open')
}

//click open
for(const buy of buys)
{
    buy.addEventListener('click',showBuyTicket)
}

//click x close
    modalClose.addEventListener('click',hideBuyTicket)

// click bat ky close 
    modal.addEventListener('click', hideBuyTicket )

    modalContainer.addEventListener('click', function(event){
        event.stopPropagation();
    })