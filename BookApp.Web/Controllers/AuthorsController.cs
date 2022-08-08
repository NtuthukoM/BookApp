using BookApp.Application.Contracts;
using BookApp.Data;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BookApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorsController : ControllerBase
    {
        private readonly IAuthorRepository authorRepository;

        public AuthorsController(IAuthorRepository authorRepository)
        {
            this.authorRepository = authorRepository;
        }
        // GET: api/<AuthorsController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var data = await authorRepository.GetList();
            return Ok(data);
        }

        // GET api/<AuthorsController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var author = await authorRepository.Get(x => x.Id == id);
            if(author == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(author);
            }
        }

        // POST api/<AuthorsController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Author model)
        {
            await authorRepository.Add(model);
            return Ok();
        }

        // PUT api/<AuthorsController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Author model)
        {
            await authorRepository.Update(model);
            return Ok();
        }

        // DELETE api/<AuthorsController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await authorRepository.Delete(id);
            return Ok();
        }
    }
}
