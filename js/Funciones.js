function apagarbotones() {
    document.getElementById('Datos').className = "button button1"; 
    document.getElementById('Datos_M').className = "button button1";
    document.getElementById('Experiencia').className = "button button1"; 
    document.getElementById('Experiencia_M').className = "button button1";
    document.getElementById('Estudios').className = "button button1"; 
    document.getElementById('Estudios_M').className = "button button1";
    document.getElementById('Conocimientos').className = "button button1"; 
    document.getElementById('Conocimientos_M').className = "button button1";    
} 
//Boton Datos
document.getElementById('Datos').addEventListener('click', function() {
    apagarbotones();
    document.getElementById('Datos').className = "button button__seleccionado"; 
    document.getElementById('Datos_M').className = "button button__seleccionado";     

    const seccion = document.querySelector('.card__visible');
    seccion.className = 'card__invisible'; 
    document.getElementById('Section_Datos').className = "card__visible";     
});

//Boton Datos_M
document.getElementById('Datos_M').addEventListener('click', function() {
    apagarbotones();
    document.getElementById('Datos').className = "button button__seleccionado"; 
    document.getElementById('Datos_M').className = "button button__seleccionado"; 

    const seccion = document.querySelector('.card__visible');
    seccion.className = 'card__invisible'; 
    document.getElementById('Section_Datos').className = "card__visible";

    document.getElementById('footer').scrollIntoView();
});

//Boton Experiendia
document.getElementById('Experiencia').addEventListener('click', function() {
    apagarbotones();
    document.getElementById('Experiencia').className = "button button__seleccionado";      
    document.getElementById('Experiencia_M').className = "button button__seleccionado";    

    const seccion = document.querySelector('.card__visible');
    seccion.className = 'card__invisible'; 
    document.getElementById('Section_Experiencia').className = "card__visible";    
});

//Boton Experiendia_M
document.getElementById('Experiencia_M').addEventListener('click', function() {
    apagarbotones();
    document.getElementById('Experiencia').className = "button button__seleccionado";      
    document.getElementById('Experiencia_M').className = "button button__seleccionado";      

    const seccion = document.querySelector('.card__visible');
    seccion.className = 'card__invisible'; 
    document.getElementById('Section_Experiencia').className = "card__visible";  
    
    document.getElementById('footer').scrollIntoView();
});

//Boton Estudios
document.getElementById('Estudios').addEventListener('click', function() {
    apagarbotones();
    document.getElementById('Estudios').className = "button button__seleccionado";      
    document.getElementById('Estudios_M').className = "button button__seleccionado";    

    const seccion = document.querySelector('.card__visible');
    seccion.className = 'card__invisible';    
    document.getElementById('Section_Estudios').className = "card__visible"; 
});

//Boton Estudios_M
document.getElementById('Estudios_M').addEventListener('click', function() {
    apagarbotones();
    document.getElementById('Estudios').className = "button button__seleccionado";      
    document.getElementById('Estudios_M').className = "button button__seleccionado";      

    const seccion = document.querySelector('.card__visible');
    seccion.className = 'card__invisible';    
    document.getElementById('Section_Estudios').className = "card__visible"; 

    document.getElementById('footer').scrollIntoView();
});

//Boton Conocimientos
document.getElementById('Conocimientos').addEventListener('click', function() {
    apagarbotones();  
    document.getElementById('Conocimientos').className = "button button__seleccionado button__final";      
    document.getElementById('Conocimientos_M').className = "button button__seleccionado button__final";      

    const seccion = document.querySelector('.card__visible');
    seccion.className = 'card__invisible';    
    document.getElementById('Section_Conocimientos').className = "card__visible"; 
});

//Boton Conocimientos_M
document.getElementById('Conocimientos_M').addEventListener('click', function() {
    apagarbotones();
    document.getElementById('Conocimientos').className = "button button__seleccionado button__final";      
    document.getElementById('Conocimientos_M').className = "button button__seleccionado button__final";      

    const seccion = document.querySelector('.card__visible');
    seccion.className = 'card__invisible';    
    document.getElementById('Section_Conocimientos').className = "card__visible";
    
    document.getElementById('footer').scrollIntoView();
});