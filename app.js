const gallery = document.getElementById('gallery');

// Replace this link with your friend's actual published Google Sheet JSON link later
const SHEET_URL = 'https://opensheet.elmariachi.cc/1_YOUR_SHEET_ID_HERE/Sheet1';

fetch(SHEET_URL)
    .then(response => response.json())
    .then(data => {
        if (data && data.length > 0) {
            gallery.innerHTML = ''; // Clear the placeholder
            
            data.forEach(project => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${project.Image || 'placeholder.jpg'}" alt="${project.Title}">
                    <div class="card-info">
                        <h3>${project.Title}</h3>
                        <span>${project.Category}</span>
                    </div>
                `;
                gallery.appendChild(card);
            });
        }
    })
    .catch(err => console.error('Error loading gallery:', err));
