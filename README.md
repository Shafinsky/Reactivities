# Reactivities

Full-stack social platform for creating and attending events: users publish activities, join others, comment in real time and manage their own profile with a photo gallery.

The project uses Clean Architecture. The server side is built on ASP.NET Core (.NET 10) with CQRS via MediatR, FluentValidation, AutoMapper and ASP.NET Core Identity. Entity Framework Core is used to interact with the database, SignalR for live comments, Cloudinary for image hosting. The client side is React + TypeScript. CI/CD is handled by GitHub Actions with deployment to Azure App Service.

## Structure

```
Domain/        domain entities
Application/   commands, queries, handlers, validators, DTOs
Persistence/   DbContext, EF Core configurations, migrations
API/           controllers, DI, middleware, SignalR hubs
client/        React + TypeScript SPA
```

## CI/CD

`.github/workflows/main_reactivities-hangout.yml`: a push to `main` triggers a build of .NET 10 and React (Node 24), publishes the artifact, and deploys it to the `reactivities-hangout` Azure App Service.

Live URL: https://reactivities-hangout.azurewebsites.net

## Run locally

Requires .NET 10 SDK and Node.js 20+.

```bash
git clone https://github.com/Shafinsky/Reactivities.git
cd Reactivities
# backend
dotnet run --project API                  # https://localhost:5001
# client (another terminal)
cd client && npm install && npm run dev   # http://localhost:3000
```

Migrations are applied automatically when the `API` starts.

### Configuration

Secrets are not stored in the repository. Set them using user-secrets:

```bash
cd API
dotnet user-secrets set "Cloudinary:CloudName" "..."
dotnet user-secrets set "Cloudinary:ApiKey" "..."
dotnet user-secrets set "Cloudinary:ApiSecret" "..."
```
