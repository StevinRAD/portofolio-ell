/*****************************************************************************
  ____                                  _____ _
 / ___|___  ___ _ __ ___   ___  ___    |_   _| |__   ___ _ __ ___   ___  ___
| |   / _ \/ __| '_ ` _ \ / _ \/ __|_____| | | '_ \ / _ \ '_ ` _ \ / _ \/ __|
| |__| (_) \__ \ | | | | | (_) \__ \_____| | | | | |  __/ | | | | |  __/\__ \
 \____\___/|___/_| |_| |_|\___/|___/     |_| |_| |_|\___||___/

******************************************************************************/

/************ Site Main Js **************************************

    Template Name: Clarks - Vcard Template
    Author: cosmos-themes
    Envato Profile: https://themeforest.net/user/cosmos-themes
    version: 1.0
    Copyright: 2018

****************************************************************/

/*======== Window Load Function ========*/
$(window).on('load', function(){

    /*======== Preloader Setup ========*/
    $(".loading-text").delay(1000).fadeOut("slow");
    $(".preloader").delay(2000).fadeOut("slow");

    /*======== Isotope Setup ========*/
    if ($('.portfolio-items').length) {
        var $elements = $(".portfolio-items"),
            $filters = $('.portfolio-filter ul li');
        $elements.isotope();
        $filters.on('click', function() {
            $filters.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).data('filter');
            $(".portfolio-items").isotope({
                filter: selector,
            });
        });
    }
});
/*======== Document Ready Function ========*/
$(document).ready(function() {
    "use strict";

    /*======== Text Slideshow Setup ========*/
    if($('.text-slideshow').length) {
        animateText();
    }

    /*======== SimpleBar Setup ========*/
    $('.pages-stack .page').each(function() {
        var $id = '#' + $(this).attr('id');
        new SimpleBar($($id)[0], {
            scrollbarMinSize: 15
        });
    });


    /*======== Portfolio Image Link Setup ========*/
    $('.portfolio-items .image-link').magnificPopup({
        type: 'image',
    });

    /*======== Portfolio Video Link Setup ========*/
    $('.portfolio-items .video-link').magnificPopup({
        type: 'iframe',
    });

    /*========Testimonials OwlCarousel Setup========*/
    $(".testimonials .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        smartSpeed: 500,
        responsiveClass: true,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 1,
            },
            992: {
                items: 2,
            },
        },
    });

    /*========Clients OwlCarousel Setup========*/
    $(".clients .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        smartSpeed: 500,
        responsiveClass: true,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 2,
            },
            575: {
                items: 3,
            },
            768: {
                items: 4,
            },
            1000: {
                items: 6,
            },
        },
    });

    /*======== Google Map Setup ========*/
    if($('#map').length) {
        initMap();
    }

    /*======== Google Map on Contact Page ========*/
    $(window).on('hashchange', function() {
        setTimeout(function() {
            if(window.location.hash.slice(2) === "contact") {
                if($('#map').length) {
                    initMap();
                }
            }
        }, 500);
    });

    /*======== Contact Form Setup ========*/
    contactFormSetup();

});

/********** Function Map Initialization **********/
function initMap() {
    var latitude = $("#map").data('latitude'),
        longitude = $("#map").data('longitude'),
        zoom = $("#map").data('zoom'),
        cordinates = new google.maps.LatLng(latitude, longitude);

    var styles = [ { "stylers": [ { "hue": "#ff1a00" }, { "invert_lightness": true }, { "saturation": -100 }, { "lightness": 33 }, { "gamma": 0.5 } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#2a2b30" } ] } ];
    var mapOptions = {
        zoom: zoom,
        center: cordinates,
        mapTypeControl: false,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        styles: styles,
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
        position: cordinates,
        map: map,
        title: "We are here!"
    });

}

/********** Function Contact Form Setup **********/
function contactFormSetup() {

    /*======== Check Field Have Value When Page Load ========*/
    $('.input-field').each(function() {
        if($(this).val()) {
            $(this).addClass('input--filled');
        } else {
            $(this).removeClass('input--filled');
        }
    });

    /*======== Check Field Have Value When Keyup ========*/
    $('.input-field').on('keyup', function() {
        if($(this).val()) {
            $(this).addClass('input--filled');
        } else {
            $(this).removeClass('input--filled');
        }
    });


    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        var name = $('#cf-name').val(),
            email = $('#cf-email').val(),
            message = $('#cf-message').val(),
            required = 0;


        $('.cf-validate', this).each(function() {
            if($(this).val() == '') {
                $(this).addClass('cf-error');
                required += 1;
            } else {
                if($(this).hasClass('cf-error')) {
                    $(this).removeClass('cf-error');
                    if(required > 0) {
                        required -= 1;
                    }
                }
            }
        });
        if( required === 0 ) {
            $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: {
                    cf_name: name,
                    cf_email: email,
                    cf_message: message
                },
                success: function(data) {
                    $("#contact-form .input-field").val("");
                    showAlertBox(data.status, data.responseText);
                },
                error: function(data) {
                    showAlertBox(data.status, data.responseText);
                }
            });
        }
    });
}

/********** Function Show Alert Box **********/
function showAlertBox(response, message) {
    var $alertBox = $('<div class="alert"></div>'),
        $alContainer = $('#contact-form .alert-container');
    if( response == 200 ) {
        $alertBox.addClass('alert-success').html(message);
        $alContainer.html($alertBox);
    } else {
        $alertBox.addClass('alert-danger').html(message);
        $alContainer.html($alertBox);
    }
    $alContainer.fadeIn(300).delay(2000).fadeOut(400);
}

/********** LOGIKA CHAT WIDGET TELEGRAM (DUA ARAH, PRIVATE & USER ID) **********/
document.addEventListener("DOMContentLoaded", function() {
    const chatBtn = document.getElementById("chat-widget-btn");
    const chatWindow = document.getElementById("chat-window");
    const closeBtn = document.getElementById("close-chat-btn");
    const sendBtn = document.getElementById("send-chat-btn");
    const chatInput = document.getElementById("chat-input");
    const quickReplies = document.querySelectorAll(".quick-reply-btn");
    const chatBody = document.getElementById("chat-body");

    // SETUP TELEGRAM KESINI (GANTI DENGAN MILIKMU!)
    const botToken = "8279921813:AAFQn4fQo0fw5bYS-bAG5X8UrDXCdbpKmyY"; 
    const chatId = "6450647898"; 

    // ==========================================
    // FITUR: GENERATE USER ID ACAK
    // ==========================================
    // Cek apakah user sudah punya ID di browsernya
    let guestId = localStorage.getItem("guestId");
    if (!guestId) {
        // Jika belum, buatkan ID acak (contoh: Guest-A1B2C)
        const randomStr = Math.random().toString(36).substring(2, 7).toUpperCase();
        guestId = "Guest-" + randomStr;
        localStorage.setItem("guestId", guestId);
    }

    // Array untuk menyimpan ID pesan yang dikirim oleh pengunjung INI
    // Kita pakai localStorage agar tidak hilang saat di-refresh
    let mySentMessageIds = JSON.parse(localStorage.getItem("mySentMessageIds")) || [];

    // Buka/Tutup Chat dengan Animasi
    chatBtn.addEventListener("click", () => {
        chatBtn.classList.add("clicked");
        setTimeout(() => chatBtn.classList.remove("clicked"), 300);
        chatWindow.classList.toggle("show");
    });

    closeBtn.addEventListener("click", () => {
        chatWindow.classList.remove("show");
    });

    // Fungsi Kirim Pesan dari Website ke Telegram
    function sendMessage(text) {
        if (text.trim() === "") return;

        // Tampilkan pesan user di website (Warna Orange)
        const userMsg = document.createElement("p");
        userMsg.textContent = text;
        userMsg.style.cssText = "background: #FFA500; color: white; padding: 10px; border-radius: 10px; font-size: 14px; margin-bottom: 10px; align-self: flex-end; text-align: right;";
        chatBody.appendChild(userMsg);
        chatInput.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;

        // Kirim ke Telegram beserta Guest ID-nya
        const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        fetch(telegramUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: `Pesan dari [${guestId}]:\n\n"${text}"` // Menambahkan ID disini
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                // SIMPAN ID PESAN YANG BERHASIL DIKIRIM (agar bot tahu ini pesan dia)
                mySentMessageIds.push(data.result.message_id);
                // Batasi array agar tidak terlalu besar (simpan 50 pesan terakhir saja)
                if(mySentMessageIds.length > 50) mySentMessageIds.shift();
                
                localStorage.setItem("mySentMessageIds", JSON.stringify(mySentMessageIds));
            }
        })
        .catch(error => console.error("Error:", error));
    }

    // Event kirim pesan
    sendBtn.addEventListener("click", () => sendMessage(chatInput.value));
    chatInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") sendMessage(chatInput.value);
    });

    // Event klik Komentar Cepat
    quickReplies.forEach(btn => {
        btn.addEventListener("click", function() {
            sendMessage(this.textContent);
            document.querySelector(".quick-replies").style.display = "none";
        });
    });

    // ==========================================
    // FITUR: MENDENGARKAN BALASAN DARI BOT (HANYA YANG DI-REPLY)
    // ==========================================
    let lastUpdateId = 0;
    
    function getTelegramUpdates() {
        const getUpdatesUrl = `https://api.telegram.org/bot${botToken}/getUpdates?offset=${lastUpdateId + 1}`;
        
        fetch(getUpdatesUrl)
            .then(response => response.json())
            .then(data => {
                if (data.ok && data.result.length > 0) {
                    data.result.forEach(update => {
                        lastUpdateId = update.update_id; // Update ID terakhir
                        
                        // Cek jika ada pesan dan itu dari admin (kamu)
                        if (update.message && update.message.chat.id.toString() === chatId && update.message.text) {
                            
                            // PASTIKAN PESAN INI ADALAH "REPLY" DARI PESAN PENGUNJUNG INI
                            let isReplyToMe = false;
                            
                            if (update.message.reply_to_message && update.message.reply_to_message.message_id) {
                                if (mySentMessageIds.includes(update.message.reply_to_message.message_id)) {
                                    isReplyToMe = true;
                                }
                            }

                            if (isReplyToMe) {
                                // Tampilkan pesan ke layar pengunjung
                                const botReply = document.createElement("p");
                                botReply.textContent = update.message.text;
                                botReply.className = "bot-msg"; 
                                chatBody.appendChild(botReply);
                                chatBody.scrollTop = chatBody.scrollHeight;

                                // Buka jendela chat jika tertutup
                                if (!chatWindow.classList.contains("show")) {
                                    chatWindow.classList.add("show");
                                }
                            }
                        }
                    });
                }
            })
            .catch(error => console.error("Gagal mengambil update:", error));
    }

    // Cek pesan baru setiap 3 detik
    setInterval(getTelegramUpdates, 3000);
});