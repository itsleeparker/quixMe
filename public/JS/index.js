$(document).ready(err => {
  $('#mform').submit(e => {
    e.preventDefault();

    $('#mform .btn').click(function(e) {
      //validate the form before submisson
      $(this).css('background', 'grey');
      let name = $('#mform .search-box').val();
      if (validation(name, $('#warning'))) {
        console.log('Data Posted');
        $.post('/make');
      }
    });
  });
});

const validation = (str, errMsg) => {
  if (str == '') {
    errMsg.text('Quiz Name cannot be empty !');
    errMsg.addClass('err');
    $('.search-box').addClass('errBox');
    return false;
  }
  return true;
};
