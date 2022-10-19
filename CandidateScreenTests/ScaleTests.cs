using CandidateScreen;
using NUnit.Framework;

namespace CandidateScreenTests;

public class ScaleTests
{
    [Test]
    public void TestMajorScale()
    {
        var musicGenerator = new MusicGenerator();
        var scale = musicGenerator.CreateScale(Note.C, Scale.Major);
        Assert.AreEqual(7, scale.Length);
        Assert.AreEqual("C", scale[0]);
        Assert.AreEqual("D", scale[1]);
        Assert.AreEqual("E", scale[2]);
        Assert.AreEqual("F", scale[3]);
        Assert.AreEqual("G", scale[4]);
        Assert.AreEqual("A", scale[5]);
        Assert.AreEqual("B", scale[6]);
    }

    [Test]
    public void TestScales()
    {
        // we know all scales should have 7 notes
        var musicGenerator = new MusicGenerator();
        var scale = musicGenerator.CreateScale(Note.C, Scale.Major);
        Assert.AreEqual(7, scale.Length);
        
        scale = musicGenerator.CreateScale(Note.C, Scale.Minor);
        Assert.AreEqual(7, scale.Length);
        
        scale = musicGenerator.CreateScale(Note.C, Scale.Pentatonic);
        Assert.AreEqual(7, scale.Length);
    }
}