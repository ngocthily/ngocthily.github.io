import React from 'react';
import './header.css';

function Header() {
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.documentElement.scrollTop > 40) {
            var elmnt1 = document.getElementsByClassName("header-main");
            (elmnt1)[0].classList.add("main-none");
            var elmnt2 = document.getElementsByClassName("header-abbr");
            (elmnt2)[0].classList.add("abbr-show");
        } else {
            var elmnt1 = document.getElementsByClassName("header-main");
            var elmnt2 = document.getElementsByClassName("header-abbr");
            (elmnt1)[0].classList.remove("main-none");
            (elmnt2)[0].classList.remove("abbr-show");
        }
    }

    function scrollToTop() {
        window.scrollTo(0,0);
    }

    return (
        <div>
            <div className="header">
                <div className="header-main">
                    NGOC THI LY
                </div>
                <div className="header-abbr" onClick={scrollToTop}>
                    NTL
                </div>
            </div>
        </div>
    )
}

export default Header;