

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
        
        const colors = data.colors.map(color => { return color.hex.value})
        
        const colorScheme =  `
             <div class="color-column" style="background-color: ${colors[0]};"></div>
             <div class="color-column" style="background-color: ${colors[1]};"></div>
             <div class="color-column" style="background-color: ${colors[2]};"></div>
             <div class="color-column" style="background-color: ${colors[3]};"></div>
             <div class="color-column" style="background-color: ${colors[4]};"></div>
             `
        const colorName = `
             <p class="color-name">${colors[0]}</p>
             <p class="color-name">${colors[1]}</p>
             <p class="color-name">${colors[2]}</p>
             <p class="color-name">${colors[3]}</p>
             <p class="color-name">${colors[4]}</p>
             ` 

       document.querySelector(".color-scheme").innerHTML = colorScheme 
        document.querySelector(".name-scheme").innerHTML = colorName 
        
    })

    
}


