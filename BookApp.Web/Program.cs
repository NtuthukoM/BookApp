
using BookApp.Application.Configuration;
using BookApp.Application.Contracts;
using BookApp.Data;
using BookApp.Application.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
const string corsPolicy = "CorsPolicy";

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<BookServiceContext>(options =>
    options.UseSqlServer(connectionString));
builder.Services.AddCors(opt => {
    opt.AddPolicy(name: corsPolicy, policy =>
    {
        policy
        .AllowAnyHeader()
        .AllowAnyMethod()
        .WithOrigins("http://localhost:3000");
    });
});

builder.Services.AddControllersWithViews();

builder.Services.AddScoped(typeof(IBaseEntityRepository<>), typeof(BaseEntityRepository<>));
builder.Services.AddScoped<IAuthorRepository, AuthorRepository>();
builder.Services.AddScoped<IBookRepository, BookRepository>();
builder.Services.AddAutoMapper(typeof(MapperConfig));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseCors(corsPolicy);
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
