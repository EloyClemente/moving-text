

// CODIGO 1
function insertar(cantidad)
{
	var codigo = document.createElement('pre')


		if(cantidad == 9)
		{
			codigo.classList.add('texto1')
		}
		else if(cantidad == 10)
		{
			codigo.classList.add('texto2')
		}
		else if(cantidad == 11)
		{
			codigo.classList.add('texto3')
		}
	



	for(var i=0; i < cantidad; i++)
	{
		// CÓDIGO PARA EL FONDO
		// Template string  
		codigo.innerHTML += `

	function crear_rejillas( numero_de_casillas )
	{
	limpiar_puzzle()


	for(let i=0; i < numero_de_casillas; i++)
	{
		const capa_casilla_origen    = document.createElement('div')
		const capa_casilla_destino   = document.createElement('div')

		capa_casilla_origen.id       = 'origen'  + (i + 1) 
		capa_casilla_destino.id      = 'destino' + (i + 1)


		estilo_casillas( capa_casilla_origen, numero_de_casillas )

		container_origen.appendChild(  capa_casilla_origen )
		container_destino.appendChild( capa_casilla_destino )
	}


	if(click == 1)
	{
		for(let i=0; i < casillas_destino.length; i++)
		{
			casillas_destino[i].classList.add('rejilla')
		}
	}
	}
	crear_rejillas( '16' )

	function estilo_casillas( capa_casilla_origen, capa_casilla_destino)
	{
	capa_casilla_destino.style.transition = 'all, .3s'

		switch( numero_de_casillas )
		{
			case '9': 
			capa_casilla_origen.classList.add('casillas-9')
			capa_casilla_destino.classList.add('casillas-9')
			break

			case '16':
			capa_casilla_origen.classList.add('casillas-16')
			capa_casilla_destino.classList.add('casillas-16')
			break

			case '25':
			capa_casilla_origen.classList.add('casillas-25')
			capa_casilla_destino.classList.add('casillas-25')
			break
		}
	} </br>`
	}

	return codigo
}


































