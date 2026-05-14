// ===== PAGE ROUTING =====
function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById('page-' + pageName);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo(0, 0);
        closeMenu();
    }
}

function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// ===== VISITOR PROFILER =====
let visitorProfile = null;

function selectProfile(profile) {
    visitorProfile = profile;
    closeProfiler();

    if (profile === 'rental') {
        showPage('rentals');
    } else if (profile === 'renovation') {
        showPage('renovations');
    } else if (profile === 'owner') {
        showPage('contact');
    } else if (profile === 'explore') {
        showPage('gallery');
    }
}

function closeProfiler() {
    const profiler = document.getElementById('visitorProfiler');
    profiler.classList.add('hidden');
    localStorage.setItem('visitorProfileShown', 'true');
}

// Show profiler only once per session
window.addEventListener('load', () => {
    if (!localStorage.getItem('visitorProfileShown')) {
        setTimeout(() => {
            const profiler = document.getElementById('visitorProfiler');
            if (profiler) profiler.classList.remove('hidden');
        }, 1000);
    }
});

// ===== PROPERTIES DATA =====
const properties = [
    {
        id: 1,
        name: 'Oakwood Residence',
        beds: 3,
        baths: 2,
        status: 'available',
        description: 'Modern family home with updated finishes',
        category: 'rentals',
        image: 'assets/images/properties/oakwood.jpeg'
    },
    {
        id: 2,
        name: 'Maple Avenue Unit',
        beds: 2,
        baths: 1.5,
        status: 'coming',
        description: 'Contemporary urban living with premium amenities',
        category: 'rentals',
        image: 'assets/images/properties/maple.jpeg'
    },
    {
        id: 3,
        name: 'Riverside Manor',
        beds: 4,
        baths: 2.5,
        status: 'available',
        description: 'Spacious home in established neighborhood',
        category: 'rentals',
        image: 'assets/images/properties/riverside.jpeg'
    },
    {
        id: 4,
        name: 'Cedar Lane Cottage',
        beds: 2,
        baths: 1,
        status: 'available',
        description: 'Cozy home with charming details',
        category: 'rentals',
        image: 'assets/images/properties/cedar.jpeg'
    },
    {
        id: 5,
        name: 'Pine Street Apartment',
        beds: 1,
        baths: 1,
        status: 'coming',
        description: 'Compact efficiency with modern amenities',
        category: 'rentals',
        image: 'assets/images/properties/pine.jpeg'
    }
];

function renderProperties(filter = 'all') {
    const grid = document.getElementById('properties-grid');
    if (!grid) return;
    
    let filtered = properties;

    if (filter === 'available') {
        filtered = properties.filter(p => p.status === 'available');
    } else if (filter === 'coming') {
        filtered = properties.filter(p => p.status === 'coming');
    }

    grid.innerHTML = filtered.map(prop => `
        <div class="property-card">
            <img src="${prop.image}" class="property-image" alt="${prop.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <div class="property-image-placeholder" style="display:none; width:100%; height:300px; background:#eee; display:flex; align-items:center; justify-content:center;">Image Not Found</div>
            <div class="property-info">
                <span class="property-status ${prop.status === 'available' ? 'status-available' : 'status-coming'}">
                    ${prop.status === 'available' ? 'Available' : 'Coming Soon'}
                </span>
                <h3 style="margin-bottom: var(--space-sm);">${prop.name}</h3>
                <p style="margin: 0; color: var(--text-primary); font-weight: 600;">${prop.beds} Bed • ${prop.baths} Bath</p>
                <p style="color: var(--text-secondary); margin: var(--space-sm) 0;">${prop.description}</p>
                <button class="btn btn-primary" style="width: 100%; margin-top: var(--space-md);" onclick="showPage('contact')">
                    ${prop.status === 'available' ? 'Enquire Now' : 'Join Waitlist'}
                </button>
            </div>
        </div>
    `).join('');
}

function filterProperties(filter) {
    renderProperties(filter);
}

// ===== GALLERY DATA =====
const galleryItems = [
    { id: 1, category: 'rentals', title: 'Living Room', image: 'assets/images/gallery/living-room.jpeg' },
    { id: 2, category: 'renovations', title: 'Kitchen Renovation', image: 'assets/images/gallery/kitchen-reno.jpeg' },
    { id: 3, category: 'interiors', title: 'Bedroom', image: 'assets/images/gallery/bedroom.jpeg' },
    { id: 4, category: 'exteriors', title: 'Facade', image: 'assets/images/gallery/facade.jpeg' },
    { id: 5, category: 'rentals', title: 'Dining Area', image: 'assets/images/gallery/dining-area.jpeg' },
    { id: 6, category: 'renovations', title: 'Bathroom Upgrade', image: 'assets/images/gallery/IMG_9798.jpeg' },
    { id: 7, category: 'interiors', title: 'Home Office', image: 'assets/images/gallery/IMG_9794.jpeg' },
    { id: 8, category: 'exteriors', title: 'Landscaping', image: 'assets/images/gallery/IMG_9788.jpeg' }
];

function renderGallery(filter = 'all') {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;
    
    let filtered = galleryItems;

    if (filter !== 'all') {
        filtered = galleryItems.filter(item => item.category === filter);
    }

    grid.innerHTML = filtered.map((item, idx) => {
        return `
            <div class="gallery-item" style="
                position: relative;
                height: 300px;
                border-radius: 12px;
                overflow: hidden;
                cursor: pointer;
                transition: transform 0.3s ease;
            "
            onmouseover="this.style.transform='scale(1.02)'"
            onmouseout="this.style.transform='scale(1)'">
                <img src="${item.image}" alt="${item.title}" style="width:100%; height:100%; object-fit:cover;">
                <div style="position: absolute; inset: 0; padding: var(--space-lg); color: white; display: flex; align-items: flex-end; background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);">
                    <h3 style="margin: 0;">${item.title}</h3>
                </div>
            </div>
        `;
    }).join('');
}

function filterGallery(filter) {
    renderGallery(filter);
}

// ===== CHATBOT LOGIC =====
let chatbotState = {
    stage: 'initial',
    type: null,
    data: {}
};

function toggleChatbot() {
    const box = document.getElementById('chatbotBox');
    if (!box) return;
    
    if (box.classList.contains('visible')) {
        box.classList.remove('visible');
    } else {
        box.classList.add('visible');
        if (!chatbotState.stage) {
            initializeChatbot();
        }
        setTimeout(() => {
            const input = document.getElementById('chatbot-message-input');
            if (input) input.focus();
        }, 300);
    }
}

function closeChatbot() {
    const box = document.getElementById('chatbotBox');
    if (box) box.classList.remove('visible');
}

function initializeChatbot() {
    chatbotState = {
        stage: 'initial',
        type: null,
        data: {}
    };
    const messages = document.getElementById('chatbotMessages');
    if (!messages) return;
    messages.innerHTML = '';
    addChatbotMessage('bot', 'Hi, welcome to Mathias Rentals LLC. Are you looking for a rental, renovation support, or something else?');
    showChatbotOptions([
        { text: 'Looking for a rental home', value: 'rental' },
        { text: 'Need renovation work', value: 'renovation' },
        { text: 'Property owner services', value: 'owner' },
        { text: 'Just exploring', value: 'other' }
    ]);
}

function addChatbotMessage(sender, text) {
    const messages = document.getElementById('chatbotMessages');
    if (!messages) return;
    const messageEl = document.createElement('div');
    messageEl.className = `message ${sender}`;
    messageEl.innerHTML = `<div class="message-content">${text}</div>`;
    messages.appendChild(messageEl);
    messages.scrollTop = messages.scrollHeight;
}

function showChatbotOptions(options) {
    const messages = document.getElementById('chatbotMessages');
    if (!messages) return;
    const optionsEl = document.createElement('div');
    optionsEl.className = 'chatbot-options';
    optionsEl.innerHTML = options.map(opt =>
        `<button class="option-btn" onclick="selectChatbotOption('${opt.value}')">${opt.text}</button>`
    ).join('');
    messages.appendChild(optionsEl);
    messages.scrollTop = messages.scrollHeight;
}

function selectChatbotOption(value) {
    addChatbotMessage('user', event.target.innerText);
    const options = document.querySelector('.chatbot-options');
    if (options) options.remove();

    if (chatbotState.stage === 'initial') {
        chatbotState.type = value;
        handleChatbotType(value);
    }
}

function handleChatbotType(type) {
    if (type === 'rental') {
        chatbotState.stage = 'rental-location';
        addChatbotMessage('bot', 'Great! What\'s your preferred location or area?');
        showTextInput();
    } else if (type === 'renovation') {
        chatbotState.stage = 'renovation-type';
        addChatbotMessage('bot', 'What type of property are you renovating?');
        showChatbotOptions([
            { text: 'Kitchen', value: 'kitchen' },
            { text: 'Bathroom', value: 'bathroom' },
            { text: 'Full interior', value: 'interior' },
            { text: 'Other', value: 'other' }
        ]);
    } else if (type === 'owner') {
        chatbotState.stage = 'owner-interest';
        addChatbotMessage('bot', 'What property owner services are you interested in?');
        showChatbotOptions([
            { text: 'Rental management', value: 'management' },
            { text: 'Renovation support', value: 'renovation' },
            { text: 'Maintenance coordination', value: 'maintenance' }
        ]);
    } else {
        chatbotState.stage = 'general-message';
        addChatbotMessage('bot', 'Feel free to ask any questions about our services!');
        showTextInput();
    }
}

function showTextInput() {
    const inputContainer = document.getElementById('chatbotInput');
    const input = document.getElementById('chatbot-message-input');
    if (inputContainer) inputContainer.style.display = 'flex';
    if (input) input.focus();
}

function sendChatbotMessage() {
    const input = document.getElementById('chatbot-message-input');
    if (!input) return;
    const text = input.value.trim();
    if (text) {
        addChatbotMessage('user', text);
        chatbotState.data[chatbotState.stage] = text;
        input.value = '';
        handleChatbotFlow();
    }
}

function handleChatbotKeypress(e) {
    if (e.key === 'Enter') {
        sendChatbotMessage();
    }
}

function handleChatbotFlow() {
    if (chatbotState.type === 'rental') {
        if (chatbotState.stage === 'rental-location') {
            chatbotState.stage = 'rental-timeline';
            addChatbotMessage('bot', 'When are you looking to move in?');
            showTextInput();
        } else if (chatbotState.stage === 'rental-timeline') {
            addChatbotMessage('bot', 'Perfect! Now let\'s get your contact details. What\'s your name?');
            chatbotState.stage = 'contact-name';
            showTextInput();
        } else if (chatbotState.stage === 'contact-name') {
            addChatbotMessage('bot', 'What\'s your email address?');
            chatbotState.stage = 'contact-email';
            showTextInput();
        } else if (chatbotState.stage === 'contact-email') {
            finalizeChatbot();
        }
    } else if (chatbotState.type === 'renovation') {
        if (chatbotState.stage === 'renovation-type') {
            chatbotState.stage = 'renovation-scope';
            addChatbotMessage('bot', 'What\'s the scope of work?');
            showTextInput();
        } else if (chatbotState.stage === 'renovation-scope') {
            addChatbotMessage('bot', 'What\'s your name?');
            chatbotState.stage = 'contact-name';
            showTextInput();
        } else if (chatbotState.stage === 'contact-name') {
            addChatbotMessage('bot', 'What\'s your phone number?');
            chatbotState.stage = 'contact-phone';
            showTextInput();
        } else if (chatbotState.stage === 'contact-phone') {
            finalizeChatbot();
        }
    } else {
        if (chatbotState.stage === 'general-message') {
            addChatbotMessage('bot', 'What\'s your name?');
            chatbotState.stage = 'contact-name';
            showTextInput();
        } else if (chatbotState.stage === 'contact-name') {
            addChatbotMessage('bot', 'What\'s your preferred contact method? (email or phone)');
            chatbotState.stage = 'contact-preference';
            showChatbotOptions([
                { text: 'Email', value: 'email' },
                { text: 'Phone', value: 'phone' }
            ]);
        } else if (chatbotState.stage === 'contact-preference') {
            finalizeChatbot();
        }
    }
}

function finalizeChatbot() {
    const input = document.getElementById('chatbotInput');
    if (input) input.style.display = 'none';
    addChatbotMessage('bot', 'Thanks for reaching out! We\'ll be in touch within 24 hours. Have a great day!');
}

// ===== RENOVATION SERVICE SELECTOR =====
function selectService(element, service) {
    document.querySelectorAll('.service-card').forEach(card => {
        card.classList.remove('active');
    });
    element.classList.add('active');
}

// ===== BEFORE/AFTER SLIDER =====
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('beforeAfterSlider');
    if (slider) {
        const handle = slider.querySelector('.slider-handle');
        const afterImage = slider.querySelector('.after-image');

        function updateSlider(e) {
            const rect = slider.getBoundingClientRect();
            const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
            const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

            handle.style.left = percentage + '%';
            afterImage.style.width = percentage + '%';
        }

        handle.addEventListener('mousedown', () => {
            document.addEventListener('mousemove', updateSlider);
            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', updateSlider);
            });
        });

        handle.addEventListener('touchstart', () => {
            const touchHandler = (e) => updateSlider(e.touches[0]);
            document.addEventListener('touchmove', touchHandler);
            document.addEventListener('touchend', () => {
                document.removeEventListener('touchmove', touchHandler);
            });
        });
    }

    renderProperties();
    renderGallery();
    initializeChatbot();
});

// ===== CONTACT FORM =====
function handleContactSubmit(e) {
    e.preventDefault();
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');
    if (!form || !successMsg) return;

    // Simulate form submission
    successMsg.classList.add('show');
    form.style.display = 'none';

    setTimeout(() => {
        form.reset();
        form.style.display = 'flex';
        successMsg.classList.remove('show');
    }, 3000);
}
