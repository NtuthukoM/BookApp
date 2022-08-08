using System.ComponentModel.DataAnnotations;

namespace BookApp.Models
{
    public class AuthorVM
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
    }
}
