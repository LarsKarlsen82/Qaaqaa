document.addEventListener("DOMContentLoaded", function() {

const toggleSwitch = document.getElementById('toggleSwitch');
    const body = document.body;

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            // Toggle is ON (Dark mode)
            body.classList.add('dark-mode');
            document.body.style.transition = 'background 2.5s, color 2.5s';
        } else {
            // Toggle is OFF (Normal mode)
            body.classList.remove('dark-mode');
            document.body.style.transition = 'background 2.5s, color 2.5s';
        }
    });
});
