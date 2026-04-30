# CIS41032 - Practical for Advance Database Management System

## Overview
This repository contains my practical lab work for CIS41032 (Advanced Database Management System), including MongoDB exercise scripts, lab sheets, and supporting documents.

## Repository Structure

### 00.Lab Work
`00.Lab Work/01.Day 01 LB01&LB03 (2026.04.21)/`

Contains day-01 practice and exports:
- `Task01.bson`
- `LB3.bson`
- `EX01.bson`
- `EX02.bson`
- `lab1.pdf`
- `lab3.pdf`

### 01.LB01
`01.LB01/`

Contains LB01 lab document:
- `lab1.pdf`

### 02.LB03
`02.LB03/`

Contains LB03 references and MongoDB code:
- `lab3.pdf`
- `LB03.docx`
- `LB03.pdf`
- `Mongo_DB_Code/01.Task.json`
- `Mongo_DB_Code/02.EX01.json`
- `Mongo_DB_Code/03.EX02.json`

### 03.LB04
`03.LB04/`

Contains LB04 references and MongoDB code:
- `lab4.pdf`
- `LB04.docx`
- `LB04.pdf`
- `Mongo_DB_Code/01.Test.json`
- `Mongo_DB_Code/02.Ex01.json`

### 04.LB04&LB05
`04.LB04&LB05/`

Contains combined LB04 and LB05 references with MongoDB code:
- `lab4&5.pdf`
- `LB04&LB05.docx`
- `LB04&LB05.pdf`
- `Mongo_DB_Code/01.Task01.json`
- `Mongo_DB_Code/02.Ex01.json`
- `Mongo_DB_Code/03.EX02.json`

### 05.LB06
`05.LB06/`

Contains LB06 references and MongoDB code:
- `Lab06.pdf`
- `LB06.docx`
- `LB06.pdf`
- `Mongo_DB_Code/Exercise.json`
- `Mongo_DB_Code/Task01.json`

### 06.LB07
`06.LB07/`

Contains LB07 MongoDB aggregation lab code:
- `Mongo_DB_Code/Task01.json`

## Work Completed
- Practiced MongoDB data creation and insertion tasks.
- Completed query exercises using filtering, projection, and sorting patterns.
- Organized each lab's code and report files in separate folders.
- Maintained both early `.bson` practice exports and `.json` code scripts.

## Today's Work Details (2026-04-30)
- Created and used `ecommerceDB` with `orders` collection setup.
- Inserted sample order records with `insertMany()` using `ISODate` values.
- Completed aggregation tasks using `$match`, `$group`, `$sort`, `$max`, `$multiply`, and `$avg`.
- Implemented customer-product quantity summary and date-range filtering queries.
- Practiced advanced stages with `$unwind` and exported filtered data using `$out`.

### LB07 Task01 - Key Queries Covered
1. Find all orders in the Electronics category.
2. Calculate total Electronics revenue using Quantity x Price.
3. Group by category and compute total revenue per category.
4. Sort category revenue in descending order.
5. Find highest quantity ordered in any single order.
6. Summarize total quantity per customer per product.
7. Filter orders in a specific date range (2022-02-01 to 2022-03-01).
8. Unwind category values for array-based category structures.
9. Write filtered Electronics orders to a new collection.

### Skills Practiced Today
- Data modeling for an order-processing dataset.
- Aggregation pipeline design for business-style analytics.
- Revenue analysis using computed fields in grouping stages.
- Result shaping for reporting with sort and grouped keys.
- Collection-to-collection pipeline output with `$out`.

## Last Updated
2026-04-30
