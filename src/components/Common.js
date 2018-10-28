import { Component } from 'react';
import $ from 'jquery';

class Common extends Component {    

    componentDidMount() {
        this.fadeLoader()
        this.setHeight()
        this.resizeBody()
        
        let windowWidth = $(window).width();

        let navButton = $('#main-nav .nav-button')

        navButton.click(() => {
            if (!$(navButton).find('#nav-icon').hasClass('open')) {
                $(navButton).find('#nav-icon').addClass('open');
                $(navButton).parent().find('.navbar-fixed-left').addClass('open');
                if(windowWidth<=768){
                    $('#upper-menu li').fadeTo('fast', 0);
                }
            } else {
                $(navButton).find('#nav-icon').removeClass('open');
                $(navButton).parent().find('.navbar-fixed-left').removeClass('open');
                if (windowWidth<=768) {
                    $('#upper-menu li').animate({opacity: 1});
                }
            }
        });

        $(document).click((e) => {
            let containers = $('.nav-button, .navbar-fixed-left');
            if (!containers.is(e.target) && containers.has(e.target).length === 0){
                containers.removeClass('open');
                containers.parent().find('#nav-icon').removeClass('open');
                if(windowWidth<=768){
                    $('#upper-menu li').animate({opacity: 1});
                }
            }
        });

        if (this.props.location.pathname === "/what-we-are") {
            let teamCover = $(".team-cover")
            teamCover.on('click', () => {
                let object = $(teamCover);
                let modalWindow = $('#team-modal');
                let nameData = object.find('h4').html();
                let titleData = object.find('p').text();
                let bgData = object.data('bg');
                modalWindow.find('.modal-body h4').html(nameData);
                modalWindow.find('.modal-body p').text(titleData); 
                modalWindow.attr('class', (_, c) => c.replace(/bg-team-\d/g, ''));
                modalWindow.addClass(bgData);
                setTimeout(() => modalWindow.modal('show').data('triggered',false), 350);
            });
        }

        if (this.props.location.pathname === '/gallery') {
            require('../assets/touchTouch/touchTouch.jquery.js')
            $('.gallery .container-fluid a').touchTouch();
        }
        
    }

    fadeLoader = () => {
        $(document).ready(() => {
            if ($('.loader').length > 0) {
                $('.loader').fadeOut(500, () => {
                    $('#wrap, #footer').animate({
                        opacity: '1'
                    });
                });
            } else {
                $('#wrap, #footer').animate({
                    opacity: '1'
                }, 500);
            }
        })
    }

    setHeight = () => {  
        let windowHeight = $(window).height();
        let windowWidth = $(window).width();    
        $('.index .logo').css('height',windowHeight);
        $('.team-cover').css('height',(windowHeight-1)/2);
        
        if (windowHeight > 500 && windowWidth > 768) {
            let centerBox = windowHeight / 2 - 45;
            $('#setTop').css('margin-top', centerBox)
            $('.contact-image img').css('max-height', windowHeight-100);
        }
    }

    resizeBody = () => {
        this.timer = 0
        $(window).resize(() => {
            this.delay(() => this.setHeight(), 100);
        });
    }

    delay = () => (callback, ms) => {
        clearTimeout (this.timer);
        this.timer = setTimeout(callback, ms);
    }
}

export default Common;