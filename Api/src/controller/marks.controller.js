const { pool } = require("../database");



const getMarks = async (request, response) =>
{
  try{
    let sql;
    if (request.params.id_students == null)
        sql = "SELECT AVG(mark) AS media_notas from marks";
    else
        sql = "SELECT AVG(mark) AS media_notas from marks WHERE id_students = " + request.params.id_students;

    let [result] = await pool.query(sql);

    response.send(result);
  }
  catch(err)
  {
    console.log(err)
  }
}

////////////////////////////////////////////////////////////
const getSubjectId = async (request, response) =>
{
  try{
    let sql = "SELECT title FROM subject JOIN marks ON (subject.id_subject = marks.id_subject) WHERE id_students ="+ request.params.id_teachers;
   
    let [result] = await pool.query(sql);

    response.send(result);
    console.log(result);
  }
  catch(err)
  {
    console.log(err)
  }
}

//////////////////////////////////////////////////////////////////

const getSubject = async (request, response) =>
{
  try{
    let sql = "SELECT first_name, last_name, title FROM students JOIN subject ON (students.id_students = subject.id_subject)";
    
    let [result] = await pool.query(sql);

    response.send(result);
    console.log(result);
  }
  catch(err)
  {
    console.log(err)
  }
}

//////////////////////////////////////////////////////////////

const getTeacherT = async (request, response) =>
{
  try{
    let sql = "SELECT title FROM subject JOIN subject_teacher ON (subject.id_subject = subject_teacher.id_subject) WHERE id_teacher ="+ request.params.id_teacher;
   
    let [result] = await pool.query(sql);

    response.send(result);
    console.log(result);
  }
  catch(err)
  {
    console.log(err)
  }
}

////////////////////////////////////////////////////////////////

const getTeacher = async (request, response) =>
{
  try{
    let sql = "SELECT first_name, last_name, title FROM teachers JOIN subject_teacher ON (teachers.id_teacher = subject_teacher.id_teacher) JOIN subject ON (subject.id_subject = subject_teacher.id_subject)";
   
    let [result] = await pool.query(sql);

    response.send(result);
    console.log(result);
  }
  catch(err)
  {
    console.log(err)
  }
}

module.exports = { getMarks, getSubject, getSubjectId, getTeacherT, getTeacher}