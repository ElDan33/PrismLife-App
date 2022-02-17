import * as jQuery from "./Proyecto_Final_Carrizo_Dante_jQuery.js";

/***** Modal de Bienvenida *****/
document.body.onload = function(){
    // Selector del modal
    let modal = $("#myModal");
    
    // Selector del span "X" del modal
    let span = $(".close");
    
    modal.css("display","block");
    
    // Evento de cierre del modal al clickear el span "X"
    span.on("click", ()=>{
    modal.css("display","none");
    });
}

/*** Selector de Logo ***/
let logoIcon = $("#logo a");

/***** Evento al clickear nav-link "Cartilla de Profesionales" *****/
$("#cartillaNavLink").on("click",()=>{
    $("#section1").css("display","none");
    $("#section2").css("display","none");
    $("#section3").css("display","block");
    $("#section4").css("display","none");
    $("#section5").css("display","none");
})

/****** Evento al clickear nav-link "Contacto" ******/
$("#contactoNavLink").on("click",()=>{
    $("#section1").css("display","none");
    $("#section2").css("display","none");
    $("#section3").css("display","none");
    $("#section4").css({
        "display":"flex",
        "flex-direction": "column",
        "align-items": "center"
    });
    $("#section5").css("display","none");
})

/****** Evento al clickear nav-link "Sobre nosotros" ******/
$("#sobreNosotrosNavLink").on("click",()=>{
    $("#section1").css("display","none");
    $("#section2").css("display","none");
    $("#section3").css("display","none");
    $("#section4").css("display","none"); 
    $("#section5").css({
        "display": "flex",
        "flex-direction": "column",
        "justify-content": "center",
        "align-items": "stretch"
    });
})

/***** Evento de retorno al inicio *****/
logoIcon.on("click", ()=>{
    $("#section1").css("display","block");
    $("#section2").css("display","block");
    $("#section3").css("display","none");
    $("#section4").css("display","none");
    $("#section5").css("display", "none");
    location.reload();
})



/******  Información de profesionales para las cards ******/
const infoProfesionales = [
    {
        id: 1,
        nombre: "Esteban",
        apellido: "Casinelli",
        especialidad: "Nutrición Deportiva",
        matrícula: "xx01",
        horario: "Mar y Jue de 9 a 14 hs."
    },
    {
        id: 2,
        nombre: "Jorge",
        apellido: "Díaz",
        especialidad: "Nutrición Basada en Plantas",
        matrícula: "xx02",
        horario: "Lun y Jue de 14 a 20 hs."
    },
    {
        id: 3,
        nombre: "Carolina",
        apellido: "Dominich",
        especialidad: "Nutrición Normal",
        matrícula: "xx03",
        horario: "Lun, Mier y Vier de 9 a 14 hs."
    },
    {
        id: 4,
        nombre: "Marianela",
        apellido: "Gonzalez",
        especialidad: "Nutrición Deportiva",
        matrícula: "xx04",
        horario: "Mar y Jue de 14 a 20 hs."
    },
    {
        id: 5,
        nombre: "Constanza",
        apellido: "Gutierrez",
        especialidad: "Nutrición Normal",
        matrícula: "xx05",
        horario: "Lun, Mier y Vier de 14 a 20 hs."
    },
    {
        id: 6,
        nombre: "Julieta",
        apellido: "Marinari",
        especialidad: "Nutrición para el Adulto Mayor",
        matrícula: "xx06",
        horario: "Lun, Mar, Jue y Vier de 9 a 14 hs."
    },
    {
        id: 7,
        nombre: "Fabricio",
        apellido: "Ordoñez",
        especialidad: "Nutrición para el Adulto Mayor",
        matrícula: "xx07",
        horario: "Mar y Jue de 14 a 20 hs."
    },
    {
        id: 8,
        nombre: "Bernardo",
        apellido: "Pedernera",
        especialidad: "Nutrición Basada en Plantas",
        matrícula: "xx08",
        horario: "Lun y Jue de 9 a 14 hs."
    },
    {
        id: 9,
        nombre: "Martina",
        apellido: "Peralta",
        especialidad: "Nutrición para el Embarazo",
        matrícula: "xx09",
        horario: "Lun, Mier y Vier de 9 a 14 hs."
    },
    {
        id: 10,
        nombre: "Ornella",
        apellido: "Peretti",
        especialidad: "Nutrición Infantil",
        matrícula: "xx10",
        horario: "Lun y Jue de 9 a 14 hs."
    },
    {
        id: 11,
        nombre: "Diego",
        apellido: "Ramirez",
        especialidad: "Nutrición Infantil",
        matrícula: "xx11",
        horario: "Lun y Jue de 14 a 20 hs."
    },
    {
        id: 12,
        nombre: "Pilar",
        apellido: "Veccio",
        especialidad: "Nutrición para el Embarazo",
        matrícula: "xx12",
        horario: "Lun, Mier y Vier de 14 a 20 hs."
    },
];

let infoProfesionales2 = infoProfesionales;
let infoProfesionales3 = infoProfesionales.concat(infoProfesionales2);

/***** Cards Selectors *****/
let btnsCards = document.querySelectorAll(".card .btn");

/****** Cards Click Events ******/
for(let i = 0; i < btnsCards.length; i++){
    btnsCards[i].addEventListener("click", (event)=>{
        console.log(btnsCards[i]);
        for(let i = 0; i < infoProfesionales3.length; i++){
            console.log(infoProfesionales3[i]);
            if(btnsCards[i] == event.target){
                $("body").prepend(
                    `<div id="myModal" class="modal">
                        <div class="modal-content modal-profesionales">
                            <span class="close close-profesionales">&times;</span>
                            <h6>Lic. ${infoProfesionales3[i].apellido}, ${infoProfesionales3[i].nombre}</h6>
                            <p><b>M.P:</b> ${infoProfesionales3[i].matrícula}</p>
                            <p><b>Especialidad:</b> ${infoProfesionales3[i].especialidad}</p>
                            <p><b>Horario de atención:</b> ${infoProfesionales3[i].horario}</p>
                        </div>
                    </div>`
                );
                let modal = $("#myModal");
                    modal.css("display","block");
                    let span = $(".close");
                    span.on("click", ()=>{
                        modal.css("display","none");
                    });
            }
            
        }
        
    });
}

/***** Efectos section "Sobre nosotros" *****/
let scrollElements = document.querySelectorAll(".js-scroll");

let elementInView = (el, dividend = 1) => {
    let elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

let elementOutofView = (el) => {
    let elementTop = el.getBoundingClientRect().top;
    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

let displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

let hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

let handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", () => { 
    handleScrollAnimation();
});



/****** Section4 - Contacto - Envío de consulta ******/
jQuery.enviarConsultaContacto();


/***** Selectores Generales (Contenedores y Tags) *****/



/***** Creacion del Ojeto -Persona- *****/

class Persona {
    constructor(
        nombre,
        apellido,
        edad,
        sexo,
        peso,
        altura,
        resultadoEN,
        fechaTurno,
        motivoDeConsulta,
        profesional,
        imc,
        email
    ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.resultadoEN = resultadoEN;
        this.fechaTurno = fechaTurno;
        this.motivoDeConsulta = motivoDeConsulta;
        this.profesional = profesional;
        this.imc = imc;
        this.email = email;
    }

    confirmacionTurno() {
        console.log(
            `¡Turno asignado satisfactoriamente! Se ha enviado un recordatorio a la dirección ${this.email}.Te esperamos de nuevo!`
        );
    }
}

const iniciar = () => {
    const personas = [];

    /***** Funciónes para Consulta de Turno *****/

    jQuery.consultarTurno();
    jQuery.enviarConsultaTurno ();


    /***** Evento al Seleccionar una opcion en Select Especialidad *****/

    jQuery.mostrarProfesionales();


    /***** Función Calcular IMC *****/

    jQuery.calcularImc();


    /***** Función changeStep (cambia de sección del formulario) *****/
    
    let active = document.querySelector(".active");
    let steps = Array.from(document.querySelectorAll("form .step"));  

    function changeStep(btn) {
        let index = 0;
        const active = document.querySelector("form .step.active");
        index = steps.indexOf(active);
        steps[index].classList.remove("active");
        if (btn === "next") {
            index++;
        }
        steps[index].classList.add("active");
    }


    /****** Evento para volver atrás en el formulario ******/
    
    let prevBtn = document.getElementsByClassName("prev-btn");

    /*** Div Principal ***/
    for(let i = 0; i < prevBtn.length; i++) {
        prevBtn[i].addEventListener("click",()=>{
            if(prevBtn[i].id === "btnNyAPrev"){
                location.reload();
            }else{
                const active = document.querySelector("form .step.active");
                let index = steps.indexOf(active);
                steps[index].classList.remove("active");
                index--;
                steps[index].classList.add("active");
                
            }
        })
    }

    /*** Div Secundario ***/
    let btnEnviarConsultaTurnoPrev = document.getElementById("btnEnviarConsultaTurnoPrev");

    btnEnviarConsultaTurnoPrev.addEventListener("click",()=>{
        location.reload();
    })

    /***** Evento pasar seccion del formulario - verificación de campos completos *****/

    jQuery.nextBtn.each(function () {
        /****** Sección Nombre y Apellido ******/
        if ($(this).is(jQuery.btnNyA)) {
            $(this).on("click", () => {
                if((jQuery.inputNombre.val() === "") || (jQuery.inputApellido.val() === "")){
                    if(jQuery.inputNombre.val() === "" && jQuery.inputApellido.val() === ""){
                        swal({
                            title: "Advertencia",
                            text: `Campo Requerido: ${jQuery.inputNombre.attr("name")}, ${jQuery.inputApellido.attr("name")}.`,
                            icon: "warning",
                        });

                    }else if(jQuery.inputNombre.val() === ""){
                        swal({
                            title: "Advertencia",
                            text: `Campo Requerido: ${jQuery.inputNombre.attr("name")}`,
                            icon: "warning",
                        });

                    }
                    else{
                        swal({
                            title: "Advertencia",
                            text: `Campo Requerido: ${jQuery.inputApellido.attr("name")}`,
                            icon: "warning",
                        });
                    }
                    return false;
                }else{
                    changeStep("next");
                }
                
            });
            /****** Sección Edad y Sexo ******/
        } else if ($(this).is(jQuery.btnEyS)) {
            $(this).on("click", () => {
                if((jQuery.inputEdad.val() === "") || (jQuery.inputSexo.val() === "Elige una opción...")){
                    if(jQuery.inputEdad.val() === "" && jQuery.inputSexo.val() === "Elige una opción..."){
                        swal({
                            title: "Advertencia",
                            text: `Campo Requerido: ${jQuery.inputEdad.attr("name")}, ${jQuery.inputSexo.attr("name")}.`,
                            icon: "warning",
                        });

                    }else if(jQuery.inputEdad.val() === ""){
                        swal({
                            title: "Advertencia",
                            text: `Campo Requerido: ${jQuery.inputEdad.attr("name")}`,
                            icon: "warning",
                        });

                    }else if(jQuery.inputSexo.val() === "Elige una opción..."){
                        swal({
                            title: "Advertencia",
                            text: `Campo Requerido: ${jQuery.inputSexo.attr("name")}`,
                            icon: "warning",
                        });
                    }
                    return false;
                }else{
                    changeStep("next");
                }
            });
            /****** Sección Peso y Altura ******/
        } else if ($(this).is(jQuery.btnPyA)) {
            $(this).on("click", () => {
                if((jQuery.inputPeso.val() === "") || (jQuery.inputAltura.val() === "")){
                    if(jQuery.inputPeso.val() === "" && jQuery.inputAltura.val() === ""){
                        swal({
                            title: "Advertencia",
                            text: `Campo Requerido: ${jQuery.inputPeso.attr("name")}, ${jQuery.inputAltura.attr("name")}.`,
                            icon: "warning",
                        });

                    }else if(jQuery.inputPeso.val() === ""){
                        swal({
                            title: "Advertencia",
                            text: `Campo Requerido: ${jQuery.inputPeso.attr("name")}`,
                            icon: "warning",
                        });

                    }
                    else{
                        swal({
                            title: "Advertencia",
                            text: `Campo Requerido: ${jQuery.inputAltura.attr("name")}`,
                            icon: "warning",
                        });
                    }
                    return false;
                }else{
                    changeStep("next");
                }
            });
            /****** Sección Especialidad y Profesionales ******/
        } else if ($(this).is(jQuery.btnEyP)) {
            $(this).on("click", () => {
                if((jQuery.inputEspecialidad.val() === "Elige una opción...") || (jQuery.inputProfesionales.val() === "Elige una opción...")){
                    if(jQuery.inputEspecialidad.val() === "Elige una opción..." && jQuery.inputProfesionales.val() === "Elige una opción..."){
                        swal({
                            title: "Advertencia",
                            text: `Campo Requerido: ${jQuery.inputEspecialidad.attr("name")}, ${jQuery.inputProfesionales.attr("name")}.`,
                            icon: "warning",
                        });

                    }else if(jQuery.inputEspecialidad.val() === "Elige una opción..."){
                        swal({
                            title: "Advertencia",
                            text: `Campo Requerido: ${jQuery.inputEspecialidad.attr("name")}`,
                            icon: "warning",
                        });

                    }
                    else if(jQuery.inputProfesionales.val() === "Elige una opción..."){
                        swal({
                            title: "Advertencia",
                            text: `Campo Requerido: ${jQuery.inputProfesionales.attr("name")}`,
                            icon: "warning",
                        });
                    }
                    return false;
                }else{
                    changeStep("next");
                }
            });
            /****** Sección Fecha y Email ******/
        } else if ($(this).is(jQuery.btnFyEm)) {
            $(this).on("click", () => {
                if((jQuery.inputFecha.val() === "") || (jQuery.inputEmail.val() === "")){
                    if(jQuery.inputFecha.val() === "" && jQuery.inputEmail.val() === ""){
                        swal({
                            title: "Advertencia",
                            text: `Campo Requerido: ${jQuery.inputFecha.attr("name")}, ${jQuery.inputEmail.attr("name")}.`,
                            icon: "warning",
                        });

                    }else if(jQuery.inputFecha.val() === ""){
                        swal({
                            title: "Advertencia",
                            text: `Campo Requerido: ${jQuery.inputFecha.attr("name")}`,
                            icon: "warning",
                        });

                    }
                    else{
                        swal({
                            title: "Advertencia",
                            text: `Campo Requerido: ${jQuery.inputEmail.attr("name")}`,
                            icon: "warning",
                        });
                    }
                    return false;
                }else{
                    changeStep("next");
                    jQuery.contenedorPacientesBtn.attr("hidden", false);
                }
            });
        } else if ($(this).is(jQuery.btnEnviar)) {
            /****** Clickear Botón Enviar ******/
            $(this).on("click", () => {
                changeStep("next");
            });
        } else {
            /****** Sección Solicitar Turno ******/
            $(this).on("click", () => {
                changeStep("next");
            });
        }
    });

    /***** Evento Enviar Formulario *****/

    jQuery.btnEnviar.on("click", (e) => {
        e.preventDefault();

        jQuery.contenedorPacientesBtn.attr("hidden", false);
        jQuery.btnEnviar.attr("hidden", true);

        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hours: "numeric",
            minutes: "numeric",
        };

        /***** Definición de persona *****/

        let persona = new Persona(
            jQuery.inputNombre.val(),
            jQuery.inputApellido.val(),
            Number(jQuery.inputEdad.val()),
            jQuery.inputSexo.val(),
            Number(jQuery.inputPeso.val()),
            Number(jQuery.inputAltura.val()),
            jQuery.resultadoFinalCalculoImc[1],
            new Date(jQuery.inputFecha.val()).toLocaleTimeString("es-ES", options),
            jQuery.inputEspecialidad.val(),
            jQuery.inputProfesionales.val(),
            jQuery.resultadoFinalCalculoImc[0],
            jQuery.inputEmail.val()
        );

        console.log(persona);
        persona.confirmacionTurno();
        personas.push(persona);
        console.log(personas);
        personas.length;

        /***** Local Storage de persona *****/
        let personaJson = JSON.stringify(persona);
        console.log(personaJson);
        let lsPersona = localStorage.setItem("personaJson", personaJson);
        let getLsPersona = JSON.parse(localStorage.getItem("personaJson"));
        
        /***** Local Storage de arreglo personas *****/
        let personasJson = JSON.stringify(personas);
        console.log(personasJson);
        let lsPersonas = localStorage.setItem("personasJson", personasJson);
        let getLsPersonas = JSON.parse(localStorage.getItem("personasJson"));

        /***** Mensaje de Carga exitosa *****/
        let datosPersona = JSON.stringify(persona);

        $.post("https://jsonplaceholder.typicode.com/posts", datosPersona, (respuesta, estado)=>{
            if(estado = "success"){
                swal({
                    title: "Carga exitosa",
                    text: "¡El turno se ha registrado correctamente!",
                    icon: "success",
                });
                console.log(respuesta);
            }
        });

        
        /***** Crear Contenedor Recordatorio Turno *****/
        (function recordatorioTurno() {
            for (persona of getLsPersonas) {
                jQuery.contenedorPacientes.html(`
                <div class="pacientes" style="width: 100%; color: white; box-shadow: 0 0 20px rgb(138 249 252 / 100%);
                background-color: rgb(62, 190, 158); border-radius: 5%; margin: auto; padding: 5%;">
                    <h3 style="font-size: 18px; text-align: center; text-transform: uppercase; margin: 2% auto; border-top: solid 1px;
                    border-bottom: solid 1px; text-shadow: 0 0 20px rgb(255 255 255 / 100%)">Confirmación de Turno</h3>
                    <h3 style="border-bottom: 2px solid white; text-shadow: 0 0 20px rgb(255 255 255 / 100%); text-align: start; margin: 8% auto">
                    Paciente: ${persona.nombre} ${persona.apellido}</h3>
                    <h4>Edad: ${persona.edad}</h4>
                    <h4>Sexo: ${persona.sexo}</h4>
                    <h4>Estado Nutricional: ${persona.resultadoEN}</h4>
                    <h4>Turno: ${persona.fechaTurno.charAt(0).toUpperCase() +
                    persona.fechaTurno.slice(1)}</h4>
                    <h4>Motivo de Consulta: ${persona.motivoDeConsulta}</h4>
                    <h4>Profesional: ${persona.profesional}</h4>
                </div>`);                    
            }
            console.log(getLsPersonas);
            console.log(persona)
        })();

        /***** Función Reset *****/

        function reset() {
            let index = 0;
            index = steps.indexOf(active);
            steps[index].classList.remove("active");
            steps[0].classList.add("active");
            jQuery.contenedorPacientes.html("");
            jQuery.conjuntoInputs.each(function (i) {
                $(this).val("");
            });

            jQuery.conjuntoSelects.each(function (i) {
                $(this).val("Elige una opción...");
            });

            jQuery.antropoInputs.each(function (i) {
                $(this).val("");
            });
            jQuery.inputProfesionales.val("Elige una opción...");

            jQuery.inputEdad.val("");
            jQuery.inputFecha.val("");
            jQuery.inputEmail.val("");
            jQuery.profesionales.attr("hidden", true);
            jQuery.contTurnos.attr("hidden", true);
            // jQuery.btnFyEm.attr("hidden", true);
            // jQuery.btnEnviar.attr("hidden", true);
            // jQuery.btnEyP.attr("hidden", true);
            jQuery.contenedorPacientesBtn.attr("hidden", true);
            jQuery.btnFyEm.on("click", () => {
                jQuery.contenedorPacientes.html(
                    `<h3>En breve recibirá un correo electrónico con la confirmación del turno</h3>`
                );
            });

            // jQuery.arregloBotones.each(function (e) {
            //     $(this).attr("hidden", true);
            // });
        }
        setTimeout(reset, 6000);
    

        //Ordenando por nombre de A - Z
        let porNombre = function (a, b) {
            if (a.nombre > b.nombre) {
                return 1;
            } else if (a.nombre < b.nombre) {
                return -1;
            } else {
                return 0;
            }
        };

        //Ordenando por apellido de A-Z
        let porApellido = function (a, b) {
            if (a.apellido > b.apellido) {
                return 1;
            } else if (a.apellido < b.apellido) {
                return -1;
            } else {
                return 0;
            }
        };

        //Ordenando por edad de Menor a Mayor
        let porEdad = function (a, b) {
            if (a.edad > b.edad) {
                return 1;
            } else if (a.edad < b.edad) {
                return -1;
            } else {
                return 0;
            }
        };

        //Ordenando por sexo Mujer y Hombre
        let porSexo = function (a, b) {
            if (a.sexo < b.sexo) {
                return 1;
            } else if (a.sexo > b.sexo) {
                return -1;
            } else {
                return 0;
            }
        };

        //Ordenando por peso de Menor a Mayor
        let porPeso = function (a, b) {
            if (a.peso > b.peso) {
                return 1;
            } else if (a.peso < b.peso) {
                return -1;
            } else {
                return 0;
            }
        };

        //Ordenando por altura de Menor a Mayor
        let porAltura = function (a, b) {
            if (a.altura > b.altura) {
                return 1;
            } else if (a.altura < b.altura) {
                return -1;
            } else {
                return 0;
            }
        };

        //Ordenando por imc de Menor a Mayor
        let porImc = function (a, b) {
            if (a.imc > b.imc) {
                return 1;
            } else if (a.imc < b.imc) {
                return -1;
            } else {
                return 0;
            }
        };

        //Ordenando por turno de False a True
        let porTurno = function (a, b) {
            if (a.turno > b.turno) {
                return 1;
            } else if (a.turno < b.turno) {
                return -1;
            } else {
                return 0;
            }
        };

        //Funcion Ordenadora
        function ordenandoArreglo(arreglo, ordenador) {
            console.log(arreglo.sort(ordenador));
        }

        ordenandoArreglo(personas, porTurno);
    });
};

iniciar();