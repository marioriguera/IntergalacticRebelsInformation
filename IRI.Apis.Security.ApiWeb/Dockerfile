#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8082
EXPOSE 8083

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["IRI.Apis.Security.ApiWeb/IRI.Apis.Security.ApiWeb.csproj", "IRI.Apis.Security.ApiWeb/"]
RUN dotnet restore "./IRI.Apis.Security.ApiWeb/IRI.Apis.Security.ApiWeb.csproj"
COPY . .
WORKDIR "/src/IRI.Apis.Security.ApiWeb"
RUN dotnet build "./IRI.Apis.Security.ApiWeb.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./IRI.Apis.Security.ApiWeb.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "IRI.Apis.Security.ApiWeb.dll"]