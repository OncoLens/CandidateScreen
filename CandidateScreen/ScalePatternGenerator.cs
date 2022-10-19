using System;

namespace CandidateScreen
{
    public static class ScalePatternGenerator
    {
        public static int[] GetScalePattern(Scale scale)
        {
            switch (scale)
            {
                case Scale.Major:
                    return new[] { 2, 2, 1, 2, 2 ,2 };
                case Scale.Minor:
                    return new[] { 2, 1, 2, 2, 1, 2 };
                default:
                    throw new NotImplementedException();
            }
        }
    }
}