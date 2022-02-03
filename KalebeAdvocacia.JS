let time = 5000,
    currentimageindex = 0,
    imagens = document
    .querySelectorAll(["#imagens img"]) // determina de onde as imagens serao extraidas //
max = imagens.length; // determina o maximo de imagens //

function nextImage() {

    imagens[currentimageindex]
        .classlist.add("selected") // add class selected a imagem

    currentimageindex++ // soma mais um ao contador de imagens

    if (currentimageindex >= max)
        currentimageindex = 0 //usa o if para que se o contador chegar ao numero 
        //maximo de imagens que ele recomece a contagem

    imagens[currentimageindex]
        .classlist.remove("selected") //remove a class selected da imagem para poder recomecar a funcao.
}

function start() {
    setInterval(() => {
        // funcao de troca de imagens
        nextImage()
    }, time)
}

window.addEventListener("load", start)