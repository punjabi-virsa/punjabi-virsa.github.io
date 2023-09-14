function buyLink(){
    // op in nieuw tabblad
    window.open("https://shop.eventix.io/a5cd2637-49d8-11ee-a642-6a57c78572ab/tickets?shop_code=cg7jfy7f&fbclid=PAAaZHotcdQlpkmXl98vGhOtuxLEFMPLsU0UDCI9TzlgPRr333h4yPKtEsfDI", "_blank");

    // window.location.href = "https://shop.eventix.io/a5cd2637-49d8-11ee-a642-6a57c78572ab/tickets?shop_code=cg7jfy7f&fbclid=PAAaZHotcdQlpkmXl98vGhOtuxLEFMPLsU0UDCI9TzlgPRr333h4yPKtEsfDI";


}

function contactForm(){
    new swal('Numbers:<br> <a href="tel:+32487161634">+32 487 16 16 34</a><br><a href="tel:+32466205774">+32 466 20 57 74</a>');

}

function contactForm_mobile(){
    swal.fire({
    title: 'Numbers:<br> <a href="tel:+32487161634">+32 487 16 16 34</a><br><a href="tel:+32466205774">+32 466 20 57 74</a>',
    position: 'bottom',
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    },
    grow: 'row',
    showConfirmButton: false,
    showCloseButton: true
  })
}


function Menu(e) {

    var menu = document.getElementById("navbar-items");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "flex";
    }

    e.classList.contains("bx-menu") ? 
    (menu.classList.add = "flex", e.classList.toggle("bx-x")) : 
    (menu.classList.add = "hidden", e.classList.toggle("bx-menu"));
}


// Splide Slider
  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        breakpoints: {
            640: {
                perPage: 1,
            },
            1024: {
                perPage: 1,
            },
        },
        pagination: false,
        perMove: 1,
        perPage: 3,
        type: 'loop',
        
    } );
    splide.mount();
  } );


// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});