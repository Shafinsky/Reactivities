using System;
using Domain;

namespace Application.Interfaces;

public interface IUserAccerssor
{
    string GetUserId();
    Task<User> GetUserAsync();
    Task<User> GetUserWithPhotosAsync();
}
