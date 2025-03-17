using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission10_Gurr.Data;

namespace Mission10_Gurr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private BowlersDbContext _BowlerContext;
        public BowlerController(BowlersDbContext context)
        {
            _BowlerContext = context;
        }


        [HttpGet(Name ="GetBowlers")]
        public IEnumerable<Bowler> Get()
        {
            var validTeams = new List<string> {"Marlins", "Sharks"};

            var BowlerList = _BowlerContext.Bowlers
                .Include(b => b.Team)
                .Where(b => validTeams.Contains(b.Team.TeamName))
                .ToList();
            return BowlerList;
        }
    }
}
