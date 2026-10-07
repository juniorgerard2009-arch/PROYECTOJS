
    document.getElementById('form-contacto').addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        Swal.fire({
            title: '¡Formulario enviado!',
            text: 'Tu pedido se ha procesado con éxito.',
            icon: 'success',
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#1fa2ff',
            timer: 4000,
            timerProgressBar: true
        }).then((result) => {
            if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
                this.submit();
            }
        });
    });
