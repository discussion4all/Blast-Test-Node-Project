# For Import db
<!--- Specify username and password -->
mongorestore --host {host} --port {port} --username {user} --password {pass} {path}
or
<!--- Without Specify username and password -->
mongorestore --host {host} --port {port} <directory_backup>

<!--- To import BlastTest project collections run this command in command prompt -->
e.g. mongorestore --host 127.0.0.1  --port 27017 DBCollections<!--- BlastTest Project collections available in this dir -->


# For Export db
<!--- Export all databases on this host and portnumber -->
mongodump --host {host} --port {port} --username {user} --password {pass} --out {path}
e.g. mongodump --host 127.0.0.1  --port 27017 --out DBCollections

or
<!--- Export only one specific database -->
mongodump -d <database_name> -o <directory_backup>
mongodump -d BlastTest -o DBCollections(foldername)
