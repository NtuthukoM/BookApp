using System.ComponentModel.DataAnnotations;

namespace BookApp.Data
{
    public class Author: BaseEntity
    {
        [Required]
        public string Name { get; set; }
    }
}
