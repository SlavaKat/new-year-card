document.addEventListener("DOMContentLoaded", function() {
    const text = "С НОВЫМ ГОДОМ!";
    const newYearText = document.getElementById('newYearText');
    
    // Очищаем содержимое текста
    newYearText.innerHTML = '';
    
    // Добавляем каждую букву с задержкой
    text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = letter;
        
        if (letter !== ' ') {
            span.classList.add('bounce-letter');
            // Радужные цвета для букв
            span.style.color = `hsl(${(index * 30) % 360}, 100%, 50%)`;
        } else {
            span.style.width = '20px';
            span.style.display = 'inline-block';
        }
        
        span.style.animationDelay = `${index * 0.15}s`;
        newYearText.appendChild(span);
    });
});

function createFirework() {
    const firework = document.createElement('div');
    firework.className = 'firework';
    
    // Случайная позиция
    firework.style.left = Math.random() * 100 + '%';
    
    document.body.appendChild(firework);
    
    // Удаляем элемент после анимации
    setTimeout(() => {
        firework.remove();
    }, 2000);
}

// Запускаем салют каждые 2 секунды
setInterval(createFirework, 2000);

// Запускаем несколько салютов сразу при загрузке
for(let i = 0; i < 4; i++) {
    setTimeout(createFirework, i * 500);
}
