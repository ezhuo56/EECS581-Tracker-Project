/*
  Name: AWS.js
  Description: Create the and sore the info for the AWS database and server
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 02/11/2023
  Preconditions: 
  Postconditions: creates a constant containing the AWS info
  Errors:
  Side effects:
  invariants: 
  any known faults:
*/

const AWS_CONFIG = {
  Endpoint: "big-bops-development-database.cwinxvxdyhox.us-east-2.rds.amazonaws.com",
  Port: "3306",
  InstanceID: "big-bops-development-database",
  DBName: "Big_Bop_Dev_Database",
  key_pair_name: "Big-Bops-Server",
  ServerName: "biggestBops",
  ServerPublicDNS: "ec2-3-144-111-114.us-east-2.compute.amazonaws.com",
  IP4_Address: "3.144.111.114"
}