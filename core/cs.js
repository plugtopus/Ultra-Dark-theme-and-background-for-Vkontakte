chrome['storage'].sync.get(null, function(obj) {
    function hsl2rgb(h, s, l) {
        var r, g, b, m, c, x;
        if (!isFinite(h)) h = 0;
        if (!isFinite(s)) s = 0;
        if (!isFinite(l)) l = 0;
        h /= 60;
        if (h < 0) h = 6 - (-h % 6);
        h %= 6;
        s = Math.max(0, Math.min(1, s / 100));
        l = Math.max(0, Math.min(1, l / 100));
        c = (1 - Math.abs((2 * l) - 1)) * s;
        x = c * (1 - Math.abs((h % 2) - 1));
        if (h < 1) {
            r = c;
            g = x;
            b = 0
        } else if (h < 2) {
            r = x;
            g = c;
            b = 0
        } else if (h < 3) {
            r = 0;
            g = c;
            b = x
        } else if (h < 4) {
            r = 0;
            g = x;
            b = c
        } else if (h < 5) {
            r = x;
            g = 0;
            b = c
        } else {
            r = c;
            g = 0;
            b = x
        };
        m = l - c / 2;
        r = (r + m).toFixed(3);
        g = (g + m).toFixed(3);
        b = (b + m).toFixed(3);
        return [r, g, b]
    }

    function hue() {
        h = document.getElementsByClassName('slider_h')[0].value;
        s = document.getElementsByClassName('slider_s')[0].value;
        l = document.getElementsByClassName('slider_l')[0].value;
        b = document.getElementsByClassName('slider_b')[0].value;
        localStorage.cp_h = h;
        localStorage.cp_s = s;
        localStorage.cp_l = l;
        localStorage.cp_b = b;
        chrome.storage.sync.set({
            cp_h: h,
            cp_s: s,
            cp_l: l,
            cp_b: b
        });
        h = (360 - h * 3.6).toFixed();
        l = 25 + l / 2;
        var g1 = "hsl(" + h + ", " + s + "%, " + (Number(l) + 5) + "%)";
        var g2 = "hsl(" + h + ", " + s + "%, " + l + "%)";
        var g3 = "hsl(" + h + ", " + s + "%, " + (l - 5) + "%)";
        var g3a = "hsla(" + h + ", " + s + "%, " + (l - 5) + "%, 0.8)";
        var rgb = hsl2rgb(h, s, l);
        var svg = '<feColorMatrix type="matrix" values="0 0 0 0 ' + rgb[0] + ' 0 0 0 0 ' + rgb[1] + ' 0 0 0 0 ' + rgb[2] + ' 0 0 0 1 0"/>';
        document.getElementById("hue").innerHTML = svg;
        var i = new Array();
        i[0] = 'html[t="d"] .page_verified,html[t="d"] .nim-dialog.nim-dialog_verified .nim-dialog--verfifed,html[t="d"] .im-page--title-main-verified,html[t="d"] .nim-dialog.nim-dialog_verified.nim-dialog_selected .nim-dialog--verfifed{background-image:url(\'data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="' + g3 + '" d="M5.82 14.82l-1.28.2a.82.82 0 0 1-.9-.51l-.46-1.21a.82.82 0 0 0-.48-.48l-1.2-.46a.82.82 0 0 1-.53-.9l.2-1.28A.82.82 0 0 0 1 9.53L.18 8.52a.82.82 0 0 1 0-1.04l.82-1a.82.82 0 0 0 .18-.66l-.2-1.28a.82.82 0 0 1 .51-.9l1.21-.46c.22-.08.4-.26.48-.48l.46-1.2a.82.82 0 0 1 .9-.53l1.28.2c.24.04.47-.02.65-.17L7.48.18a.82.82 0 0 1 1.04 0l1 .82c.19.15.42.21.66.18l1.28-.2c.38-.07.76.15.9.51l.46 1.21c.08.22.26.4.48.48l1.2.46c.37.14.59.52.53.9l-.2 1.28c-.04.23.02.47.17.65l.82 1.01c.24.3.24.74 0 1.04l-.82 1a.82.82 0 0 0-.18.66l.2 1.28a.82.82 0 0 1-.51.9l-1.21.46a.82.82 0 0 0-.48.48l-.46 1.2a.82.82 0 0 1-.9.53l-1.28-.2a.82.82 0 0 0-.65.17l-1.01.81a.82.82 0 0 1-1.04 0l-1-.81a.82.82 0 0 0-.66-.18z"/><path d="M4.75 8.25L7 10.5 11.5 6" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"/></svg>\')}';
        i[1] = 'html[t="d"] .page_photo.page_action_menu_groups .group_notification_settings .group_notification_setting.checkbox.on:before{background-image:url(\'data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 11.5L10 15 17 8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="none" stroke="' + g2 + '"/></svg>\')}';
        i[2] = 'html[t="d"] .radiobtn.on:before,html[t="d"] .radiobtn_container table td .radiobtn_on div{filter:none;background-image:url(\'data:image/svg+xml,<svg width="100%" height="100%" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="6.5" fill="none" stroke="' + g3 + '"/><circle cx="7" cy="7" r="3" fill="' + g1 + '"/></svg>\')!important}';
        i[3] = 'html[t="d"] .page_photo.page_action_menu_groups .page_actions_item.group_send_msg_status_block:before{filter:none;background-image:url(\'data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.16 18.16c-.96.8-2.45 1.43-4.48 1.93a.74.74 0 0 1-.85-1.07 12.56 12.56 0 0 0 1.3-3 6.71 6.71 0 0 1-2.07-4.79c0-3.96 3.59-7.14 7.99-7.14s7.99 3.18 7.99 7.14c0 3.96-3.59 7.14-7.99 7.14a8.92 8.92 0 0 1-2.6 -0.05" stroke-width="1.8" fill="none" stroke="' + g2 + '"/></svg>\')}';
        i[4] = 'html[t="d"] .search_filters_minimized_text{filter:none;background-image:url(\'data:image/svg+xml,<svg height="21" width="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"><rect fill="' + g3 + '" height="21" width="21" rx="2"/><path d="M4 7 17 7M4 14 17 14M13 4 13 10M8 11 8 17" stroke-width="2" stroke="#fff"/></svg>\')}';
        i[5] = 'html[t="d"] .ui_header_ext_search{filter:none;background-image:url(\'data:image/svg+xml,<svg height="12" width="15" viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg"><path d="M0 3 15 3M0 9 15 9M10 0 10 6M5 6 5 12" stroke-width="2" stroke="' + g3 + '"/></svg>\')}';
        i[6] = 'html[t="d"] .page_photo.page_action_menu_groups .page_actions_item.page_menu_group_notify.on:before{filter:none;background-image:url(\'data:image/svg+xml,<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#888" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M18.1 12.6c0 1.5 2.9 2.6 2.5 4.3C20.2 18.2 19 18 18 18H7c-1 0-2.2.2-2.5-1.1-.5-1.7 2.4-2.8 2.4-4.3v-2.2c0-3.9 2.1-6.5 5.6-6.5 3.5 0 5.6 2.6 5.6 6.5v2.2zM12.5 21.1c-1.7 0-3-1.1-3-3.1h6c0 2-1.3 3.1-3 3.1z"/><rect fill="' + g2 + '" x="19" width="5" height="5" rx="2.5"/></svg>\')}';
        i[7] = 'html[t="d"] .emoji_sticker_item .emoji_sticker_item_fav.on,html[t="d"] .emoji_sticker_item .emoji_sticker_item_fav.on:hover{filter:none;background-image: url(\'data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.7 7l2.7.3c1.7.2 2.1 1.7.9 2.8l-2.2 1.8.9 3.1c.4 1.6-1 2.6-2.3 1.6l-2.7-2-2.7 2c-1.3 1-2.7 0-2.3-1.6l.9-3-2.2-2c-1.2-1-.8-2.5.9-2.7l2.7-.2 1.3-3c.6-1.5 2.2-1.5 2.8 0L12.7 7z" stroke-width="2" stroke="#000" fill="' + g2 + '"/></svg>\')}';
        var path = i.join('');
        style.innerHTML = ':root{--b:hsla(0, 0%, 0%, ' + b / 100 + ');--h:hsl(' + h + ', 100%, 50%);--s:hsl(0, 0%, ' + l + '%);--g:hsl(' + h + ', 100%, 75%);--g0:hsl(' + h + ', 100%, ' + l + '%);--g1:' + g1 + ';--g2:' + g2 + ';--g3:' + g3 + ';--g3a:' + g3a + '}' + path
    }

    function bg() {
        var e = document.getElementById('pv_more_act_bg');
        if (!e) {
            var d = document.getElementById('pv_more_act_download');
            if (d) {
                var l = d.getAttribute('href');
                var m = document.getElementsByClassName('pv_more_acts')[0];
                var a = document.createElement('a');
                a.id = 'pv_more_act_bg';
                a.className = 'pv_more_act_item';
                a.innerHTML = chrome.i18n.getMessage("setAsBg");
                m.insertBefore(a, d);
                a.addEventListener('click', function(e) {
                    set_bg(l)
                })
            }
        }
    }

    function set_bg(l) {
        if (l) {
            if (l.match('youtube|youtu\.be')) {
                yt = l.match(/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?\s]+).*/);
                unset_bg();
                var b = document.getElementsByTagName('body')[0];
                var d = document.createElement('div');
                d.className = 'video-background';
                d.innerHTML = '<div class="video-foreground"><iframe src="https://www.youtube.com/embed/' + yt[1] + '?controls=0&showinfo=0&rel=0&mute=1&autoplay=1&loop=1&playlist=' + yt[1] + '"></iframe></div>';
                b.insertBefore(d, b.firstElementChild)
            } else {
                unset_bg();
                document.getElementsByTagName('html')[0].setAttribute('style', 'background:url("' + l + '") fixed 0/cover')
            }
            localStorage.cp_i = l;
            chrome['storage'].sync.set({
                cp_i: l
            })
        } else {
            function cl_box() {
                box_layer.innerHTML = '';
                box_layer_bg.style.display = 'none';
                box_layer_wrap.style.display = 'none'
            };
            box_layer_bg.style.display = 'block';
            box_layer_wrap.style.display = 'block';
            box_layer.innerHTML = '<div class="popup_box_container" style="width:450px;margin-top:' + (window.innerHeight / 2 - 200) + 'px"><div class="box_layout"><div class="box_title_wrap" style=""><div class="box_x_button"></div><div class="box_title">' + chrome.i18n.getMessage("popupTitle") + '</div></div><div class="box_body" style="padding: 25px;"><h4 class="subheader">' + chrome.i18n.getMessage("popupSubHeader") + '</h4><input type="text" class="dark" id="bg_url" placeholder="' + chrome.i18n.getMessage("popupUrlExample") + '" style="width:100%"></div><div class="box_controls"><button class="flat_button fl_r">' + chrome.i18n.getMessage("popupBtnAdd") + '</button><button class="flat_button secondary fl_r">' + chrome.i18n.getMessage("popupBtnCancel") + '</button></div></div></div>';
            document.getElementsByClassName('box_x_button')[0].addEventListener('click', function(e) {
                cl_box()
            });
            document.getElementsByClassName('box_controls')[0].getElementsByClassName('flat_button')[1].addEventListener('click', function(e) {
                cl_box()
            });
            document.getElementsByClassName('box_controls')[0].getElementsByClassName('flat_button')[0].addEventListener('click', function(e) {
                set_bg(bg_url.value);
                cl_box()
            })
        }
    }

    function unset_bg() {
        localStorage.cp_i = '';
        chrome['storage'].sync.set({
            cp_i: ''
        });
        var e = document.getElementsByClassName('video-background')[0];
        if (e) e.remove();
        document.getElementsByTagName('html')[0].removeAttribute('style')
    }

    var m = document.getElementById("top_profile_menu");
    if (!m) m = document.body;
    var cp = document.createElement('div');
    cp.id = "cp";
    cp.innerHTML = '<input type="range" class="slider_h" value="' + (localStorage.cp_h ? localStorage.cp_h : obj.cp_h ? obj.cp_h : 77) + '" /><input type="range" class="slider_l" value="' + (localStorage.cp_l ? localStorage.cp_l : obj.cp_l ? obj.cp_l : 24) + '" /><input type="range" class="slider_s" value="' + (localStorage.cp_s ? localStorage.cp_s : obj.cp_s ? obj.cp_s : 63) + '" /><div id="bg_set"></div><div id="bg_unset"></div><input type="range" class="slider_b" value="' + (localStorage.cp_b ? localStorage.cp_b : obj.cp_b ? obj.cp_b : 50) + '" /><svg><defs><filter id="hue" color-interpolation-filters="sRGB"></filter></defs></svg>';
    m.insertBefore(cp, m.firstElementChild);
    var style = document.createElement("style");
    style.id = "theme_dark_cp";
    document.body.appendChild(style);
    layer.addEventListener('mousemove', function(e) {
        bg()
    });
    bg_set.addEventListener('click', function(e) {
        set_bg()
    });
    bg_unset.addEventListener('click', function(e) {
        unset_bg()
    });
    cp.addEventListener('input', function(e) {
        hue()
    });
    hue();
    if (localStorage.cp_i || obj.cp_i) set_bg((localStorage.cp_i) ? localStorage.cp_i : obj.cp_i)
})