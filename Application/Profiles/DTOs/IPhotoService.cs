using System;
using Microsoft.AspNetCore.Http;

namespace Application.Profiles.DTOs;

public interface IPhotoService
{
    Task<PhotoUploadResult?> UploadPhoto(IFormFile file);
    Task<string> DeletePhoto(string PublicId);
}
