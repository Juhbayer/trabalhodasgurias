function updateProgress() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const progress = document.getElementById('progress-bar');

   
    let filled = 0;
    if (name !== '') filled++;
    if (email !== '') filled++;
    if (message !== '') filled++;

    
    const progressWidth = (filled / 3) * 100; 
    progress.style.width = progressWidth + '%';
    progress.textContent = progressWidth.toFixed(0) + '%';
}