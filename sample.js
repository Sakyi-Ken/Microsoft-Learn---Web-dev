function toggling() {
  let button = document.querySelector('.toggled');
  if (!button.classList.contains('is-toggled')){
    button.classList.add('is-toggled')
  }
  else {
    button.classList.remove('is-toggled');
  }

  let buttonElement = document.querySelector('.toggle');
  //if (buttonElement.classList.contains('toggle')){
    if (buttonElement.innerText === 'Dark') {
      buttonElement.innerHTML = 'Light'
      buttonElement.classList.add('switched')
  }
  else{
    buttonElement.innerHTML = 'Dark'
    buttonElement.classList.remove('switched')
  }

}