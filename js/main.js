$(document).ready(function() {
  // Функция для отправки письма через PHPMailer
  function sendEmail() {
    // Создание объекта FormData для последующей отправки данных формы
    var formData = new FormData($(".writeUs_form")[0]);

    // Отправка данных формы на сервер
    $.ajax({
      url: "send-email.php", // Путь к файлу на сервере, который будет обрабатывать отправку письма
      type: "POST",
      data: formData,
      contentType: false,
      processData: false,
      success: function(response) {
        // Отображение попапа
        $(".popup").fadeIn();

        // Закрытие попапа через 3 секунды
        setTimeout(function() {
          $(".popup").fadeOut();
        }, 3000);

        // Очистка полей формы
        $(".writeUs_form").trigger("reset");
      },
      error: function() {
        $(".error").text("Error sending the form. Please try again later");
      }
    });
  }

  // Функция для валидации полей формы
  function validateForm() {
    var fields = ["subject", "email", "name", "question"];
    var isValid = true; // Переменная для отслеживания валидности формы

    for (var i = 0; i < fields.length; i++) {
      var field = $("#" + fields[i]).val();
      if (field === "") {
        $("#" + fields[i]).addClass("invalid");
        $(".error").text("* required fields");
        isValid = false;
      } else {
        $("#" + fields[i]).removeClass("invalid");
      }
    }

    return isValid;
  }

  $(".writeUs_form").submit(function(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    sendEmail();
  });

// Добавление класса "invalid" ко всем input при клике на кнопку отправки формы
  $(".submit_btn").click(function() {
    $("input").each(function() {
      if ($(this).val() === "") {
        $(this).addClass("invalid");
      } else {
        $(this).removeClass("invalid");
      }
    });
  });
});
