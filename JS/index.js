const counterBtns = document.querySelectorAll('.counter');
const quantityValue = document.querySelector('.quantity');

counterBtns.forEach((btn) => {
    btn.addEventListener('click', ()=> {
        let quantityNumber = parseInt(quantityValue.textContent);
        if(btn.id == "decrement") {
            if(quantityNumber == 0) {
                return
            }
            else {
                quantityNumber--;
                quantityValue.textContent = quantityNumber;
            }
        }
        if (btn.id == "increment") {
           
            if(quantityNumber == 10) {
                return
            }
            else {
                quantityNumber += 1;
                quantityValue.textContent = quantityNumber;
            }
        }
    })
})

// IMAGE CAROUSEL 

const mainProductImages = Array.from(document.querySelectorAll('.product-image'));
const modalProductImages = Array.from(document.querySelectorAll('.modal-product-image'));
const carouselBtns = document.querySelectorAll('.carousel');
const thumbnailContainers = document.querySelectorAll('.thumbnail-image-container');
const mainThumbnailContainer = document.getElementById('main-thumbnail');
const mainThumbnailImages = Array.from(mainThumbnailContainer.querySelectorAll('img'));
const modalThumbnailContainer = document.getElementById('modal-thumbnail');
const modalthumbnailImages = Array.from(modalThumbnailContainer.querySelectorAll('img'));
// CAROUSEL FOR BUTTONS
carouselBtns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        let imageUpdate = btn.classList.contains("next-btn") ? 1 : -1;
        const mainImageContainer = document.querySelector('.main-image-container');
        const modalImageContainer = document.querySelector('.modal-image-container');

        const activeImage = modalImageContainer.querySelector("[data-current-image]");
        let newIndex = modalProductImages.indexOf(activeImage) + imageUpdate;

        productContainers(mainImageContainer, imageUpdate, mainProductImages);
        productContainers(modalImageContainer, imageUpdate, modalProductImages);
        
        if(newIndex > modalthumbnailImages.length - 1){
            newIndex = 0;
        }
        if(newIndex < 0) {
            newIndex = modalthumbnailImages.length -1;
        }
        updateThumbnail(mainThumbnailContainer, newIndex, mainThumbnailImages);
        updateThumbnail(modalThumbnailContainer, newIndex, modalthumbnailImages);
        
    })
})


// THUMBNAIL CAROUSEL


thumbnailContainers.forEach((container) => {
    container.addEventListener('click', ((e)=> {
        if(e.target.parentElement.classList.contains('active')) {
            return;
        }
        let targetThumbnail = e.target.closest('img');
        if(!targetThumbnail) return;
        const mainImageContainer = document.querySelector('.main-image-container');
        let thumbImageIndex = mainThumbnailImages.findIndex(thumbail => thumbail === targetThumbnail)
        // FOR MODAL
        const modalImageContainer = document.querySelector('.modal-image-container');
        let modalThumbImageIndex = modalthumbnailImages.findIndex(thumbail => thumbail === targetThumbnail)
        if(container.id == "main-thumbnail") {
            updateThumbnailImage(mainImageContainer, thumbImageIndex, mainProductImages);
            updateThumbnail(mainThumbnailContainer, thumbImageIndex, mainThumbnailImages);
            updateThumbnailImage(modalImageContainer, thumbImageIndex, modalProductImages);
            updateThumbnail(modalThumbnailContainer, thumbImageIndex, modalthumbnailImages);
        }
        else {
            updateThumbnailImage(mainImageContainer, modalThumbImageIndex, mainProductImages);
            updateThumbnail(mainThumbnailContainer, modalThumbImageIndex, mainThumbnailImages);
            updateThumbnailImage(modalImageContainer, modalThumbImageIndex, modalProductImages);
            updateThumbnail(modalThumbnailContainer, modalThumbImageIndex, modalthumbnailImages);
        }
    }))
})


//FUNCTIONS

let productContainers = (productContainer, imageUpdate, productImages)=> {
    
    const activeImage = productContainer.querySelector("[data-current-image]");
    
    let newIndex = productImages.indexOf(activeImage) + imageUpdate;
    if(newIndex < 0) {
        newIndex = productImages.length - 1;
    }
    if(newIndex >= productImages.length) {
        newIndex = 0;
    }

    productImages[newIndex].dataset.currentImage = true;
    delete activeImage.dataset.currentImage;

    // updateThumbnail(newIndex);

}

let updateThumbnailImage = (ImageContainer, imageIndex, productImage) => {
    let activeImage = ImageContainer.querySelector('[data-current-image]');
    let targetImage = productImage[imageIndex];

    //update dataset for big image
    targetImage.dataset.currentImage = true;
    delete activeImage.dataset.currentImage;
}

let updateThumbnail = (thumbnailContainer, indexNum, thumbnailImages) => {
    let activethumbnail = thumbnailContainer.querySelector('.active');

    // update active class for thumbnail
    activethumbnail.classList.remove('active');
    thumbnailImages[indexNum].parentElement.classList.add('active'); 

}

//OPEN AND CLOSE MODAL
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');
const closeModal = document.querySelector('.close-btn');

mainProductImages.forEach((productimage) => {
    productimage.addEventListener('click', ()=> {
        modal.style.display = "block";
        const toOpenModal = () => {
            modal.style.opacity = "1";
        }
        const openModal = setTimeout(toOpenModal, 50);
    })
});

closeModal.addEventListener('click', () => {
    modal.style.opacity = "0";

    const toCloseModal = () => {
        modal.style.display = "none";
    }
    const openModal = setTimeout(toCloseModal, 200);
});

window.addEventListener('click', (e) => {
     const modalImageContainerMk = document.querySelector('.modal-image-container');

    if(e.target === modal || e.target === modalImageContainerMk.parentElement) {
        const toCloseModal = () => {
            modal.style.display = "none";
        }
        const openModal = setTimeout(toCloseModal, 200);
    }
});
