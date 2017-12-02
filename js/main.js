'use strict'

var viewport =  window.innerWidth

var capa1 = document.getElementById('capa1')
var capa2 = document.getElementById('capa2')
var capa3 = document.getElementById('capa3')


// CAPA 1 ..................................
capa1.style.fontSize = viewport / 40 + 'px'
capa1.style.height   = window.innerHeight * 2
capa1.appendChild(insertar(9))


// CAPA 2 ..................................
capa2.style.fontSize = viewport / 50 + 'px'
capa2.style.height   = window.innerHeight * 2
capa2.appendChild(insertar(10))


// CAPA 3 ..................................
capa3.style.fontSize = viewport / 100 + 'px'
capa3.style.height   = window.innerHeight * 2
capa3.appendChild(insertar(11))




// RESPONSIVE
//...............................................
window.addEventListener('resize', fontSize)

function fontSize()
{
	viewport =  window.innerWidth

	capa1.style.fontSize = viewport / 40  + 'px'
	capa2.style.fontSize = viewport / 50  + 'px'
	capa3.style.fontSize = viewport / 100 + 'px'
}
//...............................................



















