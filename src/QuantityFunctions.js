export function decrement(qtyInputId) {
    const qty = document.querySelector(`#${qtyInputId}`);
    if (qty.value <= 1) {
      qty.value = 1;
    } else {
      qty.value = parseInt(qty.value) - 1;
    }
  }
  
  export function increment(qtyInputId) {
    const qty = document.querySelector(`#${qtyInputId}`);
    qty.value = parseInt(qty.value) + 1;
  }
  