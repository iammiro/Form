$(function () {
  var validator = $("form[name='form']").validate({
    onfocusout: false,
    showErrors: function (errorMap, errorList) {
      if (errorList.length) {
        var s = errorList.shift();
        var n = [];
        n.push(s);
        this.errorList = n;
      }
      this.defaultShowErrors();
    },
    rules: {
      name: "required",
      surname: "required",
      cardNumber: {
        required: true,
        digits: true,
        minlength: 16,
        maxlength: 16
      },
      cvvCode: {
        required: true,
        digits: true,
        minlength: 3,
        maxlength: 4
      },
      expireDateMM: {
        required: true,
        digits: true
      },
      expireDateYYYY: {
        required: true,
        digits: true
      },
      zipCode: {
        required: true,
        digits: true,
        minlength: 5,
        maxlength: 5
      }
    },
    messages: {
      name: "Required field. Can’t be empty",
      surname: "Required field. Can’t be empty",
      cvvCode: {
        required: "Required field. Can’t be empty",
        minlength: "Your card number must be at least 3 characters long"
      },
      expireDateMM: "Required field. Can’t be empty",
      expireDateYYYY: "Required field. Can’t be empty",
      zipCode: {
        required: "Required field. Can’t be empty",
        minlength: "Your card number must be at least 5 characters long"
      },
      cardNumber: {
        required: "Required field. Can’t be empty",
        minlength: "Your card number must be at least 16 characters long"
      },
    },
    submitHandler: function (form) {
      form.submit();
    }
  });
  $(document).click(function () {
    validator.resetForm();
  });
});

$(document).ready(function () {
  $(".question-mark").click(function () {
    $(".cvv-code-help-block").css("display", "flex");
  });
  $("#form").mouseup(function (e) {
    var subject = $("#cvv-code-help-block");

    if (e.target.id != subject.attr('id')) {
      subject.fadeOut();
    }
  });
});
