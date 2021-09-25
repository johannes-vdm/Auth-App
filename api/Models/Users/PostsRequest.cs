using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Users
{
    public class PostsRequest
    {
        [Required]
        public string Posts { get; set; }

    }
}