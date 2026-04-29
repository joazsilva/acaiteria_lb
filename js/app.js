// ============================================================
// APP.JS — Lógica principal do cardápio digital LB
// ============================================================

// ---- State ----
let cart = JSON.parse(localStorage.getItem("lb_cart") || "[]");

// ---- Helpers ----
const fmt = (n) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function saveCart() {
  localStorage.setItem("lb_cart", JSON.stringify(cart));
}

// ---- Render Products ----
function renderAllProducts() {
  Object.keys(MENU_DATA).forEach((cat) => {
    const grid = document.getElementById(`grid-${cat}`);
    if (!grid) return;
    grid.innerHTML = "";
    MENU_DATA[cat].forEach((product) => {
      grid.appendChild(createProductCard(product));
    });
  });
}

function createProductCard(product) {
  const inCart = cart.find((i) => i.id === product.id);
  const qty = inCart ? inCart.qty : 0;

  const card = document.createElement("div");
  card.className = "product-card";
  card.id = `card-${product.id}`;
  card.innerHTML = `
    <div class="product-emoji">${product.emoji}</div>
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-desc">${product.desc}</p>
      <div class="product-footer">
        <span class="product-price">${fmt(product.price)}</span>
        <div class="qty-control ${qty > 0 ? "visible" : ""}">
          <button class="qty-btn minus" data-id="${product.id}" aria-label="Diminuir">−</button>
          <span class="qty-num" id="qty-${product.id}">${qty}</span>
          <button class="qty-btn plus" data-id="${product.id}" aria-label="Aumentar">+</button>
        </div>
        <button class="btn-add ${qty > 0 ? "hidden" : ""}" data-id="${product.id}">
          + Adicionar
        </button>
      </div>
    </div>
  `;
  return card;
}

// ---- Cart Operations ----
function addToCart(id) {
  let product = null;
  for (const cat of Object.values(MENU_DATA)) {
    product = cat.find((p) => p.id === id);
    if (product) break;
  }
  if (!product) return;

  const existing = cart.find((i) => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, name: product.name, price: product.price, qty: 1 });
  }
  saveCart();
  updateCardUI(id);
  updateCartUI();
  animateCartBtn();
}

function changeQty(id, delta) {
  const idx = cart.findIndex((i) => i.id === id);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  saveCart();
  updateCardUI(id);
  updateCartUI();
  animateCartBtn();
}

function updateCardUI(id) {
  const inCart = cart.find((i) => i.id === id);
  const qty = inCart ? inCart.qty : 0;

  const qtyEl = document.getElementById(`qty-${id}`);
  const card = document.getElementById(`card-${id}`);
  if (!card) return;

  const qtyControl = card.querySelector(".qty-control");
  const btnAdd = card.querySelector(".btn-add");

  if (qtyEl) qtyEl.textContent = qty;

  if (qty > 0) {
    qtyControl?.classList.add("visible");
    btnAdd?.classList.add("hidden");
    card.classList.add("in-cart");
  } else {
    qtyControl?.classList.remove("visible");
    btnAdd?.classList.remove("hidden");
    card.classList.remove("in-cart");
  }
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  document.getElementById("cartCount").textContent = count;

  const itemsEl = document.getElementById("cartItems");
  const footerEl = document.getElementById("cartFooter");
  const totalEl = document.getElementById("cartTotal");

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🍇</div>
        <p>Seu carrinho está vazio</p>
        <span>Adicione itens do cardápio!</span>
      </div>`;
    footerEl.style.display = "none";
    return;
  }

  footerEl.style.display = "block";
  totalEl.textContent = fmt(total);

  itemsEl.innerHTML = cart.map((item) => `
    <div class="cart-item">
      <div class="ci-info">
        <span class="ci-name">${item.name}</span>
        <span class="ci-price">${fmt(item.price)} × ${item.qty} = ${fmt(item.price * item.qty)}</span>
      </div>
      <div class="ci-controls">
        <button class="qty-btn minus" data-id="${item.id}">−</button>
        <span class="ci-qty">${item.qty}</span>
        <button class="qty-btn plus" data-id="${item.id}">+</button>
      </div>
    </div>
  `).join("");
}

function animateCartBtn() {
  const btn = document.getElementById("cartToggle");
  btn.classList.add("bump");
  setTimeout(() => btn.classList.remove("bump"), 300);
}

// ---- WhatsApp ----
function buildWhatsAppMessage() {
  const name = document.getElementById("customerName").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const obs = document.getElementById("customerObs").value.trim();
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  let msg = "🍇 *PEDIDO — Pastelaria e Açaíteria LB*\n";
  msg += "─────────────────────\n";
  if (name) msg += `👤 *Cliente:* ${name}\n`;
  if (address) msg += `📍 *Endereço:* ${address}\n`;
  msg += "─────────────────────\n";
  msg += "*Itens do pedido:*\n";
  cart.forEach((item) => {
    msg += `• ${item.qty}x ${item.name} — ${fmt(item.price * item.qty)}\n`;
  });
  msg += "─────────────────────\n";
  msg += `💰 *Total: ${fmt(total)}*\n`;
  if (obs) msg += `📝 *Obs:* ${obs}\n`;
  msg += "─────────────────────\n";
  msg += "Aguardo confirmação! 😊";

  return encodeURIComponent(msg);
}

// ---- Event Delegation ----
document.addEventListener("click", (e) => {
  // Add to cart button
  if (e.target.classList.contains("btn-add")) {
    addToCart(e.target.dataset.id);
    return;
  }

  // Plus button
  if (e.target.classList.contains("plus")) {
    changeQty(e.target.dataset.id, 1);
    return;
  }

  // Minus button
  if (e.target.classList.contains("minus")) {
    changeQty(e.target.dataset.id, -1);
    return;
  }

  // Cart toggle
  if (e.target.closest("#cartToggle")) {
    openCart();
    return;
  }

  // Cart close
  if (e.target.closest("#cartClose") || e.target.id === "cartOverlay") {
    closeCart();
    return;
  }

  // WhatsApp finalize
  if (e.target.closest("#btnWhatsapp")) {
    if (cart.length === 0) {
      alert("Adicione itens ao carrinho primeiro! 🛒");
      return;
    }
    const msg = buildWhatsAppMessage();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    return;
  }

  // Clear cart
  if (e.target.closest("#btnClear")) {
    if (confirm("Deseja limpar o carrinho?")) {
      cart = [];
      saveCart();
      document.querySelectorAll(".product-card.in-cart").forEach((c) => {
        const id = c.id.replace("card-", "");
        updateCardUI(id);
      });
      updateCartUI();
    }
    return;
  }

  // Category filter
  if (e.target.classList.contains("cat-btn")) {
    filterCategory(e.target.dataset.cat);
    e.target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    return;
  }
});

// ---- Category Filter ----
function filterCategory(cat) {
  document.querySelectorAll(".cat-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.cat === cat);
  });

  document.querySelectorAll(".menu-section").forEach((sec) => {
    if (cat === "all") {
      sec.style.display = "";
    } else {
      sec.style.display = sec.dataset.section === cat ? "" : "none";
    }
  });

  if (cat !== "all") {
    const target = document.querySelector(`[data-section="${cat}"]`);
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  }
}

// ---- Cart Open/Close ----
function openCart() {
  document.getElementById("cartSidebar").classList.add("open");
  document.getElementById("cartOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartSidebar").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// ---- Init ----
renderAllProducts();
updateCartUI();

// Restore cart qty indicators on page load
cart.forEach((item) => updateCardUI(item.id));