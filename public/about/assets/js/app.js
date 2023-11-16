window.onscroll = function () {
  myFunction();
};
var header = document.getElementById("header");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(".contact-form").submit(function () {
  $(".load").html('<i class="fas fa-circle-notch fa-spin"></i>');
  $.post("?action=messages", $(".contact-form").serialize(), function (u_data) {
    if (u_data == "Sent Succesfully .. Thank You") {
      $(".load").html('<i class="fa-solid fa-circle-check"></i> ' + u_data);
      $("input, textarea").val("");
    } else {
      $(".load").html(u_data);
    }
  });
  return false;
});

new WOW().init();
