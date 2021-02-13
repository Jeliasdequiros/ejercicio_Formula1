
//Con el scroll que aparezcan varios kilómetros de llegada (ejem. 500px = 'META 500')

//Que el coche le aparezcan diferentes metas

 // El coche también tiene que poder controlarse con los cursores

 // SCROLL Meta 500 

window.addEventListener('scroll', () => {
    if (scrollY = 500){
        const numero = document.createElement('h1')
        numero.textContent = 'Meta 500'
        numero.style.fontSize = '2rem'
        numero.style.position = 'absolute'
        numero.style.top = '500px'
        numero.style.left = '0px'
        document.body.appendChild(numero)

    }
})



//SCROLL Meta 1500 
addEventListener( 'scroll', () => {
    if (scrollY = 1500){
        const numero = document.createElement('h1')
        numero.textContent = 'Meta 1500'
        numero.fontSize = '2rem'
        numero.style.position = 'absolute'
        numero.style.top = '1500px'
        numero.style.left = '0px'
        document.body.appendChild(numero)

    }
})

//SCROLL Meta 3000 
addEventListener( 'scroll', () => {
    if (scrollY = 3000){
        const numero = document.createElement('h1')
        numero.textContent = 'Meta 3000'
        numero.fontSize = '2rem'
        numero.style.position = 'absolute'
        numero.style.top = '3000px'
        numero.style.left = '0px'
        document.body.appendChild(numero)

    }
})

// VARIABLES / FUNCIONES
let x=0, y=0
const ferrari = document.getElementById('ferrari'),
        up =() => ferrari.style.transform = `translate(${x},${y -= 50}%)`
        down =() => ferrari.style.transform = `translate(${x},${y += 50}%)`
        // right =() => ferrari.style.transform = `translate(${x += 50}%,${y})`
        // left =() => ferrari.style.transform = `translate(${x -= 50}%,${y})`

// mover coche 
document.addEventListener ('keyup', evento => {
    switch (evento.key) {
        case 'ArrowUp':
            up()
            break
        case 'ArrowDown':
            down()
            break
        // case 'ArrowRight':
        //     right()
        //     break
        // case 'Arrowleft':
        //     left()
        //     break
    }
})