using BookApp.Data;
using BookApp.Models;
using System.Linq.Expressions;

namespace BookApp.Application.Contracts
{
    public interface IBookRepository: IBaseEntityRepository<Book>
    {
        Task<List<BookVM>> GetBooksAsync();

        Task<BookVM> GetBookByIdAsync(int id);
    }
}
