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



//───────────────────────────────────Creator
(function() {
    var projectText = '\r\n\r\n\r\n\r\n%1$cName:   %2$cFreeCodeCamp%1$c@1.0.0\r\n%1$cDate:   %3$c20.12.2017\r\n%1$cLast Modified:   %3$c11.01.2018\r\n\r\n%1$cMy site:   %3$chttps://github.com/Vastted\r\n%1$cCreator:   %3$cAndrey Bondarenko | Vastted\r\n\r\n\r\n\r\n';

    var projectStyles = [
        '',
        'font-size: 12px; text-transform: uppercase; font-family: Helvetica; font-weight: 800; line-height: 1.4em;',
        'font-size: 12px; text-transform: none; font-family: Helvetica; font-weight: 100; line-height: 1.4em;'
    ];
    

    console.group('Creator:');
    console.log(projectText, projectStyles[0], projectStyles[1], projectStyles[2]);
    console.groupEnd('Creator:');
})();
//───────────────────────────────────Creator
//# sourceMappingURL=_global_legacy.js.map
