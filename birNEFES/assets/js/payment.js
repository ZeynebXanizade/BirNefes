function showLoading(event, button) {
    event.preventDefault(); 
  
    button.innerHTML = "Processing Payment...";
  
    setTimeout(function() {
      button.innerHTML = "Payment completed.";
    }, 3000); 
  }