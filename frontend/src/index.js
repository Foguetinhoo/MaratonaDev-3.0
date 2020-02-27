import enviaDados from './services/api.js'

const buttonForm =  document.querySelector('.sub')

const button =  document.querySelector('header button')
button.addEventListener('click', (e) =>{
    document.querySelector('.form-donor').classList.toggle('hide')
})

const form = document.forms.namedItem('donor')
toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "4000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}
 async function handleSubmit(e){
    e.preventDefault()
    let cont = 0
    for (const input of form) {
        input.value.trim() === '' ? cont ++ : cont
    }

    if( cont != 0){
       if(cont == 4){
         toastr["error"](`preencha todos os campos`)
       } 
       else if(cont == 1){
        toastr["error"](`preencha o ultimo campo restante`)
       }else{
        toastr["error"](`preencha todos os ${cont} campos restantes`)
       }
        return;
    }

 alert('foi')
    
 }
form.addEventListener('submit',handleSubmit) 
