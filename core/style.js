chrome['storage'].sync.get(null, function(obj) {
    document.getElementsByTagName('html')[0].setAttribute('t', obj.mode);
    if (localStorage.cp_i || obj.cp_i) document.getElementsByTagName('html')[0].setAttribute('style', 'background:url("' + (localStorage.cp_i ? localStorage.cp_i : obj.cp_i) + '") fixed 0/cover')
})