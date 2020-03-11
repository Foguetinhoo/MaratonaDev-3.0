import {setDonors} from './services/api.js'
import loadingDonors from './carregaDonors.js'
window.addEventListener('load', loadingDonors())

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
    for (const input of e.target) {
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
 
    const [ name_donor, age, email, type_blood ] =  e.target 

    const data = {
        name_donor:name_donor.value.trim(), 
        age:Number(age.value), 
        email:email.value.trim() , 
        type_blood:type_blood.value.trim()
    }
    
    const response = await setDonors(data)
    
    if(response.status === 201 ){
       const { message, type } = await response.json()
        toastr[type](message)
        setTimeout( () =>{
            document.location.reload(true);
        },1500)
    }
 }
form.addEventListener('submit',handleSubmit) 
