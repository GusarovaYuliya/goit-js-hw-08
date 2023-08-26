import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Ініціалізуй плеєр у файлі скрипта
const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
// const player  = new Player("vimeo-player");

// почни відстежувати подію timeupdate - оновлення часу відтворення.


