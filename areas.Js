const target = document.querySelectorAll("[data-anime]");
const  animationclass = "animate" 

function animescroll(){
    const windowtop = window.pageYOffset + ((window.innerHeight * 3) / 4);

        target.forEach(function(element){

            if((windowtop) > element.offsetTop){
                element.classList.add(animationclass)
            } else {
                element.classList.remove(animationclass);
            }
        })
    }

animescroll();

if(target.length){

window.addEventListener("scroll", function() {
    animescroll();
})
}



