$('form').submit(e => {
  const fname = $('#mform .search-box').val();
  if (!validation($('#mform .search-box').val(), $('#err'))) {
    e.preventDefault();
  } else {
    $('#mform button').click(e => {
      $.post('/make', {level: $(this).val(), qname: fname}, err => {
        if (err) {
          throw err;
        }
      });
    });
  }
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
