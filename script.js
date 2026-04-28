$(document).ready(function() {
    console.log("¡jQuery funcionando y tema persistente activo!");

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        $('body').addClass('dark-mode');
        $('html').attr('data-bs-theme', 'dark');
    }
    $('#theme-toggle').on('click', function() {
        $('body').toggleClass('dark-mode');
        
        if ($('body').hasClass('dark-mode')) {
            $('html').attr('data-bs-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            $('html').attr('data-bs-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});
// Pagina de contacto
// Validación del Formulario de Contacto
$(document).ready(function() {

    $('#form-contacto').on('submit', function(e) {
        e.preventDefault();
        
        const form = $(this);
        const btn = $('#btn-enviar');
        const spinner = $('#spinner');
        const btnText = $('.btn-text');

        if (this.checkValidity() === false) {
            e.stopPropagation();
            form.addClass('was-validated');
        } else {
            btn.prop('disabled', true);
            btnText.addClass('d-none');
            spinner.removeClass('d-none');

            setTimeout(function() {
                alert("¡Mensaje enviado con éxito! Pronto nos contactaremos.");
                
                form[0].reset();
                form.removeClass('was-validated');
                btn.prop('disabled', false);
                btnText.removeClass('d-none');
                spinner.addClass('d-none');
            }, 1500);
        }
    });

    $('#mensaje').on('keyup', function() {
        const palabrasProhibidas = ['clave', 'contraseña', 'password', 'tarjeta', 'cbu', 'pin'];
        let contenido = $(this).val().toLowerCase();
        let detectado = false;
        
        palabrasProhibidas.forEach(palabra => {
            if (contenido.includes(palabra)) {
                detectado = true;
            }
        });
        if (detectado) {
            $('#phishing-alert').removeClass('d-none').fadeIn();
            $(this).addClass('is-invalid');
        } else {

            $(this).removeClass('is-invalid');
        }
    });
    $('#close-alert').on('click', function() {
        $('#phishing-alert').fadeOut();
    });
});
// Pagina de contacto
// Pagina de agencia
$(document).ready(function() {

    $('.btn-flip').on('click', function() {
        $(this).closest('.flip-card').toggleClass('flipped');
    });

    $('.star').on('click', function() {
        let value = $(this).data('value');
        let stars = $(this).parent().find('.star');

        stars.removeClass('selected');
        stars.each(function(index) {
            if (index < value) {
                $(this).addClass('selected');
            }
        });
        console.log("Calificación enviada: " + value);
    });
});
// Pagina de agencia

// Pagina destino.html
$(document).ready(function() {
    $('#botones-filtro button').on('click', function() {

        $('#botones-filtro button').removeClass('active btn-primary').addClass('btn-outline-primary');
        $(this).addClass('active btn-primary').removeClass('btn-outline-primary');

        let categoria = $(this).data('categoria');

        if (categoria === 'todos') {
            $('.item-destino').fadeIn(400);
        } else {
            $('.item-destino').hide();
            $('.item-destino').filter('.' + categoria).fadeIn(400);
        }
    });
});
// Pagina destino.html

// Pagina home.html
$(document).ready(function() {
    const contador = $('#contador-viajeros');
    const valorObjetivo = 500;

    $({ countNum: 0 }).animate({ countNum: valorObjetivo }, {
        duration: 9000,
        easing: 'swing',
        step: function() {
            contador.text(Math.ceil(this.countNum));
        },
        complete: function() {
            contador.text(this.countNum + "+");
        }
    });
    $('.text-anim').fadeIn(2000, function() {
    $('.text-slide').animate({ opacity: 1 }, 1000);
});
});
// Pagina home.html

// Pagina blog.html
$(document).ready(function() {
    $(window).on('scroll', function() {
        $('.reveal').each(function() {
            let elementoTop = $(this).offset().top;
            let pantallaBottom = $(window).scrollTop() + $(window).innerHeight();

            if (pantallaBottom > elementoTop + 100) {
                $(this).addClass('visible');
            }
        });
    });
    $('input[name="tag"]').on('change', function() {
        let categoria = $(this).attr('id');
        if (categoria === 'all') {
            $('.post').fadeIn(500);
        } else {
            $('.post').hide();
            $('.post.' + categoria).fadeIn(500);
        }
    });
    $(window).trigger('scroll');
});
// Pagina blog.html