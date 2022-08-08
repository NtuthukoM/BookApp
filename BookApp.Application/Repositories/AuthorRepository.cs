using BookApp.Application.Contracts;
using BookApp.Data;

namespace BookApp.Application.Repositories
{
    public class AuthorRepository : BaseEntityRepository<Author>, IAuthorRepository
    {
        public AuthorRepository(BookServiceContext context) 
            : base(context)
        {
        }
    }
}
