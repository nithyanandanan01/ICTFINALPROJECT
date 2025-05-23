using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OnlineShoePurchasing.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "logindetails",
                columns: table => new
                {
                    username = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_logindetails", x => x.username);
                });

            migrationBuilder.CreateTable(
                name: "shoeorderDetails",
                columns: table => new
                {
                    orderId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    pincode = table.Column<int>(type: "int", nullable: false),
                    phoneNo = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_shoeorderDetails", x => x.orderId);
                });

            migrationBuilder.CreateTable(
                name: "Shoesdetails",
                columns: table => new
                {
                    shoeid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    size = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    shoename = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    photo = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shoesdetails", x => x.shoeid);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "logindetails");

            migrationBuilder.DropTable(
                name: "shoeorderDetails");

            migrationBuilder.DropTable(
                name: "Shoesdetails");
        }
    }
}
