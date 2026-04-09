const text = "PIXEL QUEST";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let iterations = 0;

const el = document.getElementById("title");

const interval = setInterval(() => {
    el.innerText = text
        .split("")
        .map((letter, index) => {
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

    if (iterations >= text.length) {
        clearInterval(interval);
        el.classList.add("animate-title");
    }
    iterations += 0.5;
}, 50);

// Title hover spotlight effect
const title = document.getElementById("title");
let mouseX = 50, mouseY = 50, currentX = 50, currentY = 50;

title.addEventListener("mousemove", (e) => {
    const rect = title.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    mouseY = ((e.clientY - rect.top) / rect.height) * 100;
});

title.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    const rect = title.getBoundingClientRect();
    mouseX = ((touch.clientX - rect.left) / rect.width) * 100;
    mouseY = ((touch.clientY - rect.top) / rect.height) * 100;
});

function animate() {
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;
    title.style.setProperty("--x", currentX + "%");
    title.style.setProperty("--y", currentY + "%");
    requestAnimationFrame(animate);
}

animate();