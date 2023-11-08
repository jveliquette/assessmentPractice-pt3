import fs from "fs";

// Define the Song type.
export type Song = {
    title: string;
    artist: string;
    playCount: number;
};

// Define the report type
export type Report = {
    uniqueArtists: number;
    mostListenedSong: Song | undefined;
};

// Function to process songs
export function processSongs(songs: Song[]): Report {
    // Calculate the number of unique artists.
    // Declaring a variable named uniqueArtists and setting it equal to a new set
    const uniqueArtists = new Set();

    // Declaring a variable named mostListenedSong and setting it equal to the songs array at index[0]
    let mostListenedSong = songs[0];

    // Looping through the songs array
    for (let i = 0; i < songs.length; i++) {

        // Add artist to the set of unique artists
        uniqueArtists.add(songs[i].artist);

        // Find the most listened to song
        if (songs[i].playCount > mostListenedSong.playCount) {
            mostListenedSong = songs[i];
        }
    }

    // Return the size of uniqueArtists and mostListenedSong
    return {
        uniqueArtists: uniqueArtists.size,
        mostListenedSong: mostListenedSong,
    };
}

export function main() {
    const data = fs.readFileSync("./listening-history.json", "utf8");
    const history = JSON.parse(data);
    const result = processSongs(history);

    console.log(`Unique Artists: ${result.uniqueArtists}`); // Output = Unique Artists: 8
    console.log(`Most Listened Song: ${result.mostListenedSong?.title}`); // Output = Most Listened Song: Bohemian Rhapsody
}
