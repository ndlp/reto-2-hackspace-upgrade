$(function(){
				$("#Esconder").click(function(){

					$("#hecho").hide();
					$("#hechoInicial").show();

				})

				$("#Mostrar").click(function(){
					$("#hecho").show();
					$("#hechoInicial").hide();
					
				})

				$("#deslizar").click(function(){
 					$("#panel").slideToggle("slow");
 				})


			});
