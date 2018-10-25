using Microsoft.EntityFrameworkCore.Migrations;

namespace SplitUp.Web.Migrations
{
    public partial class TestingMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Gender", "Token" },
                values: new object[] { "M", "a7cf375f-367f-4aa4-9cfe-9539b9883781" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Gender", "Token" },
                values: new object[] { null, "146ed3f4-dab3-44dd-97ba-3f934809e483" });
        }
    }
}
