

'use strict';

const app = require('../app.js');

const success = (data) => {
 if (data) {
   console.log(data);
 } else {
   console.log('Success');
 }
};

const failure = (error) => {
 console.error(error);
};

const signInSuccess = (data) => {
 app.user = data.user;
 console.log(app.user);
};

const signOutSuccess = () => {
 console.log('User signed out successfully');
 app.user = null;
};
const displayPlaylistSuccess = (data) => {
  //console.log(data.playlist);
  let playlistArr = data.playlists;
  for (let i = 0; i < playlistArr.length; i++) {
    let each = playlistArr[i];
    if (each.user_id === app.user.id){
      console.log(each)
      $('#playlist-display').html(each.song.title);
    }
  }
  // $('#playlist-display').append('Your playlist: ' + app.song.id);
};

module.exports = {
 success,
 failure,
 signInSuccess,
 signOutSuccess,
 displayPlaylistSuccess
};
