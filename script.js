
const checkboxAll = document.querySelector('.darkmodeall');
const contentmode = document.querySelector('.content-mode');
const onlycontent = document.querySelector('.onlycontent')



const localStorageOnlycontent= JSON.parse(localStorage.getItem('onlycontent'));
const  localStorageCheckboxall= JSON.parse(localStorage.getItem('checkboxAll'));




if(localStorageCheckboxall){
 checkboxAll.checked=true
}


if(localStorageOnlycontent){
   onlycontent.checked=true
}

fullbodydarkmode()
contentchange()




checkboxAll.addEventListener('change', () => {
    fullbodydarkmode()
    contentchange()

})



onlycontent.addEventListener('change',  contentchange)


function fullbodydarkmode(){
    if (checkboxAll.checked ) {  
        document.body.classList.add('Allmodeon');
       localStorage.setItem('checkboxAll',true);
    }
    else {
        document.body.classList.remove('Allmodeon');
        localStorage.setItem('checkboxAll',false)
    }

    onlycontent.checked = checkboxAll.checked
}


function contentchange() {
    if (onlycontent.checked) {
        contentmode.classList.add('dark');
        localStorage.setItem('onlycontent', true);
    } else {
        contentmode.classList.remove('dark');
        localStorage.setItem('onlycontent', false);
    }
}






function changeTheme(changelbtn,elemenName){
 if (changelbtn.checked) {
        elemenName.classList.add('dark');
       localStorage.setItem(toString(changelbtn), true);
    } else {
        changelbtn.classList.remove('dark');
        localStorage.setItem(toString(changelbtn), false);
    }
}







