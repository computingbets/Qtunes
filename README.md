#qtunes

qTunes is a quiz that the user answers and receives a playlist based on their
answers. The user must sign up, log in, and click an answer for their playlist.
The user can then click the "get your playlist" button and receive their playlist.
A user can delete and update a song. If you wish to do this, please update the
song before deleting it.

My approach to building the app was to use the majority of development time to
work on setting up and performing ajax calls. There are a number of preliminary
calls that were coded, get song, post playlist on click, and get playlist. This
proved troublesome and were consilidated into a post request for playlist with
the song id attached and a get playlist call. My experience with table
construction in the database was not flawless and this has taught me to use more
forethought in tables for future products.

My user stories are as follows: as a user, I want to answer questions and at the
end receive a playlist based on those answers. As a developer, I want to store
songs in a table and join them with users through playlists. As a dev, I want to
associate answers with songs and display them properly at the end of the quiz.

Back end repo - https://github.com/logicmyth/full-stack-server
Wireframes - http://imgur.com/lhoT2v7 - http://imgur.com/Q6xOBHO
