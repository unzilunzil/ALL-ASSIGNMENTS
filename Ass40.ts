// Function to create an album object
function make_album(artist : any , title : any , tracks = null) {
    const album = {
        artist: artist,
        title: title,
        tracks : tracks,
    };

    // Add tracks to the album object if provided
    if (tracks !== null) {
        album.tracks = tracks;
    }

    return album;
}

// Creating album objects using the make_album function
// const album1 = make_album('Artist1', 'Album One', 10); // Album with specified number of tracks
// const album2 = make_album('Artist2', 'Album Two'); // Album without specified number of tracks
// const album3 = make_album('Artist3', 'Album Three', 15); // Another album with specified number of tracks

// // Printing the album objects
// console.log(album1);
// console.log(album2);
// console.log(album3);
