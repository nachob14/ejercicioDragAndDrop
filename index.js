const parrafos = document.querySelectorAll('.parrafo')
const secciones = document.querySelectorAll('.seccion')
const papelera = document.querySelector('.papelera')

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event =>{
        console.log('Estoy arrastrando el parrafo: ' + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elementoFantasma = document.querySelector('.imagenFantasma')
        event.dataTransfer.setDragImage(elementoFantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move"
    })

    seccion.addEventListener("drop", event => {
        event.dataTransfer
        console.log('drop')
        const idParrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(idParrafo)
        seccion.appendChild(parrafo)
    })
})

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  })

  papelera.addEventListener("drop", event => {
    const idParrafo = event.dataTransfer.getData("id")
    const parrafo = document.getElementById(idParrafo)
    parrafo.remove()
  })