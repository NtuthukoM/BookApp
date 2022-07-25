using AutoMapper.QueryableExtensions;
using BookApp.Contracts;
using BookApp.Data;
using BookApp.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace BookApp.Repositories
{
    public class BookRepository : BaseEntityRepository<Book>, IBookRepository
    {
        private readonly BookServiceContext context;
        private readonly AutoMapper.IConfigurationProvider configurationProvider;

        public BookRepository(BookServiceContext context,
            AutoMapper.IConfigurationProvider configurationProvider) 
            : base(context)
        {
            this.context = context;
            this.configurationProvider = configurationProvider;
        }

        public async Task<List<BookVM>> GetBooksAsync()
        {
            var books = await context.Books.Include(x => x.Author)
                .ProjectTo<BookVM>(configurationProvider).ToListAsync();
            return books;
        }
    }
}
