import React from 'react'
import cl from './About.module.css'

export default function About() {
  return (
    <div>
      <h3>В этом приложении использовались хуки такие как: </h3>
      <ul>
        <li>useState</li>
        <li>useMemo</li>
        <li>useNavigation</li>
        <li>useParams</li>
        <li>useEffect</li>
        <li>Custom hooks</li>
      </ul>
      <p>Подключена библиотека Axios.</p>
      <p>React Transition Group.</p>
      <p>Запрос данных осуществляется с сайта 'https://jsonplaceholder.typicode.com'.</p>
      <p>Реализованный функционал:</p>
      <ul>
        <li>Сортировка постов.</li>
        <li>Удаление постов.</li>
        <li>Создание постов.</li>
        <li>Поиск постов.</li>
        <li>Просмотр комментариев.</li>
        <li>Переключение страниц.</li>
        <li>Routing</li>
        <li>Обработка ошибок при загрузке с сайта.</li>
        <li>Loader.</li>
      </ul>
    </div>
  )
}
