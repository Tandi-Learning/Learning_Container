docker run 
    -e 'ACCEPT_EULA=Y' 
    -e 'SA_PASSWORD=<YourStrong!Passw0rd>' 
    -p 1433:1433 
    -v /var/opt/mssql:/var/opt/mssql 
    -d microsoft/mssql-server-linux

// change the sa password and spinning out the sql container
// ****************************************************************
docker exec -it localsql /opt/mssql-tools/bin/sqlcmd \
   -S localhost -U SA -P 'Password@2' \
   -Q 'ALTER LOGIN SA WITH PASSWORD="Password!1"'

// connect to sql container
// ****************************************************************
docker exec -it localsql "bash"

// connect to sql using sqlcmd from inside container
/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'Password!1'


// issue with using bind-mount to persist db
https://github.com/Microsoft/mssql-docker/issues/12



// MSSQL on Linux using Docker for Mac
// https://adilsoncarvalho.com/using-mssql-on-linux-using-docker-for-mac-a5d4ac81e57f
// ****************************************************************


docker create -v /var/opt/mssql --name mssql \
  microsoft/mssql-server-linux \
  /bin/true

docker run \
  -e ‘ACCEPT_EULA=Y’ \
  -e ‘SA_PASSWORD=Password@2’ \
  -p 1433:1433 \
  --volumes-from mssql \
  -d \
  --name sql-server \
  microsoft/mssql-server-linux