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

const createPlaylist = function (){
  return $.ajax({
    url: app.host + "/playlists",
    method: 'POST',
    headers: {
    Authorization: 'Token token=' + app.user.token,
    },
  });
};

const updateGame = function (index, value) {
    // console.log(ui.createdGame);
      return $.ajax({
        url: app.host + "/playlists/" + app.playlist.id,
        method: 'POST',
        headers: {
        Authorization: 'Token token=' + app.user.token,
        },
        data: {
                "game": {
                  "cell": {
                    "index": index,
                    "value": value,
                  },
                  "over": false
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

onst getUserIDPlaylist = function() {
  return $.ajax({
    url: app.host + '/users/' + app.current_user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const addToPlaylist = function(data) {
  return $.ajax({
    url: app.host + 'playlists',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

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
  updateGame,
  createPlaylist,
  //gameOver,
  getSong,
};
