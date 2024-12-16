// Функция для "броска кубика"
function rollDice() {
    // Генерация случайного числа от 1 до 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    // Массив эмодзи кубиков
    const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

    // Отображение результата на странице
    document.getElementById("dice").innerHTML = diceEmojis[randomNumber - 1];
}
