document.querySelectorAll('a[href^="#"').forEach
(anchor =>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute
            ('href')).scrollIntoView({
                behaviour:'smooth'
            });
        
    });
});
window.addEventListen('scroll',()=>
{
    const navbar =document.querySelector('.navbar');
    window.scrollY > 50 ?
    navbar.style.backgroundcolor ='rgba(10,10,10,0.98)' :
     navbar.style.backgroundcolor ='rgba(10,10,10,0.95)' ;
});