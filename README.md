# Challenge: Process User's Music Listening History

**Goal:** Find and fix all the bugs in the existing code.

## Background

One of the other junior developers at a popular music streaming service, has
been tasked to develop a feature that will provide insights to users about
users' listening history. Specifically, they wrote a script to process a JSON
input file which contains data about songs listened to by a user and summarize
it into a report. This report should contain the number of unique artists a user
has listened to and the most listened song.

Unfortunately the junior developer has some bugs in the script they haven't been
able to solve.

Your task is to correct the bugs and make the script run correctly.

Here are the rest of the requirements the developer was working from:

## JSON File Structure

The JSON input file (`listening-history.json`) contains an array of objects,
each representing a song the user has listened to. Each object contains the
following fields:

-   `title`: The name of the song
-   `artist`: The name of the artist
-   `playCount`: The number of times the user has listened to this song

## Report Structure

The report should print out to the terminal and display the following output:

```text
Unique Artists: <number>
Most Listened Song: <song title>
```

The script to process the JSON input file is in the **src** folder.  
There is a **listening-history.test.ts** with tests for this script.

You should first run `npm install` to install Node packages and their
dependencies.

You can run `npm start` to build and run the script.

You can verify you've fixed all the bugs once you've manually tested by running
`npm test`
