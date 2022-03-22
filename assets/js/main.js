const container = document.getElementById('container');

window.addEventListener('keydown', (event) => {
    container.innerHTML = `
    <div class="keyboard-key">
        <div id='key-btn'>
            ${event.key === ' ' ? 'Space' : event.key}
        </div>
    </div>
    <div class="keyboard-events">
        <div class="event">
            <span class="name-event">event.key</span>
            <p class="value-event">${event.key === ' ' ? 'Space' : event.key}</p>
        </div>
        <div class="event">
            <span class="name-event">event.keyCode</span>
            <p class="value-event">${event.keyCode}
        </div>
        <div class="event">
            <span class ="name-event">event.code</span>
            <p class="value-event">${event.code}</p>
        </div>
    </div>`;

    if (event.key === ' ') { document.getElementById('key-btn').style.minWidth = "100%"};
    if (event.key === 'ArrowUp') { document.getElementById('key-btn').innerHTML = "&#8593;"};
    if (event.key === 'ArrowDown') { document.getElementById('key-btn').innerHTML = "&#8595;"};
    if (event.key === 'ArrowLeft') { document.getElementById('key-btn').innerHTML = "&#8592;"};
    if (event.key === 'ArrowRight') { document.getElementById('key-btn').innerHTML = "&#8594;"};
});

window.addEventListener('keyup', () => {
    document.getElementById('key-btn').style.transform = 'translateY(4px)';
});

