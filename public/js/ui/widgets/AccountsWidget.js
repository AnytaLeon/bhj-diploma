/**
 * Класс AccountsWidget управляет блоком
 * отображения счетов в боковой колонке
 * */

class AccountsWidget {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью
   * AccountsWidget.registerEvents()
   * Вызывает AccountsWidget.update() для получения
   * списка счетов и последующего отображения
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if(!element) {
      throw new Error('Ошибка')
    };
    this.element = element;
     
    
    this.registerEvents();
    this.update();
  }

  /**
   * При нажатии на .create-account открывает окно
   * #modal-new-account для создания нового счёта
   * При нажатии на один из существующих счетов
   * (которые отображены в боковой колонке),
   * вызывает AccountsWidget.onSelectAccount()
   * */
  registerEvents() {
    this.createAccountBtn = document.querySelector('.create-account');

    this.createAccountBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const accountModal = App.getModal('createAccount'); 
      accountModal.open();
    });

    //Не находятся счета таким образом. 

    this.accounts = this.element.querySelectorAll('.account');

    this.accounts.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        this.onSelectAccount(item)
      })
    })
  }


  /**
   * Метод доступен только авторизованным пользователям
   * (User.current()).
   * Если пользователь авторизован, необходимо
   * получить список счетов через Account.list(). При
   * успешном ответе необходимо очистить список ранее
   * отображённых счетов через AccountsWidget.clear().
   * Отображает список полученных счетов с помощью
   * метода renderItem()
   * */
  update() {
    if(User.current()) {
      Account.list(User.current(), (err, response) => {
        if(response.success) {
          this.clear();
          [...response.data].forEach(item => {
            this.renderItem(item);
          })         
        } else {
          console.log(err)
        }
      })
    }
  }

  /**
   * Очищает список ранее отображённых счетов.
   * Для этого необходимо удалять все элементы .account
   * в боковой колонке
   * */
  clear() {
    this.accounts = [...document.querySelectorAll('.account')];
    this.accounts.forEach(item => {
      item.remove()
    })
  }

  /**
   * Срабатывает в момент выбора счёта
   * Устанавливает текущему выбранному элементу счёта
   * класс .active. Удаляет ранее выбранному элементу
   * счёта класс .active.
   * Вызывает App.showPage( 'transactions', { account_id: id_счёта });
   * */
  onSelectAccount( element ) {
    this.accounts.forEach(item => {
      item.classList.remove('active');    
    });
    element.classList.add('active');
    console.log(element);
    App.showPage( 'transactions', { account_id: `${element.id}`})

  }

  /**
   * Возвращает HTML-код счёта для последующего
   * отображения в боковой колонке.
   * item - объект с данными о счёте
   * */
  getAccountHTML(item){
    const accountHTML = `
    <li class="account" data-id="${item.id}">
        <a href="#">
          <span>${item.name}</span> / 
          <span>${item.sum} ₽</span>
        </a>
      </li>`
    
    return accountHTML;   
  }

  /**
   * Получает массив с информацией о счетах.
   * Отображает полученный с помощью метода
   * AccountsWidget.getAccountHTML HTML-код элемента
   * и добавляет его внутрь элемента виджета
   * */
  renderItem(data){
      this.element.insertAdjacentHTML("beforeEnd", this.getAccountHTML(data));
  }
}
