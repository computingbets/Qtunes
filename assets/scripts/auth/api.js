'use strict';
const app = require('../app.js');
const ui = require('./ui');

const signUp = (data) => {

  return $.ajax({
    url: app.host + "/sign-up",
    method: 'POST',
    data: data,
  });
};

const signIn = (data) => {

  return $.ajax({
    url: app.host + "/sign-in",
    method: 'POST',
    data: data,
  });
};

const signOut = function () {
  return $.ajax({
    url: app.host + "/sign-out/" + app.user.id,
    method: 'DELETE',
    headers: {
    Authorization: 'Token token=' + app.user.token,
    },
  });
};

const changePassword = function (data){
   return $.ajax({
    url: app.host + "/change-password/" + app.user.id,
    method: 'PATCH',
    headers: {
    Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

// const createPlaylist = function (){
//   return $.ajax({
//     url: app.host + "/playlists",
//     method: 'POST',
//     headers: {
//     Authorization: 'Token token=' + app.user.token,
//     },
//   });
// };

const updateSong = function (songIDUpdate, updatedTitle, updatedArtist, updatedLinks) {
  return $.ajax(
  {
    url: app.host + '/songs/' + songIDUpdate,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data :{
          "song": {
            "title": updatedTitle,
            "artist": updatedArtist,
            "links" : updatedLinks,
            }
          }
  });
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

// const getUserIDPlaylist = function(data) {
//   return $.ajax({
//     url: app.host + '/users/' + app.user.id,
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//   });
// };

const createPlaylist = function(data) {
  return $.ajax({
    url: app.host + '/playlists',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      "playlist": {
        "song_id": data,
        "user_id": app.user.id
      }
    },
  });
};

const updatePlaylist = function (data, playlistData) {
  return $.ajax({
    url: app.host + '/playlists/' + playlistData,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data :{
          "playlist": {
            "song_id": data,
            // "artist": updatedArtist,
            // "links" : updatedLinks,
            }
          }
  });
};

const displayPlaylist = function() {
  return $.ajax({
    //this needs to be changed
    //
    //
    url: app.host + '/playlists/' + app.playlist.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const deletePlaylist = function () {
  return $.ajax({
    url: app.host + '/playlists/' + app.playlist.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};
// const getSongFromPlaylist = function() {
//   return $.ajax({
//     url: app.host + '/playlists/song',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//
//     },
//   })
// }
// const gameOver = function() {
//   // console.log("You're inside gameOver");
//   // console.log("app.game is ", app.game);
//   return $.ajax({
//     url: app.host + '/games/' + app.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: {
//       "game": {
//         "over": true,
//       }
//     }
//   });
// };

// const getAnswerOne = function () {
//   console.log('inside answerOne');
//   return $.ajax({
//     url: app.host + '/songs/'
//   })
// }

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getSong,
  createPlaylist,
  displayPlaylist,
  updateSong,
  deletePlaylist,
  updatePlaylist,
};
