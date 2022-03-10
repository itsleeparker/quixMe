$('#mform').submit(e => {
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

$('.op').click(e => {
  $(this).addClass('correct');
});

$('#oform').submit(e => {
  e.preventDefault();
  if (!validateOptions($('.op input'))) {
    e.preventDefault();
    $('#err').text('boxes cannot be empty!!');
    $('#err').addClass('err');
  }
});

const validateOptions = op => {
  //check if any of the input boxes are empty
  op.each((index, item) => {
    let data = '' + $(item).val();
    console.log(data);
    if (data === '') {
      //start fixing the code from , the input returning complete emptyness check with that then procees with backend code
      return false;
    }
  });
  return true;
};

const validation = (str, errMsg) => {
  if (str == '') {
    errMsg.text('Quiz Name cannot be empty !');
    errMsg.addClass('err');
    $('.search-box').addClass('errBox');
    return false;
  }
  return true;
};
