// Funktion för att hämta och rendera låtlistan från JSON
function loadTracks() {
    fetch('songs.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const trackList = document.getElementById('track-list');
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

            data.tracks.forEach(track => {
                const li = document.createElement('li');
                li.classList.add('track-item');

                const button = document.createElement('button');
                button.classList.add('favorite-btn');
                button.dataset.track = track.title;
                button.innerHTML = `<i class="fa-solid fa-star"></i>`;

                if (favorites.includes(track.title)) {
                    button.querySelector('i').style.color = '#ffcc00';
                }

                button.addEventListener('click', function() {
                    const trackName = this.getAttribute('data-track');
                    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

                    if (favorites.includes(trackName)) {
                        favorites = favorites.filter(item => item !== trackName);
                        this.querySelector('i').style.color = '#000';
                    } else {
                        favorites.push(trackName);
                        this.querySelector('i').style.color = '#ffcc00';
                    }

                    localStorage.setItem('favorites', JSON.stringify(favorites));
                    console.log('Favorites:', favorites);
                });

                const span = document.createElement('span');
                span.textContent = `${track.id}. ${track.title}`;

                li.appendChild(button);
                li.appendChild(span);
                trackList.appendChild(li);
            });
        })
        .catch(error => console.error('Error loading tracks:', error));
}

// Visa favoriter
function showFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    
    
    if (!favoritesList) {
        console.error('Element with id "favorites-list" not found.');
        return;
    }

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.length === 0) {
        favoritesList.innerHTML = '<li>Inga favoriter</li>';
        return;
    }

    favorites.forEach(favorite => {
        const li = document.createElement('li');
        li.textContent = favorite;
        favoritesList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('swimming.html')) {
        loadTracks();
    }
    if (window.location.pathname.includes('favoriter.html')) {
        showFavorites();
    }
});



