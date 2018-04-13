$(document).ready(function() {
   
   $(".main_btna, .main_btn, li:eq(7)").on("click", function() {
      $(".overlay").fadeIn("slow")
      $(".modal").slideDown("slow")
   })
   $(".close").click(function() {
      $(".overlay").fadeOut("slow")
      $(".modal").slideUp("slow")
   })
   
})