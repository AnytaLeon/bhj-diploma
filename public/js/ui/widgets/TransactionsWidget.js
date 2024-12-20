/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if(!element) {
      throw new Error('Ошибка')
    };
    this.element = element;
    this.registerEvents()
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    this.incomeBtn = this.element.querySelector('.create-income-button');
    this.expenseBtn = this.element.querySelector('.create-expense-button');

    this.incomeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const incomeModal = App.getModal('newIncome');
      incomeModal.open();
    });

    this.expenseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const expenseModal = App.getModal('newExpense');
      expenseModal.open();
    });
  }
}
