const productsData = [
      {
        id: "cruiser-bike",
        title: "Riderpower Cruiser Electric Bike",
        category: "ev",
        categoryLabel: "Electric Vehicle",
        badge: "High Range",
        images: [
          "bike.jpeg",
          "https://m.media-amazon.com/images/I/61mYB1I+oHL._SL1500_.jpg",
          "https://m.media-amazon.com/images/I/51NVdnSdT6L._SL1080_.jpg",
          "WhatsApp Video 2026-06-03 at 11.42.37 AM.mp4"
        ],
        imgStyle: "object-cover",
        description: "Premium grade urban electric commuter engineered for rough terrains, built with custom structural balancing systems.",
        specs: [
          { label: "Motor Power", value: "250W - 750W BLDC Hub Motor" },
          { label: "Real World Range", value: "40 - 80 Km per Charge" },
          { label: "Battery Assembly", value: "Lithium-ion Intelligent Pack" },
          { label: "Payload Capacity", value: "120 Kg" }
        ],
        reviews: [
          { author: "Automotive Tech Labs", rating: 5, text: "Excellent frame balance and high performance continuous power delivery parameters during grading tests." },
          { author: "Rajesh K.", rating: 4, text: "Gives solid mileage around urban conditions. Commute setup takes shock impacts safely." }
        ],
        userImages: []
      },
      {
        id: "smart-e-cycle",
        title: "Riderpower Urban Smart E-Cycle",
        category: "ev",
        categoryLabel: "Electric Vehicle",
        badge: "New Launch",
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmrs1ROmTRScniHlp3f6FxZwz0zmnPd6xOg&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TAq0GXUOutASxAnZD9yKr6GU94loiF_Y2Q&s",
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
        ],
        imgStyle: "object-contain p-2 bg-white",
        description: "Ultra-lightweight multi-mode electric bicycle featuring intuitive multi-level pedal assistance algorithms.",
        specs: [
          { label: "Motor Type", value: "250W High-Torque Rear Hub Motor" },
          { label: "Range (Pedal Assist)", value: "Up to 65 Km per charge" },
          { label: "Frame Composition", value: "Aircraft-Grade 6061 Aluminium Alloy" }
        ],
        reviews: [
          { author: "E-Cycle Monitor", rating: 5, text: "The multi-level pedal assistance curves react cleanly without abrupt lag thresholds." }
        ],
        userImages: []
      },
      {
        id: "lithium-pack",
        title: "E-Bike Lithium Battery Modules and graphene-based battery modules",
        category: "energy",
        categoryLabel: "Energy & Storage",
        badge: "Top Seller",
        images: [
          "WhatsApp Image 2026-06-03 at 12.07.25 PM.jpeg",
          "WhatsApp Image 2026-06-03 at 12.07.26PM.jpeg",
          "sol 1.jpeg"
        ],
        imgStyle: "object-cover",
        description: "High density battery configurations supporting intelligent thermal containment structural matrices.",
        specs: [
          { label: "Voltage Architecture", value: "48V / 60V High Efficiency" },
          { label: "BMS Protection System", value: "Integrated Smart Safety Matrix" }
        ],
        reviews: [
          { author: "Grid Core Engineering", rating: 4, text: "Intelligent thermal tracking profiles remain resilient even in severe thermal conditions." }
        ],
        userImages: []
      },
      {
        id:"inverter",
        title: "EV Inverter System",
        category: "energy",
        categoryLabel: "Energy & Storage",
        badge: "Innovative Technology",
        images: [
          "WhatsApp Image 2026-06-03 at 12.00.59 PM (1).jpeg",
          "Screenshot 2026-06-03 141237.png"
        ],
        imgStyle: "object-cover",
        description: "High-efficiency inverter system designed for seamless integration with electric vehicle platforms.",
        specs: [
          { label: "Input Voltage", value: "1kvh / 6kvh" },
          { label: "Output Power", value: "250W / 500W" },
          { label: "Input Voltage", value: "5kvh / 10kvh" },
          { label: "Output Power", value: "250W / 500W" }
        ],
        reviews: [
          { author: "EV Tech Review", rating: 5, text: "Exceptional efficiency and reliability in real-world driving conditions." }
        ],
        userImages: []
      },
      {
        id: "led-down-lights",
        title: "9W-48W LED Down Light, Spot & Profile Light",
        category: "energy",
        categoryLabel: "Energy & Storage",
        badge: "Commercial Use",
        images: [
          "9 18 1.jpeg",
          "9 18 2.jpeg",
          "9 18 3.jpeg",
          "Screenshot 2026-06-03 155643.png",
          "Screenshot 2026-06-03 155712.png",
          "Screenshot 2026-06-03 155712.png"
        ],
        imgStyle: "object-cover",
        description: "High luminosity Osram LED fixtures ideal for receptions, corporate offices, banks, hospitals, residences, and boutique shops.",
        specs: [
          { label: "System Wattage", value: "9 - 18W ± 2%" },
          { label: "Efficiency & Power Factor", value: "> 85% Efficiency, > 0.95 PF" },
          { label: "LED Lumen", value: "120lm/watt (C.W)" },
          { label: "Input Voltage", value: "230V (Rated)" }
        ],
        reviews: [],
        userImages: []
      },
      {
        id: "led-street-lights",
        title: "18W - 400W LED Street, Flood & High Bay Light",
        category: "energy",
        categoryLabel: "Energy & Storage",
        badge: "Industrial Compliance",
        images: [
          "light 4.jpeg",
          "light 5.jpeg",
          "light 6.jpeg",
          "Screenshot 2026-06-03 155959.png",
          "Screenshot 2026-06-03 160019.png",
          "Screenshot 2026-06-03 160032.png"
        ],
        imgStyle: "object-cover",
        description: "Rugged illumination for pathways, roads, construction sites, and security lighting with advanced electrical protection systems.",
        specs: [
          { label: "System Wattage", value: "18 to 120W ± 2% (Range up to 400W)" },
          { label: "Ingress Protection", value: "IP-66" },
          { label: "Casing Material", value: "LM6 Aluminum (Pressure die cast)" },
          { label: "LED Life Span", value: "> 50,000 Burning hours" },
          { label: "Protections", value: "Short circuit, Open circuit, Surge Protection" }
        ],
        reviews: [],
        userImages: []
      },
      {
        id: "solar-infrastructure and solar-grid-systems",
        title: "Integrated Solar Street & Grid Infrastructure",
        category: "energy",
        categoryLabel: "Energy & Storage",
        badge: "Eco Choice",
        images: [
          "WhatsApp Image 2026-06-03 at 1.09.01 PM.jpeg",
          "sol3.png",
          "sol4.png",
          "sl 1.jpeg",
          "sl 2.jpeg",
          "sl3.jpeg",
          "sl 4.jpeg"
        ],
        imgStyle: "object-cover",
        description: "Standalone clean power generation including Semi Integrated Solar Street Lights, Pump Sets, and On/Off-Grid Systems.",
        specs: [
          { label: "Applications", value: "Open Area, Houses, Hospitals, Malls, Industries" },
          { label: "System Types", value: "On-Grid, Off-Grid, Semi-Integrated" }
        ],
        reviews: [],
        userImages: []
      },
      {
        id: "engineering structure and poles fabrication",
        title: "Engineering Structure and Poles Fabrication",
        category: "energy",
        categoryLabel: "Energy & Storage",
        badge: "Custom Solutions",
        images: [
          "infra 1.png",
          "infra 2.png",
          "infra 3.png",
          "infra 4.png",
          "infra 5.png",
          "inf6.jpeg",
          "inf 7.jpeg",
          "stru 2.jpeg"
        ],
        imgStyle: "object-cover",
        description: "Custom engineering structures and poles designed for optimal performance and durability in various applications.",
        specs: [
          { label: "Material", value: "High-grade Steel" },
          { label: "Design", value: "Customizable" },
          { label: "Durability", value: "50+ Years" }
        ],
        reviews: [],
        userImages: []
      }
    ];

    const searchShortcuts = {
      "cruiser": ["cruiser-bike"],
      "cruisers": ["cruiser-bike"],
      "bike": ["cruiser-bike"],
      "bikes": ["cruiser-bike"],
      "ebike": ["cruiser-bike", "smart-e-cycle"],
      "ebikes": ["cruiser-bike", "smart-e-cycle"],
      "cycle": ["smart-e-cycle"],
      "cycles": ["smart-e-cycle"],
      "bicycle": ["smart-e-cycle"],
      "bicycles": ["smart-e-cycle"],
      "battery": ["lithium-pack"],
      "batteries": ["lithium-pack"],
      "lithium": ["lithium-pack"],
      "pack": ["lithium-pack"],
      "packs": ["lithium-pack"],
      "modules": ["lithium-pack"],
      "led": ["led-down-lights", "led-street-lights"],
      "lights": ["led-down-lights", "led-street-lights", "solar-infrastructure and solar-grid-systems"],
      "street": ["led-street-lights", "solar-infrastructure and solar-grid-systems"],
      "down": ["led-down-lights"],
      "flood": ["led-street-lights"],
      "solar": ["solar-infrastructure and solar-grid-systems"],
      "grid": ["solar-infrastructure and solar-grid-systems"],
      "ev": ["cruiser-bike", "smart-e-cycle"],
      "energy": ["lithium-pack", "led-down-lights", "led-street-lights", "solar-infrastructure and solar-grid-systems"],
      "storage": ["lithium-pack"]
    };

    let currentActiveProductId = null;
    let chosenFormStarScore = 5; 
    let currentGalleryIndex = 0; 
    let isAdmin = false; 

    // --- Helper function to detect if a file/URL is a video ---
    function checkIsVideo(src) {
        if (!src) return false;
        return src.match(/\.(mp4|webm|ogg)$/i) !== null || src.startsWith('data:video');
    }

    // --- Lightbox Functions ---
    function initLightbox() {
        if (document.getElementById('imageLightboxModal')) return;

        const modal = document.createElement('div');
        modal.id = 'imageLightboxModal';
        modal.className = 'hidden fixed inset-0 z-[100] bg-black/90 flex justify-center items-center backdrop-blur-sm transition-opacity duration-300';
        document.body.appendChild(modal);

        modal.onclick = (e) => {
            if (e.target === modal) closeLightbox();
        };
    }

    function openLightbox(mediaSrc) {
        const modal = document.getElementById('imageLightboxModal');
        if (!modal) return;
        
        const isVideo = checkIsVideo(mediaSrc);
        
        modal.innerHTML = `
            <button id="closeLightboxBtn" onclick="closeLightbox()" class="absolute top-6 right-6 text-white hover:text-orange-500 text-5xl font-light cursor-pointer z-[110] transition-colors">&times;</button>
        `;

        if (isVideo) {
            modal.innerHTML += `<video src="${mediaSrc}" controls autoplay class="max-w-[95vw] max-h-[90vh] object-contain rounded-md shadow-2xl"></video>`;
        } else {
            modal.innerHTML += `<img src="${mediaSrc}" alt="Full Screen Product" class="max-w-[95vw] max-h-[90vh] object-contain rounded-md shadow-2xl">`;
        }
        
        modal.classList.remove('hidden');
    }

    function closeLightbox() {
        const modal = document.getElementById('imageLightboxModal');
        if (modal) {
            modal.innerHTML = ''; // Clear video/image to stop playback
            modal.classList.add('hidden');
        }
    }
    // --------------------------

    function renderCatalogGrid(itemsToRender) {
      const container = document.getElementById('catalogGrid');
      if (!container) return;
      container.innerHTML = '';
      
      if(itemsToRender.length === 0) {
        container.innerHTML = `
          <div class="col-span-full text-center py-12 bg-white rounded border border-slate-200">
            <i class="fa-solid fa-box-open text-4xl text-slate-300 mb-2"></i>
            <h4 class="font-bold text-slate-700">No Matching Products Found</h4>
            <p class="text-xs text-slate-400 mt-1">Try modifying your query text parameters or clear active search filter bounds.</p>
          </div>
        `;
        return;
      }

      itemsToRender.forEach(product => {
        const displayMedia = product.images && product.images.length > 0 ? product.images[0] : '';
        const isVideo = checkIsVideo(displayMedia);
        
        let mediaHtml = isVideo 
            ? `<div class="w-full h-40 flex items-center justify-center bg-slate-900 text-slate-400 ${product.imgStyle}"><i class="fa-solid fa-video text-2xl"></i></div>`
            : `<img src="${displayMedia}" alt="${product.title}" class="w-full h-40 ${product.imgStyle}">`;

        const cardHtml = `
          <div class="bd-card bg-white rounded-md overflow-hidden border border-slate-200 shadow-sm cursor-pointer flex flex-col" onclick="navigateToProductPage('${product.id}')">
            <div class="relative bg-slate-100">
              ${mediaHtml}
              <span class="absolute top-2 left-2 bg-slate-900 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">${product.badge}</span>
            </div>
            <div class="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="text-sm font-bold text-slate-900 hover:text-orange-500 transition-colors truncate">${product.title}</h3>
                <p class="text-xs text-slate-400 mt-1">${product.categoryLabel}</p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100">
                <button class="w-full py-2 bg-white hover:bg-orange-50 border border-orange-500 text-orange-500 text-xs font-bold rounded transition-all uppercase tracking-wider">View Details</button>
              </div>
            </div>
          </div>
        `;
        container.innerHTML += cardHtml;
      });
    }

    function executeGlobalQuerySearch() {
      const rawInput = document.getElementById('globalSearchBarInput').value;
      const queryCleanedString = rawInput.replace(/\s+/g, ' ').trim().toLowerCase();
      if(!queryCleanedString) return;

      if (currentActiveProductId) {
        window.location.hash = '';
      }

      let filtered = [];

      if (searchShortcuts[queryCleanedString]) {
        const targetIds = searchShortcuts[queryCleanedString];
        filtered = productsData.filter(p => targetIds.includes(p.id));
      } else {
        const queryKeywordsList = queryCleanedString.split(' ');
        filtered = productsData.filter(product => {
          const textBodyContext = (product.title + " " + product.description).toLowerCase();
          return queryKeywordsList.every(word => textBodyContext.includes(word));
        });
      }

      renderCatalogGrid(filtered);
      document.getElementById('catalogTitleText').textContent = "Search Results Portfolio";
      document.getElementById('searchFilterBadgeText').textContent = `Query: "${queryCleanedString}"`;
      document.getElementById('searchFilterBadgeWrapper').classList.remove('hidden');

      setTimeout(() => {
        document.getElementById('vehicles').scrollIntoView({behavior:'smooth'});
      }, 50);
    }

    function handleSearchKeyup(event) {
      if (event.key === 'Enter') {
        executeGlobalQuerySearch();
      }
    }

    function clearActiveSearchFilters() {
      document.getElementById('globalSearchBarInput').value = '';
      document.getElementById('filterType').value = 'all';
      document.getElementById('catalogTitleText').textContent = "Trending Lineup Products";
      document.getElementById('searchFilterBadgeWrapper').classList.add('hidden');
      renderCatalogGrid(productsData);
    }

    function executeQuickSearch() {
      document.getElementById('globalSearchBarInput').value = '';
      document.getElementById('searchFilterBadgeWrapper').classList.add('hidden');

      const filterValue = document.getElementById('filterType').value;
      if(filterValue === 'all') {
        document.getElementById('catalogTitleText').textContent = "Trending Lineup Products";
        renderCatalogGrid(productsData);
      } else {
        const filtered = productsData.filter(p => p.category === filterValue);
        const label = filterValue === 'ev' ? 'Electric Vehicles Lineup' : 'Energy & Infrastructure Systems';
        document.getElementById('catalogTitleText').textContent = label;
        renderCatalogGrid(filtered);
      }
      document.getElementById('vehicles').scrollIntoView({behavior:'smooth'});
    }

    function routePathEngine() {
      const hash = window.location.hash;
      
      if (hash.startsWith('#model-')) {
        // Added decodeURIComponent to fix IDs that contain spaces
        const productId = decodeURIComponent(hash.replace('#model-', ''));
        const product = productsData.find(p => p.id === productId);
        
        if (product) {
          currentActiveProductId = product.id;
          switchProductTab('specs'); 
          renderProductPage(product);
          return;
        }
      }
      
      currentActiveProductId = null;
      document.getElementById('individualProductPage').classList.add('hidden');
      document.getElementById('mainPortalPage').classList.remove('hidden');
      window.scrollTo(0, 0);
    }

    function renderProductPage(product) {
      document.getElementById('mainPortalPage').classList.add('hidden');
      document.getElementById('individualProductPage').classList.remove('hidden');
      
      document.getElementById('breadcrumbType').textContent = product.categoryLabel;
      document.getElementById('breadcrumbName').textContent = product.title;
      document.getElementById('detailTitle').textContent = product.title;
      document.getElementById('detailDescription').textContent = product.description;
      document.getElementById('detailBadge').textContent = product.badge;
      
      currentGalleryIndex = 0;
      renderProductGallery();

      let tableHtml = `<div class="border border-slate-200 rounded overflow-hidden"><table class="w-full text-left border-collapse text-sm"><tbody>`;
      product.specs.forEach((spec, index) => {
        const bgRow = index % 2 === 0 ? 'bg-slate-50' : 'bg-white';
        tableHtml += `
          <tr class="${bgRow} border-b border-slate-100">
            <td class="p-3.5 font-semibold text-slate-500 w-1/2">${spec.label}</td>
            <td class="p-3.5 font-medium text-slate-900 w-1/2">${spec.value}</td>
          </tr>`;
      });
      tableHtml += `</tbody></table></div>`;
      document.getElementById('detailSpecsTable').innerHTML = tableHtml;

      setFormStarScore(5);
      renderReviewsList(product);
      renderUserImagesGrid(product);
      
      window.scrollTo(0, 0);
    }

    function renderProductGallery() {
      const product = productsData.find(p => p.id === currentActiveProductId);
      if (!product) return;

      const mediaContainer = document.getElementById('detailImage')?.parentElement || document.getElementById('detailVideo')?.parentElement;
      const thumbContainer = document.getElementById('detailThumbnailContainer');
      
      if(thumbContainer) {
          thumbContainer.className = "flex gap-3 overflow-x-auto py-3 px-1 no-scrollbar scroll-smooth items-center w-full";
      }

      if (!product.images || product.images.length === 0) {
          if (mediaContainer) {
              mediaContainer.innerHTML = `<img id="detailImage" src="" alt="No image available" class="max-h-[340px] w-full object-contain mx-auto rounded-lg shadow-sm">`;
          }
          
          if (isAdmin) {
              thumbContainer.innerHTML = `
                <div class="w-full text-center py-4 border-2 border-dashed border-slate-200 rounded cursor-pointer hover:border-orange-500 hover:text-orange-500 text-slate-400 transition-colors" onclick="document.getElementById('gallery-upload-input').click()">
                    <i class="fas fa-image text-2xl mb-2"></i><br>
                    <span class="text-xs font-bold uppercase">Upload First Asset</span>
                </div>
              `;
          } else {
              thumbContainer.innerHTML = `<div class="w-full text-center py-4 text-slate-400 text-sm italic">No images currently available.</div>`;
          }
          return;
      }

      if (currentGalleryIndex >= product.images.length) currentGalleryIndex = product.images.length - 1;
      if (currentGalleryIndex < 0) currentGalleryIndex = 0;

      const currentMediaSrc = product.images[currentGalleryIndex];
      const isVideo = checkIsVideo(currentMediaSrc);

      // Inject dynamically depending on if media is image or video
      if (mediaContainer) {
          if (isVideo) {
              mediaContainer.innerHTML = `<video id="detailVideo" src="${currentMediaSrc}" controls class="max-h-[340px] w-full object-contain mx-auto rounded-lg shadow-sm transition-opacity duration-300 ${product.imgStyle}"></video>`;
          } else {
              mediaContainer.innerHTML = `<img id="detailImage" src="${currentMediaSrc}" class="max-h-[340px] w-full object-contain mx-auto rounded-lg shadow-sm transition-opacity duration-300 cursor-zoom-in hover:opacity-90 ${product.imgStyle}" onclick="openLightbox('${currentMediaSrc}')">`;
          }
      }

      let thumbsHtml = product.images.map((imgSrc, index) => {
        const isActive = index === currentGalleryIndex;
        const borderClasses = isActive 
            ? "border-orange-500 ring-4 ring-orange-500/20 scale-100" 
            : "border-slate-200 hover:border-orange-300 opacity-70 hover:opacity-100 scale-95 hover:scale-100";

        const deleteButtonHtml = isAdmin ? `
            <button onclick="removeProductImage(event, ${index})" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-600 z-10">
                <i class="fas fa-times text-[10px]"></i>
            </button>
        ` : '';

        const thumbMediaIsVideo = checkIsVideo(imgSrc);
        const thumbInner = thumbMediaIsVideo
            ? `<div class="w-full h-full bg-slate-900 flex items-center justify-center text-white"><i class="fa-solid fa-play opacity-70 text-sm"></i></div>`
            : `<img src="${imgSrc}" class="w-full h-full object-cover">`;

        return `
          <div class="relative flex-shrink-0 group cursor-pointer transition-all duration-200 w-24 h-16 rounded-lg">
            <div onclick="setActiveProductImage(${index})" class="w-full h-full rounded-md overflow-hidden border-2 bg-white ${borderClasses}">
                ${thumbInner}
            </div>
            ${deleteButtonHtml}
          </div>
        `;
      }).join('');

      if (isAdmin) {
          thumbsHtml += `
              <div class="flex-shrink-0 w-24 h-16 flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-lg hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 text-slate-400 cursor-pointer transition-all" onclick="document.getElementById('gallery-upload-input').click()">
                  <i class="fas fa-plus text-lg"></i>
              </div>
          `;
      }

      thumbContainer.innerHTML = thumbsHtml;
    }

    function setActiveProductImage(index) {
        currentGalleryIndex = index;
        renderProductGallery();
    }

    function removeProductImage(event, index) {
        event.stopPropagation();
        const product = productsData.find(p => p.id === currentActiveProductId);
        if (product) {
            product.images.splice(index, 1);
            renderProductGallery();
        }
    }

    function handleGalleryUpload(event) {
        const files = event.target.files;
        if (!files || files.length === 0) return;
        
        const product = productsData.find(p => p.id === currentActiveProductId);
        if (!product) return;

        Array.from(files).forEach(file => {
            // Updated to allow both images and video formats
            if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) return;
            
            const reader = new FileReader();
            reader.onload = function(e) {
                product.images.push(e.target.result);
                
                if (product.images.length === 1) currentGalleryIndex = 0;
                
                renderProductGallery();
                
                const container = document.getElementById('detailThumbnailContainer');
                if(container) {
                    setTimeout(() => container.scrollLeft = container.scrollWidth, 50);
                }
            };
            reader.readAsDataURL(file);
        });

        event.target.value = '';
    }

    function initGalleryUploader() {
        if (!document.getElementById('gallery-upload-input')) {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.id = 'gallery-upload-input';
            fileInput.multiple = true;
            fileInput.accept = 'image/*,video/*'; // Expanded accept payload
            fileInput.className = 'hidden';
            fileInput.onchange = handleGalleryUpload;
            document.body.appendChild(fileInput);
        }
    }

    function navigateToCategoryFromBreadcrumb() {
      const product = productsData.find(p => p.id === currentActiveProductId);
      if (!product) {
        navigateToHome();
        return;
      }
      
      window.location.hash = '';
      document.getElementById('filterType').value = product.category;
      const filtered = productsData.filter(p => p.category === product.category);
      renderCatalogGrid(filtered);
      
      setTimeout(() => {
        document.getElementById('vehicles').scrollIntoView({behavior:'smooth'});
      }, 50);
    }

    function renderReviewsList(product) {
      const container = document.getElementById('reviewsList');
      if (product.reviews.length === 0) {
        container.innerHTML = `<p class="text-xs text-slate-400 italic py-4">No validation audits submitted yet. Use the data panel underneath to append field results.</p>`;
        return;
      }
      container.innerHTML = product.reviews.map(r => `
        <div class="bg-slate-50 p-3 rounded border border-slate-100 text-left">
          <div class="flex justify-between items-center text-xs">
            <span class="font-bold text-slate-800">${r.author}</span>
            <span class="text-orange-500 font-semibold">${'★'.repeat(r.rating)}${'choose'.repeat(5-r.rating).replace(/choose/g, '☆')}</span>
          </div>
          <p class="text-xs text-slate-600 mt-1 leading-relaxed">${r.text}</p>
        </div>
      `).join('');
    }

    function renderUserImagesGrid(product) {
      const container = document.getElementById('userImagesGrid');
      if (!product.userImages || product.userImages.length === 0) {
        container.innerHTML = `<div class="col-span-4 text-center py-6 text-xs text-slate-400 italic">No assets submitted for this model yet. Upload first file underneath.</div>`;
        return;
      }
      container.innerHTML = product.userImages.map(imgSrc => {
        const isVid = checkIsVideo(imgSrc);
        if (isVid) {
            return `
            <div class="h-16 border border-slate-200 rounded overflow-hidden bg-slate-900 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity" onclick="openLightbox('${imgSrc}')">
                <i class="fa-solid fa-video text-white"></i>
            </div>`;
        } else {
            return `
            <div class="h-16 border border-slate-200 rounded overflow-hidden bg-slate-50">
              <img src="${imgSrc}" class="w-full h-full object-cover hover:scale-110 transition-transform cursor-zoom-in" onclick="openLightbox('${imgSrc}')">
            </div>`;
        }
      }).join('');
    }

    function switchProductTab(targetTab) {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-content-panel').forEach(p => p.classList.add('hidden'));

      const activeBtn = document.getElementById(`tabBtn-${targetTab}`);
      if(activeBtn) activeBtn.classList.add('active');
      
      if (targetTab === 'specs') document.getElementById('detailSpecsTable').classList.remove('hidden');
      if (targetTab === 'reviews') document.getElementById('detailReviewsPanel').classList.remove('hidden');
      if (targetTab === 'images') document.getElementById('detailImagesPanel').classList.remove('hidden');
    }

    function setFormStarScore(score) {
      chosenFormStarScore = score;
      const hiddenInput = document.getElementById('revRatingHiddenValue');
      if(hiddenInput) hiddenInput.value = score;
      
      const label = document.getElementById('starRatingLabel');
      if(label) label.textContent = `${score} ${score === 1 ? 'Star' : 'Stars'}`;
      
      applyStarStylesToUI(score);
    }

    function highlightStarsPreview(score) { applyStarStylesToUI(score); }
    function resetStarsDisplay() { applyStarStylesToUI(chosenFormStarScore); }

    function applyStarStylesToUI(score) {
      for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(`inputStar-${i}`);
        if(star) {
            if (i <= score) {
              star.classList.replace('text-slate-300', 'text-orange-500');
            } else {
              star.classList.replace('text-orange-500', 'text-slate-300');
            }
        }
      }
    }

    function submitUserReview(event) {
      event.preventDefault();
      const product = productsData.find(p => p.id === currentActiveProductId);
      if(!product) return;

      const name = document.getElementById('revName').value.trim();
      const rating = parseInt(document.getElementById('revRatingHiddenValue').value);
      const comment = document.getElementById('revComment').value.trim();

      product.reviews.unshift({ author: name, rating: rating, text: comment });
      renderReviewsList(product);
      
      document.getElementById('reviewForm').reset();
      setFormStarScore(5); 
    }

    function handleUserImageUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        const product = productsData.find(p => p.id === currentActiveProductId);
        if (product) {
          if (!product.userImages) product.userImages = [];
          product.userImages.push(e.target.result);
          renderUserImagesGrid(product);
        }
      };
      reader.readAsDataURL(file);
      event.target.value = ''; 
    }

    function openQuoteModal() {
      const modal = document.getElementById('quoteModal');
      const card = document.getElementById('modalCard');
      const selector = document.getElementById('modalProductSelector');
      
      document.getElementById('formContainer').classList.remove('hidden');
      document.getElementById('successContainer').classList.add('hidden');
      
      if (currentActiveProductId) {
        selector.value = currentActiveProductId;
      } else {
        selector.value = "General Consultation";
      }
      
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      setTimeout(() => card.classList.replace('scale-95', 'scale-100'), 10);
    }

    function openProductQuote() { openQuoteModal(); }

    function closeQuoteModal() {
      const modal = document.getElementById('quoteModal');
      const card = document.getElementById('modalCard');
      card.classList.replace('scale-100', 'scale-95');
      setTimeout(() => {
        modal.classList.replace('flex', 'hidden');
        document.getElementById('quoteForm').reset();
      }, 150);
    }

    function handleQuoteSubmit(event) {
      event.preventDefault();
      const selector = document.getElementById('modalProductSelector');
      const selectedProductText = selector.options[selector.selectedIndex].text;
      
      document.getElementById('successProductTarget').textContent = `[${selectedProductText}]`;
      document.getElementById('formContainer').classList.add('hidden');
      document.getElementById('successContainer').classList.remove('hidden');
    }

    const footerForm = document.getElementById('footerForm');
    if(footerForm) {
        footerForm.addEventListener('submit', submitFooterContact);
    }
    
    function submitFooterContact(event) {
      event.preventDefault();
      const rawValue = document.getElementById('footerContactInput').value.trim();
      document.getElementById('footerSuccessData').textContent = rawValue;
      document.getElementById('footerForm').classList.add('hidden');
      document.getElementById('footerSuccessState').classList.remove('hidden');
    }

    function navigateToProductPage(id) {
      window.location.hash = `#model-${id}`;
    }

    function navigateToHome() {
      window.location.hash = '';
      clearActiveSearchFilters();
    }

    window.addEventListener('hashchange', routePathEngine);
    
    window.addEventListener('DOMContentLoaded', () => {
      initLightbox();
      initGalleryUploader(); 
      renderCatalogGrid(productsData);
      routePathEngine();
      
      // Upgrade HTML element dynamically to allow video uploads if it exists
      const userUploadInput = document.getElementById('userImageUploadInput');
      if (userUploadInput) {
          userUploadInput.accept = "image/*,video/*";
      }

      window.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.code === 'KeyA') {
            const pwd = prompt("Enter Administrator Password to unlock gallery editing:");
            if (pwd === "admin123") { 
                isAdmin = !isAdmin;
                alert("Gallery Edit Mode: " + (isAdmin ? "UNLOCKED" : "LOCKED"));
                if(currentActiveProductId) renderProductGallery(); 
            } else if (pwd !== null) {
                alert("Access Denied: Incorrect password.");
            }
        }
      });
    });