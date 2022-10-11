let mobile = document.getElementById('iconMobile');
console.log(mobile)
mobile.addEventListener('click',()=>{
    let subMenu = document.getElementsByClassName('btn_collapse');

    for (let i = 0; i < subMenu.length; i++) {
        const element = subMenu[i];
        if(element.style.display !== 'flex'){
            element.style.display = 'flex';
        }else{
            element.style.display = 'none'
        }
    }
});
