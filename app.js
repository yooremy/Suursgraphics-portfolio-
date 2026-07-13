const gallery = document.getElementById('gallery');

// Your official Sanity details linked directly to your project ID
const PROJECT_ID = '4yri309a'; 
const DATASET = 'production';

// The query that fetches the designs from Sanity
const QUERY = encodeURIComponent('*[_type == "project"]{title, category, "imageUrl": image.asset->url}');
const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

fetch(URL)
    .then(response => response.json())
    .then(result => {
        const projects = result.result;
        
        // Only clear placeholder if there are items returned from Sanity
        if (projects && projects.length > 0) {
            gallery.innerHTML = ''; 
            
            projects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${project.imageUrl || 'placeholder.jpg'}" alt="${project.title}">
                    <div class="card-info">
                        <h3>${project.title}</h3>
                        <span>${project.category}</span>
                    </div>
                `;
                gallery.appendChild(card);
            });
        }
    })
    .catch(err => console.error('Error loading from Sanity:', err));
