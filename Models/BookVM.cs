using System.ComponentModel.DataAnnotations;

namespace BookApp.Models
{
    public class BookVM
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public int Year { get; set; }
        [DataType(DataType.Currency)]
        public decimal Price { get; set; }
        public string Genre { get; set; }

        // Foreign Key
        public int AuthorId { get; set; }
        // Navigation property
        public string AuthorName { get { return Author.Name; } }
        public AuthorVM Author { get; set; }
    }
}
