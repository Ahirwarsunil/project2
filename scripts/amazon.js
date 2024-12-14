const products = [{
    image: "image/lenovo-ideaPad-laptop.jpg",
    name:'Lenovo ideapad Laptop | 16 GB RAM | i5 |SSD 256GB',
    rating:{
        stars:4.5,
        count:87
    },
    pricePaisa:3399000
},

{
image:'image/banq-24inch-monitor.jpg',
name:'Banq 24 Inch monitor | IPS display refresh rate 120 hrz FHD',
rating:{
    stars:3,
    count:127
},
pricePaisa:999000
},

{
image:'image/power-cable.jpg',
name:'Frontech Power cable | three pin | Frequency 50hrz',
rating:{
    stars:4.5,
    count:56
},
pricePaisa:39000
}];

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
                <img class="rating"  src="image/rating-${product.rating.stars * 10 }.png">

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
