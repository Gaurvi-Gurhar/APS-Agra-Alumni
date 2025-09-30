// Modal handling
const modal = document.getElementById('storyModal');
const modalName = document.getElementById('modalName');
const modalDesignation = document.getElementById('modalDesignation');
const modalStory = document.getElementById('modalStory');
const closeBtn = document.querySelector('.close-modal');

document.querySelectorAll('.story-card').forEach(card => {
    card.addEventListener('click', () => {
        modalName.textContent = card.dataset.name;
        modalDesignation.textContent = card.dataset.designation;
        modalStory.textContent = card.dataset.story;
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
});
