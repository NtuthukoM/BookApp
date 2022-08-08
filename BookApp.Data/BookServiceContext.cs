using Microsoft.EntityFrameworkCore;

namespace BookApp.Data
{
    public class BookServiceContext:DbContext
    {
        public BookServiceContext(DbContextOptions<BookServiceContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new AuthourSeedConfiguration());
            modelBuilder.ApplyConfiguration(new BookSeedConfiguration());
        }

        public DbSet<Book> Books { get; set; }
        public DbSet<Author> Authors { get; set; }

    }
}
