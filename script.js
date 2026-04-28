const cart = [];

const currencyFormat = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

const cartDrawer = document.querySelector('#cart-drawer');
const cartItems = document.querySelector('#cart-items');
const cartTotal = document.querySelector('#cart-total');
const cartCount = document.querySelector('#cart-count');
const openCartButton = document.querySelector('#open-cart');
const closeCartButton = document.querySelector('#close-cart');
const addCartButtons = document.querySelectorAll('.add-cart');
const checkoutButton = document.querySelector('#checkout');
const filterButtons = document.querySelectorAll('[data-filter]');
const productCards = document.querySelectorAll('.product');
const leadForm = document.querySelector('#lead-form');
const leadResult = document.querySelector('#lead-result');

const updateCartUI = () => {
  cartItems.innerHTML = '';

  if (cart.length === 0) {
    const emptyItem = document.createElement('li');
    emptyItem.textContent = 'Seu carrinho está vazio.';
    cartItems.appendChild(emptyItem);
    cartTotal.textContent = currencyFormat.format(0);
    cartCount.textContent = '0';
    return;
  }

  let total = 0;
  cart.forEach((item) => {
    total += item.price;

    const row = document.createElement('li');
    row.innerHTML = `
      <span>${item.name}</span>
      <strong>${currencyFormat.format(item.price)}</strong>
    `;

    cartItems.appendChild(row);
  });

  cartCount.textContent = String(cart.length);
  cartTotal.textContent = currencyFormat.format(total);
};

const openCart = () => {
  cartDrawer.classList.add('open');
  cartDrawer.setAttribute('aria-hidden', 'false');
};

const closeCart = () => {
  cartDrawer.classList.remove('open');
  cartDrawer.setAttribute('aria-hidden', 'true');
};

addCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name') || 'Produto';
    const price = Number(button.getAttribute('data-price')) || 0;

    cart.push({ name, price });
    updateCartUI();
    openCart();
  });
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    filterButtons.forEach((chip) => chip.classList.remove('active'));
    button.classList.add('active');

    productCards.forEach((card) => {
      const category = card.getAttribute('data-category');
      const shouldShow = filter === 'all' || category === filter;
      card.style.display = shouldShow ? 'block' : 'none';
    });
  });
});

openCartButton?.addEventListener('click', openCart);
closeCartButton?.addEventListener('click', closeCart);

checkoutButton?.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Adicione pelo menos um item ao carrinho para finalizar a compra.');
    return;
  }

  alert(`Pedido confirmado! Total: ${cartTotal.textContent}.`);
  cart.length = 0;
  updateCartUI();
  closeCart();
});

leadForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name')?.value?.trim();

  if (!name) {
    leadResult.textContent = 'Por favor, informe seu nome para continuar.';
    return;
  }

  leadResult.textContent = `Obrigado, ${name}! Você receberá nossas ofertas ainda hoje.`;
  leadForm.reset();
});

updateCartUI();
