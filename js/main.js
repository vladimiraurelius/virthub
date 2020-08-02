const tabs = (headerSelector, tabSelector, contentSelector, activeClass) =>{
    const header = document.querySelector(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item =>{
            item.style.display = "none";
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });

    }

    function showTabContent(i = 0) {
        content[i].style.display = 'flex';
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains(tabSelector.replace(/\./, "")) || 
            target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
            ) {
                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item){
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
    });
    
};

tabs('.tabs-title', '.tabs-title__name', '.tabs-content', 'tabs-title__name--active');