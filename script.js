let modal = document.getElementById("mymodal")
let openmodal = document.getElementById('openmodal')
let closemodal = document.getElementById('closemodal')

openmodal.addEventListener('click', function(){
    modal.style.display = "block"
})

closemodal.addEventListener('click', function(){
    modal.style.display = "none"
})