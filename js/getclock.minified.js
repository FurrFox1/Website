/*-------------------- CONFIG START --------------------*/

fondo_amanecer = "../img/amanecer.jpg";
fondo_dia = "../img/vecteezy_beach-cartoon-scenery-background_6823045.jpg";
fondo_tarde = "../img/amanecer.jpg";
fondo_anochecer = "../img/amanecer.jpg";
fondo_noche = "../img/noche.jpg";

/* FRANJAS HORARIAS*/

hora_max_noche = 6; // 20-06
hora_max_amanecer = 8; //06-08
hora_max_dia = 16; //08-16
hora_max_tarde = 18; //16-18
hora_max_anochecer = 19; //17-19

/* CSS EDITOR */
css_editor = true;
//.tos_main p/ color
css_property_amanecer = ".texto";
css_color_amanecer = "white";

css_property_dia = ".texto";
css_color_dia = "black";

css_property_tarde = ".texto";
css_color_tarde = "white";

css_property_anochecer = ".texto";
css_color_anochecer = "white";

css_property_noche = ".texto";
css_color_noche = "white";

/* DEBUG */
use_console = false;
use_element_id = false;
debug_element_id = "p1";

/*--------------------- CONFIG END ---------------------*/
/*

Made with love from RRS for FluFlo (?

*/

$(document).ready(function(){getbg()});function getbg(e=99){if(use_console&&console.log("INIT: "+e),99==e){var l=new Date,l=l.getHours();use_console&&console.log("ACTUAL H.: "+l)}else{use_console||(console.log("use_console: enabled"),console.log("Reason: getbg function called."),use_console=!0);var l=e;use_console&&console.log("HORA FORZADA: "+l)}if(l>hora_max_noche&&l<=hora_max_amanecer){var o="Amanecer";if(css_editor){let r=document.querySelector(css_property_amanecer);null==r&&alert("Error en css_property (una de las clases debe estar mal, asegurate de que est\xe9 bien incluyendo puntos)"),use_console&&console.log("Css property: "+css_property_amanecer+" following detected divs:"),use_console&&console.log(r),r.style.color=css_color_amanecer}use_element_id&&(document.getElementById(debug_element_id).style.color="#ff9800"),document.body.style.backgroundImage="url('"+fondo_amanecer+"')"}else if(l>hora_max_amanecer&&l<=hora_max_dia){var o="Dia";if(css_editor){let s=document.querySelector(css_property_dia);null==s&&alert("Error en css_property (una de las clases debe estar mal, asegurate de que est\xe9 bien incluyendo puntos)"),use_console&&console.log("Css property: "+css_property_dia+" following detected divs:"),use_console&&console.log(s),s.style.color=css_color_dia}use_element_id&&(document.getElementById(debug_element_id).style.color="#31fdfd"),document.body.style.backgroundImage="url('"+fondo_dia+"')"}else if(l>hora_max_dia&&l<=hora_max_tarde){var o="Tarde";if(css_editor){let t=document.querySelector(css_property_tarde);null==t&&alert("Error en css_property (una de las clases debe estar mal, asegurate de que est\xe9 bien incluyendo puntos)"),use_console&&console.log("Css property: "+css_property_tarde+" following detected divs:"),use_console&&console.log(t),t.style.color=css_color_tarde}use_element_id&&(document.getElementById(debug_element_id).style.color="orange"),document.body.style.backgroundImage="url('"+fondo_tarde+"')"}else if(l>hora_max_tarde&&l<=hora_max_anochecer){var o="Anochecer";if(css_editor){let n=document.querySelector(css_property_anochecer);null==n&&alert("Error en css_property (una de las clases debe estar mal, asegurate de que est\xe9 bien incluyendo puntos)"),use_console&&console.log("Css property: "+css_property_anochecer+" following detected divs:"),use_console&&console.log(n),n.style.color=css_color_anochecer}use_element_id&&(document.getElementById(debug_element_id).style.color="#563001"),document.body.style.backgroundImage="url('"+fondo_anochecer+"')"}else if(l>hora_max_anochecer&&l<=23||l<=hora_max_noche&&l>=0){var o="Noche";if(css_editor){let a=document.querySelector(css_property_noche);null==a&&alert("Error en css_property (una de las clases debe estar mal, asegurate de que est\xe9 bien incluyendo puntos)"),use_console&&console.log("Css property: "+css_property_noche+" following detected divs:"),use_console&&console.log(a),a.style.color=css_color_noche}use_element_id&&(document.getElementById(debug_element_id).style.color="#9595ff"),document.body.style.backgroundImage="url('"+fondo_noche+"')"}use_console&&console.log("Franja seleccionada: "+o),use_element_id&&(document.getElementById(debug_element_id).innerHTML=o+" ("+l+")")}