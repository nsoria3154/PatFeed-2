function checkIt() {
  // Initialize scores
  var travis = 0;
  var quavo = 0;
  var kendrick = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'travis') {
        travis++;
      }
      else if (e.value == 'quavo') {
        quavo++;
      }
      else if (e.value == 'kendrick') {
        kendrick++;
      }
    }

  }

  // Determine result
  var counts = "travis: " + travis + ", " +
               "quavo: " + quavo  + ", " +
               "kendrick: " + kendrick;

  // What is the highest value?
  var max = Math.max(traivs, quavo, kendrick);

  // Form a message
  var message;

  if (max == travis) {
    message = "la flame straight up you're travis  ";
  }
  else if (max == quavo) {
    message = " quavo skirtttt you're quavo ";
  }
  else if (max == kendrick) {
    message = " Be humble you're kendrick  ";
  }

  //Display result
  //document.getElementById('result-text').innerHTML = counts;
  document.getElementById('result-text').innerHTML = message;
}
