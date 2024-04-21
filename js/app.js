// const block = document.getElementById('section-main');

// function changeBgImg(){
//     block.style.backgroundImage = "url('/img/main/PSDNukJan_(12) 1.png')";
    
//     block.style.backgroundRepeat = "no-repeat"; // Отключение повторения фона
//     block.style.backgroundPosition = "right"; // Позиционирование фона по центру
//     block.style.zIndex = "-1"; // Установка z-index для фона
// }

// changeBgImg();
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const closeButton = document.getElementById('close-menu'); // Получаем кнопку закрытия
  
    menuButton.addEventListener('click', (event) => {
      event.stopPropagation(); // Предотвращаем всплытие события, чтобы клик на кнопку не закрывал меню
      fullscreenMenu.classList.toggle('show');
    });
  
    closeButton.addEventListener('click', () => { // Добавляем обработчик событий для кнопки закрытия
      fullscreenMenu.classList.remove('show');
    });
  
    document.addEventListener('click', (event) => {
      const isClickInsideMenu = fullscreenMenu.contains(event.target);
      const isClickOnMenuButton = (event.target === menuButton);
  
      if (!isClickInsideMenu && !isClickOnMenuButton && fullscreenMenu.classList.contains('show')) {
        fullscreenMenu.classList.remove('show');
      }
    });
  
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && fullscreenMenu.classList.contains('show')) {
        fullscreenMenu.classList.remove('show');
      }
    });
  });
  

  
  
  
  