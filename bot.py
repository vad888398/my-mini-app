from telegram import Update, WebAppInfo, InlineKeyboardMarkup, InlineKeyboardButton
from telegram.ext import Updater, CommandHandler, CallbackContext

# Ваш токен от BotFather
TOKEN = "ВАШ_ТОКЕН"

# Обработчик команды /start
def start(update: Update, context: CallbackContext) -> None:
    keyboard = [[
        InlineKeyboardButton(
            "Открыть мини-приложение", 
            web_app=WebAppInfo(url="https://vadimbusarev.miniaps.replit.app")
        )
    ]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    update.message.reply_text("Нажмите на кнопку, чтобы открыть мини-приложение:", reply_markup=reply_markup)

def main():
    # Инициализация бота
    updater = Updater(TOKEN)
    dispatcher = updater.dispatcher

    # Добавляем обработчик команды /start
    dispatcher.add_handler(CommandHandler("start", start))

    # Запускаем бота
    updater.start_polling()
    print("Бот запущен...")
    updater.idle()

if __name__ == "__main__":
    main()
