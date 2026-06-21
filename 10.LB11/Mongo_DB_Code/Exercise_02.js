// Import JSON File (Run in CMD)
mongoimport --db companyDB --collection employeeDetails --file employeeDetails.json --jsonArray

// Select Database
use companyDB

// Display all documents
db.employeeDetails.find()

// 1. Display all employees whose age is greater than 60
db.employeeDetails.find({age: { $gt: 60 }})

// 2. Count how many employees have salary greater than 100000
db.employeeDetails.countDocuments({salary: { $gt: 100000 }})

// 3. Display employees from the IT department only
db.employeeDetails.find({department: "IT"})

// 4. Show employees sorted by salary in descending order
db.employeeDetails.find().sort({salary: -1})

// 5. Create a single field index on age
db.employeeDetails.createIndex({age: 1})

// 6. Create a single field index on salary
db.employeeDetails.createIndex({salary: 1})

// 7. Display all indexes in the collection
db.employeeDetails.getIndexes()

// 8. Analyze query performance of age > 60
db.employeeDetails.find({age: { $gt: 60 }}).explain("executionStats")

// 9. Analyze query performance of salary > 100000
db.employeeDetails.find({salary: { $gt: 100000 }}).explain("executionStats")

// Verify indexes again
db.employeeDetails.getIndexes()

// Drop age index
db.employeeDetails.dropIndex({age: 1})

// Drop salary index
db.employeeDetails.dropIndex({salary: 1})

// Final index check
db.employeeDetails.getIndexes()