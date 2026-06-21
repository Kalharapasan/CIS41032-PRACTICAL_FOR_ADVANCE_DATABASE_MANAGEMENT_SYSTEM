// Import JSON File (Run in CMD)
mongoimport --db persons --collection personDetails --file persons.json --jsonArray

// Select Database
use persons

// Display all documents
db.personDetails.find()

// 1. Display persons whose age is greater than 60
db.personDetails.find({"dob.age": { $gt: 60 }})

// 2. Count persons whose age is greater than 60
db.personDetails.countDocuments({"dob.age": { $gt: 60 }})

// 3. Analyze the 2nd question
db.personDetails.find({"dob.age": { $gt: 60 }}).explain("executionStats")

// 4. Create an index on age field
db.personDetails.createIndex({"dob.age": })

// 5. Find details of indexes (output)
db.personDetails.getIndexes()

// Analyze again after creating index
db.personDetails.find({"dob.age": { $gt: 60 }}).explain("executionStats")

// 6. Drop age index
db.personDetails.dropIndex({"dob.age": 1})

// Verify indexes
db.personDetails.getIndexes()

// Create Compound Index
db.personDetails.createIndex({gender: 1,"dob.age": 1})

// View indexes
db.personDetails.getIndexes()

// Sort by age ascending
db.personDetails.find().sort({"dob.age": 1})

// Sort by age descending
db.personDetails.find().sort({"dob.age": -1})

// Create Text Index
db.personDetails.createIndex({"name.first": "text","name.last": "text"})

// Search using Text Index
db.personDetails.find({$text:{$search: "victor"}})

// View all indexes
db.personDetails.getIndexes()

// Drop all user-created indexes
db.personDetails.dropIndexes()

// Final index check
db.personDetails.getIndexes()