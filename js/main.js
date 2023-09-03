$("#phone").mask("1-999-999-9999",{placeholder:"X"});

$(document).ready(function() {
  function sendEmail() {
    var formData = new FormData($(".writeUs_form")[0]);

    $.ajax({
      url: "send-email.php",
      type: "POST",
      data: formData,
      contentType: false,
      processData: false,
      success: function(response) {
        $(".popup").fadeIn();

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
        $(".error").text(" ");
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

  // $(".submit_btn").click(function() {
  //   $("input").each(function() {
  //     if ($(this).val() === "") {
  //       $(this).addClass("invalid");
  //       $(".error").text("* required fields");
  //     } else {
  //       $(this).removeClass("invalid");
  //       $(".error").text(" ");
  //     }
  //   });
  // });
});

const closePopup = document.getElementsByClassName('popup-close')[0];
const popup = document.getElementsByClassName('popup')[0];

closePopup.addEventListener('click', function () {
  popup.style.display = 'none';
})
