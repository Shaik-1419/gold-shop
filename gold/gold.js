// JavaScript for Cart functionality
let cart = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.querySelector('.cart-items');
const totalPriceDisplay = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout');
const emptyCartMessage = document.getElementById('empty-cart');

// Function to update cart UI
function updateCart() {
  // Update cart count
  cartCount.textContent = cart.length;

  // Update cart items list
  cartItemsContainer.innerHTML = '';
  if (cart.length === 0) {
    cartItemsContainer.appendChild(emptyCartMessage);
  } else {
    cart.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('cart-item');
      itemElement.innerHTML = `
        <p>${item.name}</p>
        <p><strong>$${item.price}</strong></p>
      `;
      cartItemsContainer.appendChild(itemElement);
    });
  }

  // Update total price
  let totalPrice = cart.reduce((total, item) => total + item.price, 0);
  totalPriceDisplay.textContent = `$${totalPrice}`;

  // Enable/Disable checkout button
  if (cart.length > 0) {
    checkoutButton.disabled = false;
  } else {
    checkoutButton.disabled = true;
  }
}

// Function to handle adding item to cart
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productElement = button.closest('.product');
    const productName = productElement.querySelector('h3').textContent;
    const productPrice = parseFloat(productElement.querySelector('strong').textContent.replace('$', ''));
    
    cart.push({ name: productName, price: productPrice });
    updateCart();
  });
});

// Checkout functionality
checkoutButton.addEventListener('click', () => {
  alert('Proceeding to checkout...');
  // Here you can implement a checkout page or payment system integration
  cart = [];
  updateCart();
});
