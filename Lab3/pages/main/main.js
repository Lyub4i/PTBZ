$(document).ready(function () {
  $(".menuElement").click(function () {
    $(".menuElement").removeClass("active");
    $(this).addClass("active");
  });
});
