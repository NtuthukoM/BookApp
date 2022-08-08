using BookApp.Application.Contracts;
using BookApp.Data;
using Microsoft.EntityFrameworkCore;

namespace BookApp.Application.Repositories
{
    public class BaseEntityRepository<T> :
       IBaseEntityRepository<T>  where T: class
    {
        private readonly BookServiceContext context;

        public BaseEntityRepository(BookServiceContext context)
        {
            this.context = context;
        }
        public async Task Add(T model)
        {
            await context.AddAsync(model);
            await context.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var model = await context.FindAsync<T>(new[] { id });
            if(model != null)
            {
                context.Set<T>().Remove(model);
                await context.SaveChangesAsync();
            }
        }

        public async Task<T?> Get(System.Linq.Expressions.Expression<Func<T, bool>> expression)
        {
            return await context.Set<T>().FirstOrDefaultAsync(expression);
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

        public async Task Update(T model)
        {
            context.Update(model);
            await context.SaveChangesAsync();
        }
    }
}
