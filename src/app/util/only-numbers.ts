export const onlyNumbers = (event: KeyboardEvent) => {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'];
    if (!allowedKeys.includes(event.key) && isNaN(Number(event.key))) {
      event.preventDefault();
    }
}
