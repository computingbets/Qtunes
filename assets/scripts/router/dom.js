'use strict';

const transition = () => {
return (toState, fromState, done) => {
  if (fromState) {
    $(`#${fromState.name}`).addClass('hidden');
  }

  $(`#${toState.name}`).removeClass('hidden');
  done();
  };
};
    // Let's fetch data and call done
    module.exports = {
      transition,
    };
