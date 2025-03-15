let body = document.querySelector('body')
let buttons = document.querySelectorAll("button")

function randomRgbaColor() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  let a = Math.random().toFixed(2) 
  return (body.style.background = `rgba(${r},${g},${b},${a})`)
}


buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.id === "random"){
            randomRgbaColor()
        }else{
            body.style.background = e.target.id
        }
    })
})

