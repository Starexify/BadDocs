export class DocCard extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const description = this.innerText.trim();
        const logoSrc = this.getAttribute("logo-src") || `assets/images/logos/${this.id}.png`;

        const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
        // Create the card HTML
        this.innerHTML = `
            <div class="relative group card bg-slate-900/30 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 transform hover:scale-[1.02] transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
                onclick="window.location.href = \`${this.id}.html\`;">
                
                <!-- Logo Section -->
                <div class="text-center mb-6 p-6 pb-0">
                    <div class="mx-auto mb-4 h-20 md:h-26 rounded-xl overflow-hidden flex items-center justify-center select-none">
                        <img src="${logoSrc}" alt="${this.id} Logo" class="w-full h-full object-contain">
                        <div class="size-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl hidden items-center justify-center">
                            <span class="text-white font-bold text-lg">${this.id.toUpperCase()}</span>
                        </div>
                    </div>
                </div>

                <!-- Description -->
                <div class="mb-4 px-6">
                    <p class="text-gray-300 text-center leading-relaxed">${description}</p>
                </div>

                <!-- Hover hints -->
                <p class="text-sm text-gray-500 text-center leading-relaxed mb-2 hidden md:block transition-opacity duration-300 group-hover:opacity-0">click here to view docs</p>
                <p class="text-sm text-gray-500 text-center leading-relaxed mb-2 md:hidden transition-opacity duration-300 group-hover:opacity-0">tap here to view docs</p>
                
                <!-- Hover Overlay -->
                <div class="absolute inset-0 flex items-center justify-center bg-black/60 rounded-2xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span class="text-white text-lg font-semibold">VIEW DOCUMENTATION</span>
                </div>
            </div>
        `;
    }
}
