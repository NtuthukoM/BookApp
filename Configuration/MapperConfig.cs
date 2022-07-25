using AutoMapper;
using BookApp.Data;
using BookApp.Models;

namespace BookApp.Configuration
{
    public class MapperConfig:Profile
    {
        public MapperConfig()
        {
            CreateMap<Book, BookVM>().ReverseMap();
            CreateMap<Author, AuthorVM>().ReverseMap();
        }
    }
}
