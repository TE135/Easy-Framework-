
// NAVBAR DESIGN ONE

const navbarToggler_one = document.querySelector(
    ".navbar_toggler_one"
);

const navbarCollapse_one = document.querySelector(
    ".navbar_collapse_one"
);

if (navbarToggler_one && navbarCollapse_one) {
    navbarToggler_one.addEventListener("click", function () {

        navbarCollapse_one.classList.toggle("is_open_one");

        const isExpanded_one =
            navbarCollapse_one.classList.contains("is_open_one");

        navbarToggler_one.setAttribute(
            "aria-expanded",
            String(isExpanded_one)
        );
    });
}
/* ===============================================================================================
   NAVBAR DESIGN TWO - JAVASCRIPT
========================================== ===========================================================*/

// Drawer Elements

const drawerToggle_two = document.querySelector(
    ".drawer_toggle_two"
);

const drawer_two = document.querySelector(
    "#navbar_drawer_two"
);

const drawerClose_two = document.querySelector(
    ".drawer_close_two"
);


// Open Drawer

if (drawerToggle_two && drawer_two) {

    drawerToggle_two.addEventListener("click", function () {

        if (!drawer_two.open) {
            drawer_two.showModal();
        }

        drawerToggle_two.setAttribute(
            "aria-expanded",
            "true"
        );

    });

}


// Close Drawer Button

if (drawerClose_two && drawer_two) {

    drawerClose_two.addEventListener("click", function () {
        drawer_two.close();
    });

}


// Sync Toggle State When Drawer Closes

if (drawer_two && drawerToggle_two) {

    drawer_two.addEventListener("close", function () {

        drawerToggle_two.setAttribute(
            "aria-expanded",
            "false"
        );

    });


    // Close When Clicking Outside the Drawer

    drawer_two.addEventListener("click", function (event) {

        if (event.target === drawer_two) {
            drawer_two.close();
        }

    });

}


// ==========================================
// DROPDOWN MENU
// ==========================================

const dropdownButtons_two = document.querySelectorAll(
    ".nav_dropdown_toggle_two"
);

dropdownButtons_two.forEach(function (button_two) {

    button_two.addEventListener("click", function () {

        const parent_two = button_two.closest(
            ".nav_dropdown_two"
        );

        const menu_two = parent_two.querySelector(
            ".menu_two"
        );

        const isOpen_two = menu_two.classList.toggle(
            "menu_open_two"
        );

        button_two.setAttribute(
            "aria-expanded",
            String(isOpen_two)
        );

    });

});


// ==========================================
// SEARCH FORM DEMO
// ==========================================

// Search UI is ready, but actual searching
// requires a search function or API.



/* =====================================================================================================
   NAVBAR DESIGN THREE: JAVASCRIPT
=========================================================================================================== */


const navbarToggle_three = document.querySelector(
    ".navbar_toggle_three"
);

const navbarMenu_three = document.querySelector(
    ".navbar_menu_three"
);

// Active Navigation Link
if (navbarMenu_three) {
    navbarMenu_three
        .querySelectorAll(".navbar_link_three")
        .forEach(function (link_three) {

            link_three.addEventListener("click", function () {

                navbarMenu_three
                    .querySelectorAll(".navbar_link_three")
                    .forEach(function (link) {
                        link.classList.remove(
                            "navbar_link_active_three"
                        );
                    });

                link_three.classList.add(
                    "navbar_link_active_three"
                );
            });
        });
}

// Open and Close Mobile Menu
if (navbarToggle_three && navbarMenu_three) {

    navbarToggle_three.addEventListener("click", function () {

        const isOpen_three = navbarMenu_three.classList.toggle(
            "navbar_menu_open_three"
        );

        navbarToggle_three.classList.toggle(
            "navbar_toggle_active_three",
            isOpen_three
        );

        navbarToggle_three.setAttribute(
            "aria-expanded",
            String(isOpen_three)
        );

        navbarToggle_three.setAttribute(
            "aria-label",
            isOpen_three
                ? "Close navigation menu"
                : "Open navigation menu"
        );
    });

    // Close Menu After Clicking a Navigation Link
    navbarMenu_three
        .querySelectorAll(".navbar_link_three")
        .forEach(function (link_three) {

            link_three.addEventListener("click", function () {

                navbarMenu_three.classList.remove(
                    "navbar_menu_open_three"
                );

                navbarToggle_three.classList.remove(
                    "navbar_toggle_active_three"
                );

                navbarToggle_three.setAttribute(
                    "aria-expanded",
                    "false"
                );

                navbarToggle_three.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            });
        });

    // Reset Menu When Returning to Desktop
    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            navbarMenu_three.classList.remove(
                "navbar_menu_open_three"
            );

            navbarToggle_three.classList.remove(
                "navbar_toggle_active_three"
            );

            navbarToggle_three.setAttribute(
                "aria-expanded",
                "false"
            );

            navbarToggle_three.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        }
    });
}



/* =======================================================================================================
   NAVBAR DESIGN FOUR - JAVASCRIPT
========================================== */

const navbarToggle_four = document.querySelector(
    ".navbar_toggle_four"
);

const navbarMenu_four = document.querySelector(
    ".navbar_menu_four"
);

const navbarLinks_four = document.querySelectorAll(
    ".navbar_link_four"
);

// Mobile Menu Toggle
if (navbarToggle_four && navbarMenu_four) {

    navbarToggle_four.addEventListener("click", function () {

        const isOpen_four = navbarMenu_four.classList.toggle(
            "navbar_menu_open_four"
        );

        navbarToggle_four.classList.toggle(
            "navbar_toggle_active_four",
            isOpen_four
        );

        navbarToggle_four.setAttribute(
            "aria-expanded",
            String(isOpen_four)
        );
    });

    // Active Navigation Link
    navbarLinks_four.forEach(function (link_four) {

        link_four.addEventListener("click", function () {

            navbarLinks_four.forEach(function (item_four) {

                item_four.classList.remove(
                    "navbar_active_four"
                );

                item_four.removeAttribute("aria-current");
            });

            link_four.classList.add("navbar_active_four");

            link_four.setAttribute("aria-current", "page");

            // Close menu on mobile
            navbarMenu_four.classList.remove(
                "navbar_menu_open_four"
            );

            navbarToggle_four.classList.remove(
                "navbar_toggle_active_four"
            );

            navbarToggle_four.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    });
}

/* ======================================================================================================
   NAVBAR DESIGN FIVE - JAVASCRIPT
========================================== */

const navbarToggle_five = document.querySelector(
    ".navbar_toggle_five"
);

const navbarMenu_five = document.querySelector(
    ".navbar_menu_five"
);

const navbarLinks_five = document.querySelectorAll(
    ".navbar_link_five"
);


// Mobile Menu Toggle

if (navbarToggle_five && navbarMenu_five) {

    navbarToggle_five.addEventListener("click", function () {

        const isOpen_five = navbarMenu_five.classList.toggle(
            "navbar_menu_open_five"
        );

        navbarToggle_five.classList.toggle(
            "navbar_toggle_active_five",
            isOpen_five
        );

        navbarToggle_five.setAttribute(
            "aria-expanded",
            String(isOpen_five)
        );

        navbarToggle_five.setAttribute(
            "aria-label",
            isOpen_five
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    // Active Link on Click

    navbarLinks_five.forEach(function (link_five) {

        link_five.addEventListener("click", function () {

            navbarLinks_five.forEach(function (item_five) {

                item_five.classList.remove(
                    "navbar_active_five"
                );

                item_five.removeAttribute("aria-current");

            });

            link_five.classList.add("navbar_active_five");

            link_five.setAttribute("aria-current", "page");

            // Close Mobile Menu

            navbarMenu_five.classList.remove(
                "navbar_menu_open_five"
            );

            navbarToggle_five.classList.remove(
                "navbar_toggle_active_five"
            );

            navbarToggle_five.setAttribute(
                "aria-expanded",
                "false"
            );

            navbarToggle_five.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    // Reset Menu When Switching to Desktop

    window.addEventListener("resize", function () {

        if (window.innerWidth > 639) {

            navbarMenu_five.classList.remove(
                "navbar_menu_open_five"
            );

            navbarToggle_five.classList.remove(
                "navbar_toggle_active_five"
            );

            navbarToggle_five.setAttribute(
                "aria-expanded",
                "false"
            );

            navbarToggle_five.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

}


/* =========================================================================================================
   NAVBAR DESIGN SIX - JAVASCRIPT
========================================== */

const navbarToggle_six = document.querySelector(
    ".navbar_toggle_six"
);

const navbarMenu_six = document.querySelector(
    ".navbar_menu_six"
);

const navbarLinks_six = document.querySelectorAll(
    ".navbar_link_six"
);


// Mobile Menu Toggle

if (navbarToggle_six && navbarMenu_six) {

    navbarToggle_six.addEventListener("click", function () {

        const isOpen_six = navbarMenu_six.classList.toggle(
            "navbar_menu_open_six"
        );

        navbarToggle_six.classList.toggle(
            "navbar_toggle_active_six",
            isOpen_six
        );

        navbarToggle_six.setAttribute(
            "aria-expanded",
            String(isOpen_six)
        );

        navbarToggle_six.setAttribute(
            "aria-label",
            isOpen_six
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    // Active Navigation Link

    navbarLinks_six.forEach(function (link_six) {

        link_six.addEventListener("click", function () {

            navbarLinks_six.forEach(function (item_six) {

                item_six.classList.remove(
                    "navbar_active_six"
                );

                item_six.removeAttribute("aria-current");

            });

            link_six.classList.add("navbar_active_six");

            link_six.setAttribute("aria-current", "page");

            // Close Mobile Menu

            navbarMenu_six.classList.remove(
                "navbar_menu_open_six"
            );

            navbarToggle_six.classList.remove(
                "navbar_toggle_active_six"
            );

            navbarToggle_six.setAttribute(
                "aria-expanded",
                "false"
            );

            navbarToggle_six.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    // Reset Menu When Switching to Desktop

    window.addEventListener("resize", function () {

        if (window.innerWidth > 639) {

            navbarMenu_six.classList.remove(
                "navbar_menu_open_six"
            );

            navbarToggle_six.classList.remove(
                "navbar_toggle_active_six"
            );

            navbarToggle_six.setAttribute(
                "aria-expanded",
                "false"
            );

            navbarToggle_six.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

}



/* ======================================================================================================
   NAVBAR DESIGN SEVEN - JAVASCRIPT
========================================== */

const navbarToggle_seven = document.querySelector(
    ".navbar_toggle_seven"
);

const navbarMenu_seven = document.querySelector(
    ".navbar_menu_seven"
);

const navbarLinks_seven = document.querySelectorAll(
    ".navbar_link_seven"
);

const dropdowns_seven = document.querySelectorAll(
    ".dropdown_seven"
);

const submenus_seven = document.querySelectorAll(
    ".submenu_seven"
);


// ==========================================
// MOBILE NAVIGATION TOGGLE
// ==========================================

if (navbarToggle_seven && navbarMenu_seven) {

    navbarToggle_seven.addEventListener("click", function () {

        const isOpen_seven = navbarMenu_seven.classList.toggle(
            "navbar_menu_open_seven"
        );

        navbarToggle_seven.classList.toggle(
            "navbar_toggle_active_seven",
            isOpen_seven
        );

        navbarToggle_seven.setAttribute(
            "aria-expanded",
            String(isOpen_seven)
        );

        // Close dropdowns when closing mobile navigation
        if (!isOpen_seven) {
            closeAllDropdowns_seven();
        }

    });

}


// ==========================================
// CLOSE ALL DROPDOWNS
// ==========================================

function closeAllDropdowns_seven() {

    dropdowns_seven.forEach(function (dropdown_seven) {

        dropdown_seven.classList.remove(
            "dropdown_open_seven"
        );

        const button_seven = dropdown_seven.querySelector(
            ":scope > .dropdown_toggle_seven"
        );

        if (button_seven) {
            button_seven.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    });

    submenus_seven.forEach(function (submenu_seven) {

        submenu_seven.classList.remove(
            "submenu_open_seven"
        );

        const button_seven = submenu_seven.querySelector(
            ":scope > .submenu_toggle_seven"
        );

        if (button_seven) {
            button_seven.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    });

}


// ==========================================
// MAIN DROPDOWN
// ==========================================

dropdowns_seven.forEach(function (dropdown_seven) {

    const button_seven = dropdown_seven.querySelector(
        ":scope > .dropdown_toggle_seven"
    );

    if (!button_seven) return;

    button_seven.addEventListener("click", function (event) {

        event.stopPropagation();

        const willOpen_seven =
            !dropdown_seven.classList.contains(
                "dropdown_open_seven"
            );

        // Close other main dropdowns
        dropdowns_seven.forEach(function (other_seven) {

            if (other_seven !== dropdown_seven) {
                other_seven.classList.remove(
                    "dropdown_open_seven"
                );
            }

        });

        // Toggle current dropdown
        dropdown_seven.classList.toggle(
            "dropdown_open_seven",
            willOpen_seven
        );

        button_seven.setAttribute(
            "aria-expanded",
            String(willOpen_seven)
        );

        // Reset nested menus when main menu closes
        if (!willOpen_seven) {
            const nested_seven = dropdown_seven.querySelectorAll(
                ".submenu_seven"
            );

            nested_seven.forEach(function (submenu_seven) {

                submenu_seven.classList.remove(
                    "submenu_open_seven"
                );

                const subButton_seven = submenu_seven.querySelector(
                    ":scope > .submenu_toggle_seven"
                );

                if (subButton_seven) {
                    subButton_seven.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }

            });
        }

    });

});


// ==========================================
// NESTED SUB MENU
// ==========================================

submenus_seven.forEach(function (submenu_seven) {

    const button_seven = submenu_seven.querySelector(
        ":scope > .submenu_toggle_seven"
    );

    if (!button_seven) return;

    button_seven.addEventListener("click", function (event) {

        event.stopPropagation();

        const isOpen_seven = submenu_seven.classList.toggle(
            "submenu_open_seven"
        );

        button_seven.setAttribute(
            "aria-expanded",
            String(isOpen_seven)
        );

    });

});


// ==========================================
// ACTIVE NAVIGATION LINK
// ==========================================

navbarLinks_seven.forEach(function (link_seven) {

    link_seven.addEventListener("click", function () {

        navbarLinks_seven.forEach(function (item_seven) {

            item_seven.classList.remove(
                "navbar_active_seven"
            );

            item_seven.removeAttribute("aria-current");

        });

        link_seven.classList.add("navbar_active_seven");

        link_seven.setAttribute("aria-current", "page");

        // Close mobile navigation after link click
        if (navbarMenu_seven) {

            navbarMenu_seven.classList.remove(
                "navbar_menu_open_seven"
            );

        }

        if (navbarToggle_seven) {

            navbarToggle_seven.classList.remove(
                "navbar_toggle_active_seven"
            );

            navbarToggle_seven.setAttribute(
                "aria-expanded",
                "false"
            );

        }

        closeAllDropdowns_seven();

    });

});


// ==========================================
// CLOSE MENUS WHEN CLICKING OUTSIDE
// ==========================================

document.addEventListener("click", function (event) {

    if (!event.target.closest(".navbar_seven")) {

        closeAllDropdowns_seven();

        if (navbarMenu_seven) {
            navbarMenu_seven.classList.remove(
                "navbar_menu_open_seven"
            );
        }

        if (navbarToggle_seven) {

            navbarToggle_seven.classList.remove(
                "navbar_toggle_active_seven"
            );

            navbarToggle_seven.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }

});


// ==========================================
// RESET ON DESKTOP RESIZE
// ==========================================

window.addEventListener("resize", function () {

    if (window.innerWidth > 767) {

        if (navbarMenu_seven) {
            navbarMenu_seven.classList.remove(
                "navbar_menu_open_seven"
            );
        }

        if (navbarToggle_seven) {

            navbarToggle_seven.classList.remove(
                "navbar_toggle_active_seven"
            );

            navbarToggle_seven.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }

});

