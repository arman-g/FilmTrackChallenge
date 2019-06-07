using System.Diagnostics;

namespace FilmTrackChallenge.Models
{
    [DebuggerDisplay(nameof(Id) + " = {" + nameof(Id) + "}, " + nameof(IsOn) + " = {" + nameof(IsOn) + "}")]
    public class LightBulb : ILightBulb
    {
        public int Id { get; set; }
        public bool IsOn { get; set; }
        public void FlipSwitch()
        {
            IsOn = !IsOn;
        }
    }
}
