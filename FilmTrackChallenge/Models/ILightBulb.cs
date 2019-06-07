namespace FilmTrackChallenge.Models
{
    public interface ILightBulb
    {
        int Id { get; set; }
        bool IsOn { get; set; }
        void FlipSwitch();
    }
}
