function carregar() {
var msg = document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()

msg.innerHTML = `Agora são exatamente ${hora} horas e ${minutos} minutos.`
if (hora >= 0 && hora < 12){
    img.src = "manha.png"
    document.body.style.background = '#a8dafb   '
}else if (hora >= 12 && hora < 18){
    img.src = 'tarde.png'
    document.body.style.background = '#ff8b41'
}else{
    img.src = 'fotonoite.png'
    document.body.style.background = '#001642'
}
} //#001642
//#a8dafb