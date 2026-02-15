using System;
using Application.Activities.Commands;
using Application.Activities.DTOs;
using FluentValidation;

namespace Application.Activities.Validators;

public class CreaateActivityValidator : BaseActivityValidator<CreateActivity.Command, CreataActivityDto>
{
    public CreaateActivityValidator() : base(x => x.ActivityDto)
    {
        
    }

}
