$(document).ready(function() {
	
	// Помощь анимации
	new WOW().init();

	ymaps.ready(function () {
	    var myMap = new ymaps.Map('map', {
	            center: [59.818816, 30.312005],
	            zoom: 12
	        }, {
	            searchControlProvider: 'yandex#search'
	        }),

	        // Создаём макет содержимого.
	        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
	            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
	        ),

	        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
	            hintContent: 'BIGAS-IT',
	        }, {
	            // Опции.
	            // Необходимо указать данный тип макета.
	            iconLayout: 'default#image',
	            // Своё изображение иконки метки.
	            iconImageHref: 'img/marker-map.png',
	            // Размеры метки.
	            iconImageSize: [128, 147],
	            // Смещение левого верхнего угла иконки относительно
	            // её "ножки" (точки привязки).
	            iconImageOffset: [-64, -90]
	        });

	    myMap.geoObjects
	        .add(myPlacemark);
	});

	//Попап менеджер FancyBox

	// data-fancybox="gallery" создание галереи
	// data-caption="<b>Подпись</b><br>"  Подпись картинки
	// data-width="2048" реальная ширина изображения
	// data-height="1365" реальная высота изображения
	// data-type="ajax" загрузка контента через ajax без перезагрузки
	// data-type="iframe" загрузка iframe (содержимое с другого сайта)
	$(".fancybox").fancybox({
		hideOnContentClick: true,
		protect: false, //защита изображения от загрузки, щелкнув правой кнопкой мыши. 
		loop: true, // Бесконечная навигация по галерее
		arrows : true, // Отображение навигационные стрелки
		infobar : true, // Отображение инфобара (счетчик и стрелки вверху)
		toolbar : true, // Отображение панели инструментов (кнопки вверху)
		buttons : [ // Отображение панели инструментов по отдельности (кнопки вверху)
        // 'slideShow',
        // 'fullScreen',
        // 'thumbs',
        // 'share',
        //'download',
        //'zoom',
        'close'
    	],
    	touch : {
			vertical : false,  // Позволяет перетаскивать содержимое по вертикали
		},
    	animationEffect : "zoom", // анимация открытия слайдов "zoom" "fade" "zoom-in-out"
    	transitionEffect: 'slide', // анимация переключения слайдов "fade" "slide" "circular" "tube" "zoom-in-out" "rotate'
    	animationDuration : 500, // Длительность в мс для анимации открытия / закрытия
    	transitionDuration : 1366, // Длительность переключения слайдов
    	slideClass : '', // Добавить свой класс слайдам

	});

	// Маска для формы телефона

    $(".mobile").inputmask({"mask": "+7 (999) 999-9999"});
    
    // <input class="mobile" type="tel" placeholder="+7 (___) ___-___" name="tel">

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(document).ready(function () {
    $("#form1").submit(function () {
        $.ajax({
            type: "POST"
            , url: "mailll1.php"
            , data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form1").trigger("reset");
            window.location.href = "thankYou.html";
        });
        return false;
    });
	});
	$(document).ready(function () {
    $("#form2").submit(function () {
        $.ajax({
            type: "POST"
            , url: "mail2.php"
            , data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form2").trigger("reset");
            window.location.href = "thankYou.html";
        });
        return false;
    });
	});
	$(document).ready(function () {
    $("#form3").submit(function () {
        $.ajax({
            type: "POST"
            , url: "mail3.php"
            , data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form3").trigger("reset");
            $.fancybox.open($("#pop3"));
            window.location.href = "thankYou.html";
        });
        return false;
    });
	});
	$(document).ready(function () {
    $("#form4").submit(function () {
        $.ajax({
            type: "POST"
            , url: "mail4.php"
            , data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form4").trigger("reset");
            window.location.href = "thankYou.html";
        });
        return false;
    });
	});
	$(document).ready(function () {
    $("#form5").submit(function () {
        $.ajax({
            type: "POST"
            , url: "mail5.php"
            , data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form5").trigger("reset");
            window.location.href = "thankYou.html";
        });
        return false;
    });
	});
	$(document).ready(function () {
    $("#form6").submit(function () {
        $.ajax({
            type: "POST"
            , url: "mail6.php"
            , data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form6").trigger("reset");
            window.location.href = "thankYou.html";
        });
        return false;
    });
	});
	$(document).ready(function () {
    $("#form7").submit(function () {
        $.ajax({
            type: "POST"
            , url: "mail7.php"
            , data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form7").trigger("reset");
            window.location.href = "thankYou.html";
        });
        return false;
    });
	});
	$(document).ready(function () {
    $("#form8").submit(function () {
        $.ajax({
            type: "POST"
            , url: "mail8.php"
            , data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form8").trigger("reset");
            window.location.href = "thankYou.html";
        });
        return false;
    });
	});
	$(document).ready(function () {
    $("#form9").submit(function () {
        $.ajax({
            type: "POST"
            , url: "mail9.php"
            , data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form9").trigger("reset");
            window.location.href = "thankYou.html";
        });
        return false;
    });
	});
});




