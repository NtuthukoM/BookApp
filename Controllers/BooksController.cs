using BookApp.Contracts;
using BookApp.Data;
using BookApp.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IBookRepository bookRepository;

        public BooksController(IBookRepository bookRepository)
        {
            this.bookRepository = bookRepository;
        }

        // GET: api/<BooksController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var books = await bookRepository.GetBooksAsync();
            return Ok(books);
        }

        // GET api/<BooksController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var book = await bookRepository.Get(x => x.Id == id);
            if(book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }

        // POST api/<BooksController>
        [HttpPost]
        public async Task Post([FromBody] Book value)
        {
           await  bookRepository.Add(value);
        }

        // PUT api/<BooksController>/5
        [HttpPut("{id}")]
        public async Task Put(int id, [FromBody] Book value)
        {
            await bookRepository.Update(value);
        }

        // DELETE api/<BooksController>/5
        [HttpDelete("{id}")]
        public async void Delete(int id)
        {
            await bookRepository.Delete(id);
        }
    }
}
