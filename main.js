document.querySelector('.panel').addEventListener(
    'click',
    event => {
    if (!event.target.classList.contains('js-add-item')) {
        return;
      };
      const mode = event.target.getAttribute('data-mode'); 
      if (mode == 'add') {
        const inputText = document.querySelector('.js-input').value;

        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.classList.add('form-check-input');
        
        
        const spanTxt = document.createElement('span');
        spanTxt.classList.add('text');
        spanTxt.textContent = inputText;

        
        const spanRemove = document.createElement('span');
        spanRemove.classList.add('remove');
        spanRemove.textContent = 'x';

        
        const id = document.querySelector('.js-list').children.length + 1;

        
        const li = document.createElement('li');
        li.setAttribute('id', 'item-' + id);
        li.append(input);
        li.append(spanTxt);
        li.append(spanRemove);

        
        document.querySelector('.js-list').append(li); 
        document.querySelector('.js-input').value = ''; 

    } 
    if (mode === 'refresh'){

          
        const id = document.querySelector('.js-add-item').getAttribute('data-id-item'); // считываем id пункта списка с атрибута кнопки, который нужно изменить
        // забираем значение из поля ввода и заменяем текст пункта списка
        document.getElementById(id).children[1].textContent = document.querySelector('.js-input').value;  // меняем текст элемента списка на тот, что забрали с поля ввода
        document.querySelector('.js-add-item').textContent = 'Добавить'; // меняем надпись на кнопке
        document.querySelector('.js-add-item').setAttribute('data-mode', 'add'); // меняем режим работы кнопки на Добавление
        document.querySelector('.js-input').value = ''; // очищаем поле ввода
        document.getElementById(id).classList.remove('edit'); // удаляем класс edit с пункта списка с заданым id
    }

    }
);

document.querySelector('.js-list').addEventListener(
    'click',
    event => {
    if (!event.target.classList.contains('remove')) {
        return;
      };
      
      event.target.closest('li').remove();
    }
);

 document.querySelector('.js-list').addEventListener(
    'click',
    event => {
    if (!event.target.classList.contains('text')) {
        return;
      };
      document.querySelector('.js-input').value = event.target.textContent; 
      document.querySelector('.js-add-item').textContent = 'Обновить'; 
      document.querySelector('.js-add-item').setAttribute('data-mode', 'refresh'); 
      document.querySelector('.js-input').setAttribute('type', 'search'); 
      const idItem = event.target.parentElement.getAttribute('id'); 
      document.querySelector('.js-add-item').setAttribute('data-id-item', idItem);
      event.target.closest('li').classList.toggle('edit'); 
    }
)


document.querySelector('.js-cancel-update-mode').addEventListener(
  'click',
  event => {
   const typeSearch = document.querySelector('.js-input').getAttribute('type');
    if (typeSearch == 'search') {
      document.querySelector('.js-input').value = ''; 
      document.querySelector('.js-input').setAttribute('type', 'input'); 
      document.querySelector('.js-add-item').textContent = 'Добавить'; 
      document.querySelector('.js-add-item').setAttribute('data-mode', 'add'); 
      document.querySelector('.edit').classList.remove('edit');         
    };    
  }
)
 document.querySelector('.js-list').addEventListener(
    'click',
    event => {
    
      if (!event.target.classList.contains('form-check-input')) {
        return;
      };
     event.target.closest('li').classList.toggle('done');
    }
)
