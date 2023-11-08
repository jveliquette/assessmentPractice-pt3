import { processSongs, Song, Report } from './listening-history.js'
import { describe, it, expect, beforeEach } from 'vitest'

describe('processSongs', () => {
    let songs: Song[]

    beforeEach(() => {
        songs = [
            { title: 'Song1', artist: 'Artist1', playCount: 5 },
            { title: 'Song2', artist: 'Artist2', playCount: 10 },
            { title: 'Song3', artist: 'Artist3', playCount: 15 },
            { title: 'Song4', artist: 'Artist1', playCount: 20 },
        ]
    })

    it('should calculate the correct number of unique artists', () => {
        const expectedUniqueArtists = 3
        const report: Report = processSongs(songs)
        expect(report.uniqueArtists).toBe(expectedUniqueArtists)
    })

    it('should correctly find the most listened song', () => {
        const expectedMostListenedSong: Song = {
            title: 'Song4',
            artist: 'Artist1',
            playCount: 20,
        }
        const report: Report = processSongs(songs)
        expect(report.mostListenedSong).toEqual(expectedMostListenedSong)
    })

    it('should handle an empty array', () => {
        songs = []
        const expectedReport: Report = {
            uniqueArtists: 0,
            mostListenedSong: undefined,
        }
        const report: Report = processSongs(songs)
        expect(report).toEqual(expectedReport)
    })
})
