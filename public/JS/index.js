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

//code for selecting only one option
$('.qcard').each((index, el) => {
  $(el).click(e => {
    $(el).addClass('correct');
    $('.qcard')
      .not(el)
      .removeClass('correct');
  });
});

//code for options validation
$('#oform').submit(e => {
  op = $('.op input');
  op.each((index, el) => {
    //check if all the boxes are filled and option is selected
    if (validateOptions(el)) {
      $('#err').text('Options cannot be empty');
      e.preventDefault();
    }
  });
  if (!checkClass($('li'), 'correct')) {
    e.preventDefault();
    $('#err').text('Select the right answer');
  } else if (validateOptions($('#ques').val())) {
    $('#err').text('Question cannot be empty');
    e.preventDefault();
  } else {
    const answer = $('.correct input').val();
    const qcount = $('#count').text();
    $.post(
      '/makeQuiz',
      {title: $('#title').text(), ans: answer, count: qcount},
      err => {
        if (err) {
          throw err;
        }
      },
    );
  }
});

const checkClass = (item, cl) => {
  return $(item).hasClass(cl);
};

const validateOptions = op => {
  //check if any of the input boxes are empty
  return $(op).val().length === 0;
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
