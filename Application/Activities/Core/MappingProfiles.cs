using System;
using Application.Activities.Commands;
using AutoMapper;
using Domain;

namespace Application.Activities.Core;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Activity, Activity>();
    }
}
