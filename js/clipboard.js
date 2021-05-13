function updateClipboard() {
  let textToCopy = document.querySelector("#clipboardText").innerHTML;
  navigator.clipboard.writeText(textToCopy).then(function() {
    /* clipboard successfully set */
  }, function() {
    /* clipboard write failed */
  });
}

document.querySelector("#copyToClipboard").addEventListener("click", updateClipboard);
