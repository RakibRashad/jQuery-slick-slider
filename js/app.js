$ (function(){

    $(".servic_slider").slick({

        slidesToShow: 3,
        slidesToscroll:3,
        arrows:true,
        dots:true,
        prevArrow: "#servic .arrows .R_arrow",
        nextArrow: "#servic .arrows .L_arrow",
        
        

      });

     $(".portfolio_slider").slick({
        
        slidesToshow:3,
        slidesToscroll:1,
        

     });

     $(".testimonial_slider").slick({

        slidesToShow:2,
        arrows:true,
        dots:true,
        prevArrow:"#testimonial .arrows .Right_arrow",
        nextArrow:"#testimonial .arrows .Left_arrow",
        
     })

     let close_alertBtn = $ ('#close_alert')
     close_alertBtn.click(function(){
        Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
            }
          });

     });




     Swal.fire({
        title: 'Auto close alert!',
        html: 'I will close in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
      

 });