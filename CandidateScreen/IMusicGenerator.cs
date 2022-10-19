namespace CandidateScreen
{
    public interface IMusicGenerator
    {
        string[] CreateScale(Note note, Scale scale);
        string[] CreateArpeggio(Note note, Scale scale);

    }
}