// Инициализация Telegram WebApp API
const telegram = window.Telegram.WebApp;

// Устанавливаем цвет верхней панели
telegram.setHeaderColor('#222');
telegram.setBackgroundColor('#111');

// Обработчик кнопки создания дуэли
document.querySelector('.create-duel').addEventListener('click', () => {
    telegram.showAlert("Дуэль создана!");
});

// Обработчик выбора кнопок
const buttons = document.querySelectorAll('.input-buttons button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.style.backgroundColor = '#444');
        button.style.backgroundColor = '#8ef234';
    });
});
