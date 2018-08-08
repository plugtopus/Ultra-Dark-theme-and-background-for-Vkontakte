var iconActivePath = "img/19.png",
    iconRestPath = "img/19_deactivate.png";
chrome['storage'].sync.get(['activated'], function(items) {
    if (items.activated === undefined) {
        setIcon(!0);
        changeMode('d')
    }
});
var portsByScriptId = {};
chrome['runtime'].onConnect.addListener(function(port) {
    portsByScriptId[port.sender.id + port.name] = port
});

function changeMode(mode) {
    chrome['storage'].sync.set({
        mode: mode
    });
    chrome['tabs'].executeScript(null, {
        code: 'document.getElementsByTagName("html")[0].setAttribute("t", "' + mode + '")'
    })
}

function updateIcon() {
    chrome['tabs'].getSelected(null, function(tab) {
        var url = new URL(tab.url);
        if (url.hostname == 'vk.com') {
            chrome['storage'].sync.get(['activated'], function(items) {
                if (items.activated != !1) {
                    chrome['storage'].sync.set({
                        'activated': !1
                    });
                    chrome.browserAction.setIcon({
                        path: iconRestPath
                    });
                    changeMode('l')
                } else {
                    chrome['storage'].sync.set({
                        'activated': !0
                    });
                    chrome.browserAction.setIcon({
                        path: iconActivePath
                    });
                    changeMode('d')
                }
            })
        }
    })
}

function setIcon(material_design) {
    if (!material_design) {
        chrome['storage'].sync.set({
            'activated': !1
        });
        chrome.browserAction.setIcon({
            path: iconRestPath
        })
    } else {
        chrome['storage'].sync.set({
            'activated': !0
        });
        chrome.browserAction.setIcon({
            path: iconActivePath
        })
    }
}

chrome['runtime'].onMessage.addListener(function(request, sender, sendResponse) {
    var activated;
    chrome['storage'].sync.get(['activated'], function(items) {
        activated = items.activated;
        if (request.method == "isActivated") sendResponse({
            status: activated
        });
        else sendResponse({})
    })
});
chrome.browserAction.onClicked.addListener(updateIcon)

chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason == "install" && !localStorage.landing && !localStorage['first_date_installation_ntpromo']) {
        localStorage['first_date_installation_ntpromo'] = new Date().getTime();

        chrome.management.getSelf(function(info) {
            var ext_name = encodeURIComponent(info.name);
            chrome.tabs.create({
                url: 'https://sites.google.com/view/promo-extensions-welcome/?id=promo_ext_w&ext=' + ext_name
            });
        });
    }
});