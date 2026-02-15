using System;
using Application.Activities.DTOs;
using AutoMapper;
using Domain;

namespace Application.Activities.Core;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Activity, Activity>();
        CreateMap<CreataActivityDto, Activity>();
        CreateMap<EditActivityDto, Activity>();
    }
}
