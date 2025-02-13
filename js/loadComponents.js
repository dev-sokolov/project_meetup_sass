// Функция для загрузки HTML-компонента (header, footer и др.)
function loadComponent(selector, file, callback) {
    fetch(file) // Загружаем файл по переданному пути
        .then(response => {
            if (!response.ok) { // Проверяем, успешно ли загрузился файл
                throw new Error(`Ошибка загрузки ${file}: ${response.statusText}`); // Выбрасываем ошибку, если файл не найден
            }
            return response.text(); // Преобразуем ответ в текст (HTML-код)
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data; // Вставляем загруженный HTML-код в указанный контейнер
            const city = document.getElementById('search-area');
            const currentPage = window.location.pathname.split("/").pop().replace(".html", "") || "index";
            if(currentPage === "index") {
                city.value = "Mountain View, CA"
            } else if (currentPage === "events-filter") {
                city.value = "New York, NY"
            }
            if (callback) callback(); // Если передана функция-коллбэк, вызываем её после загрузки
        })
        .catch(error => console.error(error)); // Ловим и выводим возможные ошибки в консоль
}

// Функция для выделения активной ссылки в меню
function setActiveLink() {
    // Получаем имя текущей страницы из URL, убирая `.html`
    const currentPage = window.location.pathname.split("/").pop().replace(".html", "") || "index";

    // Перебираем все ссылки в меню
    document.querySelectorAll(".nav-link").forEach(link => {
        if (link.dataset.page === currentPage) { // Если атрибут `data-page` совпадает с текущей страницей
            link.classList.add("active"); // Добавляем класс `.active` для выделения текущей страницы
        }
    });
}

// Ожидаем полной загрузки DOM
document.addEventListener("DOMContentLoaded", function () {
    // Загружаем `header.html` в контейнер `#header`, затем вызываем `setActiveLink()`
    loadComponent("#header", "../components/header.html", setActiveLink)

    // Загружаем `footer.html` в контейнер `#footer`
    loadComponent("#footer", "../components/footer.html");
});


