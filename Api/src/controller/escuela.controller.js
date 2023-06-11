
const { pool } = require("../database");


const getStudents = async (request, response) =>
{
  try{
    let sql;
    if (request.params.id_students == null)
        sql = "SELECT * FROM students";
    else
        sql = "SELECT * FROM students WHERE id_students = " + request.params.id_students;

    let [result] = await pool.query(sql);

    response.send(result);
  }
  catch(err)
  {
    console.log(err)
  }
}


const postStudents = async (request, response) =>
{
    try
    {
        console.log(request.body);
        let sql = "INSERT INTO students (first_name, last_name, id_grupis, year)"+
                  "VALUES ('" + request.body.first_name + "', '" + request.body.last_name + "', '" + request.body.id_grupis + "', '" + request.body.year + "')"
                                

    console.log(sql);
    let [result] = await pool.query(sql);
    console.log(result);

    if (result.insertId)
        response.send(String(result.insertId));
    else
        response.send("-1");
    }
    catch(error)
    {
        console.log(error)
    }
    
}

const putStudents = async (request, response) =>
{
   try
   {
    console.log(request.body);
    let sql = "UPDATE students SET first_name = '" + request.body.first_name + "', last_name = '" + request.body.last_name + "', id_grupis = '" + request.body.id_grupis + "', year ='" + request.body.year + "' WHERE id_students = " + request.body.id_students

    console.log(sql);
    let [result] = await pool.query(sql);
    console.log(result);

    if (sql) {
        console.log("Estudiante modificado");
        response.send(result)
    }
    else console.log("Estudiante no se ha podido modificar");
    }
    catch(error)
    {
        console.log(error)
    }
    
   }


const deleteStudents = async (request, response) =>
{
    try
    {
        let sql = "DELETE FROM students WHERE id_students = " + request.body.id_students

        console.log(sql);
        let [result] = await pool.query(sql);
        console.log(result);
        if (sql) {
            console.log("Estudiante borrado");
            response.send(result)
        }
        else console.log("Estudiante no se ha podido borrar");
        }
        catch(error)
        {
            console.log(error)
        }
  
}

module.exports = { getStudents, postStudents, putStudents, deleteStudents}