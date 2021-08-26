// Add your JS customizations here
document.addEventListener("DOMContentLoaded", function(){
    // Variable decleration
    let headerBtn = document.querySelector('.js-header__btn');

    // back from where you came from
    const goBack = () => {
        window.history.back();
    }
    
    // add an onclick to the button
    headerBtn.addEventListener('click', goBack);
    
}); 




