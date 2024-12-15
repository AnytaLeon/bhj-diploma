/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    this.sidebarToggle = document.querySelector('.sidebar-toggle');
    this.body = document.querySelector('body');

    this.sidebarToggle.addEventListener('click', () => {
      this.body.classList.toggle('sidebar-open');
      this.body.classList.toggle('sidebar-collapse');
    });

  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {

    this.modalRegisterBtn = document.querySelector('.menu-item_register');
    this.modalLoginBtn = document.querySelector('.menu-item_login');
    this.modalLogoutBtn = document.querySelector('.menu-item_logout');

    this.modalRegisterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const registerModal = App.getModal('register');
      registerModal.open();
    });

    this.modalLoginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const loginModal = App.getModal('login');
      loginModal.open();
    });

    this.modalLogoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      User.logout((err, response) =>{
        if (response.success) {
          App.setState('init')
        }
      })
    })
  }
}