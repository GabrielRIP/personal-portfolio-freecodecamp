//Declaracion de variables
const title = document.querySelector('.title')
const firstP = document.querySelector('.subTitle')
const navAbout = document.getElementById('about')

// Arreglo para que me muestre el box de welcome como typing
str1 = title.innerHTML
str2 =firstP.innerHTML

title.innerHTML = ''
firstP.innerHTML = ''

let i = 0
let j = 0

function typeWriting() {
  if (i < str1.length){
    title.innerHTML += str1.charAt(i)
    i++
    setTimeout(typeWriting, 100)
  }
}
function typeWriting2() {
  if (j < str2.length){
    firstP.innerHTML += str2.charAt(j)
    j++
    setTimeout(typeWriting2, 150)
  }
}
setTimeout(typeWriting, 100)
setTimeout(typeWriting2, 150)

navAbout.addEventListener('click', () => {
  i = 0
  j = 0
  title.innerHTML = ''
  firstP.innerHTML = ''
  setTimeout(typeWriting, 500)
  setTimeout(typeWriting2, 500)
})
