

'use strict';

const app = require('../app.js');
const api = require('./api');
const handlebarsTemplate = require('../templates/display-playlist.handlebars');

const success = (data) => {
 if (data) {
   console.log(data);
 } else {
   console.log('Success');
 }
};

const displaySongsSuccess =(data) => {
  console.log(data);
  $('#playlist-display').append(handlebarsTemplate({data}));
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

let playlistData = "";
const createPlaylistSuccess = (data) => {
  console.log(data);
  app.user = playlist.data;
  let playlistData = playlist.id;
};

const getSong = function(data) {
  return $.ajax({
    url: app.host + '/songs/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const displayPlaylistSuccess = (data) => {
  //console.log(data.playlist);
  console.log(data);
  let playlistArr = data;
  console.log(playlistArr);
  for (let i = 0; i < playlistArr.length; i++) {
    getSong(playlistArr[i].song_id)
      .done(displaySongsSuccess)
      .fail(failure);
    }

  };
  // $('#playlist-display').append('Your playlist: ' + app.song.id);

module.exports = {
 success,
 failure,
 signInSuccess,
 signOutSuccess,
 displayPlaylistSuccess,
 createPlaylistSuccess
};
