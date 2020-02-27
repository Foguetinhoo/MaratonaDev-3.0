const icon = document.createElement('i')
icon.setAttribute('class', 'fa')


$(document).ready(() => {
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
    $('#dt_nascimento').mask('99/99/9999')

    $.validator.addMethod("date_br", (value, element) => {
        const now = moment('DD/MM/YYYY')
        console.log(now)
        console.log(moment(value, 'DD/MM/YYYY').diff(now, 'minutes'))

        return moment(value, 'DD/MM/YYYY', true).isValid()
    });

    $.validator.addMethod("date_ob", (value, element) => {
        return moment(value, 'DD/MM/YYYY', true).isValid()
    }, "Data inválida.");

    $.validator.addMethod("letras", (value, element) => {
        value = jQuery.trim(value)
        value = value.split(" ");
        value = value.join("");
        var regExp = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;
        return regExp.test(value);
    }, "Por favor insira somente letras");

    $.validator.setDefaults({
        invalidHandler: () => {
            // $('#alert').addClass("alert alert-danger").text("Preencha os campos a seguir!").fadeIn(750).fadeOut(4000);
            toastr["error"]("Preencha todos os campos")
        }
    });

    $('#dt_nascimento').mask('00/00/0000')

    $('[name="donor"]').validate({
        errorElement: 'small',
    
        rules: {
            name: {
                required: true,
                letras: true,
                minlength: 7


            },
            dt_nascimento: {
                required: true,
                date_br: true
            },
            email: {
                required: true,
                email: true
            },
            tipo_sangue: {
                required: true
            }

        },
        messages: {
            name: {
                required: 'Informe o nome por favor <i class="far fa-address-book"></i> ',
                letras: 'digite somente letras <i class="fas fa-exclamation-circle"></i>',
                minlength: 'Minimo de 7 caracteres <i class="fas fa-exclamation-circle"></i>'


            },
            dt_nascimento: {
                required: 'Informe a data de nascimento <i class="fas fa-birthday-cake"></i>',
                date_br: 'informe uma data válida <i class="fas fa-exclamation-circle"></i>'
            },
            email: {
                required: 'Informe o email <i class="fas fa-at"></i>',
                email: 'digite um email válido <i class="fas fa-exclamation-circle"></i>'
            },
            tipo_sangue: {
                required: 'Informe o tipo sanguineo <i class="fas fa-syringe"></i>',
            }

        },
        highlight: (element) => {

            $(element).addClass('is-invalid').removeClass('is-valid');
           
        },
        unhighlight: (element) => {
            $(element).removeClass('is-invalid').addClass('is-valid');
               
        },
        submitHandler: (e) => {
            e.preventDefault()
            var dados = $("[name=donor]").serializeArray();
            console.log(dados)
            alert('foi')
            // $.ajax({
            //     type: "POST",
            //     url: "/Controllers/InscritoController.class.php",
            //     data: dados,
            //     beforeSend: () => {
            //         $('#button1').html('<i class="fas fa-spinner"></i> Enviar')
            //     },
            //     error: (error) => {
            //         $('#alert').addClass("alert alert-danger").text("Erro ao inscrever").fadeIn(1000);
            //         console.log(error)
            //     },
            //     success: (data) => {
            //         $('#button1').html('<i class="fas fa-envelope"></i> Enviar');
            //         $('#alert').removeClass("alert alert-danger").
            //         addClass("alert alert-success").text("Inscrição concluida com sucesso!").fadeIn(750).fadeOut(4000);
            //         $('input').val('');
            //         $('input').removeClass('is-valid');
            //         console.log(data);

            //     }
            // })
            
        }

    });
})

