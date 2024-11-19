const orderData = {
  drink: "Latte",
  options: ["Extra Shot", "Soy Milk"],
  size: "Medium",
  sweetener: "Sugar",
  specialInstructions: "Extra hot",
  pickupTime: "10:30",
  pickupDate: "2024-11-15",
  sweetnessLevel: 5
};

document.getElementById('load-order').addEventListener('click', () => {
  document.getElementById('drink').value = orderData.drink;
  document.querySelectorAll('input[name="options"]').forEach(checkbox => {
    checkbox.checked = orderData.options.includes(checkbox.value);
  });
  const sizeInput = document.querySelector(`input[name="size"][value="${orderData.size}"]`);
  if (sizeInput) sizeInput.checked = true;
  document.getElementById('sweetener').value = orderData.sweetener;
  document.getElementById('instructions').value = orderData.specialInstructions;
  document.getElementById('pickup-time').value = orderData.pickupTime;
  
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('pickup-date').value = today;
  
  document.getElementById('sweetness-level').value = orderData.sweetnessLevel;
  document.getElementById('sweetness-value').textContent = orderData.sweetnessLevel;
});

document.getElementById('order-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const updatedOrder = {
    drink: document.getElementById('drink').value,
    options: Array.from(document.querySelectorAll('input[name="options"]:checked')).map(cb => cb.value),
    size: document.querySelector('input[name="size"]:checked')?.value || "No selection",
    sweetener: document.getElementById('sweetener').value,
    specialInstructions: document.getElementById('instructions').value,
    pickupTime: document.getElementById('pickup-time').value,
    pickupDate: document.getElementById('pickup-date').value,
    sweetnessLevel: document.getElementById('sweetness-level').value
  };
  console.log(JSON.stringify(updatedOrder));
  document.getElementById('edited-order').innerText = JSON.stringify(updatedOrder, null, 2);
});

document.getElementById('sweetness-level').addEventListener('input', (e) => {
  document.getElementById('sweetness-value').textContent = e.target.value;
});




