let time = 2000,
    currentimageindex = 0,
    images = document
        .querySelectorAll("#imagens img") // determina de onde as imagens serao extraidas //
    max = images.length; // determina o maximo de imagens //

    function nextimage() {
        console.log
        images[currentimageindex]
        .classList.remove("selected")

        currentimageindex++

        if(currentimageindex >= max)
            currentimageindex = 0

        images[currentimageindex]
        .classList.add("selected")
    }

    function start() {
           // logica de troca de imagens //
        }

    

