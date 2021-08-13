window.addEventListener('DOMContentLoaded', () => {
    const check = document.querySelectorAll('.eng'),
    lang = document.querySelectorAll('.lang-list'),
    itemActive = document.querySelectorAll('.promo__nav-item'),
    linkClick = document.querySelectorAll('.promo__nav-link'),
    menu = document.querySelector('.promo__nav'),
    menuItem = document.querySelectorAll('.promo__nav-item'),
    hamburger = document.querySelector('.hamburger'),
    tabsContent = document.querySelectorAll('.offer__circle'),
    tabs = document.querySelectorAll('.offer__icon');


    
    // Lang Bar

    check.forEach((item, i) => {
        item.addEventListener('click', () => {
            lang[i].classList.toggle('list-open');
        });
    });


    // Tabs Menu

    function removeClass () {
        itemActive.forEach(item => {
            item.classList.remove('item-active');
        });
    }

    function addClass (i =0) {
        itemActive[i].classList.add('item-active');
    }

    removeClass();
    addClass();

    linkClick.forEach((item, i) => {
        item.addEventListener('click', () => {
            removeClass();
            addClass(i);
        });
    });

    // Hamburger menu

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('promo__nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('promo__nav_active');
        });
    });

    // Offer

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove('offer__icon_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('offer__icon_active');
        
    }

    hideTabContent();
    showTabContent();

    tabs.forEach((item, i) => {
        item.addEventListener('click', () => {
            hideTabContent();
            showTabContent(i);
        });
    });
    
});