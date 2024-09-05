function toggleMenu() {
    var menu = document.querySelector('.nav-menu');
    menu.classList.toggle('open');
}

function toggleText(spanId) {
    var text = document.getElementById(spanId);
    var button = document.querySelector(`button[onclick="toggleText('${spanId}')"]`);
    
    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block"; // Visa texten
        button.textContent = "Se mindre"; // Ändra texten
    } else {
        text.style.display = "none"; // Dölj texten
        button.textContent = "Se mer"; // Återställ
    }
}