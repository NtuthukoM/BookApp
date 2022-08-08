using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookApp.Data
{
    internal class AuthourSeedConfiguration : IEntityTypeConfiguration<Author>
    {
        public void Configure(EntityTypeBuilder<Author> builder)
        {
            builder.HasData(new Author() 
            { 
                Id = 1,
                Name = "J. K. Rowling",                
            },new Author()
            {
                Id = 2,
                Name = "Ryan Holiday"
            },
            new Author()
            {
                Id = 3,
                Name = "Ian Knight"
            }
            );
        }
    }
}