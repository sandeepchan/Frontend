function attachListener() {
  let count = 0;
  document.getElementById("clickme").addEventListener("click", function xyz() {
    console.log("clicked ", ++count);
  });
}

attachListener();
