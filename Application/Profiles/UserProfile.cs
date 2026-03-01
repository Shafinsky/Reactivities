using System;

namespace Application.Profiles;

public class UserProfile
{
    public required string Id { get; set; }
    public required string DispalyName { get; set; }
    public string? Bio { get; set; }
    public string? ImageUrl { get; set; }
}
