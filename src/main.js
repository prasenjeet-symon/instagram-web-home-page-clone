
const all_images = document.getElementsByClassName('slide_image')
let index = -1

setInterval(() => {
    if (index < all_images.length - 1) {
        index = index + 1
        for (let indexIn = 0; indexIn < all_images.length; indexIn++) {
            if (indexIn > index - 1) {
                all_images[indexIn].className = 'slide_image hidden'
            }
        }
        all_images[index].className = 'slide_image show'
    } else {
        index = -1
    }
}, 3000)