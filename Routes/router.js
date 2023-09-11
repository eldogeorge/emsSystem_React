// s2To create paths

//PS1.1 set paths for each requests

//PS1.2 import express
const express=require ('express')
const { employeeRegister, getAllEmployees, getSingleEmployee, toRemoveEmployee, editEmployee } = require('../Controllers/logic')


// // SEDS2
// const { employeeRegister } = require('../Controllers/logic')
// // SEDS3
const upload= require('../multerConfig/storageConf')




//PS2 line 16create an object for Router class in express
//  varname  inside express router class is imported
const router=new express.Router()

// register employees - post request  //SEDS3                   // SEDS2
router.post('/employees/register',upload.single('user_profile'),employeeRegister)


// api request employees in a table 
//GES1 get all employees- get request then goto logic.js, GES3(import getAllEmployees),then goto server-> allAPI.js
router.get('/employees/getEmployeesDetails',getAllEmployees)


// router request single employyee in view
// GSES2 get single employees- get request then goto logic.js, GSES4(import getSingleEmployees),then goto clientsserver-> allAPI.js
router.get('/employees/singleEmployeeDetail/:id',getSingleEmployee)


// router request to delete employee
// RES1 then goto logic.js                      RES3 imort toremoveremployee then goto clientserver->allapi.js
router.delete('/employees/toRemoveEmployee/:id',toRemoveEmployee)

// router request to update/edit employee
// EUES1 edit employee then goto logic.js                          EUES3 import editEmployee then goto clientServer->edit.js
router.put('/employees/updateEmployee/:id',upload.single('user_profile'),editEmployee)
// .. other request

//PS3 export router
module.exports=router
