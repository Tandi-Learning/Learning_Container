
FROM microsoft/aspnetcore-build as build-stage
# LABEL Name=sample-api-build Version=1.0.1
ARG source=.
WORKDIR /app
COPY $source/sample-api.csproj .
RUN dotnet restore
COPY $source .
RUN dotnet publish -o /publish

FROM microsoft/aspnetcore
# LABEL Name=sample-api Version=1.0.1
WORKDIR /sample-api
COPY --from=build-stage /publish .
EXPOSE 5000
ENTRYPOINT [ "dotnet", "sample-api.dll" ]