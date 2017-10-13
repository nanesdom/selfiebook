function login(){
			usuario = document.getElementById('usuario');
			password = document.getElementById('password');
			//Validaciones
			if (usuario.value == "") {
				usuario.style.border= "none";
				usuario.style.backgroundColor="rgba(255, 0, 0, .1)";
    			usuario.style.borderBottom= "3px solid #e74c3c";
				usuarioColocado  = false;

			}else{
				usuario.style.border= "none";
				usuario.style.backgroundColor="transparent";
    			usuario.style.borderBottom= "1px solid black";
				usuarioColocado  = true;
			}
			if (password.value == "") {
				password.style.border= "none";
				password.style.backgroundColor="rgba(255, 0, 0, .1)";
    			password.style.borderBottom= "3px solid #e74c3c";
				passwordColocado  = false;
			}else{
				password.style.border= "none";
				password.style.backgroundColor="transparent";
    			password.style.borderBottom= "1px solid black";
				passwordColocado  = true;
			}

			//ENVIAR DATOS
			if (!desconectadoInternet) {
				if(usuarioColocado && passwordColocado){
					verMensaje2('Bienvenido');
					window.location.assign('inicio.html');		
				}else{
					verMensaje('Ups! Por favor completa los campos señalados :(');
					}
			}else{
				verMensaje('No puedes iniciar, revisa tu conexión a internet');
			}
		}

			function verMensaje(msj){
				mensaje = document.getElementById('mensaje');
				mensaje2 = document.getElementById('mensaje2');

				mensaje2.style.top="-80px";	
				
				mensaje2.style.background= "#e74c3c";

				mensaje.style.background= "#e74c3c";	
				mensaje.innerHTML=msj;
				mensaje.style.transition=".5s all";
				mensaje.style.top="0px";	
																		
				//DESAPARECER
				setTimeout(function(){
					mensaje.style.top="-80px";
				},5000);
			}

			function verMensaje2(msj){
				mensaje = document.getElementById('mensaje2');
				mensaje2 = document.getElementById('mensaje');

				mensaje2.style.top="-80px";		
				

				mensaje.style.background="green";
				mensaje.innerHTML=msj;
				mensaje.style.transition=".5s all";
				mensaje.style.top="0px";				
													
				//DESAPARECER
				setTimeout(function(){
					mensaje.style.top="-80px";					
				},5000);
			}

			window.addEventListener('offline', desconectado, true);
			window.addEventListener('online', conectado, true);
			var desconectadoInternet = false;

			function desconectado(){
				verMensaje('Por favor revisa tu conexion a internet');
				desconectadoInternet = true;
			}
			function conectado(){
				verMensaje2('Ya hay internet!');
				desconectadoInternet = false;
			}
function ir(direccion){
	window.location.assign(direccion);
}