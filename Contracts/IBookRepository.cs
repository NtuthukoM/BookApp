using BookApp.Data;
using BookApp.Models;
using System.Linq.Expressions;

namespace BookApp.Contracts
{
    public interface IBookRepository: IBaseEntityRepository<Book>
    {
        Task<List<BookVM>> GetBooksAsync();
    }
}
