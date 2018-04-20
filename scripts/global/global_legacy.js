//───────────────────────────────────browseHappy
(function() {
    function browseHappy() {
        var span = document.createElement('span');
        var a = document.createElement('a');

        span.setAttribute('id', 'browse_happy');

        a.setAttribute('href', 'https://browsehappy.com/');
        a.setAttribute('id', 'browse_happy_update');
        a.setAttribute('rel', 'nofollow noopener');

        a.appendChild(document.createTextNode('update'));

        span.appendChild(document.createTextNode('Your browser is out of date. Please '));
        span.appendChild(a);
        span.appendChild(document.createTextNode(' it.'));

        document.getElementById('body').innerHTML = '';
        document.getElementById('body').appendChild(span);
    };

    document.addEventListener('DOMContentLoaded', browseHappy(), {once: true});
})();
//───────────────────────────────────browseHappy
//# sourceMappingURL=_global_legacy.js.map
