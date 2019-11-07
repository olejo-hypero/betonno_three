$(document).ready(function(){

	$('.btn-toggle').click(function(){
		$('.header__mobile-menu').toggleClass('header__mobile-menu--active');
		$('body').toggleClass('body-overflow');
	});

	$(window).load(function(){
		$ (".header").sticky({ topSpacing: 0, className: 'sticky' });
	});

	$('.mask').mask("+380 999-99-99-99");

	$('.nav__link').click( function(){ // ловим клик по ссылке с классом go_to
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
		    $('html, body').animate({ scrollTop: $(scroll_el).offset().top-119 }, 500); // анимируем скроолинг к элементу scroll_el
		    	$(".nav__link").removeClass('nav__link--active');
            		$(this).addClass('nav__link--active');
	        }
		    return false; // выключаем стандартное действие
    });

    $('.nav-menu__link').click( function(){ // ловим клик по ссылке с классом go_to
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
		    $('html, body').animate({ scrollTop: $(scroll_el).offset().top-119 }, 500); // анимируем скроолинг к элементу scroll_el
		    	$(".nav-menu__link").removeClass('nav-menu__link--active');
            		$(this).addClass('nav-menu__link--active');
	        }
		    return false; // выключаем стандартное действие
    });

    $('.buying__icon').click(function() {
	    $('html, body').animate({
            scrollTop: $(".contracting").offset().top-119
        }, 500);
	});

	$( "#slider" ).slider({
		value: 8,
		min: 8,
		max: 64,
		step: 8
	}).each(function() {
	  	var opt = $(this).data().uiSlider.options;

	  	var vals = opt.max - opt.min;
	  
		for (var i = 0; i <= vals; i += 8) {
	    	var el = $('<label>'+(i + 8)+'</label>').css('left',(i/vals*100)+'%');
	    	$( "#slider" ).append(el);
		}
		});

	$('form').each(function() {
		$(this).submit(function () {
            var formID = $(this).attr('id'); // Получение ID формы
            var formNm = $('#' + formID);
            $.ajax({
                type: 'POST',
                url: 'form.php', // Обработчик формы отправки
                data: formNm.serialize(),
                success: function (data) {
                    // Вывод текста результата отправки в текущей форме
                    $(formNm).html(data);
                }
            }).done(function(){
            	$('#arcticModal').arcticmodal();
            });
            return false;
        });

		$(this).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				name2: {
					required: true,
					minlength: 2
				},
				name3: {
					required: true,
					minlength: 2
				},
				number: {
					required: true,
					minlength: 2
				},
				number2: {
					required: true,
					minlength: 2
				},
				number3: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					minlength: 2
				},
				email2: {
					required: true,
					minlength: 2
				},
				textarea: {
					required: true,
					minlength: 2
				}
			},
			messages: {
				name: {
					required: "",
				},
				name2: {
					required: "",
				},
				name3: {
					required: "",
				},
				number: {
					required: "",
				},
				number2: {
					required: "",
				},
				number3: {
					required: "",
				},
				email: {
					required: "",
					email: "" 
				},
				email2: {
					required: "",
					email: "" 
				},
				textarea: {
					required: "",
				},
			}
		});
	});
})