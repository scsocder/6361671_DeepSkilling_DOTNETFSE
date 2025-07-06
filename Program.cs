using Lab2_DbContext.Data;
using Lab2_DbContext.Models;
using Microsoft.EntityFrameworkCore;

Console.WriteLine("🔗 Connecting to SQL Server using EF Core...");

try
{
    using var context = new AppDbContext();

    // ✅ 1. Retrieve all products
    Console.WriteLine("\n📦 All Products:");
    var products = await context.Products.ToListAsync();
    if (products.Count == 0)
    {
        Console.WriteLine("⚠️ No products found in the database.");
    }
    else
    {
        foreach (var p in products)
        {
            Console.WriteLine($"{p.Name} - ₹{p.Price}");
        }
    }

    // ✅ 2. Find product by ID
    Console.WriteLine("\n🔎 Searching for product with ID = 1...");
    var product = await context.Products.FindAsync(1);
    if (product != null)
    {
        Console.WriteLine($"✅ Found: {product.Name}");
    }
    else
    {
        Console.WriteLine("❌ No product found with ID = 1.");
    }

    // ✅ 3. FirstOrDefault with condition
    Console.WriteLine("\n💰 Searching for expensive product (Price > ₹50,000)...");
    var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 50000);
    if (expensive != null)
    {
        Console.WriteLine($"💎 Expensive Product: {expensive.Name}");
    }
    else
    {
        Console.WriteLine("❌ No expensive product found.");
    }
}
catch (Exception ex)
{
    Console.WriteLine($"❌ Error: {ex.Message}");
}
