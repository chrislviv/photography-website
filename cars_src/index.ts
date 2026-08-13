console.log("Cars section loaded.");

// Adjusts height of dropdown menu based on contents
// (kept for compatibility — cars nav has no dropdowns but this is harmless)
document.addEventListener('DOMContentLoaded', (event: Event) => {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach((navItem) => {

      const dropdownMenuDark = navItem.querySelector('.dropdown-menu-dark') as HTMLElement;
      const dropdownBackdropDark = navItem.querySelector('.dropdown-backdrop-dark') as HTMLElement;

        navItem.addEventListener('mouseenter', (event: Event) => {
            if (dropdownMenuDark && dropdownBackdropDark) {
                const count = dropdownMenuDark.childElementCount;
                dropdownBackdropDark.style.height =
                    count === 0 ? '0px'   :
                    count === 2 ? '7.5rem'  :
                    count === 3 ? '10.5rem'  :
                    count === 4 ? '13.5rem' :
                    count === 5 ? '16.5rem' : '7.5rem';
            }
        });

        navItem.addEventListener('mouseleave', (event: Event) => {
            if (dropdownMenuDark && dropdownBackdropDark) {
                dropdownBackdropDark.style.height = '0px';
            }
        });
    });
});

// Close mobile nav drawer when a link is clicked
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('nav-toggle') as HTMLInputElement | null;
    const drawer = document.querySelector('.nav-drawer');

    if (toggle && drawer) {
        drawer.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                toggle.checked = false;
            });
        });
    }
});
