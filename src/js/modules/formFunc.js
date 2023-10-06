function formFunc(){
    const formItems = document.querySelectorAll('.form-field');

    for(let item of formItems){
        const thisParent = item.closest ('.form-item');
        const thisPlaceholder = thisParent.querySelector('.fake-placeholder');

        // Если инпут в фокусе
        item.addEventListener('focus', function(){
            thisPlaceholder.classList.add('active');
        });

        // Если инпут теряет фокус
        item.addEventListener('blur', function(){

            if(item.value.length > 0){
                thisPlaceholder.classList.add('active');
            }
            else {
                thisPlaceholder.classList.remove('active');
            }
        })
    };

}

export default formFunc;