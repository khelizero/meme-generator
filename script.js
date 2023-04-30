const form = document.querySelector('#meme-form');
const memeContainer = document.querySelector('#meme-container');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the form data
    const topText = document.querySelector('#top-text').value;
    const bottomText = document.querySelector('#bottom-text').value;
    const imageUrl = document.querySelector('#image-url').value;

    // Validate the form data
    if (!topText || !bottomText || !imageUrl) {
        alert('Please fill in all fields');
        return;
    }

    // Create the meme div
    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme');

    // Create the meme image
    const memeImg = document.createElement('img');
    memeImg.setAttribute('src', imageUrl);

    // Create the meme text
    const topTextDiv = document.createElement('div');
    topTextDiv.classList.add('top-text');
    topTextDiv.textContent = topText;

    const bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add('bottom-text');
    bottomTextDiv.textContent = bottomText;

    // Add the meme image and text to the meme div
    memeDiv.appendChild(memeImg);
    memeDiv.appendChild(topTextDiv);
    memeDiv.appendChild(bottomTextDiv);

    // Add the meme div to the meme container
    memeContainer.appendChild(memeDiv);

    // Clear the form fields
    form.reset();
});

memeContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('meme')) {
        event.target.remove();
    }
});
