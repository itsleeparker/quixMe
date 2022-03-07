$(document).ready(err => {
  let question_count = 0;
  $('#mform').submit(e => {
    e.preventDefault();
    $('#mform button').click(e => {
      console.log($(this).text());
    });
  });
});
