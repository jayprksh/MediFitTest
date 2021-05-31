function show(shown, hidden) {
  document.getElementById(shown).style.display='flex';
  document.getElementById(hidden).style.display='none';
  return false;
}
$(function() {
  $(document).click(function (event) {
    $('.navbar-collapse').collapse('hide');
  });
});
