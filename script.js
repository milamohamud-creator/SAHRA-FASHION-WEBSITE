/**
 * SAHRA FASHION — JAVASCRIPT APP
 * Waxyaabaha ku jira:
 * 1. Array-ga Badeecooyinka (Products Data)
 * 2. Maareynta Gaadhiga Wax-Iibsiga (Cart & LocalStorage)
 * 3. Raadinta & Shaandhaynta (Search & Filters)
 * 4. Modal-ka Faahfaahinta Badeecada (Quick View)
 * 5. Foomka Dalabka & Xaqiijinta (Checkout & Confirmation)
 * 6. Xiriirka & Toast Notifications
 */

// 1. DIIWAANKA BADEECOOYINKA (18 Badeeco oo Tayo Sare Leh)
const productsData = [
  {
    id: 1,
    name: "Dirac Shiifon Dahabi & Aroos ah",
    category: "diracyada",
    categoryName: "Diracyada Soomaalida",
    price: 85,
    oldPrice: 110,
    badge: "-23%",
    rating: 5.0,
    reviewsCount: 42,
    sizes: ["Cabbir Guud (Free Size)", "Gorgorad & Garba-saar"],
    colors: [
      { name: "Dahabi & Casuus", hex: "#C9A227" },
      { name: "Pink Khafiif", hex: "#FCE4EC" },
      { name: "Caddaan Aroos", hex: "#FFFFFF" }
    ],
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    description: "Dirac shiifon dhab ah oo gacanta lagu daabacay, kaas oo ku habboon aroosyada, ciidaha iyo munaasabadaha waaweyn. Waxaa la socda gorgorad xariir ah iyo garba-saar qurux badan.",
    isNew: false,
    bestSeller: true
  },
  {
    id: 2,
    name: "Cabaayad Xariir Madow ah oo Turki ah",
    category: "cabaayadaha",
    categoryName: "Cabaayadaha & Xijaabyada",
    price: 65,
    oldPrice: 85,
    badge: "Ugu Iibka Badan",
    rating: 4.9,
    reviewsCount: 56,
    sizes: ["52", "54", "56", "58", "60"],
    colors: [
      { name: "Madow Saafi ah", hex: "#171717" },
      { name: "Buni Dhuuxa", hex: "#4A2E18" }
    ],
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80",
    description: "Cabaayad casri ah oo laga keenay dalka Turkiga, ka sameysan dhar xariir jilicsan oo aan kuleyl lahayn. Waxaa ku lifaaqan xijaab madow oo isku joog ah.",
    isNew: false,
    bestSeller: true
  },
  {
    id: 3,
    name: "Suudh Rag oo Rasmi ah - Slim Fit",
    category: "ragga",
    categoryName: "Dharka Ragga",
    price: 120,
    oldPrice: 150,
    badge: "-20%",
    rating: 4.8,
    reviewsCount: 31,
    sizes: ["48 (M)", "50 (L)", "52 (XL)", "54 (XXL)"],
    colors: [
      { name: "Madow", hex: "#171717" },
      { name: "Buluug Madow (Navy)", hex: "#1A2A40" },
      { name: "Cawl Qalin ah", hex: "#757575" }
    ],
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    description: "Suudh tayo sare leh oo loogu talagalay shirarka rasmiga ah, xafiiska iyo aroosyada. Naqshad casri ah oo qofka si qurux badan ugu fariisata.",
    isNew: true,
    bestSeller: false
  },
  {
    id: 4,
    name: "Dirac Bacweyne iyo Gorgorad Velvet",
    category: "diracyada",
    categoryName: "Diracyada Soomaalida",
    price: 95,
    oldPrice: null,
    badge: "Cusub",
    rating: 5.0,
    reviewsCount: 19,
    sizes: ["Cabbir Guud (Free Size)"],
    colors: [
      { name: "Pink Madow", hex: "#D81B60" },
      { name: "Guduud Boqortooyo", hex: "#880E4F" }
    ],
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    description: "Dirac bacweyne heer sare ah oo leh daabac dahabi ah. Dharka ugu fiican ee aad ku xarragoon karto habeenka arooska ama ciida.",
    isNew: true,
    bestSeller: true
  },
  {
    id: 5,
    name: "Khamiis Rag Carbeed - Cudbi Saafi ah",
    category: "ragga",
    categoryName: "Dharka Ragga",
    price: 45,
    oldPrice: 55,
    badge: "-18%",
    rating: 4.7,
    reviewsCount: 28,
    sizes: ["54", "56", "58", "60", "62"],
    colors: [
      { name: "Caddaan", hex: "#FFFFFF" },
      { name: "Kareem", hex: "#FFF8F0" },
      { name: "Buluug Khafiif", hex: "#D4E6F1" }
    ],
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80",
    description: "Khamiis rag oo laga sameeyay cudbi jilicsan oo qabow. Xarrago dhab ah oo ku habboon salaadaha jimcaha iyo ciidaha.",
    isNew: false,
    bestSeller: false
  },
  {
    id: 6,
    name: "Guntiino Dhaqan Soomaaliyeed oo Asal ah",
    category: "diracyada",
    categoryName: "Dharka Dhaqanka",
    price: 55,
    oldPrice: 70,
    badge: "-21%",
    rating: 4.9,
    reviewsCount: 39,
    sizes: ["Free Size"],
    colors: [
      { name: "Caddaan iyo Guduud", hex: "#C62828" },
      { name: "Alindi Buluug ah", hex: "#1565C0" }
    ],
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    description: "Guntiino dhaqan Soomaaliyeed oo si farshaxanimo leh loo tolay. Waxay ka tarjumaysaa hidaha iyo quruxda dhabta ah ee haweenka Soomaaliyeed.",
    isNew: false,
    bestSeller: false
  },
  {
    id: 7,
    name: "Goono & Funaanad Gabdhaha Yaryar",
    category: "carruurta",
    categoryName: "Dharka Carruurta",
    price: 32,
    oldPrice: 40,
    badge: "-20%",
    rating: 4.8,
    reviewsCount: 17,
    sizes: ["2-3 Sano", "4-5 Sano", "6-7 Sano", "8-9 Sano"],
    colors: [
      { name: "Pink Khafiif", hex: "#FCE4EC" },
      { name: "Jaalle Dahabi", hex: "#FFF59D" }
    ],
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80",
    description: "Dhar qurux badan oo loogu talagalay gabdhaha yaryar xilliyada ciidaha iyo dhalashada. Aad u raaxo badan oo jilicsan maqaarka carruurta.",
    isNew: true,
    bestSeller: false
  },
  {
    id: 8,
    name: "Suudh Carruur oo Casri ah (Wiilasha)",
    category: "carruurta",
    categoryName: "Dharka Carruurta",
    price: 48,
    oldPrice: 60,
    badge: "-20%",
    rating: 4.9,
    reviewsCount: 22,
    sizes: ["3-4 Sano", "5-6 Sano", "7-8 Sano", "9-10 Sano"],
    colors: [
      { name: "Buluug Madow", hex: "#1A2A40" },
      { name: "Madow", hex: "#171717" }
    ],
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
    description: "Suudh 3-qaybood ah (Jaakad, Waslad iyo Surwaal) oo wiilasha yaryar u yeelaya xarrago boqornimo xilliga xafladaha.",
    isNew: false,
    bestSeller: false
  },
  {
    id: 9,
    name: "Kabaha Ciribta Sare ee Dumarka - Dahabi",
    category: "kabaha",
    categoryName: "Kabaha",
    price: 58,
    oldPrice: 75,
    badge: "-22%",
    rating: 4.9,
    reviewsCount: 45,
    sizes: ["37", "38", "39", "40", "41"],
    colors: [
      { name: "Dahabi Dhalaalaya", hex: "#C9A227" },
      { name: "Pink Madow", hex: "#D81B60" },
      { name: "Madow", hex: "#171717" }
    ],
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    description: "Kabo cirib sare oo raaxo leh, oo ku habboon diracyada iyo goonooyinka xafladaha. Dhalaal dahabi ah oo indhaha soo jiidanaya.",
    isNew: true,
    bestSeller: true
  },
  {
    id: 10,
    name: "Kabaha Raga ee Rasmiga ah (Leather Loafers)",
    category: "kabaha",
    categoryName: "Kabaha",
    price: 70,
    oldPrice: 90,
    badge: "-22%",
    rating: 4.8,
    reviewsCount: 37,
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "Buni Maqaar", hex: "#5D4037" },
      { name: "Madow", hex: "#171717" }
    ],
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=800&q=80",
    description: "Kabo maqaar dhab ah oo Talyaani ah, aad ugu habboon suudhadhka iyo khamiisyada. Raaxo buuxda oo socodka ku habboon.",
    isNew: false,
    bestSeller: true
  },
  {
    id: 11,
    name: "Boorso Gacmeed Maqaar ah oo Pink ah",
    category: "boorsooyinka",
    categoryName: "Boorsooyinka",
    price: 52,
    oldPrice: 65,
    badge: "-20%",
    rating: 5.0,
    reviewsCount: 29,
    sizes: ["Cabbir Dhexdhexaad"],
    colors: [
      { name: "Pink Khafiif", hex: "#FCE4EC" },
      { name: "Madow", hex: "#171717" },
      { name: "Kareem", hex: "#FFF8F0" }
    ],
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    description: "Boorso gacmeed casri ah oo leh xargo dahabi ah iyo qaybo badan oo wax lagu kaydiyo. Xarrago buuxda oo maalinle iyo xafladba ku habboon.",
    isNew: true,
    bestSeller: false
  },
  {
    id: 12,
    name: "Boorso Garabka ah oo Dahabi & Madow ah",
    category: "boorsooyinka",
    categoryName: "Boorsooyinka",
    price: 45,
    oldPrice: null,
    badge: "Cusub",
    rating: 4.7,
    reviewsCount: 18,
    sizes: ["Cabbir Yar / Compact"],
    colors: [
      { name: "Madow & Dahabi", hex: "#171717" }
    ],
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80",
    description: "Boorso garabka lagu qaato oo aad u qurux badan. Ku qaado taleefankaaga, agabka is-qurxinta iyo lacagta adigoo xarragoonaya.",
    isNew: true,
    bestSeller: false
  },
  {
    id: 13,
    name: "Xirmo Silsilad & Faraanti Dahabi ah",
    category: "agabka",
    categoryName: "Agabka Moodada",
    price: 35,
    oldPrice: 50,
    badge: "-30%",
    rating: 4.9,
    reviewsCount: 40,
    sizes: ["La Isku Hagaajin Karo"],
    colors: [
      { name: "Dahabi Dhalaalaya", hex: "#C9A227" }
    ],
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    description: "Xirmo dahabi ah oo ka kooban silsilad qoorta, hilqado iyo faraanti dhalaalaya oo aan midabkoodu duugoobin. Quruxda ugu dambeysa ee labiskaaga.",
    isNew: false,
    bestSeller: true
  },
  {
    id: 14,
    name: "Saacad Casri ah oo Dahabi & Qalin ah",
    category: "agabka",
    categoryName: "Agabka Moodada",
    price: 60,
    oldPrice: 80,
    badge: "-25%",
    rating: 4.8,
    reviewsCount: 26,
    sizes: ["Standard"],
    colors: [
      { name: "Dahabi & Madow", hex: "#C9A227" }
    ],
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    description: "Saacad gacmeed qaali ah oo biyaha u adkaysata. Waxay ku habboon tahay dumarka iyo ragga jecel nidaamka iyo xarragada sare.",
    isNew: false,
    bestSeller: false
  },
  {
    id: 15,
    name: "Xijaab Xariir ah oo Pink & Kareem ah",
    category: "cabaayadaha",
    categoryName: "Cabaayadaha & Xijaabyada",
    price: 18,
    oldPrice: 25,
    badge: "-28%",
    rating: 4.9,
    reviewsCount: 64,
    sizes: ["Cabbir Weyn"],
    colors: [
      { name: "Pink Khafiif", hex: "#FCE4EC" },
      { name: "Kareem", hex: "#FFF8F0" },
      { name: "Madow", hex: "#171717" }
    ],
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=80",
    description: "Xijaab xariir jilicsan oo aan madaxa ka sibbanayn, midabyo dabiici ah oo la jaanqaadaya nooc kasta oo dhar ah.",
    isNew: false,
    bestSeller: true
  },
  {
    id: 16,
    name: "Goono iyo Shaati Xafiiska Dumarka",
    category: "dumarka",
    categoryName: "Dharka Dumarka",
    price: 50,
    oldPrice: 65,
    badge: "-23%",
    rating: 4.7,
    reviewsCount: 21,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Pink & Caddaan", hex: "#FCE4EC" },
      { name: "Buluug Madow", hex: "#1A2A40" }
    ],
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    description: "Isku-joog goono dherer leh iyo shaati xariir ah oo loogu talagalay haweenka xafiisyada iyo shaqooyinka rasmiga ah gala.",
    isNew: true,
    bestSeller: false
  },
  {
    id: 17,
    name: "Jaakad Maqaar ah oo Ragga ah (Leather Jacket)",
    category: "ragga",
    categoryName: "Dharka Ragga",
    price: 90,
    oldPrice: 115,
    badge: "-22%",
    rating: 4.8,
    reviewsCount: 33,
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "Madow", hex: "#171717" },
      { name: "Buni", hex: "#4E342E" }
    ],
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
    description: "Jaakad maqaar ah oo aad u adag oo dhaxanta iyo roobka u adkaysata. Waxay ku siinaysaa muuqaal ragannimo iyo kalsooni buuxda.",
    isNew: false,
    bestSeller: false
  },
  {
    id: 18,
    name: "Dhar Ciid oo Gabdhaha Yaryar ah",
    category: "carruurta",
    categoryName: "Dharka Carruurta",
    price: 38,
    oldPrice: null,
    badge: "Cusub",
    rating: 5.0,
    reviewsCount: 14,
    sizes: ["2-3 Sano", "4-5 Sano", "6-7 Sano"],
    colors: [
      { name: "Pink & Dahabi", hex: "#D81B60" }
    ],
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80",
    description: "Dhar ciid aad u bilicsan oo ku xardhan laace iyo xariir. Ka yeel gabadhaada mid ku faraxsan xilliga ciida iyo munaasabadaha qoyska.",
    isNew: true,
    bestSeller: false
  }
];

// 2. QAYBAHA DHARKA (Categories Showcase Data)
const categoriesData = [
  { id: "dumarka", name: "Dharka Dumarka", count: "Dhar Casri ah", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80" },
  { id: "diracyada", name: "Diracyada Soomaalida", count: "Aroosyada & Ciidaha", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80" },
  { id: "cabaayadaha", name: "Cabaayadaha & Xijaabka", count: "Turki & Khaliij", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80" },
  { id: "ragga", name: "Dharka Ragga & Suudhadhka", count: "Slim Fit & Khamiis", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80" },
  { id: "carruurta", name: "Dharka Carruurta", count: "Wiilasha & Gabdhaha", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=600&q=80" },
  { id: "kabaha", name: "Kabaha Ciribta & Loafers", count: "Heels & Casual", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80" },
  { id: "boorsooyinka", name: "Boorsooyinka Gacanta", count: "Maqaar & Dahabi", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80" },
  { id: "agabka", name: "Agabka Moodada & Dahabka", count: "Silsilado & Saacado", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80" }
];

// 3. CART STATE (Ku xiran LocalStorage)
let cart = [];
const CART_STORAGE_KEY = "sahra_fashion_cart_v1";

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    cart = saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error("Khalad ayaa ka dhacay akhrinta gaadhiga:", e);
    cart = [];
  }
  updateCartUI();
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error("Khalad ayaa ka dhacay kaydinta gaadhiga:", e);
  }
  updateCartUI();
}

// 4. DIIWAANKA IYO RAADINTA (Filtering & Searching State)
let currentFilter = {
  category: "all",
  search: "",
  sort: "featured",
  discountOnly: false
};

// Modal State
let currentQuickViewProduct = null;
let selectedModalSize = "";
let selectedModalColor = "";
let modalQuantity = 1;

// 5. BILOWGA APP-KA (DOM Loaded)
document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  renderCategoriesGrid();
  renderProducts();
  setupEventListeners();
});

// Event Listeners Setup
function setupEventListeners() {
  // Mobile Menu Toggle
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking nav links
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  // Cart Drawer open/close
  const openCartBtn = document.getElementById("openCartBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartBackdrop = document.getElementById("cartBackdrop");

  if (openCartBtn) openCartBtn.addEventListener("click", openCart);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener("click", closeCart);

  // Search input live filtering
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentFilter.search = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) {
        clearSearchBtn.style.display = currentFilter.search ? "block" : "none";
      }
      applyFilters();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        currentFilter.search = "";
        clearSearchBtn.style.display = "none";
        applyFilters();
        searchInput.focus();
      }
    });
  }

  // Category select dropdown
  const categorySelect = document.getElementById("categorySelect");
  if (categorySelect) {
    categorySelect.addEventListener("change", (e) => {
      setCategoryFilter(e.target.value);
    });
  }

  // Sort select dropdown
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentFilter.sort = e.target.value;
      applyFilters();
    });
  }

  // Discount checkbox
  const discountCheckbox = document.getElementById("discountOnlyCheckbox");
  if (discountCheckbox) {
    discountCheckbox.addEventListener("change", (e) => {
      currentFilter.discountOnly = e.target.checked;
      applyFilters();
    });
  }

  // Category Pills
  const pillBtns = document.querySelectorAll(".pill-btn");
  pillBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-category");
      setCategoryFilter(cat);
    });
  });

  // Reset Filters Button
  const resetBtn = document.getElementById("resetFiltersBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", resetAllFilters);
  }
}

// 6. RENDER CATEGORIES
function renderCategoriesGrid() {
  const grid = document.getElementById("categoriesGrid");
  if (!grid) return;

  grid.innerHTML = categoriesData.map(cat => `
    <div class="category-card" onclick="setCategoryFilter('${cat.id}')">
      <img src="${cat.image}" alt="${cat.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80'">
      <div class="category-overlay">
        <h3 class="category-title">${cat.name}</h3>
        <span class="category-link-hint">${cat.count} &rarr;</span>
      </div>
    </div>
  `).join("");
}

// 7. RENDER PRODUCTS
function renderProducts(itemsToRender = null) {
  const grid = document.getElementById("productsGrid");
  const emptyBox = document.getElementById("emptyResults");
  const countText = document.getElementById("productsCountText");

  if (!grid) return;

  const items = itemsToRender !== null ? itemsToRender : getFilteredProducts();

  if (countText) {
    countText.innerText = `Waxaa la helay ${items.length} badeeco`;
  }

  if (items.length === 0) {
    grid.innerHTML = "";
    if (emptyBox) emptyBox.style.display = "block";
    return;
  }

  if (emptyBox) emptyBox.style.display = "none";

  grid.innerHTML = items.map(product => {
    // Generate size tags
    const sizesHtml = product.sizes.slice(0, 3).map(s => `<span class="size-tag">${s}</span>`).join("");
    // Generate color dots
    const colorsHtml = product.colors.map(c => `<span class="color-dot" style="background-color: ${c.hex};" title="${c.name}"></span>`).join("");

    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-img-wrapper">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80'">
          ${product.badge ? `<span class="card-badge ${getBadgeClass(product.badge)}">${product.badge}</span>` : ""}
          <button class="quick-view-overlay-btn" onclick="openProductQuickView(${product.id})">
            👁️ Faahfaahin Dheeraad ah
          </button>
        </div>

        <div class="product-card-body">
          <span class="product-category-tag">${product.categoryName}</span>
          <h3 class="product-title">${product.name}</h3>
          
          <div class="product-rating">
            <span class="stars">★★★★★</span>
            <span class="rating-count">(${product.reviewsCount})</span>
          </div>

          <div class="product-options-row">
            <div class="sizes-tags">${sizesHtml}</div>
            <div class="colors-dots">${colorsHtml}</div>
          </div>

          <div class="product-price-row">
            <span class="price-current">$${product.price.toFixed(2)}</span>
            ${product.oldPrice ? `<span class="price-old">$${product.oldPrice.toFixed(2)}</span>` : ""}
          </div>

          <div class="card-actions">
            <button class="btn-add-cart" onclick="quickAddToCart(${product.id})">
              <span>Ku dar Gaadhiga</span> 🛍️
            </button>
            <button class="btn-details-sm" onclick="openProductQuickView(${product.id})" title="Faahfaahin">
              ℹ️
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function getBadgeClass(badge) {
  if (badge.includes("%") || badge.includes("Dhimis")) return "badge-discount";
  if (badge.includes("Cusub")) return "badge-new";
  return "badge-popular";
}

// 8. FILTER & SORT LOGIC
function getFilteredProducts() {
  return productsData.filter(item => {
    // Category filter
    if (currentFilter.category !== "all" && item.category !== currentFilter.category) {
      return false;
    }

    // Search filter
    if (currentFilter.search) {
      const query = currentFilter.search;
      const matchName = item.name.toLowerCase().includes(query);
      const matchCategory = item.categoryName.toLowerCase().includes(query);
      const matchDesc = item.description.toLowerCase().includes(query);
      if (!matchName && !matchCategory && !matchDesc) {
        return false;
      }
    }

    // Discount only filter
    if (currentFilter.discountOnly) {
      if (!item.oldPrice || item.oldPrice <= item.price) {
        return false;
      }
    }

    return true;
  }).sort((a, b) => {
    if (currentFilter.sort === "low-to-high") {
      return a.price - b.price;
    } else if (currentFilter.sort === "high-to-low") {
      return b.price - a.price;
    } else if (currentFilter.sort === "rating") {
      return b.rating - a.rating;
    } else if (currentFilter.sort === "name-az") {
      return a.name.localeCompare(b.name);
    }
    // Default: featured / best sellers first
    return (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0);
  });
}

function applyFilters() {
  const filtered = getFilteredProducts();
  renderProducts(filtered);
}

function setCategoryFilter(categoryId) {
  currentFilter.category = categoryId;

  // Sync category select dropdown
  const categorySelect = document.getElementById("categorySelect");
  if (categorySelect) categorySelect.value = categoryId;

  // Sync pills
  document.querySelectorAll(".pill-btn").forEach(btn => {
    if (btn.getAttribute("data-category") === categoryId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update section title
  const catalogTitle = document.getElementById("catalogTitle");
  if (catalogTitle) {
    if (categoryId === "all") {
      catalogTitle.innerText = "Dhammaan Badeecooyinka";
    } else {
      const catObj = categoriesData.find(c => c.id === categoryId);
      catalogTitle.innerText = catObj ? catObj.name : "Badeecooyinka";
    }
  }

  applyFilters();

  // Smooth scroll to products section
  const prodSec = document.getElementById("products");
  if (prodSec) {
    prodSec.scrollIntoView({ behavior: "smooth" });
  }
}

function resetAllFilters() {
  currentFilter = {
    category: "all",
    search: "",
    sort: "featured",
    discountOnly: false
  };

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";

  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.style.display = "none";

  const categorySelect = document.getElementById("categorySelect");
  if (categorySelect) categorySelect.value = "all";

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) sortSelect.value = "featured";

  const discountCheckbox = document.getElementById("discountOnlyCheckbox");
  if (discountCheckbox) discountCheckbox.checked = false;

  document.querySelectorAll(".pill-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-category") === "all");
  });

  const catalogTitle = document.getElementById("catalogTitle");
  if (catalogTitle) catalogTitle.innerText = "Dhammaan Badeecooyinka";

  applyFilters();
  showToast("Dhammaan shaandhaynta dib baa loo celiyay 🔄");
}

function focusSearchInput() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.focus();
  }
}

// 9. CART OPERATIONS
function quickAddToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const defaultSize = product.sizes[0] || "Standard";
  const defaultColor = product.colors[0] ? product.colors[0].name : "Standard";

  addItemToCart(product, defaultSize, defaultColor, 1);
}

function addItemToCart(product, size, color, quantity = 1) {
  const existingIndex = cart.findIndex(
    item => item.id === product.id && item.size === size && item.color === color
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      color: color,
      quantity: quantity
    });
  }

  saveCart();
  showToast(`✅ "${product.name}" waxaa lagu daray gaadhiga!`);
}

function updateCartQuantity(index, delta) {
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      removeFromCart(index);
      return;
    }
    saveCart();
  }
}

function removeFromCart(index) {
  if (cart[index]) {
    const itemName = cart[index].name;
    cart.splice(index, 1);
    saveCart();
    showToast(`🗑️ "${itemName}" waa laga saaray gaadhiga.`);
  }
}

function clearFullCart() {
  if (cart.length === 0) return;
  if (confirm("Ma hubtaa inaad nadiifiso dhammaan badeecooyinka gaadhiga ku jira?")) {
    cart = [];
    saveCart();
    showToast("Gaadhiga waa la nadiifiyay.");
  }
}

function updateCartUI() {
  // Update badge counters
  const totalItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartBadge = document.getElementById("cartCountBadge");
  const cartDrawerCount = document.getElementById("cartDrawerCount");

  if (cartBadge) cartBadge.innerText = totalItemsCount;
  if (cartDrawerCount) cartDrawerCount.innerText = `(${totalItemsCount})`;

  // Calculate Subtotal & Shipping
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const freeShippingThreshold = 50;
  const isFreeShipping = subtotal >= freeShippingThreshold || subtotal === 0;

  const subtotalEl = document.getElementById("cartSubtotal");
  const totalAmountEl = document.getElementById("cartTotalAmount");
  const shippingCostEl = document.getElementById("cartShippingCost");

  if (subtotalEl) subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
  if (totalAmountEl) totalAmountEl.innerText = `$${subtotal.toFixed(2)}`;
  if (shippingCostEl) {
    shippingCostEl.innerText = isFreeShipping ? "Bilaash ($0.00)" : "$5.00";
  }

  // Free shipping progress bar
  const shippingText = document.getElementById("shippingText");
  const progressFill = document.getElementById("shippingProgressFill");
  if (shippingText && progressFill) {
    if (subtotal === 0) {
      shippingText.innerText = "Gaarsiin bilaash ah hel marka aad gaarto $50!";
      progressFill.style.width = "0%";
    } else if (subtotal >= freeShippingThreshold) {
      shippingText.innerText = "🎉 Hambalyo! Waxaad heshay Gaarsiin Bilaash ah!";
      progressFill.style.width = "100%";
    } else {
      const remaining = freeShippingThreshold - subtotal;
      shippingText.innerText = `Kudar $${remaining.toFixed(2)} oo kale si aad u hesho Gaarsiin Bilaash ah!`;
      const pct = Math.min((subtotal / freeShippingThreshold) * 100, 100);
      progressFill.style.width = `${pct}%`;
    }
  }

  // Render cart items list inside Drawer
  const cartList = document.getElementById("cartItemsList");
  const proceedBtn = document.getElementById("proceedToCheckoutBtn");

  if (cartList) {
    if (cart.length === 0) {
      cartList.innerHTML = `
        <div class="cart-empty-message">
          <span class="cart-empty-icon">🛍️</span>
          <h4>Gaadhigaagu wuu madhan yahay</h4>
          <p>Kudar dhar iyo agab qurux badan si aad u bilowdo adeegsigaaga.</p>
          <button class="btn btn-primary" onclick="closeCart(); setCategoryFilter('all');">
            Bilow Adeegsiga Hadda ✨
          </button>
        </div>
      `;
      if (proceedBtn) proceedBtn.disabled = true;
    } else {
      if (proceedBtn) proceedBtn.disabled = false;
      cartList.innerHTML = cart.map((item, index) => `
        <div class="cart-item-card">
          <img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=300&q=80'">
          <div class="cart-item-details">
            <div>
              <h4 class="cart-item-name">${item.name}</h4>
              <p class="cart-item-meta">Cabbir: <strong>${item.size}</strong> | Midab: <strong>${item.color}</strong></p>
            </div>
            <div class="cart-item-bottom">
              <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
              
              <div class="cart-qty-ctrl">
                <button type="button" onclick="updateCartQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button type="button" onclick="updateCartQuantity(${index}, 1)">+</button>
              </div>

              <button class="cart-remove-btn" onclick="removeFromCart(${index})" title="Ka saar">Ka saar</button>
            </div>
          </div>
        </div>
      `).join("");
    }
  }
}

function openCart() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (drawer && backdrop) {
    drawer.classList.add("active");
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeCart() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (drawer && backdrop) {
    drawer.classList.remove("active");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// 10. PRODUCT QUICK VIEW MODAL
function openProductQuickView(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  currentQuickViewProduct = product;
  selectedModalSize = product.sizes[0] || "Standard";
  selectedModalColor = product.colors[0] ? product.colors[0].name : "Standard";
  modalQuantity = 1;

  // Bind product data to modal elements
  document.getElementById("modalProductImg").src = product.image;
  document.getElementById("modalProductBadge").innerText = product.badge || "Tayo Sare";
  document.getElementById("modalProductCategory").innerText = product.categoryName;
  document.getElementById("modalProductTitle").innerText = product.name;
  document.getElementById("modalProductRating").innerText = product.rating.toFixed(1);
  document.getElementById("modalProductReviews").innerText = `(${product.reviewsCount} faallooyin)`;
  document.getElementById("modalProductPrice").innerText = `$${product.price.toFixed(2)}`;

  const oldPriceEl = document.getElementById("modalProductOldPrice");
  const discountTagEl = document.getElementById("modalProductDiscountTag");
  if (product.oldPrice) {
    oldPriceEl.style.display = "inline";
    oldPriceEl.innerText = `$${product.oldPrice.toFixed(2)}`;
    discountTagEl.style.display = "inline";
    const discountPct = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
    discountTagEl.innerText = `${discountPct}% Qiimo-dhimis`;
  } else {
    oldPriceEl.style.display = "none";
    discountTagEl.style.display = "none";
  }

  document.getElementById("modalProductDesc").innerText = product.description;
  document.getElementById("modalQuantityVal").innerText = modalQuantity;
  document.getElementById("selectedSizeText").innerText = selectedModalSize;
  document.getElementById("selectedColorText").innerText = selectedModalColor;

  // Render sizes buttons
  const sizeContainer = document.getElementById("modalSizeButtons");
  if (sizeContainer) {
    sizeContainer.innerHTML = product.sizes.map((s, idx) => `
      <button type="button" class="modal-size-btn ${idx === 0 ? 'active' : ''}" onclick="selectModalSize('${s}', this)">
        ${s}
      </button>
    `).join("");
  }

  // Render colors swatches
  const colorContainer = document.getElementById("modalColorSwatches");
  if (colorContainer) {
    colorContainer.innerHTML = product.colors.map((c, idx) => `
      <button type="button" class="modal-color-swatch ${idx === 0 ? 'active' : ''}" style="background-color: ${c.hex};" title="${c.name}" onclick="selectModalColor('${c.name}', this)">
      </button>
    `).join("");
  }

  // Open modal
  const backdrop = document.getElementById("productModalBackdrop");
  if (backdrop) {
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function selectModalSize(size, btn) {
  selectedModalSize = size;
  document.getElementById("selectedSizeText").innerText = size;
  document.querySelectorAll(".modal-size-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
}

function selectModalColor(colorName, btn) {
  selectedModalColor = colorName;
  document.getElementById("selectedColorText").innerText = colorName;
  document.querySelectorAll(".modal-color-swatch").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
}

function adjustModalQty(delta) {
  modalQuantity = Math.max(1, modalQuantity + delta);
  document.getElementById("modalQuantityVal").innerText = modalQuantity;
}

function addModalProductToCart() {
  if (!currentQuickViewProduct) return;
  addItemToCart(currentQuickViewProduct, selectedModalSize, selectedModalColor, modalQuantity);
  closeProductModal();
  openCart();
}

function closeProductModal() {
  const backdrop = document.getElementById("productModalBackdrop");
  if (backdrop) {
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// 11. CHECKOUT & ORDER HANDLING
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast("Gaadhigaagu wuu madhan yahay. Kudar badeeco marka hore!");
    return;
  }
  closeCart();

  // Populate order summary in checkout modal
  const checkoutItemsList = document.getElementById("checkoutItemsList");
  const summaryTotalItems = document.getElementById("summaryTotalItems");
  const summarySubtotal = document.getElementById("summarySubtotal");
  const summaryGrandTotal = document.getElementById("summaryGrandTotal");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (summaryTotalItems) summaryTotalItems.innerText = `${totalItems} xabbo`;
  if (summarySubtotal) summarySubtotal.innerText = `$${subtotal.toFixed(2)}`;
  if (summaryGrandTotal) summaryGrandTotal.innerText = `$${subtotal.toFixed(2)}`;

  if (checkoutItemsList) {
    checkoutItemsList.innerHTML = cart.map(item => `
      <div class="summary-item-row">
        <div>
          <strong>${item.name}</strong> (x${item.quantity})
          <br><small class="text-muted">Cabbir: ${item.size} | Midab: ${item.color}</small>
        </div>
        <div>$${(item.price * item.quantity).toFixed(2)}</div>
      </div>
    `).join("");
  }

  const backdrop = document.getElementById("checkoutModalBackdrop");
  if (backdrop) {
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeCheckoutModal() {
  const backdrop = document.getElementById("checkoutModalBackdrop");
  if (backdrop) {
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Last placed order data for receipt & WhatsApp
let lastOrderData = null;

function handleOrderSubmit(event) {
  event.preventDefault();

  if (cart.length === 0) {
    showToast("Gaadhigaagu wuu madhan yahay!");
    return;
  }

  const fullName = document.getElementById("orderFullName").value.trim();
  const phone = document.getElementById("orderPhone").value.trim();
  const city = document.getElementById("orderCity").value;
  const address = document.getElementById("orderAddress").value.trim();
  const notes = document.getElementById("orderNotes").value.trim();
  
  const paymentMethodInput = document.querySelector('input[name="paymentMethod"]:checked');
  const paymentMethod = paymentMethodInput ? paymentMethodInput.value : "Kaash";

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const randomId = Math.floor(1000 + Math.random() * 9000);
  const orderId = `SF-2026-${randomId}`;

  // Store simulated order
  lastOrderData = {
    orderId: orderId,
    date: new Date().toLocaleDateString("so-SO"),
    customerName: fullName,
    phone: phone,
    city: city,
    address: address,
    notes: notes,
    paymentMethod: paymentMethod,
    total: totalAmount,
    items: [...cart]
  };

  // Close checkout modal
  closeCheckoutModal();

  // Reset shopping cart
  cart = [];
  saveCart();

  // Open confirmation modal
  openConfirmationModal(lastOrderData);
}

function openConfirmationModal(order) {
  document.getElementById("receiptOrderId").innerText = `#${order.orderId}`;
  document.getElementById("receiptDate").innerText = order.date;
  document.getElementById("receiptCustomerName").innerText = order.customerName;
  document.getElementById("receiptCustomerPhone").innerText = order.phone;
  document.getElementById("receiptCustomerAddress").innerText = `${order.city}, ${order.address}`;
  document.getElementById("receiptPaymentMethod").innerText = order.paymentMethod;
  document.getElementById("receiptTotalAmount").innerText = `$${order.total.toFixed(2)}`;

  const backdrop = document.getElementById("confirmationModalBackdrop");
  if (backdrop) {
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeConfirmationAndReset() {
  const backdrop = document.getElementById("confirmationModalBackdrop");
  if (backdrop) {
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
  showToast("Dalabkaagii tijaabada ahaa waa la duubay. Mahadsanid! 🎉");
}

function shareOrderWhatsApp() {
  if (!lastOrderData) return;

  const itemsText = lastOrderData.items.map(i => `- ${i.name} (${i.size}, ${i.color}) x${i.quantity} = $${(i.price * i.quantity).toFixed(2)}`).join("%0A");
  
  const message = `Asc Sahra Fashion,%0A%0A*DALAB CUSUB: %23${lastOrderData.orderId}*%0A` +
    `*Macmiilka:* ${encodeURIComponent(lastOrderData.customerName)}%0A` +
    `*Telefoonka:* ${encodeURIComponent(lastOrderData.phone)}%0A` +
    `*Goobta:* ${encodeURIComponent(lastOrderData.city + ", " + lastOrderData.address)}%0A` +
    `*Habka Lacagta:* ${encodeURIComponent(lastOrderData.paymentMethod)}%0A%0A` +
    `*Badeecooyinka:*%0A${itemsText}%0A%0A` +
    `*Wadarta Guud:* $${lastOrderData.total.toFixed(2)}%0A%0A` +
    `Fadlan ii xaqiiji dalabkan. Mahadsanid!`;

  const waUrl = `https://wa.me/252612345678?text=${message}`;
  window.open(waUrl, "_blank");
}

// 12. CONTACT FORM & NEWSLETTER
function handleContactSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("contactName").value.trim();
  showToast(`Waad ku mahadsan tahay ${name}, fariintaadii waa la helay! Waxaan kugu soo jawaabi doonaa dhowaan. ✉️`);
  event.target.reset();
}

function handleNewsletter(event) {
  event.preventDefault();
  showToast("Waad ku mahadsan tahay ku biirista liiska qiimo-dhimista Sahra Fashion! 🎉");
  event.target.reset();
}

// 13. TOAST NOTIFICATIONS
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>👑</span> <div>${message}</div>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}