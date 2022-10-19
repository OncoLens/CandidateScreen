namespace CandidateScreen
{
    public static class NoteFormatter
    {
        public static string FormatNote(Note note)
        {
            switch (note)
            {
                case Note.ASharp:
                    return "A#";
                case Note.CSharp:
                    return "C#";
                case Note.DSharp:
                    return "D#";
                default:
                    return note.ToString();
            }
        }
    }
}