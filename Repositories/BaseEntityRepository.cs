using BookApp.Contracts;
using BookApp.Data;
using Microsoft.EntityFrameworkCore;

namespace BookApp.Repositories
{
    public class BaseEntityRepository<T> :
       IBaseEntityRepository<T>  where T: class
    {
        private readonly BookServiceContext context;

        public BaseEntityRepository(BookServiceContext context)
        {
            this.context = context;
        }
        public Task Add(T model)
        {
            throw new NotImplementedException();
        }

        public Task Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<T> Get(System.Linq.Expressions.Expression<Func<T, bool>> expression)
        {
            throw new NotImplementedException();
        }

        public async Task<List<T>> GetList(System.Linq.Expressions.Expression<Func<T, bool>> expression = null)
        {
            if(expression != null)
            {
                return await context.Set<T>().Where(expression)
                    .ToListAsync();
            }
            return await context.Set<T>().ToListAsync();
        }

        public Task Update(T model)
        {
            throw new NotImplementedException();
        }
    }
}
