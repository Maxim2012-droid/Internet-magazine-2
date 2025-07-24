"use strict";
        (function () {
            var http = new XMLHttpRequest();
            http.open('GET', 'https://5element.by/catalog/377-smartfony/brand=honor');
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var doc = new DOMParser().parseFromString(this.responseText, "text/html");  // преобразовать текст в HTML
                    for (let i = 0; i < document.querySelectorAll('.h1').length; i++) {
                    document.querySelectorAll('.h1')[i].innerHTML = doc.querySelectorAll('.c-text')[i].innerHTML;
                    };
                    for (let h = 0; h < document.querySelectorAll('.text-memory1').length; h++) {
                    document.querySelectorAll('.text-memory1')[h].innerHTML = doc.querySelectorAll('.c-details span:nth-child(5)')[h].innerHTML;
                    };
                    for (let j = 0; j < document.querySelectorAll('.price1').length; j++) {
                    document.querySelectorAll('.price1 p')[j].innerHTML = doc.querySelectorAll('.c-price')[j].innerHTML;
                    };
                    const divs = doc.querySelectorAll('.swiper-wrapper');
                    let firstImg = [];
                    for (let i = 0; i < document.querySelectorAll('.item_img1').length+1; i++) {
                        firstImg[i] = divs[i].querySelector('.swiper-slide img');
                        firstImg.push();
                        console.log(firstImg[i]);
                    };
                    firstImg.splice(4, 1);
                    document.querySelectorAll('.item_img1')[0].src = firstImg[0].src;
                    for (let i = 1; i < document.querySelectorAll('.item_img1').length; i++) {
                        document.querySelectorAll('.item_img1')[i].src = firstImg[i].dataset.src;
                    };
                }  
            }
            http.send(null);
        })()