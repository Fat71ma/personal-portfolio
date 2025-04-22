 // Form submission alert
 document.getElementById("contact-form").addEventListener("submit", function(e) {
                  e.preventDefault();
                  alert("Thanks for your message, Fatima will get back to you soon!");
                  this.reset();
                });