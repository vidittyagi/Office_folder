let btn = document.querySelectorAll('[data-button-active]');

btn.forEach((button)=>{
    button.addEventListener("click",()=>{
        let circularValue = button.dataset.buttonActive === "right" ? 1 : -1;
        let slides = button.closest("[carousel]").querySelector("[slides]");

        let activeSlide = slides.querySelector("[data-active]");

        let newIdx = [...slides.children].indexOf(activeSlide) + circularValue;


        if(newIdx < 0){
            newIdx = slides.children.length - 1;
        }
        if(newIdx >= slides.children.length){
            newIdx = 0;
        }

        slides.children[newIdx].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});


