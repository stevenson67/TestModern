// // Получаем форму, кнопку отправки и элемент для вывода ошибок
// const form = document.querySelector('.writeUs_form');
// const submitButton = document.querySelector('.writeUs_form-send');
// const errorContainer = document.querySelector('.error');
//
// // Обработчик события отправки формы
// form.addEventListener('submit', (e) => {
//   e.preventDefault(); // Отменяем стандартное поведение отправки формы
//
//   // Проверяем валидность полей
//   const subjectField = document.getElementById('subject');
//   const emailField = document.getElementById('email');
//   const nameField = document.getElementById('name');
//   const questionField = document.getElementById('question');
//
//   let isValid = true;
//
//   if (subjectField.value === 'subject') {
//     isValid = false;
//     subjectField.classList.add('invalid');
//   } else {
//     subjectField.classList.remove('invalid');
//   }
//
//   if (emailField.value === '') {
//     isValid = false;
//     emailField.classList.add('invalid');
//   } else {
//     emailField.classList.remove('invalid');
//   }
//
//   if (nameField.value === '') {
//     isValid = false;
//     nameField.classList.add('invalid');
//   } else {
//     nameField.classList.remove('invalid');
//   }
//
//   if (questionField.value === '') {
//     isValid = false;
//     questionField.classList.add('invalid');
//   } else {
//     questionField.classList.remove('invalid');
//   }
//
//   // Если есть незаполненные поля, выводим сообщение об ошибке
//   if (!isValid) {
//     errorContainer.textContent = '* required fields';
//   } else {
//     // Если все поля заполнены, очищаем сообщение об ошибке и отправляем форму
//     errorContainer.textContent = '';
//     form.submit();
//   }
// });

