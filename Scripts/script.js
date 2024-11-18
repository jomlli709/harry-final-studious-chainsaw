const orderData = {
    sandwich: "Turkey Club",
    options: ["Lettuce", "Tomato"],
    cut: "Half",
    drink: "Iced Tea",
    specialInstructions: "No onions"
  };
  
  // Load order data into the form
  document.getElementById('load-order').addEventListener('click', () => {
    document.getElementById('sandwich').value = orderData.sandwich;
  
    // Check corresponding checkboxes
    document.querySelectorAll('input[name="options"]').forEach(checkbox => {
      checkbox.checked = orderData.options.includes(checkbox.value);
    });
  
    // Set the selected radio button
    const cutInput = document.querySelector(`input[name="cut"][value="${orderData.cut}"]`);
    if (cutInput) cutInput.checked = true;
  
    // Set dropdown value
    document.getElementById('drink').value = orderData.drink;
  
    // Set special instructions
    document.getElementById('instructions').value = orderData.specialInstructions;
  });
  
  // Handle form submission
  document.getElementById('order-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    
    // Collect updated form data
    const updatedOrder = {
      sandwich: document.getElementById('sandwich').value,
      options: Array.from(document.querySelectorAll('input[name="options"]:checked')).map(cb => cb.value),
      cut: document.querySelector('input[name="cut"]:checked')?.value || "No selection",  // Handle missing input
      drink: document.getElementById('drink').value,
      specialInstructions: document.getElementById('instructions').value,
    };
  
    // Log and display the updated order as JSON
    console.log(JSON.stringify(updatedOrder));
    document.getElementById('edited-order').innerText = JSON.stringify(updatedOrder, null, 2);
  });
  