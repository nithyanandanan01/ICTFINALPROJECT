using System.ComponentModel.DataAnnotations;

namespace OnlineShoePurchasing.Models
{
    public class Shoesdetails
    {
        public decimal price { get; set; }
        public string size { get; set; }
        public string shoename { get; set; }
        [Key]
        public int shoeid { get; set; }
        public string photo { get; set; }
    }
}
