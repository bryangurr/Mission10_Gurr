using System.ComponentModel.DataAnnotations;

namespace Mission10_Gurr.Data
{
    public class Team
    {
        [Key]
        public int TeamID { get; set; }

        [Required]
        public string TeamName { get; set; }

    }
}
