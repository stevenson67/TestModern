$(document).ready(function(){
    $("#form").validate({
      rules:{
        name:{
            required: false,
            minlength: 4,
            maxlength: 16,
        },
        mailto:{
            required: false,
            email: true,
            minlength: 6,
            maxlength: 30,
         },
         phone:{
            required: true,
            minlength: 15,
         },
         task:{
            required: false,
            minlength: 20,
            maxlength: 300,
         },
      },
      messages:{
        name:{
            minlength: "Имя должен быть минимум 4 символа",
            maxlength: "Максимальное число символов - 16",
        },
        mailto:{
            minlength: "Email должен быть минимум 6 символа",
            maxlength: "Email должен быть максимум 30 символов",
        },
        phone:{
            required: "Это поле обязательно для заполнения",
            number: "Только числы в диапазоне от 0 до 9",
            minlength: "Телефон должен быть минимум 15 символа",
        },
        task:{
            minlength: "Пароль должен быть минимум 20 символа",
            maxlength: "Пароль должен быть максимум 500 символов",
        },
      }
   });
});
