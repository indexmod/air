document.addEventListener("DOMContentLoaded", () => {
  const scheduleItems = document.querySelectorAll(".schedule-item");
  let currentIndex = 0;

  // Функция для отображения текущего элемента
  function showCurrentItem() {
    // Скрываем все элементы
    scheduleItems.forEach((item, index) => {
      item.style.display = index === currentIndex ? "flex" : "none";
    });

    // Переходим к следующему элементу
    currentIndex = (currentIndex + 1) % scheduleItems.length;
  }

  // Запускаем анимацию через каждые 5 секунд
  showCurrentItem();
  setInterval(showCurrentItem, 5000);
});
