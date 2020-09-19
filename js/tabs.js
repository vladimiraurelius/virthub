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

    function showTabContent(i=0) {
        content[i].style.display = 'flex';
        tab[i].classList.add(activeClass);        
    }

    function createContent (i = 0) {
        const arrName = ['Juli', 'Roksana', 'ViktoriaVirt', 'Sofi', 'EvaPorochnaya','Svetlana', 
        'MeriOgonek', 'Nyanya','alinkaMalinka', 'Alisa_alferova', 'Prokaznitsa','GalinaRazvrat','Merry',
        'Veronika','Mashulka', 'Razratnica','Juliann' ];
        
        for(let j=1; j<10; j++) { 
        const modelName = arrName[j-1];          

        const profilePreview = document.createElement('a');
        profilePreview.className = 'tabs-content__inner profile-preview';
        profilePreview.setAttribute('href','profile.html');
    
        const profilePreviewHead = document.createElement('div');
        profilePreviewHead.className = 'profile-preview__head';
    
        const profilePreviewLogo = document.createElement('div');
        profilePreviewLogo.className = 'logo logo-min';
        profilePreviewLogo.innerText = 'Virt';
    
        const profilePreviewLogoExcept = document.createElement('span');
        profilePreviewLogoExcept.className = 'logo__excerpt logo__excerpt-min';
        profilePreviewLogoExcept.innerText = 'Hub';
    
        const profilePreviewPhoto = document.createElement('div');
        profilePreviewPhoto.className = 'profile-preview__photo';
        
        const profilePreviewImg = document.createElement('img');
        profilePreviewImg.className = 'profile-preview__img';
        profilePreviewImg.src = `img/mini/mini_${j}.png`;
    
        const profilePreviewState = document.createElement('div');
        profilePreviewState.className = 'profile-preview__state';
        profilePreviewState.innerText = 'online...';
    
        const profilePreviewInfo = document.createElement('div');
        profilePreviewInfo.className = 'profile-preview__info';
    
        const profilePreviewName = document.createElement('div');
        profilePreviewName.className = 'profile-preview__name';
        profilePreviewName.innerText = `${modelName}`;    
    
        const profilePreviewSocial = document.createElement('ul');
        profilePreviewSocial.className = 'profile-preview__social';
    
        const profilePreviewIconV = document.createElement('li');
        profilePreviewIconV.className = 'profile-preview__icon profile-preview__icon--current icon-viber';        
        const profilePreviewIconW = document.createElement('li');
        profilePreviewIconW.className = 'profile-preview__icon profile-preview__icon--current icon-whatsapp';
        const profilePreviewIconT = document.createElement('li');
        profilePreviewIconT.className = 'profile-preview__icon profile-preview__icon--current icon-telegram';
        const profilePreviewIconS = document.createElement('li');
        profilePreviewIconS.className = 'profile-preview__icon profile-preview__icon--current icon-skype';
    
    
        profilePreviewSocial.appendChild(profilePreviewIconV);
        profilePreviewSocial.appendChild(profilePreviewIconW);
        profilePreviewSocial.appendChild(profilePreviewIconT);
        profilePreviewSocial.appendChild(profilePreviewIconS);
        profilePreviewInfo.appendChild(profilePreviewName);
        profilePreviewInfo.appendChild(profilePreviewSocial);//info
    
        profilePreviewPhoto.appendChild(profilePreviewImg);
        profilePreviewPhoto.appendChild(profilePreviewState);//photo
    
        profilePreviewLogo.appendChild(profilePreviewLogoExcept);
        profilePreviewHead.appendChild(profilePreviewLogo);//head
    
        profilePreview.appendChild(profilePreviewHead);
        profilePreview.appendChild(profilePreviewPhoto);
        profilePreview.appendChild(profilePreviewInfo);   
    
        
        content[i].appendChild(profilePreview);
        }
    }

    hideTabContent();
    showTabContent();   
    createContent ();    
    

    header.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains(tabSelector.replace(/\./, "")) || 
            target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
            ) {
                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item){
                        hideTabContent();
                        showTabContent(i);
                        createContent(i);                                               
                    }
                });
            }            

    });
    
};

tabs('.tabs-title', '.tabs-title__name', '.tabs-content', 'tabs-title__name--active');