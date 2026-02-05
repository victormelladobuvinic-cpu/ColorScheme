

const colorSeed = document.getElementById("color-seed")

const mode = document.getElementById("mode")

const sendRequest = document.getElementById("send-request")

let hexColor = ""
let seedColorvaleu = ""
let modeValue = ""


colorSeed.addEventListener( "change", (e) => {
    hexColor = e.target.value
    seedColorvaleu = hexColor.slice(1)
    
})

mode.addEventListener( "change", (e) => {
    modeValue = e.target.value
    
})

sendRequest.addEventListener( "click", () => {
    sendRequestFunction(seedColorvaleu, modeValue) })




function sendRequestFunction(color, mode) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`) 
    .then(res => res.json())
    .then(data => {
        
        const colors = data.colors.map(color => color.hex.value)
        
        const colorScheme = colors
            .map(color => `<div class="color-column" style="background-color: ${color};"></div>`)
            .join('')
        
        const colorName = colors
            .map(color => `<p class="color-name copy-btn">${color}</p>`)
            .join('')

       document.querySelector(".color-scheme").innerHTML = colorScheme 
        document.querySelector(".name-scheme").innerHTML = colorName 
        
        // Agregar listeners a los botones de copiar recién creados
        document.querySelectorAll(".copy-btn").forEach(btn => {
            btn.addEventListener("click", copyClipboard)
        })
    })

    
}


function copyClipboard(event) {
    const innerTextColor = event.target.innerText
    navigator.clipboard.writeText(innerTextColor)
        .then(() => {
            console.log("Copiado al clipboard: " + innerTextColor)
        })
        .catch(err => {
            console.error("Error al copiar: ", err)
        })
}