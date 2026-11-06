/* =====================================================================
   THREE CINNAMONS — CENTRAL CONFIGURATION
   Edit this one file to update business details, images and the menu.
   Anything marked  TO_CONFIRM  has NOT been verified with the owner.
   ===================================================================== */
/* Stock-photo helper: Unsplash CDN (free licence). w = grid size, full = lightbox size. */
function U(id, alt, by, handle, w, full) {
  var base = "https://images.unsplash.com/" + id + "?auto=format&fit=crop&q=75&w=";
  return { src: base + w, full: base + (full || w), alt: alt, kind: "stock", credit: { name: by, url: "https://unsplash.com/@" + handle + "?utm_source=three_cinnamons_demo&utm_medium=referral" } };
}

window.TC = {

  /* ---------- BUSINESS DETAILS ---------- */
  business: {
    name: "Three Cinnamons",
    legalName: "Three Cinnamons Zambia",            // name used on the Facebook page
    tagline: "Freshly baked cinnamon rolls, coffee & sweet moments in Lusaka.",
    // Source: Facebook page "Three Cinnamons Zambia", Tripadvisor, Yandex Maps, TikTok
    address: {
      line1: "Agora Village",
      line2: "Thabo Mbeki Road",
      city: "Lusaka",
      country: "Zambia",
      // Used for the map embed + directions. Replace with exact pin text once confirmed.
      mapQuery: "Three Cinnamons, Agora Village, Thabo Mbeki Road, Lusaka, Zambia",
      verified: true,        // street/area confirmed by Facebook + Tripadvisor + Yandex
      pinVerified: false     // TO_CONFIRM: exact Google Maps pin / coordinates
    },
    phone:   { display: "+260 97 049 1449", tel: "+260970491449" },   // Facebook page + TikTok
    email:   "threecinnamons@gmail.com",                               // Facebook page
    whatsapp: {
      number: "260970491449",   // TO_CONFIRM: same as phone; owner must confirm it is on WhatsApp
      verified: false,
      message: "Hello Three Cinnamons, I would like to make an inquiry."
    },
    // Opening hours: NOT verified anywhere public. Leave null until confirmed.
    // When confirmed, use e.g.  hours: [ ["Monday – Friday", "08:00 – 18:00"], ["Saturday", "09:00 – 17:00"] ]
    hours: null,
    socials: {
      facebook:  "https://www.facebook.com/p/Three-Cinnamons-Zambia-100083156440790/",
      tiktok:    "https://www.tiktok.com/@threecinnamonszambia",
      instagram: null          // TO_CONFIRM: no official Instagram account found
    },
    delivery: true,            // "Delivery available" per official TikTok posts
    // Contact form: no backend credentials yet. Put a Formspree/Web3Forms endpoint here to
    // send messages straight to the inbox. Until then the form opens the visitor's email app.
    formEndpoint: null,
    siteUrl: null              // e.g. "https://threecinnamons.co.zm" once the domain is known
  },

  /* ---------- IMAGES ----------
     Every image slot lives here. `src: null` shows the branded placeholder tile.
     CURRENT PHOTOS ARE LICENSED STOCK (Unsplash, free licence) used for illustration only.
     They are NOT photos of Three Cinnamons and the site says so (footer + gallery).
     To swap in a real photo: put the file in /assets/img/photos/ and change the slot, e.g.
        "hero-1": { src: "assets/img/photos/hero-1.jpg", alt: "…", kind: "food" }   (no credit / kind:"food" or "venue")
     kind: "venue" = real photo of the restaurant, "food" = real photo of their food, "stock" = stock.  */
  images: {
    "hero-1":   U("photo-1732565492107-d32577478885", "Orange and fig cinnamon rolls in a baking pan", "Maite Paternain", "maite_paternain", 1800),
    "hero-2":   U("photo-1742771737040-ec5f8fb9a9f0", "A cinnamon roll on a white plate", "aw", "wwwawphoto", 1800),
    "hero-3":   U("photo-1524240485266-07dd6863d4ae", "A cup of latte coffee", "Laura Johnston", "lauramakoj", 1800),
    "hero-4":   U("photo-1749922217403-412f69429dc5", "A cosy cafe with customers at tables", "Virginia Marinova", "virginiaphotostories", 1800),
    "about-1":  U("photo-1741290723786-894842dd519c", "A cosy cafe interior with decorative artwork", "Negley Stockman", "negley", 1200),
    "about-2":  U("photo-1643188389404-5a10e50023bf", "A tray of freshly baked pastries in an oven", "Kate Mishchankova", "katemi", 1000),
    "exp-1":    U("photo-1742893368447-2ab12c174440", "A cosy cafe interior with a garden view", "Thomas Hoang", "megatunger", 900),
    "exp-2":    U("photo-1653085315536-1379bc836161", "A chocolate milkshake with a straw", "Ali Choubin", "alichoubin", 900),
    "exp-3":    U("photo-1654767837293-2368d3516d0f", "Fresh homemade buns", "pure julia", "purejulia", 900),
    "about-3":  U("photo-1649675602217-416a4fafcecb", "Hands of a baker shaping dough", "DDP", "moino007", 1000),
    "banner-about":   U("photo-1753873555674-1d6698c7537b", "A cosy cafe interior with brick and warm light", "Kris Tian", "kris_tian", 1800),
    "banner-menu":    U("photo-1454641350786-bc31a1997ba9", "Trays of baked goods on display", "Greta Punch", "gretap", 1800),
    "banner-gallery": U("photo-1749871615234-98bff62995ba", "A cosy cafe interior with warm lighting", "Kouji Tsuru", "pafuxu", 1800),
    "banner-offers":  U("photo-1622798337764-259682f03741", "Cinnamon sticks and ground cinnamon on a table", "Rens D", "rens23", 1800),
    "banner-contact": U("photo-1749922217403-412f69429dc5", "A cosy cafe with customers at tables", "Virginia Marinova", "virginiaphotostories", 1800),
    "drink-iced":   U("photo-1643250096514-736909e95a80", "A glass of iced coffee with milk", "pariwat pannium", "pariwatt", 900),
    "drink-frappe": U("photo-1534449369274-82e4ad08bf35", "A summer frappe with a black straw", "Thimo van Leeuwen", "thimovanleeuwen", 900),
    "offers-1": U("photo-1494280235352-5dd6a55df7fd", "Assorted pastries on a tray", "Samuel Yongbo Kwon", "theyongbo", 1000),
    "gallery": [
      Object.assign(U("photo-1742771737040-ec5f8fb9a9f0", "A cinnamon roll on a white plate", "aw", "wwwawphoto", 900, 1800), { cat: "food", span: "tall" }),
      Object.assign(U("photo-1730235341656-b07152f891a9", "A pan of cinnamon rolls and pastries", "Phil Hearing", "philhearing", 900, 1800), { cat: "food" }),
      Object.assign(U("photo-1732565492107-d32577478885", "Orange and fig cinnamon rolls in a baking pan", "Maite Paternain", "maite_paternain", 1200, 1800), { cat: "food", span: "wide" }),
      Object.assign(U("photo-1524240485266-07dd6863d4ae", "A cup of latte coffee", "Laura Johnston", "lauramakoj", 900, 1600), { cat: "drinks" }),
      Object.assign(U("photo-1653085315536-1379bc836161", "A chocolate milkshake with a straw", "Ali Choubin", "alichoubin", 900, 1600), { cat: "drinks" }),
      Object.assign(U("photo-1749922217403-412f69429dc5", "A cosy cafe with customers at tables", "Virginia Marinova", "virginiaphotostories", 900, 1800), { cat: "interior", span: "tall" }),
      Object.assign(U("photo-1741290723786-894842dd519c", "A cosy cafe interior with decorative artwork", "Negley Stockman", "negley", 900, 1800), { cat: "interior" }),
      Object.assign(U("photo-1742893368447-2ab12c174440", "A cosy cafe interior with a garden view", "Thomas Hoang", "megatunger", 1200, 1800), { cat: "interior", span: "wide" }),
      Object.assign(U("photo-1643188389404-5a10e50023bf", "A tray of freshly baked pastries", "Kate Mishchankova", "katemi", 900, 1600), { cat: "food" }),
      Object.assign(U("photo-1494280235352-5dd6a55df7fd", "Assorted pastries on a tray", "Samuel Yongbo Kwon", "theyongbo", 900, 1600), { cat: "food" }),
      Object.assign(U("photo-1654767837293-2368d3516d0f", "Fresh homemade buns", "pure julia", "purejulia", 900, 1600), { cat: "food" })
      ,Object.assign(U("photo-1768812141741-4ee1bf3d9095", "A cafe entrance with potted palms", "Margo Evardson", "stadinstudio", 1200, 1800), { cat: "exterior", span: "wide" }),
      Object.assign(U("photo-1757860837202-312de75ef25e", "A glass-fronted cafe with outdoor benches", "Kevin Yudhistira Alloni", "kyalloni", 900, 1800), { cat: "exterior", span: "tall" }),
      Object.assign(U("photo-1643250096514-736909e95a80", "A glass of iced coffee with milk", "pariwat pannium", "pariwatt", 900, 1600), { cat: "drinks" }),
      Object.assign(U("photo-1534449369274-82e4ad08bf35", "A summer frappe with a black straw", "Thimo van Leeuwen", "thimovanleeuwen", 900, 1600), { cat: "drinks" }),
      Object.assign(U("photo-1749871615234-98bff62995ba", "A cosy cafe interior with warm lighting", "Kouji Tsuru", "pafuxu", 900, 1800), { cat: "interior" }),
      Object.assign(U("photo-1753873555674-1d6698c7537b", "A cosy cafe interior with brick and warm light", "Kris Tian", "kris_tian", 1200, 1800), { cat: "interior", span: "wide" }),
      Object.assign(U("photo-1454641350786-bc31a1997ba9", "Trays of baked goods on display", "Greta Punch", "gretap", 900, 1600), { cat: "food" }),
      Object.assign(U("photo-1649675602217-416a4fafcecb", "Hands of a baker shaping dough", "DDP", "moino007", 900, 1600), { cat: "food" }),
      Object.assign(U("photo-1622798337764-259682f03741", "Cinnamon sticks and ground cinnamon", "Rens D", "rens23", 900, 1600), { cat: "food" })
    ]
  },

  /* ---------- MENU ----------
     TEMPORARY SAMPLE CONTENT. The real menu arrives via WhatsApp.
     To replace: edit/add items below, then set  isSample: false  (or delete the field).
     price: null shows "Price on request". Set img to an image key or a file path.        */
  menu: {
    isSample: true,
    currency: "K",
    categories: [
      { id: "rolls",  name: "Cinnamon Rolls", blurb: "Baked fresh, rolled by hand." },
      { id: "coffee", name: "Coffee",         blurb: "From classic to flavoured." },
      { id: "shakes", name: "Milkshakes & Frappes", blurb: "Cold, creamy, indulgent." }
    ],
    items: [
      { cat: "rolls",  img: "hero-2", name: "Classic Iced Roll",     desc: "Soft cinnamon swirl with cream icing.",          price: null, featured: true,  isSample: true },
      { cat: "rolls",  img: "hero-1", name: "Pecan Roll",            desc: "Cinnamon swirl topped with toasted pecans.",    price: null, featured: true,  isSample: true },
      { cat: "rolls",  img: "about-2", name: "Chocolate Drizzle Roll", desc: "Cinnamon swirl finished with chocolate.",      price: null, featured: true,  isSample: true },
      { cat: "coffee", img: "hero-3", name: "Coffee (sample)",       desc: "Replace with the real coffee menu.",             price: null, isSample: true },
      { cat: "coffee", img: "drink-iced", name: "Flavoured Latte (sample)", desc: "Replace with the real flavoured drinks.",    price: null, isSample: true },
      { cat: "shakes", img: "exp-2", name: "Milkshake (sample)",    desc: "Replace with the real milkshake flavours.",     price: null, isSample: true },
      { cat: "shakes", img: "drink-frappe", name: "Frappe (sample)",       desc: "Replace with the real frappe flavours.",        price: null, isSample: true }
    ]
  },

  /* ---------- SPECIAL OFFERS ----------
     Leave empty until the restaurant provides real offers. Example item:
     { title: "Weekend Box", text: "Details…", tag: "Weekends", until: "2026-12-31" }           */
  offers: []
};
