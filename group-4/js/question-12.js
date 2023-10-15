//#Source https://bit.ly/2neWfJ2 
const createElement = str => {
    const el = document.createElement('div');
    el.innerHTML = str;
    return el.firstElementChild;
  };
  
  const el = createElement(
    `<div class="container">
      <p>Hello!</p>
    </div>`
  );
  console.log(el.className); // 'container'
  