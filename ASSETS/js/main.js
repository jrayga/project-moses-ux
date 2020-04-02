// No Transitions before PageLoad

document.addEventListener("DOMContentLoaded", function () {
    let node = document.querySelector('.preload-transitions');
    node.classList.remove('preload-transitions');
});

// MOBILE NAV

var menuTrigger = document.getElementById("mobile-nav-menulink");
var menuPanel = document.getElementById("mobile-nav-dropdown");
var secondaryMenu = document.getElementsByClassName("navlink");
var MobLinkTracker = document.getElementById("navlink-trackers");
var MobLinkCitizens = document.getElementById("navlink-citizens");
var MobLinkNews = document.getElementById("navlink-news");
var MobLinkResources = document.getElementById("navlink-resources");
var MobPanelTracker = document.getElementById("nav-trackers");
var MobPanelCitizens = document.getElementById("nav-citizens");
var MobPanelNews = document.getElementById("nav-news");
var MobPanelResources = document.getElementById("nav-resources");

if (menuTrigger) {
    menuTrigger.addEventListener('click', menuToggle);

    function menuToggle() {

        if (menuTrigger.classList.contains('mobile-menu-open')) {

            if (MobLinkTracker.classList.contains('dropdown-active') || MobLinkCitizens.classList.contains('dropdown-active') || MobLinkNews.classList.contains('dropdown-active') || MobLinkResources.classList.contains('dropdown-active')) {
                MobLinkTracker.classList.remove('dropdown-active');
                MobLinkCitizens.classList.remove('dropdown-active');
                MobLinkNews.classList.remove('dropdown-active');
                MobLinkResources.classList.remove('dropdown-active');
                MobPanelTracker.style.maxHeight = '0';
                MobPanelCitizens.style.maxHeight = '0';
                MobPanelNews.style.maxHeight = '0';
                MobPanelResources.style.maxHeight = '0';
                menuPanel.style.transitionDelay = "200ms";
            }

            menuPanel.style.maxHeight = '0';
            menuTrigger.classList.remove('mobile-menu-open');
            menuPanel.style.transitionDelay = "0ms";

        } else {

            menuTrigger.classList.add('mobile-menu-open');
            menuPanel.style.maxHeight = menuPanel.scrollHeight + 'px';
        };
    };
};

if (secondaryMenu) {
    for (i = 0; i < secondaryMenu.length; i++) {
        secondaryMenu[i].onclick = function () {

            if (this.classList.contains('dropdown-active')) {
                this.classList.remove("dropdown-active");
                var panel = this.nextElementSibling;
                panel.style.maxHeight = null;
            } else {
                MobLinkTracker.classList.remove('dropdown-active');
                MobLinkCitizens.classList.remove('dropdown-active');
                MobLinkNews.classList.remove('dropdown-active');
                MobLinkResources.classList.remove('dropdown-active');
                MobPanelTracker.style.maxHeight = '0';
                MobPanelCitizens.style.maxHeight = '0';
                MobPanelNews.style.maxHeight = '0';
                MobPanelResources.style.maxHeight = '0';
                this.classList.add("dropdown-active");
                var panel = this.nextElementSibling;
                panel.style.maxHeight = panel.scrollHeight + 'px';
                menuPanel.style.maxHeight = menuPanel.scrollHeight + panel.style.maxHeight;
            }
        }
    }
};

// WIDESCREEN NAV 

var WideLinkTracker = document.getElementById("navlink-trackers-w");
var WideLinkCitizens = document.getElementById("navlink-citizens-w");
var WideLinkNews = document.getElementById("navlink-news-w");
var WideLinkResources = document.getElementById("navlink-resources-w");
var WidePanelTracker = document.getElementById("nav-trackers-w");
var WidePanelCitizens = document.getElementById("nav-citizens-w");
var WidePanelNews = document.getElementById("nav-news-w");
var WidePanelResources = document.getElementById("nav-resources-w");

if (WideLinkTracker) {
    WideLinkTracker.addEventListener('click', trackerToggle);

    function trackerToggle() {
        if (WideLinkTracker.classList.contains('dropdown-open')) {
            WidePanelTracker.style.maxHeight = '0';
            WideLinkTracker.classList.remove('dropdown-open');
        } else {
            WideLinkCitizens.classList.remove('dropdown-open');
            WideLinkNews.classList.remove('dropdown-open');
            WideLinkResources.classList.remove('dropdown-open');
            WidePanelCitizens.style.maxHeight = '0';
            WidePanelNews.style.maxHeight = '0';
            WidePanelResources.style.maxHeight = '0';
            WideLinkTracker.classList.add('dropdown-open');
            WidePanelTracker.style.maxHeight = WidePanelTracker.scrollHeight + 'px';
        };
    };
};

if (WideLinkCitizens) {
    WideLinkCitizens.addEventListener('click', CitizensToggle);

    function CitizensToggle() {
        if (WideLinkCitizens.classList.contains('dropdown-open')) {
            WidePanelCitizens.style.maxHeight = '0';
            WideLinkCitizens.classList.remove('dropdown-open');
        } else {
            WideLinkTracker.classList.remove('dropdown-open');
            WideLinkNews.classList.remove('dropdown-open');
            WideLinkResources.classList.remove('dropdown-open');
            WidePanelTracker.style.maxHeight = '0';
            WidePanelNews.style.maxHeight = '0';
            WidePanelResources.style.maxHeight = '0';
            WideLinkCitizens.classList.add('dropdown-open');
            WidePanelCitizens.style.maxHeight = WidePanelCitizens.scrollHeight + 'px';
        };
    };
};

if (WideLinkNews) {
    WideLinkNews.addEventListener('click', NewsToggle);

    function NewsToggle() {
        if (WideLinkNews.classList.contains('dropdown-open')) {
            WidePanelNews.style.maxHeight = '0';
            WideLinkNews.classList.remove('dropdown-open');
        } else {
            WideLinkTracker.classList.remove('dropdown-open');
            WideLinkCitizens.classList.remove('dropdown-open');
            WideLinkResources.classList.remove('dropdown-open');
            WidePanelTracker.style.maxHeight = '0';
            WidePanelCitizens.style.maxHeight = '0';
            WidePanelResources.style.maxHeight = '0';
            WideLinkNews.classList.add('dropdown-open');
            WidePanelNews.style.maxHeight = WidePanelNews.scrollHeight + 'px';
        };
    };
};

if (WideLinkResources) {
    WideLinkResources.addEventListener('click', ResourcesToggle);

    function ResourcesToggle() {
        if (WideLinkResources.classList.contains('dropdown-open')) {
            WidePanelResources.style.maxHeight = '0';
            WideLinkResources.classList.remove('dropdown-open');
        } else {
            WideLinkTracker.classList.remove('dropdown-open');
            WideLinkCitizens.classList.remove('dropdown-open');
            WideLinkNews.classList.remove('dropdown-open');
            WidePanelTracker.style.maxHeight = '0';
            WidePanelCitizens.style.maxHeight = '0';
            WidePanelNews.style.maxHeight = '0';
            WideLinkResources.classList.add('dropdown-open');
            WidePanelResources.style.maxHeight = WidePanelResources.scrollHeight + 'px';
        };
    };
};