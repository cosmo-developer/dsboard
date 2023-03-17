(()=>{
    let ham=document.getElementsByClassName("ham").item(0)
    ham.addEventListener('click',(e)=>{
        let sidemenu=document.getElementsByClassName("sidemenu").item(0)
        let items=document.getElementsByClassName("menu-name")
        if (sidemenu.classList.contains("showSideMenu")){
            sidemenu.classList.replace("showSideMenu","hideSideMenu")
            
        }else{
            sidemenu.classList.replace("hideSideMenu","showSideMenu")
        }
    },false)
})()