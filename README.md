# Диплом курса «Базовый JavaScript в браузере»

<iframe width="560" height="315" src="https://www.youtube.com/embed/zXOyBIajWsM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Описание

Вам необходимо разработать приложение для 
управления финансами.

Сервис предполагает:

1. Авторизацию/Регистрацию/Выход
2. Создание и удаление счетов
3. Создание и удаление транзакций 

## С чего начать

Выполняйте работу по шагам, описанным 
в разделе «Основные задачи».

Ориентируйтесь на описание шагов, а также на комментарии
в коде каждого файла.

## Основные задачи

Выполняйте данные задачи по порядку:

1. [Разработка API для взаимодействия с Backend](./md/api.md)
2. Разработка пользовательского интерфейса
    1. [Кнопка управления боковой колонкой](./md/sidebar-toggle.md) 
    2. [Управление окнами](./md/modals.md)
    3. [Управление формами](./md/async-forms.md)
    4. [Обработка нажатий на кнопки бокового меню](./md/sidebar-links.md)
3. Взаимодействие API с пользовательским интерфейсом
    1. [Подготовительный этап](./md/init-ui.md)
    2. [Регистрация](./md/register.md)
    3. [Авторизация](./md/login.md)
    4. [Создание новых счетов](./md/create-accounts.md)
    5. [Создание новых транзкций (доход/расход)](./md/create-transactions.md)
    6. [Отображение страницы транзакций при выборе счёта](./md/display-transactions.md)

## Файловая структура

Для удобства работы весь проект разбит на файлы,
каждый из которых в конченом счете будет 
занимать от 5 до 100 строк. В каждом файле содержится только
один класс, что упрощает навигацию по проекту.

- js/
    - __api/__ (Связь с сервером, сетевые запросы)
        - __Account.js__ (управление счетами)
        - __createRequest.js__ (доработка XHR)
        - __Entity.js__ (Базовый класс для счетов, пользователей и расходов/доходов)
        - __Transaction.js__ (управление доходами и расходами пользователя)
        - __User.js__ (регистрация/авторизация/вход в приложение)
    - ui/
        - forms/ (формы приложения)
            - __AsyncForm.js__ (Базовый класс для всех форм. Используется преимущественно во всплывающих окнах)
            - __CreateAccountForm.js__ (форма создания нового счёта)
            - __CreateTransactionForm.js__ (форма создания нового расхода/дохода)
            - __LoginForm.js__ (форма входа)
            - __RegisterForm.js__ (форма регистрации)
        - pages/ (страницы приложения)
            - __TransactionPage.js__ (страница расходов и доходов конкретного счёта)
        - widgets/
            - __AccountsWidget.js__ (виджет управления счетами)
            - __TransactionsWidget.js__ (виджет управления расходами и доходами)
            - __UserWidget.js__ (виджет текущего пользователя)
        - __Modal.js__ (базовый класс для всех всплывающих окон)
        - __Sidebar.js__ (класс управления боковой колонкой)
    - __App.js__ (класс приложения)
    
## Формат сдачи

Клонируйте репозиторий для последующего выполнения
на Github или Bitbucket. По окончанию работы пришлите
дипломному руководителю ссылку на репозиторий.

## Как правильно задавать вопросы дипломному руководителю?

**Что следует делать, чтобы все получилось:**

-   Попробовать найти ответ сначала самому в интернете. Ведь, именно это скилл поиска ответов пригодится тебе на первой работе. И только после этого спрашивать дипломного руководителя
-   В одном вопросе должна быть заложена одна проблема
-   По возможности, прикреплять к вопросу скриншоты и стрелочкой показывать где не получается. Программу для этого можно скачать здесь https://app.prntscr.com/ru/
-   По возможности, задавать вопросы в комментариях к коду.
-   Начинать работу над дипломом как можно раньше! Чтобы было больше времени на правки.
-   Делать диплом по-частям, а не все сразу. Иначе, есть шанс, что нужно будет все переделывать :)

**Что следует делать, чтобы ничего не получилось:**

-   Писать вопросы вида “Ничего не работает. Не запускается. Всё сломалось.”
-   Откладывать диплом на потом.
-   Ждать ответ на свой вопрос моментально. Дипломные руководители - работающие разработчики, которые занимаются, кроме преподавания, своими проектами. Их время ограничено, поэтому постарайтесь задавать правильные вопросы, чтобы получать быстрые ответы!
