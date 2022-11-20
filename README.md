# most-occurring-triplets

## Prerequisites
- Install Node.js
## Run
To run the code, use the command:
```
node most-occurring-triplets.js
```
## Output
The program will output the list of the top 10 most occurring triplets in the logFile, in order of most occurring to least occurring.
## Assumptions
- All request paths will be valid URL paths, specifically not containing back-slashes as this is used in the key mapping function.
- Request paths that are logged as relative paths in the same string should not be separated out into separate paths e.g. these paths should all be considered separate and unique:
```
["/confirm/thank-you", "user_2"]
["/confirm", "user_2"]
["/thank-you", "user_2"]
```
- Every record in the `logFile` array is a valid tuple with a defined `request_path` and `user_id` string, in that order.
- This challenge does not require unit tests.