/****** SELECTORES JQUERY ******/

/*** Generales ***/
export let form = $("#formDatosPersona");
export let step1 = $(".step-1");

/*** Inputs y Selects ***/
export let inputNombre = $("#inputNombre");
export let inputApellido = $("#inputApellido");
export let inputEdad = $("#inputEdad");
export let inputSexo = $("#inputSexo");
export let inputPeso = $("#inputPeso");
export let inputAltura = $("#inputAltura");
export let profesionales = $("#profesionales");
export let inputProfesionales = $("#inputProfesionales");
export let opcionProfesionales1 = $("#opcionProfesionales1");
export let opcionProfesionales2 = $("#opcionProfesionales2");
export let inputEspecialidad = $("#inputEspecialidad");
export let inputFecha = $("#inputFecha");
export let inputEmail = $("#inputEmail");
export let input = $("input");
export let antropoInputs = $(".antropoInputs");
export let conjuntoInputs = $("input");
export let conjuntoSelects = $("select");
export let inputConsultaNombre = $("#inputConsultaNombre");
export let inputConsultaApellido = $("#inputConsultaApellido");
export let inputNombreContacto = $("#inputNombreContacto");
export let inputApellidoContacto = $("#inputApellidoContacto");
export let inputEmailContacto = $("#inputEmailContacto");
export let inputTelefonoContacto = $("#inputTelefonoContacto");
export let textAreaContacto = $("#textAreaContacto");

/*** Botones ***/
export let nextBtn = $("form .next-btn");
export let btnEnviar = $("#btnEnviar");
export let btnSolicitarTurno = $("#btnSolicitarTurno");
export let btnNyA = $("#btnNyA");
export let btnEyS = $("#btnEyS");
export let btnPyA = $("#btnPyA");
export let btnEyP = $("#btnEyP");
export let btnFyEm = $("#btnFyEm");
export let button = $("button");
export let btnConsultarTurno = $("#btnConsultarTurno");
export let btnEnviarConsultaTurno = $("#btnEnviarConsultaTurno");
export let btnContacto = $("#btnContacto");


/*** Arrays ***/
export let arregloSteps = [$(".step-1"), 
                            $(".step-2"),
                            $(".step-3"),
                            $(".step-4"), 
                            $(".step-5"), 
                            $(".step-6"), 
                            $(".step-7")];
export let arregloNyA = $([inputNombre, inputApellido]);
export let arregloEyS = $([inputEdad, inputSexo]);
export let arregloPyA = $([inputPeso, inputAltura]);
export let arregloFyEm = $([inputFecha, inputEmail]);
export let arregloEyP = $([inputEspecialidad, inputProfesionales]);
export let arregloBotones = $([btnNyA, btnEyS, btnPyA, btnEyP, btnFyEm]);

/*** Contenedores ***/
export let divPrincipal = $("#divPrincipal");
export let divSecundario = $("#divSecundario");
export let contTurnos = $("#turnosContainer");
export let contenedorPacientes = $("#contenedorPacientes");
export let contenedorPacientesBtn =$("#contenedorPacientesBtn");
export let contenedorInputsConsulta = $("#contenedorInputsConsulta");
export let mensajeResultadoConsulta = $("#mensajeResultadoConsulta");
export let inputNombreContainer = $("#inputNombreContainer");
export let inputApellidoContainer = $("#inputApellidoContainer");


/****** FUNCIONES ******/

/***** Funci??n para consulta de turno *****/
export function consultarTurno () {
    btnConsultarTurno.on("click", ()=>{
        divPrincipal.hide();
        btnConsultarTurno.hide();
        divSecundario.css({"margin-top":"0"});
        contenedorInputsConsulta.attr("hidden", false);
    })
}

/***** Funci??n de env??o de consulta del turno *****/
export function enviarConsultaTurno (){
    btnEnviarConsultaTurno.on("click", ()=>{
        let valorInputConsultaNombre = inputConsultaNombre.val();
        let valorInputConsultaApellido = inputConsultaApellido.val();
        console.log(valorInputConsultaNombre);
        console.log(valorInputConsultaApellido);

        /***** Verificaci??n de campos completos *****/
        if(valorInputConsultaNombre === "" && valorInputConsultaApellido === ""){
            swal({
                title: "Advertencia",
                text: `Campo Requerido: ${inputConsultaNombre.attr("name")}, ${inputConsultaApellido.attr("name")}`,
                icon: "warning",
            });
            return false;

        }else if(valorInputConsultaNombre === ""){
            swal({
                title: "Advertencia",
                text: `Campo Requerido: ${inputConsultaNombre.attr("name")}`,
                icon: "warning",
            });
            return false;

        }else if(valorInputConsultaApellido === ""){
            swal({
                title: "Advertencia",
                text: `Campo Requerido: ${inputConsultaApellido.attr("name")}`,
                icon: "warning",
            });
            return false;
        }

        /*****  Env??o de solicitud de consulta*****/
        let infoConsultaTurno = {
            nombre: valorInputConsultaNombre, 
            apellido: valorInputConsultaApellido
        }

        /*** M??todo post - Ajax ***/
        $.post("https://jsonplaceholder.typicode.com/posts", infoConsultaTurno, (respuesta, estado)=>{
            if(estado === "success"){
                console.log(respuesta);
            }
        });
        /*** M??todo get - Ajax ***/
        $.get("./main.json", (respuesta, estado)=>{
            if(estado === "success"){
                let misDatos = respuesta;
                console.log(respuesta);
                $("#divSecundario h2").html("Resultado de su consulta").fadeIn();
                for(const datos of misDatos){
                    console.log(datos);
                    /*** Verificaci??n de coincidencia de datos ingresados en los campos y los datos almacenados en main.json ***/
                    if((datos.nombre == valorInputConsultaNombre) 
                    && (datos.apellido == valorInputConsultaApellido)){
                        contenedorInputsConsulta.attr("hidden", true);
                        swal({
                            title: "Resultado de Consulta",
                            text: `${datos.nombre} ${datos.apellido}, su turno es el d??a ${datos.turno}`,
                            icon: "success"
                        })
                        
                        /*** Reseteo campos del formulario de consulta de turno ***/
                        setTimeout(()=>{
                            $('form')[0].reset();                       
                            divPrincipal.fadeIn();
                            $("#divSecundario h2").html("??Ya tienes turno?");
                            btnConsultarTurno.fadeIn();
                            divSecundario.css({"margin-top":"20%"});    
                        
                        }, 3000);
                        return false;
                    }
                    else{
                        contenedorInputsConsulta.attr("hidden", true);
                        swal({
                            title: "Resultado de Consulta",
                            text: `${valorInputConsultaNombre} ${valorInputConsultaApellido}, no se han encontrado turnos asignados a su nombre.`,
                            icon: "warning"
                        })
                        
                        /*** Reseteo campos del formulario de consulta de turno ***/
                        setTimeout(()=>{
                            $('form')[0].reset();                        
                            divPrincipal.fadeIn();
                            $("#divSecundario h2").html("??Ya tienes turno?");
                            btnConsultarTurno.fadeIn();
                            divSecundario.css({"margin-top":"20%"});

                        }, 3000);
                    }
                }
            }
        });
    });

    
}


/****** Evento enviar consulta - secci??n "Contacto" ******/

export function enviarConsultaContacto (){
    btnContacto.on("click", ()=>{
        let valorInputNombreContacto = inputNombreContacto.val();
        let valorInputApellidoContacto = inputApellidoContacto.val();
        let valorInputEmailContacto = inputEmailContacto.val();
        let valorInputTelefonoContacto = inputTelefonoContacto.val();
        let valorTextAreaContacto = textAreaContacto.val();

        console.log(valorInputNombreContacto);
        console.log(valorInputApellidoContacto);
        console.log(valorInputEmailContacto);
        console.log(valorInputTelefonoContacto);
        console.log(valorTextAreaContacto);

        /*****  Env??o de consulta *****/
        let infoContacto = {
            nombre: valorInputNombreContacto, 
            apellido: valorInputApellidoContacto,
            email: valorInputEmailContacto,
            telefono: valorInputTelefonoContacto,
            consulta: valorTextAreaContacto,
        }

        /***** M??todo post - Ajax ***/
        $.post("https://jsonplaceholder.typicode.com/posts", infoContacto, (respuesta, estado)=>{
            /***** Verificaci??n campos completos *****/
            if($(".inputContacto").val() !== "" && $("textarea").val() !== ""){
                /*** Evento si post es exitoso ***/
                if(estado === "success"){
                    console.log(respuesta);
                    let infoContactoJson = JSON.stringify(infoContacto);
                    let infoContactoLS = localStorage.setItem("infoContacto", infoContactoJson);
                    console.log(infoContactoLS);
                    $(".inputContacto").val("");
                    $("#formContacto textarea").val("");
                    let modalLoader = $("#modalLoader");
                    let modalRespuesta = $("#modalRespuestaContacto");
                    let span = $(".close");
                    modalLoader.css({
                        "display":"flex",
                        "justify-content": "center",
                        "align-items": "center"
                    });
                    setTimeout(function(){
                        modalLoader.css("display","none");
                        modalRespuesta.css("display","block");
                        span.on("click", ()=>{
                            modalRespuesta.css("display","none");
                            });
                    },2000)
                }
            }
            
        });
        
    });
    
}

/*** Calcular IMC - Diagn??stico de Estado Nutricional***/
export let resultadoFinalCalculoImc = [];
export function calcularImc() {
    (inputPeso, inputAltura).on("change", () => {
        let resultadoImc = Number(
            inputPeso.val() /
            (Number(inputAltura.val()) * Number(inputAltura.val()))
        ).toFixed(2);
        let resultadoEN;

        /***** Funci??n mostrarImc *****/
        function mostrarImc(){
            $("body").prepend(
                `<div id="myModal" class="modal">
                    <div class="modal-content modal-profesionales antropo">
                        <span class="close close-profesionales">&times;</span>
                        <h6>Resultado de C??lculo Antropom??trico</h6>
                        <p><b>IMC:</b> ${resultadoImc} kg/m2.</p>
                        <p><b>Estado Nutricional:</b> ${resultadoEN}.</p>
                    </div>
                </div>`
            );
            let modal = $("#myModal");
            modal.css("display","block");
            let span = $(".close");
            span.on("click", ()=>{
                modal.css("display","none");
            });
        };

        /***** Determinaci??n de Estado Nutricional seg??n IMC *****/
        if (resultadoImc < 18.5) {
            resultadoEN = "Bajo Peso";
            mostrarImc();
        } else if (resultadoImc >= 18.5 && resultadoImc < 25) {
            resultadoEN = "Peso Normal";
            mostrarImc();
        } else if (resultadoImc >= 25 && resultadoImc < 30) {
            resultadoEN = "Sobre Peso";
            mostrarImc();
        } else if (resultadoImc >= 30 && resultadoImc < 35) {
            resultadoEN = "Obesidad Grado I";
            mostrarImc();
        } else if (resultadoImc >= 35 && resultadoImc < 40) {
            resultadoEN = "Obesidad Grado II";
            mostrarImc();
        } else if (resultadoImc >= 40) {
            resultadoEN = "Obesidad Grado III";
            mostrarImc();
        } else {
            resultadoEN = "??Faltan Datos!\nNo se puede determinar el Estado Nutricional.";
            mostrarImc();
        }
        resultadoFinalCalculoImc.push(resultadoImc, resultadoEN);
    });
};


/*** Mostrar Profesionales ***/
export function mostrarProfesionales () {
    inputEspecialidad.on("change", () => {
        profesionales.attr("hidden", false);
        if (inputEspecialidad.val() === "Nutrici??n Basada en Plantas") {
            opcionProfesionales1.text(`Lic. Pedernera, Bernardo`);
            opcionProfesionales2.text(`Lic. Diaz, Jorge`);
        } else if (inputEspecialidad.val() === "Nutrici??n Deportiva") {
            opcionProfesionales1.text(`Lic. Gonzalez, Marianela`);
            opcionProfesionales2.text(`Lic. Casinelli, Esteban`);
        } else if (
            inputEspecialidad.val() === "Nutrici??n para el Embarazo"
        ) {
            opcionProfesionales1.text(`Lic. Peralta, Martina`);
            opcionProfesionales2.text(`Lic. Veccio, Pilar`);
        } else if (inputEspecialidad.val() === "Nutrici??n Infantil") {
            opcionProfesionales1.text(`Lic. Peretti, Ornella`);
            opcionProfesionales2.text(`Lic. Ramirez, Diego`);
        } else if (
        inputEspecialidad.val() === "Nutrici??n para el Adulto Mayor"
        ) {
            opcionProfesionales1.text(`Lic. Ordo??ez, Fabricio`);
            opcionProfesionales2.text(`Lic. Marinari, Julieta`);
        } else if (inputEspecialidad.val() === "Nutrici??n Normal") {
            opcionProfesionales1.text(`Lic. Gutierrez, Constanza`);
            opcionProfesionales2.text(`Lic. Dominich, Carolina`);
        }
        inputProfesionales.on("change", () => {
            contTurnos.attr("hidden", false);
            contTurnos.on("change", () => {
                btnEnviar.attr("hidden", false);
            });
        });
    });
}
