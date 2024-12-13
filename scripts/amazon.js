

let productsHTML = '';

products.forEach((product)=>{
    productsHTML += `
    <div class="product-container">
                <div class="image"> <img src="${product.image}"> </div>
                <div class="p-name">${product.name}</div>
                <div class="price"> 
                    <span> ₹ </span> <span>${product.pricePaisa/100}</span><span class="mrp">${product.mrp/100}</span>
                </div>
                <div>
                <img class="rating"  src="image/star.png">
                <img class="rating"  src="image/star.png">
                <img class="rating"  src="image/star.png">
                <span class="star-count"> ${product.rating.count} </span>
                <div class="added"> </div>
                </div>
                
                <div class="cart-div">
                    <input class="add-cart-input"
                    placeholder="0" type="number">
                    <button class="add-cart-btn js-add-to-cart" 
                    data-product-id="${product.id}"> Add to cart </button>
                </div>

            </div>
    `;

    
});


function updateCartQuantity(){
    let cartQuantity = 0;

    cart.forEach((cartItem)=> {
    cartQuantity += cartItem.quantity;

    });

    document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
     
};


document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button)=>{

    button.addEventListener('click', ()=>{

        const productId = button.dataset.productId;
        addToCart(productId);

        updateCartQuantity();

    });

});
