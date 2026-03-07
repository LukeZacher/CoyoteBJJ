var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

const string allowAngularOrigin = "AllowAngular";

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        allowAngularOrigin,
        policy => policy.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader()
    );
});

var app = builder.Build();

app.UseHttpsRedirection();

app.UseCors(allowAngularOrigin);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.Run();
