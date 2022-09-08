

//1. An endpoint to list users by multiple ids:
GET: '/users/?id=1,2,3'


//2. An endpoint to replace a user by id.
// in a request body i send the replace user
PUT: '/users/{id}'
//3. if i want to replace a user with anther user i send 2 ids... like this:
PUT: '/users/{oldId}/{newId}'


//- An endpoint to create multiple users

// in a request body i send the  users to created
//multipleUser is extra to differentiate in the endpoint vs Create a new user
POST: '/users/multipleUser' 

