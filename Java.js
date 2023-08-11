
  function Encryption() {
  var inputText = document.getElementById('inputText').value;
  var Result = '';

  for (var i = 0; i < inputText.length; i++) {
    var charCode = inputText.charCodeAt(i);

    // Shift each character by 3 positions
    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters (A-Z)
      charCode = ((charCode - 65 + 3) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letters (a-z)
      charCode = ((charCode - 97 + 3) % 26) + 97;
    }

    Result += String.fromCharCode(charCode);
  }

  document.getElementById('Result').textContent = Result;
}

  