using FilmTrackChallenge.Extensions;
using FilmTrackChallenge.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace FilmTrackChallenge.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        [HttpGet("[action]")]
        public ActionResult<IEnumerable<ILightBulb>> LightBulbs(
            [FromQuery(Name = "pc")] int personCount,
            [FromQuery(Name = "bc")] int lightBulbCount)
        {
            // Create light bulb object list.
            var lightBulbList = new List<ILightBulb>(
                Enumerable.Range(1, lightBulbCount)
                    .Select(x => new LightBulb { Id = x }));

            if (lightBulbList.Count == 0) return NoContent();

            for (var i = 0; i < personCount; i++)
            {
                lightBulbList.FlipSwitches(i + 1);
            }

            return Ok(lightBulbList);
        }
    }
}
