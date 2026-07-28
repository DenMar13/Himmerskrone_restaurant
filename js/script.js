let main_content = document.querySelector('.main_content');

const nav_about_as = document.getElementById('about_us');
const nav_gallery = document.getElementById('gallery');
const nav_menu = document.getElementById('menu');
const nav_events = document.getElementById('events');
const nav_contacts = document.getElementById('contacts');

nav_about_as.addEventListener( "click" , openPartAboutAs);
nav_gallery.addEventListener( "click" , openPartGallery);
nav_menu.addEventListener( "click" , openPartMenu);
nav_events.addEventListener( "click" , openPartEvents);
nav_contacts.addEventListener( "click" , openPartContacts);

function openPartAboutAs() {
    removePart();
    
    createPart(0);

    nav_about_as.classList.add('active');

    let part_about_us = document.querySelector('.part_about_us');

    let p1 = document.createElement('p');

    p1.className = "description1";
    p1.innerHTML = 'Restaurant: Himmelskrone';

    let p2 = document.createElement('p');

    p2.className = "description2";
    p2.innerHTML = 'Place: Tyrol, Austria';

    let p3 = document.createElement('p');

    p3.className = "description3";
    p3.innerHTML = 'Himmelskrone is an ancient alpine sanctuary suspended above the clouds, high in the Tyrolean Alps of Austria. Perched at 3,500 meters, the restaurant offers an intimate fine-dining experience where stone, fire, and sky meet. The cuisine is rooted in alpine traditions, elevated through refined technique and seasonal ingredients — prime meats, mountain herbs, aged cheeses, and slow-crafted dishes inspired by centuries of highland hospitality. At Himmelskrone, the ascent is part of the ritual, and every meal feels timeless, serene, and unforgettable.';

    part_about_us.append(p1);
    part_about_us.append(p2);
    part_about_us.append(p3);
}

function openPartGallery() {
    removePart();

    createPart(1);

    nav_gallery.classList.add('active');

    let part_gallery = document.querySelector('.part_gallery');
    
    let gallery_content = document.createElement('div');

    gallery_content.className = 'gallery_content';
    gallery_content.innerHTML = `<div class="back_slide"></div>
                                 <img id="0" class="current_slide" alt="logo">
                                 <div class="next_slide"></div><div class="mini_gallery"></div>`

    part_gallery.append(gallery_content);

    let current_slide = document.querySelector('.current_slide');

    let back_slide = document.querySelector('.back_slide');

    let next_slide = document.querySelector('.next_slide');

    current_slide.src = 'img/galleryPicture/gallery_1.png';

    let mini_gallery = document.querySelector('.mini_gallery');

    let img_src = collectionImg();

    img_src.forEach((item, index) => { 
        let slide = document.createElement('img');
        slide.classList.add('slide', `slide_${index}`);
        slide.id = index;
        slide.src = item;

        mini_gallery.append(slide);
    });

    let slideList = document.querySelectorAll('.slide');

    back_slide.addEventListener( "click" , () => changeSlide(current_slide, current_slide.id, slideList, 1));
    next_slide.addEventListener( "click" , () => changeSlide(current_slide, current_slide.id, slideList, 2));

    for (let slide of slideList) {
        slide.addEventListener("click", () => changeSlide(current_slide, slide.id, slideList, 3))
    }

    let active_slide = document.querySelector(`.slide_${current_slide.id}`);
    active_slide.classList.add('active');
}

function openPartMenu() {
    removePart();

    createPart(2);

    nav_menu.classList.add('active');

    let part_name = document.querySelector('.part_name');

    part_name.style.background = 'linear-gradient(180deg, rgba(235, 243, 255, 0.54) 0%,rgba(170, 195, 228, 0.52) 45%,rgba(130, 158, 194, 0.54) 100%)'
    part_name.style.backdropFilter = 'blur(13px)';

    let part_menu = document.querySelector('.part_menu');

    let menu_nav = document.createElement('div');

    menu_nav.className = 'menu_nav';
    menu_nav.innerHTML = `<div class="menu-drop-down-list">
                            <span></span>
                        </div>  
                        <ul>
                            <li><a id="1" class="nav breakfast" href="#">Breakfast</a></li>
                            <li><a id="2" class="nav meat_dishes" href="#">Meat</a></li>
                            <li><a id="3" class="nav fish_dishes" href="#">Fish & seafood</a></li>
                            <li><a id="4" class="nav salads" href="#">Salads</a></li>
                            <li><a id="5" class="nav snacks" href="#">Snacks</a></li>
                            <li><a id="6" class="nav desserts" href="#">Desserts</a></li>
                            <li><a id="7" class="nav drinks" href="#">Drinks</a></li>
                        </ul>`;

    let menu_content = document.createElement('div');

    menu_content.className = 'menu_content';

    part_menu.append(menu_nav);
    part_menu.append(menu_content);

    let cur_position = document.createElement('p');

    cur_position.className = 'cur_position';

    menu_nav.append(cur_position);

    let drop_down_list = document.querySelector('.menu-drop-down-list');
    let drop_down_list_content = document.querySelector('.menu_nav > ul');

    drop_down_list.addEventListener( "click" , () => openDropDownMenu(drop_down_list, menu_nav, drop_down_list_content, cur_position));

    function openDropDownMenu(drop_down_list, menu_nav, drop_down_list_content, cur_position) {
        if (drop_down_list.id == 0) {
            drop_down_list.classList.add('active');
            menu_nav.classList.add('active');
            drop_down_list_content.classList.add('active');
            cur_position.classList.add('active');

            drop_down_list.id = 1;
        }
        else {
            drop_down_list.classList.remove('active');
            menu_nav.classList.remove('active');
            drop_down_list_content.classList.remove('active');
            cur_position.classList.remove('active');

            drop_down_list.id = 0;
        }
    }

    let navList = document.querySelectorAll('.nav');
    
    let default_select = document.querySelector('.breakfast');
    changePartMenu(default_select, navList, 1, menu_content); //за замовчуванням

    for (let nav of navList) {
        nav.addEventListener("click", () => changePartMenu(nav, navList, nav.id, menu_content));
        nav.addEventListener("click", () => closeDropDownMenu(drop_down_list, menu_nav, drop_down_list_content, cur_position));
    }

    function closeDropDownMenu(drop_down_list, menu_nav, drop_down_list_content, cur_position) {
        drop_down_list.classList.remove('active');
        menu_nav.classList.remove('active');
        drop_down_list_content.classList.remove('active');
        cur_position.classList.remove('active');

        drop_down_list.id = 0;
    }
}

function openPartEvents() {
    removePart();

    createPart(3);

    nav_events.classList.add('active');

    let part_events = document.querySelector('.part_events');

    let part_events_content = document.createElement('div');

    part_events_content.className = 'part_events_content';

    part_events.append(part_events_content);

    let wedding_event = document.createElement('div');
    wedding_event.classList.add('event', 'wedding_event');

    let birthday_event = document.createElement('div');
    birthday_event.classList.add('event', 'birthday_event');

    let new_year_event = document.createElement('div');
    new_year_event.classList.add('event', 'new_year_event');

    part_events_content.append(wedding_event);
    part_events_content.append(birthday_event);
    part_events_content.append(new_year_event);

    let eventList = document.querySelectorAll('.event');

    eventList.forEach((event, index) => { 
        event.id = index;
        renderPartEvents(event.id, event);
    });
}

function openPartContacts() {
    removePart();

    createPart(4);

    nav_contacts.classList.add('active');

    let part_contacts = document.querySelector('.part_contacts');

    let part_contacts_form = document.createElement('form');

    part_contacts_form.className = 'part_contacts_form';
    part_contacts_form.action = '';
    part_contacts_form.method = 'POST';

    part_contacts.append(part_contacts_form);

    let reserve_content = document.createElement('div');

    reserve_content.className = 'reserve_content';

    part_contacts_form.append(reserve_content);

    renderPartContacts ('label', ['contact_titles', 'date_label'], "Date reserve: ", "dateReserve", null, null, null, reserve_content);
    renderPartContacts ('input', ['contact_inputs', 'date_reserve'], null, "dateReserve", "date", true, null, reserve_content);

    let date_reserve = document.querySelector('.date_reserve');

    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDate();

    date_reserve.value = createDate(year, month, day);

    renderPartContacts ('label', ['contact_titles', 'time_label'], "Time reserve: ", "timeReserve", null, null, null, reserve_content);
    renderPartContacts ('input', ['contact_inputs', 'time_reserve'], null, "timeReserve", "time", true, null, reserve_content);

    renderPartContacts ('label', ['contact_titles', 'kol_guests_label'], "Guests: ", "kolGuestsInput", null, null, null, reserve_content);
    renderPartContacts ('input', ['contact_inputs', 'kol_guests_input'], null, "kolGuestsInput", "number", true, null, reserve_content);

    let kol_guests_input = document.querySelector('.kol_guests_input');

    kol_guests_input.min = 1;
    kol_guests_input.max = 20;
    kol_guests_input.value = 2;

    kol_guests_input.oninput  = function() {
        if (+kol_guests_input.value > +kol_guests_input.max) {
            kol_guests_input.value = kol_guests_input.max;
        }
        else if (+kol_guests_input.value < +kol_guests_input.min) {
            kol_guests_input.value = kol_guests_input.min;
        }
    };

    renderPartContacts ('label', ['contact_titles', 'duration_label'], "Duration: ", "durationInput", null, null, null, reserve_content);
    renderPartContacts ('input', ['contact_inputs', 'duration_reserve_input'], null, "durationInput", "text", true, null, reserve_content);

    let duration_reserve_input = document.querySelector('.duration_reserve_input');

    duration_reserve_input.list = "durationOptions";
    duration_reserve_input.setAttribute('maxlength', '10');
    duration_reserve_input.setAttribute('list', 'durationOptions');
   
    let duration_reserve_datalist = document.createElement('datalist');
    duration_reserve_datalist.id = 'durationOptions';

    reserve_content.append(duration_reserve_input);
    reserve_content.append(duration_reserve_datalist);

    let min_duration = 1;
    let max_duration = 4;

    for (let i = min_duration; i <= max_duration; i+=0.5) {
        let option = document.createElement('option');
        option.className = 'option_duration';
        option.value = `${i} hours`;
        duration_reserve_datalist.append(option);
    }

    let client_info_content = document.createElement('div');

    client_info_content.className = 'client_info_content';

    part_contacts_form.append(client_info_content);

    renderPartContacts ('label', ['contact_titles', 'client_name_label'], "Your name: ", "ClientNameInput", null, null, null, client_info_content);
    renderPartContacts ('input', ['contact_inputs', 'client_name_input'], null, "ClientNameInput", "text", true, '20', client_info_content);

    renderPartContacts ('label', ['contact_titles', 'client_tel_label'], "Phone number: ", "ClientTelInput", null, null, null, client_info_content);
    renderPartContacts ('input', ['contact_inputs', 'client_tel_input'], null, "ClientTelInput", "tel", true, '20', client_info_content);

    renderPartContacts ('label', ['contact_titles', 'client_email_label'], "Your email: ", "ClientEmailInput", null, null, null, client_info_content);
    renderPartContacts ('input', ['contact_inputs', 'client_email_input'], null, "ClientEmailInput", "email", true, '50', client_info_content);

    renderPartContacts ('label', ['contact_titles', 'client_textarea_label'], "Comment: ", "ClientCommentTextarea", null, null, null, client_info_content);
    renderPartContacts ('textarea', ['contact_inputs', 'client_comment_textarea'], null, "ClientCommentTextarea", null, false, '100', client_info_content);

    renderPartContacts ('label', ['contact_titles', 'client_empty_label'], " ", null, null, null, null, client_info_content);
    renderPartContacts ('button', ['client_submit'], "SEND", "ClientSubmit", 'submit', null, null, client_info_content);

    let our_number = document.createElement('p');

    our_number.className = 'our_number';
    our_number.innerHTML = `Our contacts: <br/> +(380) 66-299-94-19`;

    reserve_content.append(our_number);

    let our_socials_block = document.createElement('div');

    our_socials_block.className = 'our_socials_block';

    reserve_content.append(our_socials_block);
    
    our_socials_block.innerHTML = `<p class="our_socials">Our socials: </p>
                                   <div class="footer-icon-block">
                                        <a id="0" href="https://www.instagram.com/restaurant_hotel_ai/" target="_blank">
                                            <i class="fab fa-instagram" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div class="footer-icon-block">
                                        <a id="1" href="#" target="_blank">
                                            <i class="fab fa-google-plus-g" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <div class="footer-icon-block">
                                        <a id="2" href="#" target="_blank">
                                            <i class="fab fa-telegram" aria-hidden="true"></i>
                                        </a>
                                   </div>`;

    let socialsList = document.querySelectorAll('.footer-icon-block');

    socialsList.forEach((social, index) => {
        social.addEventListener( "click" , () => social.firstElementChild.click());
    });
}

function removePart() {
    if (main_content.firstChild) {
        main_content.firstChild.remove();
    }

    let nav_elements = document.querySelectorAll('nav a');

    nav_elements.forEach((nav_item) => {
        nav_item.classList.remove('active');
    });
}

function createPart(part) {
    const part_classes = ['part_about_us', 'part_gallery', 'part_menu', 'part_events', 'part_contacts'];
    const part_names = ['ABOUT US', 'GALLERY', 'MENU', 'EVENTS', 'CONTACTS'];

    let div = document.createElement('div');
    div.className = part_classes[part];

    main_content.append(div);

    let h1 = document.createElement('h1');

    h1.className = "part_name";
    h1.innerHTML = `${part_names[part]}`;

    div.append(h1);

    let button_exit = document.createElement('div');
    button_exit.id = 'button_exit';

    div.append(button_exit);

    let exit_cross_1 = document.createElement('div');
    let exit_cross_2 = document.createElement('div');
    
    exit_cross_1.id = 'exit_cross_1';
    exit_cross_2.id = 'exit_cross_2';
    
    button_exit.append(exit_cross_1);
    button_exit.append(exit_cross_2);
    
    button_exit.onmouseenter = function () {
        this.style.cursor = 'pointer';
        exit_cross_1.style.background = exit_cross_2.style.background = 'white';
        exit_cross_1.style.boxShadow = exit_cross_2.style.boxShadow = '0px 0px 8px 4px white';
    };

    button_exit.onmouseleave = function () {
        exit_cross_1.style.background = exit_cross_2.style.background = 'rgba(255, 255, 255, 0.5)';
        exit_cross_1.style.boxShadow = exit_cross_2.style.boxShadow = 'none';
    };
    
    button_exit.addEventListener( "click" , () => removePart());
}

function changeSlide(slide, id, slideList, type) {
    let img_src = collectionImg();

    if (type === 1) { //back
        slide.id = --slide.id;

        if (slide.id < 0) {
            slide.id = img_src.length - 1;
            slide.src = img_src[slide.id];
        }
        else {
            slide.src = img_src[slide.id];
        }
    }
    else if (type === 2) { //next
        slide.id = ++slide.id;

        if (slide.id > img_src.length - 1) {
            slide.id = 0;
            slide.src = img_src[slide.id];
        }
        else {
            slide.src = img_src[slide.id];
        }
    }
    else if (type === 3) { //міні-галерея
        slide.id = id;
        slide.src = img_src[slide.id];
    }

    for (let slide of slideList) {
        slide.classList.remove('active');
    }

    let active_slide = document.querySelector(`.slide_${slide.id}`);
    active_slide.classList.add('active');
}

function changePartMenu(nav, navList, navID, menu_content) {
    //Обнулення menu_content
    if (menu_content.firstChild) {
        menu_content.innerHTML = '';
    }

    navList.forEach((nav_item) => {
        nav_item.classList.remove('active');
    });

    nav.classList.add('active');

    let cur_position = document.querySelector('.cur_position');

    cur_position.innerHTML = `${nav.textContent}`;

    renderMenu(navID, menu_content);
}

function renderMenu(category, container) {
    fetch('./data/menuList.json').then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        let currentMenuPage = 
            (category == 1) ? data['breakfast'] :
            (category == 2) ? data['meat'] :
            (category == 3) ? data['fish_and_seafood'] :
            (category == 4) ? data['salads'] :
            (category == 5) ? data['snacks'] :
            (category == 6) ? data['desserts'] :
            (category == 7) ? data['drinks'] : null;
        
        let menu_text = document.createElement('div');

        menu_text.className = 'menu_text';

        let menu_pictures = document.createElement('div');
        
        menu_pictures.className = 'menu_pictures';

        container.append(menu_text);
        container.append(menu_pictures);

        let list_subgroups = new Set();

        currentMenuPage.forEach((item, index) => {
            list_subgroups.add(item['group']);
        });

        list_subgroups.forEach((subgroup, index) => {
            let menu_subgroup = document.createElement('div');
            menu_subgroup.className = 'menu_subgroup';
            
            menu_text.append(menu_subgroup);

            let menu_subgroup_name = document.createElement('p');
            menu_subgroup_name.className = 'menu_subgroup_name';
            menu_subgroup_name.innerHTML = `${subgroup}`;
            
            menu_subgroup.append(menu_subgroup_name);

            currentMenuPage.forEach((item, index) => {
                if (item['group'] === subgroup) {
                    let position_header = document.createElement('p');
                    position_header.classList.add('menu_position_header', `menu_position_header_${index}`);

                    let position_name = document.createElement('p');
                    position_name.className = 'menu_position_name';
                    position_name.innerHTML = `${item['name']}`;

                    let position_price = document.createElement('p');
                    position_price.className = 'menu_position_price';
                    position_price.innerHTML = `${item['price']}`;

                    position_header.append(position_name);
                    position_header.append(position_price);

                    let position_content = document.createElement('p');
                    position_content.className = 'menu_position_content';

                    let description = document.createElement('p');
                    description.className = 'menu_description';
                    description.innerHTML = `(${item['description']})`;

                    let weight = document.createElement('p');
                    weight.className = 'position_weight';
                    weight.innerHTML = `${item['weight']}`;

                    position_content.append(description);
                    position_content.append(weight);

                    menu_subgroup.append(position_header);
                    menu_subgroup.append(position_content);

                    let picture_item = document.createElement('div');

                    picture_item.classList.add('block_picture', `block_picture_${index}`);
                    menu_pictures.append(picture_item);
                    
                    let picture_name = document.createElement('p');

                    picture_name.classList.add('name_picture', `name_picture_${index}`);
                    picture_name.innerHTML = `${item['name']}`;

                    let picture_img = document.createElement('img');

                    picture_img.classList.add('dish_picture', `dish_picture_${index}`);
                    picture_img.src = `${item['picture']}`;

                    picture_item.append(picture_name);
                    picture_item.append(picture_img);
                }
            });
        });

        const isSmallScreen = window.matchMedia("(max-width: 1440px)").matches;

        let menuGalleryList = document.querySelectorAll('.block_picture');
        let shift = 0;

        menuGalleryList.forEach((picture, index) => {
            
                if (index%2 !== 0) {
                    picture.style.transform += `translateY(${shift}px)`;    
                    shift += isSmallScreen ? -60 : 60;

                    if (isSmallScreen) {
                        picture.style.transform += ` translateY(-30px) translateX(30px)`;  
                    }
                } 
                else {         
                    picture.style.transform += ` translateY(${shift}px)`;    
                    shift += isSmallScreen ? 0 : 30;
                }

            
            let position = document.querySelector(`.menu_position_header_${index}`);

            picture.onmouseenter = function () {
                position.style.boxShadow = '0px 14px 0px 0px rgba(252, 252, 252, 0.78)';
            };

            picture.onmouseleave = function () {
                position.style.boxShadow = '';
            };
        });

        let menuPositionList = document.querySelectorAll('.menu_position_header');

        menuPositionList.forEach((position, index) => {
            let picture = document.querySelector(`.block_picture_${index}`);
            let current_transform = picture.style.transform;

            let picture2 = document.querySelector(`.dish_picture_${index}`);

            position.onmouseenter = function () {
                picture.style.boxShadow = '0px 0px 22px 13px rgba(255, 255, 255, 0.83)';
                if (isSmallScreen) {
                    picture.style.transform = current_transform + ' ' + 'scale(1.2)';
                }
                else {
                    picture.style.transform = current_transform + ' ' + 'scale(1.3)';
                }
                picture.style.zIndex = 101;
            };

            position.onmouseleave = function () {
                picture.style.boxShadow = '';
                picture.style.transform = current_transform + ' ' + 'scale(1)';
                picture.style.zIndex = 99;
            };
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function renderPartEvents(id, container) {
    fetch('./data/eventList.json').then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        let arr_events = data['events'];

        let event_header = document.createElement('p');

        event_header.className = 'event_header';
        event_header.innerHTML = `${arr_events[id]['name']}`;

        container.append(event_header);

        let picture_item = document.createElement('div');

        picture_item.classList.add('block_picture_event', `block_picture_event_${id}`);
        container.append(picture_item);
                    
        let picture_img = document.createElement('img');

        picture_img.classList.add('event_picture', `event_picture_${id}`);
        picture_img.src = `${arr_events[id]['picture']}`;

        picture_item.append(picture_img);

        let event_description = document.createElement('p');

        event_description.className = 'event_description';
        event_description.innerHTML = `${arr_events[id]['description']}`;

        container.append(event_description);

        let kol_guests = document.createElement('p');

        kol_guests.className = 'kol_guests';
        kol_guests.innerHTML = `${arr_events[id]['kol_guests']}.`;

        container.append(kol_guests);

        let booking_time = document.createElement('p');

        booking_time.className = 'booking_time';
        booking_time.innerHTML = `book ${arr_events[id]['booking_time']} in advance.`;

        container.append(booking_time);

        let block_reserve = document.createElement('div');

        block_reserve.className = 'block_reserve';

        container.append(block_reserve);

        let btn_reserve = document.createElement('button');

        btn_reserve.className = 'btn_reserve';
        btn_reserve.textContent = 'RESERVE';
        btn_reserve.type = 'submit';

        block_reserve.append(btn_reserve);

        let price_info = document.createElement('p');

        price_info.className = 'booking_price';
        price_info.innerHTML = `${arr_events[id]['booking_price']}`;

        block_reserve.append(price_info);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function renderPartContacts(tag, arr_class, text, id, type, required, maxLength, container) {
    let elem = document.createElement(tag);

    for (let class_name of arr_class) {
        elem.classList.add(class_name);
    }

    if (tag === 'label') { 
        elem.textContent = text;
        elem.setAttribute('for', id);
    }
    else if (tag === 'input') {
        elem.id = id;
        elem.type = type;
        elem.required = required;
        elem.setAttribute('maxlength', maxLength);
    }
    else if (tag === 'textarea') {
        elem.id = id;
        elem.required = required;
        elem.setAttribute('maxlength', maxLength);
    }
    else if (tag === 'button') {
        elem.textContent = text;
        elem.id = id;
        elem.type = type;
    }

    container.append(elem);
}

function createDate (yyyy, mm, dd) {
    mm = ++mm;
    mm = (mm > 9) ? mm : '0' + mm;
    dd = (dd > 9) ? dd : '0' + dd;

    return `${yyyy}-${mm}-${dd}`;
}

function collectionImg() { //Колекція зображень для галереї
    let arr_img = ['img/galleryPicture/gallery_1.png', 'img/galleryPicture/gallery_2.png', 'img/galleryPicture/gallery_3.png'];

    return arr_img;
}
