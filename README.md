# OncoLens Coding Challenge

This is the OncoLens coding challenge. 

## Scenario 

You've been hired as a developer on a team responsible for mananging some musical software. You are 
assigned a task (see below) to add arpeggios to a library that generates scales and musical 
patterns more broadly. 

While most of the code on your team is pretty clean and well maintained, you've heard from your new 
teammates that the last developer in there left a bit of a mess.

## Ticket - Add Arpeggio

### Overview
Your task is to add arpeggios to the musical pattern generator code. The desired output are the 
string list that represents the notes in an arpeggio. 

An arpeggio is a broken chord, or a chord in which individual notes are struck one by one, 
rather than all together at once. It is similar to a scale in that way. 

### Acceptance Criteria
Given a musical note and the "major" scale type, you can generate a major arpeggio. For example,
given "A", the arpeggio would be "A", "C#", "E". 

Given a musical note and the "minor" scale type, you can generate a minor arpeggio. For example,
given "A", the arpeggio would be "A", "C", "E". 

Given a musical note and the "pentatonic" scale type, you should throw an exception. There is no
argeggio defined for this type. 

### Technical Details
An arpeggio is just the 1st, 3rd, and 5th note in a musical scale, whether major or minor.

## Your New Team
Your team has several working agreements that will influence how you look at this problem. 

1) All tests must be passing to be considered complete. 
2) Acceptance criteria must have corresponding tests - in this case, we need unit tests for each
type of scale.


## Background on Scales

There are 12 unique notes in the Western musical tradition:  
`'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'`

A scale is a series of notes played with a given pattern from a starting note. A pattern is a
series of steps. And a step how far away adjacent notes of a scale are. For example the notes of
a C Major scale are C, D, E, F, G, A, and B. The pattern for a major scale is:
 
- start at C
- take a whole step. That is, move up two notes to D.
- take another whole step. I.e. move up two notes to E.
- take a half step. I.e. move up one note from E to F.
- take a whole step. Move up two notes to G
- take a whole step. Move up two notes to A
- take a whole step. Move up two notes to B
- take a half step. Move up one note to C.
 
The pattern for a major scale is (whole, whole, half, whole, whole, whole, half). Or, in
steps- (2, 2, 1, 2, 2, 2, 1). If, instead, you started at Eb, and you took this pattern, you'd
get the nodes Eb, F, G, Ab, Bb, C, D, Eb. If you started at G, you'd get G, A, B, C, D, E, F#, G.
 
There are different types of scales
  - minor
  - major
  - pentatonic
  - and others that aren't covered by this library 
