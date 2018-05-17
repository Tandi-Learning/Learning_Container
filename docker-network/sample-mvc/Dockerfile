
FROM microsoft/aspnetcore-build as build-stage
LABEL Name=sample-mvc-build Version=1.0.1
ARG source=.
WORKDIR /app
COPY $source/sample-mvc.csproj .
RUN dotnet restore
COPY $source .
RUN dotnet publish -o /publish

FROM microsoft/aspnetcore
LABEL Name=sample-mvc Version=1.0.1
WORKDIR /sample-mvc
COPY --from=build-stage /publish .
EXPOSE 6000
ENTRYPOINT dotnet sample-mvc.dll