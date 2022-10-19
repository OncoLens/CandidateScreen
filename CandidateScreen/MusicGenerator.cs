using System;
using System.Collections.Generic;

namespace CandidateScreen
{
    public class MusicGenerator : IMusicGenerator
    {
        public string[] CreateScale(Note note, Scale scaleName)
        {
            var numericPattern = ScalePatternGenerator.GetScalePattern(scaleName);

            // enums are basically ordered numbers so let's just traverse the list
            var startPosition = (int) note;

            var scale = new List<string> { NoteFormatter.FormatNote(note) };
            foreach (var step in numericPattern)
            {
                startPosition += step;
                var newNote = (Note)startPosition;
                scale.Add(NoteFormatter.FormatNote(newNote));
            }

            return scale.ToArray();
        }

        public string[] CreateArpeggio(Note note, Scale scale)
        {
            // TO DO
            throw new System.NotImplementedException();
        }
    }
}