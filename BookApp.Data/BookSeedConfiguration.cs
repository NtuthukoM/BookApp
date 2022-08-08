using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookApp.Data
{
    internal class BookSeedConfiguration : IEntityTypeConfiguration<Book>
    {
        public void Configure(EntityTypeBuilder<Book> builder)
        {
            builder.HasData(new Book
            {
                AuthorId = 1,
                Genre = "Fiction",
                Title = "Philosopher's Stone",
                Id = 1,
                Price = 20,
                Year = 1997
            }, new Book
            {
                AuthorId = 1,
                Genre = "Fiction",
                Title = "Chamber of Secrets",
                Id = 2,
                Price = 18,
                Year = 1998
            }, new Book
            {
                AuthorId = 1,
                Genre = "Fiction",
                Title = "Prisoner of Azkaban",
                Id = 3,
                Price = 22,
                Year = 1999
            });
        }
    }
}