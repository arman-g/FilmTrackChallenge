using FilmTrackChallenge.Models;
using System.Collections.Generic;

namespace FilmTrackChallenge.Extensions
{
    public static class ListExtensions
    {
        /// <summary>
        /// Flips switches of light-bulb list objects.
        /// </summary>
        /// <param name="lightBulbList"></param>
        /// <param name="increment">A number increment of the switch object in the list.</param>
        public static void FlipSwitches(
            this IList<ILightBulb> lightBulbList, 
            int increment)
        {
            for (var i = increment - 1; i < lightBulbList.Count; i += increment)
            {
                lightBulbList[i].FlipSwitch();
            }
        }
    }
}
