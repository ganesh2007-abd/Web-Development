const form = document.querySelector("#from")
const btn = document.querySelector("#btn")
const gallery = document.querySelector(".container")

// Helper to strip HTML tags safely
const stripHtml = (html) => {
    if (!html) return "No description available.";
    const temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || "";
};

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    const query = form.elements.input.value.trim()
    if (!query) return;

    // Show loading state
    gallery.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <span>Searching database...</span>
        </div>
    `;
    btn.disabled = true;
    btn.textContent = "Searching...";
    form.elements.input.disabled = true;

    try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
        const shows = res.data
        gallery.innerHTML = ""

        if (shows.length === 0) {
            gallery.innerHTML = `
                <div class="message-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <h3>No Shows Found</h3>
                    <p>We couldn't find any results for "${query}". Check your spelling or try another show!</p>
                </div>
            `;
        } else {
            for (let item of shows) {
                const show = item.show;
                
                // Create card element
                const card = document.createElement("div");
                card.className = "show-card";

                // Poster container HTML
                let posterHTML = "";
                if (show.image && show.image.medium) {
                    posterHTML = `<img src="${show.image.medium}" alt="${show.name}" class="poster-img" loading="lazy">`;
                } else {
                    posterHTML = `
                        <div class="poster-placeholder">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rx>
                                <line x1="7" y1="2" x2="7" y2="22"></line>
                                <line x1="17" y1="2" x2="17" y2="22"></line>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                            </svg>
                            <span>No Image Available</span>
                        </div>
                    `;
                }

                // Rating overlay HTML
                const ratingHTML = show.rating && show.rating.average 
                    ? `<div class="rating-badge">★ <span>${show.rating.average}</span></div>` 
                    : "";

                // Genres string
                const genresHTML = show.genres && show.genres.length > 0 
                    ? `<div class="show-genres">${show.genres.join(" • ")}</div>` 
                    : `<div class="show-genres">Genres unspecified</div>`;

                // Status badge
                const statusClass = show.status === "Running" ? "badge-status" : "badge-status ended";
                const statusText = show.status || "Unknown";
                
                // Premiered Year
                const premieredYear = show.premiered ? new Date(show.premiered).getFullYear() : "";
                const metaYearBadge = premieredYear ? `<span class="badge">${premieredYear}</span>` : "";
                const languageBadge = show.language ? `<span class="badge">${show.language}</span>` : "";

                // Summary text
                const summaryText = stripHtml(show.summary);

                card.innerHTML = `
                    <div class="poster-container">
                        ${posterHTML}
                        ${ratingHTML}
                    </div>
                    <div class="show-info">
                        <h2 class="show-title">${show.name}</h2>
                        <div class="show-meta-row">
                            <span class="badge ${statusClass}">${statusText}</span>
                            ${metaYearBadge}
                            ${languageBadge}
                        </div>
                        ${genresHTML}
                        <p class="show-summary">${summaryText}</p>
                        <a href="${show.url}" target="_blank" class="view-btn">View Details</a>
                    </div>
                `;
                
                gallery.appendChild(card);
            }
        }
    } catch (err) {
        console.error(err);
        gallery.innerHTML = `
            <div class="message-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="stroke: var(--danger-color);">
                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <h3>Search Failed</h3>
                <p>Unable to reach the server. Please check your network connection and try again.</p>
            </div>
        `;
    } finally {
        // Reset button and input state
        btn.disabled = false;
        btn.textContent = "Search";
        form.elements.input.disabled = false;
        form.elements.input.value = ""
        form.elements.input.focus();
    }
})