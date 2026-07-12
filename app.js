const gallery = document.getElementById('gallery');

// Automatically fetches configuration from the JSON file
fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(project => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <div class="card-info">
                    <h3>${project.title}</h3>
                    <span>${project.category}</span>
                </div>
            `;
            gallery.appendChild(card);
        });
    })
    .catch(err => console.error('Error rendering website:', err));
