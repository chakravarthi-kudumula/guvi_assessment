var audioPlayer = document.getElementById("audio-player");
var playPauseButton = document.getElementById("play-pause");
var songTitle = document.getElementById("song-title");
var songArtist = document.getElementById("song-artist");
var playlist = document.getElementById("playlist");
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");

var songs = [
	{
		title: "Song 1",
		artist: "Artist 1",
		url: "songs/song1.mp3"
	},
	{
		title: "Song 2",
		artist: "Artist 2",
		url: "songs/song2.mp3"
	},
	{
		title: "Song 3",
		artist: "Artist 3",
		url: "songs/song3.mp3"
	},
	{
		title: "Song 4",
		artist: "Artist 4",
		url: "songs/song4.mp3"
	},
]
