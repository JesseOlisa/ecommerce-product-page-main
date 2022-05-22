const cartBtn = document.querySelector('.btn-to-cart');
const cartContainer = document.querySelector('.cart-container');
const cartIcon = document.querySelector('.cart-icon');
const cartFull = document.querySelector('.cart-full');
const cartEmpty = document.querySelector('.cart-empty');
const deleteCart = document.querySelector('.delete-cart');
const headerSection = document.querySelector('.header-section-2')

window.addEventListener('click', (e) => {
    if(e.target !== cartIcon)  {
        cartContainer.setAttribute('hidden', true); 
    }
});

cartIcon.addEventListener('click', ()=> {
    if(cartContainer.hasAttribute('hidden') === true) {
        cartContainer.removeAttribute('hidden');
    }
    else {
        cartContainer.setAttribute('hidden', true);  
    }
});

cartBtn.addEventListener('click', ()=> {
    let quantityRequest = document.querySelector('.quantity').textContent;
    if (quantityRequest !== '0') {
        cartEmpty.setAttribute('hidden', 'true');
        cartFull.removeAttribute('hidden');
        let cartQuantity = document.querySelector('.cart-quantity');
        let cartPrice = document.querySelector('.new-price');
        let total = document.querySelector('.total');
        
        // ADDING BARGE
        headerSection.classList.add('barge');
        let cartBarge = document.querySelector('.barge');
        cartBarge.setAttribute('data-quantity', quantityRequest);

        // ASSIGN QUNATITY TO THE CART QUANITIY
        cartQuantity.textContent = quantityRequest;
        // CALCULATING TOTAL AND ADDING TO HTML
        let priceNum = cartPrice.textContent.replace(/\D/g, "");
        priceNum = priceNum.slice(0, priceNum.length - 4)
        let totalPrice = priceNum * quantityRequest;
        total.textContent = `$${totalPrice}`;
    } 

});

deleteCart.addEventListener('click', ()=> {
    cartFull.setAttribute('hidden', 'true');
    cartEmpty.removeAttribute('hidden');
    headerSection.classList.remove('barge');
});



