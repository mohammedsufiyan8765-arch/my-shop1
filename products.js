// public/js/products.js – fixed version with single teaser text & no duplicate toast

const sampleProducts = [
  {
    _id: "1",
    name: "Wireless Earbuds Pro",
    price: 2499,
    image: "https://thumbs.dreamstime.com/b/rostov-don-russia-december-apple-airpods-pro-white-background-wireless-headphones-charging-case-box-close-up-171491430.jpg",
    category: "electronics",
    description: "Premium true wireless earbuds featuring active noise cancellation (ANC), transparency mode, powerful 11mm dynamic drivers for deep bass, IPX4 sweat and water resistance, up to 30 hours total playback with the charging case (6 hours per charge), fast charging (10 minutes = 2 hours), intuitive touch controls, low-latency gaming mode, crystal-clear calls with dual microphones, and ergonomic in-ear fit. Ideal for music lovers, commuters, and fitness enthusiasts."
  },
  {
    _id: "2",
    name: "Rolex Watch ",
    price: 12499,
    image: "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-grid/c_limit,w_1920/v1/catalogue/2025/upright-bba-with-shadow/m228348rbr-0002.jpg",
    category: "electronics",
    description: "Advanced smartwatch with always-on AMOLED display, comprehensive health monitoring including blood oxygen (SpO2), ECG, continuous heart rate, advanced sleep tracking with stages, body temperature sensor, fall & crash detection, built-in GPS for accurate route tracking, 50m water resistance, up to 18 hours battery life (extendable in smart mode), music storage & playback, contactless payments, smartphone notifications, and customizable watch faces. Perfect fitness and lifestyle companion."
  },
  {
    _id: "3",
    name: "4K Smart TV 55 inch",
    price: 44999,
    image: "https://res.cloudinary.com/dnpkvlbae/image/fetch/c_auto,f_auto,q_auto:best,h_560/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/c78a6ab4-ed1e-11ef-8ba4-7282e31ca33e.jpg",
    category: "electronics",
    description: "55-inch 4K Ultra HD Smart LED TV with vibrant colors via Dolby Vision & HDR10+, smooth motion handling with MEMC technology, Google TV / Android OS for seamless app access (Netflix, YouTube, Prime Video), built-in Google Assistant & Chromecast, voice remote control, 60Hz refresh rate with low-latency Game Mode, 20W Dolby Audio speakers, multiple HDMI 2.1 ports (supports ALLM & eARC), slim modern bezel-less design, and excellent viewing angles. Transform your living room entertainment."
  },
  {
    _id: "4",
    name: "Runing Shoes for Men's",
    price: 3499,
    image: "https://rukminim2.flixcart.com/image/480/640/xif0q/shoe/2/r/k/6-851-blue-6-6-bruton-blue-original-imagyhg9ktrfvn7r.jpeg?q=90",
    category: "clothing",
    description: "Lightweight performance running shoes with breathable engineered mesh upper for maximum ventilation, responsive EVA foam midsole for superior cushioning and energy return, durable rubber outsole with multi-directional traction pattern, padded tongue and collar for comfort, reflective accents for visibility during night runs, reinforced toe cap, and excellent arch support. Designed for daily jogging, training, and long-distance runs."
  },
  {
    _id: "5",
    name: "Casual Cotton T-Shirt",
    price: 799,
    image: "https://thumbs.dreamstime.com/b/clean-white-t-shirt-folded-neatly-fabric-background-providing-blank-canvas-showcasing-designs-promoting-fashion-337536019.jpg",
    category: "clothing",
    description: "Classic everyday t-shirt made from premium 180 GSM 100% combed ring-spun cotton for ultra-soft feel and durability. Features regular fit, bio-washed fabric to prevent shrinking, crew neck, taped neck & shoulders, double-needle stitched hems for longevity, pre-shrunk material, and vibrant color retention even after multiple washes. Perfect base layer or standalone casual wear in a variety of solid colors."
  },
  {
    _id: "6",
    name: "Puma Core Wallet",
    price: 1499,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQA6JVKLR2p_BRX6VBKkBwoT-DE55STV2o9FKfIlFXfkUGg6fHyB4n6yH_POHpcTef-Ge9oA6PMiLaDJg4DN4nWplTLnXwgNw",
    category: "accessories",
    description: "Handcrafted genuine full-grain leather bifold wallet with rich patina over time. Includes 8 card slots, 2 clear ID windows, spacious bill compartment, optional coin pocket with secure snap, hand-stitched saddle edges for durability, slim & pocket-friendly profile, and built-in RFID-blocking lining to protect against digital theft. Timeless design combining functionality and premium craftsmanship."
  },
  {
    _id: "7",
    name: "Buy Bluetooth Speaker Online in TrendyHub",
    price: 3299,
    image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/APRIL/12/K61PTLja_b650a102b13f4ca38e143439c464f4c3.jpg",
    category: "electronics",
    description: "Portable cylindrical Bluetooth 5.3 speaker delivering powerful 360° immersive sound with 20W output, deep bass via dual passive radiators, up to 24 hours continuous playtime on a single charge, IPX7 waterproof and dustproof rating (fully submersible), built-in speakerphone microphone for clear calls, stereo pairing capability for enhanced soundstage, AUX input option, colorful LED mood lighting, and rugged floating design perfect for outdoor adventures, parties, or travel."
  },
  {
    _id: "8",
    name: "TPE Single Color Yoga Mats-6mm",
    price: 999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2bXjU2JQB_tm60xRyfIxvFe6tvDqTAkFyg&s",
    category: "fitness",
    description: "Extra-thick 6mm high-density TPE yoga mat providing superior joint cushioning and support during poses. Features non-slip textured surfaces on both sides for excellent grip (even when sweaty), moisture-resistant and easy-to-clean material, eco-friendly & non-toxic composition, printed alignment lines to help with pose accuracy, includes convenient carrying strap, lightweight yet durable construction, and available in calming colors. Ideal for yoga, Pilates, stretching, and floor exercises."
  },
  {
    _id: "9",
    name: "Missippi Stainless Steel 1000 ml Water Bottle",
    price: 699,
    image: "https://images.meesho.com/images/products/432933633/merj4_512.webp?width=512",
    category: "home",
    description: "Premium 1L double-wall vacuum insulated stainless steel bottle that keeps beverages ice-cold for up to 24 hours and piping hot for 12 hours. Features leak-proof screw-top lid with integrated carry loop, BPA-free food-grade 18/8 stainless steel construction, powder-coated matte finish for grip and scratch resistance, wide mouth for easy filling & cleaning, fits most car cup holders, and condensation-free exterior. Perfect for gym, office, travel, or daily hydration."
  },
  {
    _id: "10",
    name: "Women's quest north face jacket ",
    price: 5999,
    image: "https://assets.epicurious.com/photos/62741684ef40ea9d3866a0be/16:9/w_4991,h_2807,c_limit/breville-bambino-espresso-maker_HERO_050422_8449_VOG_Badge_final.jpg",
    category: "home",
    description: "Programmable 10-cup drip coffee maker with thermal carafe option, featuring 24-hour brew timer, pause-and-serve function, adjustable brew strength selector, auto shut-off for safety, removable & dishwasher-safe filter basket, water level indicator window, non-stick warming plate (keeps coffee hot for hours), and sleek modern black stainless design. Delivers consistent, flavorful coffee every time — SCA Golden Cup certified performance."
  },
  {
    _id: "11",
    name: "Wireless Mouse",
    price: 1299,
    image: "https://m.media-amazon.com/images/I/51vMo-pHZ5L.jpg",
    category: "electronics",
    description: "Ergonomic wireless mouse designed for comfort during long hours of use. Features adjustable DPI up to 16000 for precision, quiet clickable buttons, contoured shape to reduce wrist strain, 2.4GHz USB receiver or Bluetooth connectivity, long battery life (up to 18 months on AA batteries), programmable buttons, scroll wheel with tilt function, and plug-and-play compatibility with Windows/Mac. Ideal for office work, design, and productivity."
  },
  {
    _id: "12",
    name: "HEAD Pro X Backpack 30L (BKDG)",
    price: 2199,
    image: "https://cdnmedia.racquets4u.com/media/catalog/product/cache/8f24f3f124e67ea1e49f457c6f2f1da7/h/e/head-pro-x_30-l-backpack-bkdg-1.jpg",
    category: "accessories",
    description: "Versatile 30L travel & daily backpack with water-resistant polyester fabric, padded laptop sleeve (fits up to 15.6\" devices), multiple organized compartments including quick-access front pocket, side water bottle pockets, breathable mesh back panel and adjustable shoulder straps for comfort, durable YKK zippers, hidden anti-theft pocket, luggage trolley sleeve, and stylish minimalist design. Great for commuting, short trips, school, or gym use."
  },
  {
    _id: "13",
    name: "Sunglasses Polarized",
    price: 899,
    image: "https://images.meesho.com/images/products/428853758/tuzqt_512.webp?width=512",
    category: "accessories",
    description: "Classic aviator-style polarized sunglasses with UV400 protection to block 100% harmful UVA/UVB rays, reducing glare and improving clarity & contrast. Features lightweight metal frame, adjustable nose pads, durable scratch-resistant lenses, spring hinges for comfort, and timeless teardrop shape. Perfect for driving, outdoor activities, beach days, or everyday fashion statement."
  },
  {
    _id: "14",
    name: "Bajaj Black Stainless Steel Electric Kettle 1.7L",
    price: 1299,
    image: "https://assets.myntassets.com/w_360,q_50,,dpr_2,fl_progressive,f_webp/assets/images/30130372/2024/11/15/2f0d54f8-fdd0-407d-8161-4efc84b913931731652089297-Bajaj-Black-Stainless-Steel-Electric-Kettle-17L-599173165208-2.jpg",
    category: "home",
    description: "Fast-boil 1.7L stainless steel electric kettle with 360° swivel base, concealed heating element for easy cleaning, auto shut-off & boil-dry protection, LED power indicator, ergonomic handle with soft-grip, wide spout for precise pouring, cord storage, and sleek cordless design. Boils water in under 5 minutes — ideal for tea, coffee, instant noodles, or hot beverages."
  },
  {
    _id: "15",
    name: "Airlonv LED Desk Lamp for Office and Home",
    price: 899,
    image: "https://images-cdn.ubuy.co.in/69387ae03b3ceb8a1b0afe75-led-desk-lamp-for-office-home.jpg",
    category: "home",
    description: "Adjustable LED desk lamp with clamp mount or stable base, featuring touch controls for 3 color temperatures (warm, natural, cool), 5 brightness levels, flexible gooseneck arm for precise positioning, eye-caring uniform light without flicker or glare, long lifespan LEDs (up to 50,000 hours), USB charging port on base, memory function to save last setting, and modern matte black finish. Perfect for studying, working, or reading."
  },
  {
    _id: "16",
    name: "Protein Shaker Bottle",
    price: 499,
    image: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/bottle/y/1/3/700-gym-stainless-steel-shaker-bottle-for-protein-shake-100-original-imahdpymzcytumbg.jpeg?q=70",
    category: "fitness",
    description: "600ml leak-proof protein shaker with secure screw-on lid, built-in wire whisk ball for smooth mixing without clumps, wide mouth for easy adding & cleaning, measurement markings on side, ergonomic grip, flip-top spout with lock, BPA-free & food-safe plastic, dishwasher-safe, and motivational unique designs. Essential for gym-goers, athletes, and anyone making protein shakes or meal replacements."
  },
  {
    _id: "17",
    name: "Porthable Power Bank 20000mA",
    price: 2499,
    image: "https://images-cdn.ubuy.co.in/683dbe9f919d11ebf50c3ac7-aling-small-power-banks-20000mah.jpg",
    category: "electronics",
    description: "High-capacity 20000mAh portable charger with fast charging support (PD & QC compatible), dual USB-A + USB-C ports for simultaneous charging of multiple devices, LED battery level indicators, slim & lightweight aluminum alloy body, built-in safeguards against overcharge/overheat/short-circuit, micro-USB & USB-C input options, and enough power for 4–6 full smartphone charges. Must-have for travel, emergencies, or heavy phone users."
  },
  {
    _id: "18",
    name: "Shop Wall & Table Clock Modern in Online",
    price: 1299,
    image: "https://img.tatacliq.com/images/i25//437Wx649H/MP000000027209607_437Wx649H_202507030004381.jpeg",
    category: "home",
    description: "Large minimalist wall clock (35–40 cm diameter) with silent non-ticking quartz movement, bold Roman numerals on matte black shiplop-style wooden face, slim metal hands, glass cover for dust protection, easy wall mounting hook, and farmhouse/modern aesthetic that complements living rooms, offices, kitchens, or bedrooms. Accurate timekeeping without annoying ticking sounds."
  },
  {
    _id: "19",
    name: "Men's Hoodie",
    price: 999,
    image: "https://www.iamdesi.in/wp-content/uploads/2024/11/front-673c39272cfec-Olive_Green_L_Hoodie.jpg",
    category: "clothing",
    description: "Cozy regular-fit fleece hoodie with kangaroo pocket, adjustable drawstring hood, ribbed cuffs & hem to retain shape, brushed interior for softness, durable double-stitched seams, and subtle logo embroidery. Made from cotton-poly blend for warmth without bulk. Ideal for casual wear, layering, gym sessions, or lounging."
  },
  {
    _id: "20",
    name: "Wireless Keyboard & Mouse Combo",
    price: 2799,
    image: "https://m.media-amazon.com/images/I/71kjha9tNML._AC_UF1000,1000_QL80_.jpg",
    category: "electronics",
    description: "Compact wireless keyboard and mouse set with quiet scissor-switch keys, full-size layout with multimedia hotkeys, ergonomic mouse with 1600 DPI adjustable sensor, 2.4GHz USB nano receiver (one for both devices), up to 12 months battery life (AA batteries), auto sleep mode for power saving, spill-resistant keyboard design, and plug-and-play compatibility. Space-saving & reliable for home office, travel, or desktop use."
  }
];

let allProducts = [];
let currentSort = 'default';

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 100);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

function loadProducts() {
  const container = document.getElementById('products-container');
  if (!container) return;

  container.innerHTML = '<div class="loading">Loading products...</div>';

  setTimeout(() => {
    allProducts = [...sampleProducts];
    updateProductDisplay();
  }, 800);
}

function sortProducts(products) {
  let sorted = [...products];

  switch (currentSort) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'name-asc':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }

  return sorted;
}

function renderProducts(productsToShow) {
  const container = document.getElementById('products-container');
  if (!container) return;

  container.innerHTML = '';

  if (productsToShow.length === 0) {
    container.innerHTML = '<p style="text-align:center; padding:4rem; color:#666;">No products found.</p>';
    return;
  }

  productsToShow.forEach((p, index) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.transitionDelay = `${index * 0.1}s`;
    card.style.cursor = 'pointer'; // hand cursor on whole card

    card.innerHTML = `
      <img src="${p.image || '/images/placeholder.jpg'}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p style="color:#007bff; font-size:0.9rem; padding:0 1rem 0.5rem; line-height:1.4; margin:0; font-style:italic;">
        more details ...
      </p>
      <p style="font-weight:bold; color:#28a745; padding:0 1rem;">₹${Number(p.price).toFixed(2)}</p>
      <button class="add-to-cart"
              data-id="${p._id}"
              data-name="${p.name.replace(/"/g, '&quot;')}"
              data-price="${p.price}"
              data-image="${p.image || ''}">
        Add to Cart
      </button>
    `;

    // Click anywhere on the card (image, name, teaser text) → open detail page
    card.addEventListener('click', (e) => {
      // Don't open detail if clicking Add to Cart button
      if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
        return;
      }
      window.location.href = `product.html?id=${p._id}`;
    });

    // Add to Cart button works normally
    card.querySelector('.add-to-cart').addEventListener('click', (e) => {
  e.stopPropagation();
  const { id, name, price, image } = e.target.dataset;
  addToCart(id, name, Number(price), image);
  // REMOVE any showToast line here — it's now in cart.js
});

    container.appendChild(card);

    // Trigger fade-in animation
    setTimeout(() => card.classList.add('visible'), 100);
  });
}

function updateProductDisplay() {
  const searchTerm = document.getElementById('search-input')?.value.toLowerCase().trim() || '';
  const activeBtn = document.querySelector('.filter-btn.active');
  const category = activeBtn ? activeBtn.dataset.category : 'all';

  let filtered = allProducts;

  if (category !== 'all') {
    filtered = filtered.filter(p => 
      (p.category || '').toLowerCase() === category.toLowerCase()
    );
  }

  if (searchTerm) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(searchTerm) ||
      (p.description || '').toLowerCase().includes(searchTerm)
    );
  }

  const sorted = sortProducts(filtered);
  renderProducts(sorted);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('products-container')) return;

  loadProducts();

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', updateProductDisplay);
  }

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateProductDisplay();
    });
  });

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', e => {
      currentSort = e.target.value;
      updateProductDisplay();
    });
  }
});
