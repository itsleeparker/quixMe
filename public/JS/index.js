$(document).ready(err => {
  $('#mform').submit(e => {
    e.preventDefault();

    $('#mform .btn').click(function(e) {
      //validate the form before submisson
      const fname = $('#mform .search-box').val();
      const flevel = $(this).val();
      if (validation(fname, $('#warning'))) {
        $.post(
          '/make',
          {
            name: fname,
            level: flevel,
          },
          function(data, status) {
            console.log(status);
          },
        );
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
