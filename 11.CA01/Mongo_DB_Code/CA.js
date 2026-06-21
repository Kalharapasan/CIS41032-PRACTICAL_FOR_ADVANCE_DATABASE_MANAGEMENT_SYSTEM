// 1. Create Database
use HospitalDB


// 2. Create Collection and Insert 15 Records
db.patients.insertMany([
{patient_id:"P001",name:"Ravi Kumar",age:45,gender:"Male",disease:"Diabetes",ward:"A1",admission_date:"2023-09-12"},
{patient_id:"P002",name:"Saman Perera",age:30,gender:"Male",disease:"Fever",ward:"B2",admission_date:"2023-10-05"},
{patient_id:"P003",name:"Anjali Deva",age:28,gender:"Female",disease:"Dengue",ward:"A3",admission_date:"2023-11-01"},
{patient_id:"P004",name:"Kumara Silva",age:56,gender:"Male",disease:"Heart Disease",ward:"C1",admission_date:"2023-08-15"},
{patient_id:"P005",name:"Nadeesha Sen",age:35,gender:"Female",disease:"Asthma",ward:"A2",admission_date:"2023-12-18"},
{patient_id:"P006",name:"Ishara Wick",age:60,gender:"Female",disease:"Arthritis",ward:"D1",admission_date:"2024-01-10"},
{patient_id:"P007",name:"Akalanka Jay",age:40,gender:"Male",disease:"Hypertension",ward:"A3",admission_date:"2023-12-01"},
{patient_id:"P008",name:"Ruwani Lak",age:32,gender:"Female",disease:"Diabetes",ward:"B1",admission_date:"2023-07-20"},
{patient_id:"P009",name:"Mahesh Mad",age:25,gender:"Male",disease:"Fracture",ward:"C2",admission_date:"2023-09-08"},
{patient_id:"P010",name:"Dinuli Thar",age:29,gender:"Female",disease:"Migraine",ward:"A1",admission_date:"2023-11-22"},
{patient_id:"P011",name:"Suresh Band",age:38,gender:"Male",disease:"Fever",ward:"B2",admission_date:"2023-09-30"},
{patient_id:"P012",name:"Chathura Ga",age:47,gender:"Male",disease:"Diabetes",ward:"A2",admission_date:"2023-10-18"},
{patient_id:"P013",name:"Nimali Thil",age:34,gender:"Female",disease:"Asthma",ward:"A2",admission_date:"2024-01-01"},
{patient_id:"P014",name:"Thilina Jay",age:31,gender:"Male",disease:"Dengue",ward:"B3",admission_date:"2023-11-15"},
{patient_id:"P015",name:"Malee Perer",age:50,gender:"Female",disease:"Heart Disease",ward:"C1",admission_date:"2023-09-25"}
])


// 3. Insert New Patient
db.patients.insertOne({
    patient_id:"P016",
    name:"Kavindi Nirosh",
    age:37,
    gender:"Female",
    disease:"Fracture",
    ward:"C2",
    admission_date:"2024-02-14"
})


// 4. Retrieve All Patients in Ward A2
db.patients.find({ward:"A2"})


// 5. Find Patients with Diabetes
db.patients.find({disease:"Diabetes"})


// 6. Display Names and Diseases of Female Patients
db.patients.find({gender:"Female"},{name:1,disease:1,_id:0})


// 7. Find Patients Admitted After 2023-11-01
db.patients.find({admission_date:{$gt:"2023-11-01"}})


// 8. Sort Patients by Age in Descending Order
db.patients.find().sort({age:-1})


// 9. Retrieve Male Patients Under Age 40
db.patients.find({gender:"Male",age:{$lt:40}})


// 10. Update Ward of Patient P003 from A3 to B1
db.patients.updateOne({patient_id:"P003"},{$set:{ward:"B1"}})


// 11. Change Disease of Patient P002 from Fever to Viral Fever
db.patients.updateOne({patient_id:"P002"},{$set:{disease:"Viral Fever"}})


// 12. Add Status = "Discharged" to Patients Admitted Before 2023-09-01
db.patients.updateMany({admission_date:{$lt:"2023-09-01"}},{$set:{status:"Discharged"}})


// 13. Update Heart Disease Patients with Status = "Critical"
db.patients.updateMany({disease:"Heart Disease"},{$set:{status:"Critical"}})


// View All Records
db.patients.find().pretty()