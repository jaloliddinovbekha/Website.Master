window.onload = () => {
  /* Описание Событие onload используется как указатель, что веб-страница полностью загружена, включая содержание, изображения, стилевые файлы и внешние скрипты. */
  setTimeout(() => {
    /* setTimeout позволяет вызвать функцию один раз через определённый интервал времени. setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени. */
    document.querySelector("body").classList.add("display");
    /* Метод querySelector позволяет получить элемент страницы по произвольному селектору CSS. С полученным элементом можно будет производить различные манипуляции: менять его текст, атрибуты, CSS стили и так далее. */
  }, 4000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });
  
  
  
/* Plavno kotarilishi uchun tepaga */
document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  /* metod  setTimeout*/
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});