
/// JavaScript for toggling FAQ answers
document.querySelectorAll('.faq-item .question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.closest('.faq-item');
        const toggle = item.querySelector('.toggle');

        // Toggle 'open' class to show/hide the answer
        parent.classList.toggle('open');

        // Change the icon between + and -
        toggle.textContent = parent.classList.contains('open') ? '−' : '+';
    });
});
function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
}
