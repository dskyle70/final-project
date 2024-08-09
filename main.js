let mobileNav=document.getElementById("mobile-nav");

function toggle_menu() {
    
    if (mobileNav.style.display=='none') {
        mobileNav.style.display='flex';
    } else {
        mobileNav.style.display='none';
    }
}