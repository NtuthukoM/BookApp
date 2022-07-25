using BookApp.Contracts;
using BookApp.Data;

namespace BookApp.Repositories
{
    public class AuthorRepository : BaseEntityRepository<Author>, IAuthorRepository
    {
        public AuthorRepository(BookServiceContext context) 
            : base(context)
        {
        }
    }
}
