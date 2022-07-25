using BookApp.Data;
using System.Linq.Expressions;

namespace BookApp.Contracts
{
    public interface IBaseEntityRepository<T> where T : class
    {
        Task Add(T model);
        Task Update(T model);
        Task Delete(int id);
        Task<List<T>> GetList(Expression<Func<T, bool>> expression = null);
        Task<T> Get(Expression<Func<T, bool>> expression);
    }
}
