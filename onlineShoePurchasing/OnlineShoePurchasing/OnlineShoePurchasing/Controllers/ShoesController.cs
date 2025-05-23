using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineShoePurchasing.Data;
using OnlineShoePurchasing.Models;

namespace OnlineShoePurchasing.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ShoesController(ApplicationDbContext context)
        {
            _context = context;



        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Shoesdetails>>> GetProducts()
        {
            return   _context.Shoesdetails.ToList();
        }
        [HttpPost("login")]
        public async Task<ActionResult<Logindetails>> Login(Logindetails user)
        {
            // Find user by username
            var userlogin = _context.logindetails.SingleOrDefault(u => u.username == user.username);

            if (userlogin == null || user.password != userlogin.password)
            {
                return Unauthorized("Invalid username or password.");
            }

            var role = "";

            if (userlogin.id == 1)
            {
                role = "User";
            }
            else if (userlogin.id == 2)
            {
                role = "Admin";
            }

            return Ok(new { message = "Login successful", role });
        }

        [HttpPost("register")]
        public async Task<ActionResult<Logindetails>> Register(Logindetails users)
        {
            if (_context.logindetails.Any(u => u.username == users.username))
            {
                return BadRequest("Username already exists.");
            }
            var user = new Logindetails
            {
                username = users.username,
                password = users.password,
                id = users.id

            };
            _context.logindetails.Add(user);
            _context.SaveChanges();
            return Ok("Successfully registerd new employee");
        }


        [HttpPut("updateshoedetails")]
        public async Task<ActionResult> UpdateShoe(int shoeid, [FromBody] Shoesdetails updatedShoe)
        {
            var existingShoe = await _context.Shoesdetails.FindAsync(shoeid);

            if (existingShoe == null)
            {
                return NotFound(new { message = "Shoe not found." });
            }

            // Update properties
            existingShoe.price = updatedShoe.price;
            existingShoe.size = updatedShoe.size;
            existingShoe.shoename = updatedShoe.shoename;
            existingShoe.photo = updatedShoe.photo;

            await _context.SaveChangesAsync();

            return Ok(new { message = "Shoe details updated successfully.", updatedShoe });
        }

        //......

        [HttpDelete("deletedetails")]
        public async Task<ActionResult> DeleteShoes(int shoeid)
        {
            var existingShoes = await _context.Shoesdetails.FindAsync(shoeid);

            if (existingShoes == null)
            {
                return NotFound(new { message = "Shoe not found." });
            }

            _context.Shoesdetails.Remove(existingShoes);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Shoe deleted successfully." });
        }



        //........................................................



        [HttpPost("admin")]
        public async Task<ActionResult<Shoesdetails>> Register(Shoesdetails shoe)
        {
            if (_context.Shoesdetails.Any(d => d.shoeid == shoe.shoeid))
            {
                return BadRequest("Shoe ID already exists.");
            }

            var newShoe = new Shoesdetails
            {
                price = shoe.price,
                size = shoe.size,
                shoename = shoe.shoename,
                shoeid = shoe.shoeid,
                photo = shoe.photo
            };

            _context.Shoesdetails.Add(newShoe);
            await _context.SaveChangesAsync();
            return Ok("Successfully registered new shoe.");
        }
        //[HttpPost("user")]
        //public async Task<ActionResult<shoeorderDetail>> userorder(shoeorderDetail dress)
        //{
        //    if (_context.shoeorderDetails.Any(d => d.orderId == dress.orderId))
        //    {
        //        return BadRequest("Shoe ID already exists.");
        //    }

        //    var neworder = new shoeorderDetail
        //    {
        //        name = dress.name,
        //        address = dress.address,
        //        pincode = dress.pincode,
        //        phoneNo = dress.phoneNo,
        //        //mobilenumber = dress.mobilenumber,
        //        orderId = dress.orderId

        //    };

        //    _context.shoeorderDetails.Add(neworder);
        //    await _context.SaveChangesAsync();
        //    return Ok("Successfully registered new Shoe.");
        [HttpPost("shoeOrder")]
        public async Task<ActionResult<shoeorderDetail>> CreateShoeOrder(shoeorderDetail order)
        {
            if (_context.shoeorderDetails.Any(o => o.orderId == order.orderId))
            {
                return BadRequest("Order ID already exists.");
            }

            var newOrder = new shoeorderDetail
            {
                orderId = order.orderId,
                name = order.name,
                address = order.address,
                pincode = order.pincode,
                phoneNo = order.phoneNo
            };

            _context.shoeorderDetails.Add(newOrder);
            await _context.SaveChangesAsync();
            return Ok("Successfully registered new shoe order.");
        }




        // Model definition


    }
}
