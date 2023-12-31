/*
 * - HTTP-запрос с Fetch API
 * - Вкладка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 * - REST API: пути к ресурсам, коды ответов
 * - Публичные REST API
 * - https://pokeapi.co/
 */

fetch('https://pokeapi.co/api/v2/pokemon/charmeleon')
  .then(response => {
    return response.json();
  })
  .then(pokemon => {
    console.log(pokemon);
  });
