import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}


// const player = new Vimeo.Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
    //   console.log('title:', title);
// });

// const onPlay = function (data) {
//   // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);
