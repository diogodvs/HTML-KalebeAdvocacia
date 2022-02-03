let time = 2000,
    currentimageindex = 0,
    images = document
        .querySelectorAll("#imagens img") // determina de onde as imagens serao extraidas //
    max = images.length; // determina o maximo de imagens //

    function nextimage() {
        
        images[currentimageindex]
            .classList.remove("selected")

        currentimageindex++

        if(currentimageindex >= max)
            currentimageindex = 0

        images[currentimageindex]
            .classList.add("selected")
    }

    function start() {
        setInterval(() => {
            // troca de imagem
            nextImage()
        }, time)
    }
    
    window.addEventListener("load", start)

