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