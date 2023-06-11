
const mysqul = require("mysql2/promise");

async function main() {
    try {
        let connection = await mysqul.createConnection(
            {
                host: "localhost",
                user: "root",
                password: "contraseña",
                database: "museo"
            });
        console.log("Conexion correcta");

        // let sql = "CREATE TABLE direccion (id INT AUTO_INCREMENT PRIMARY KEY, " +
        //     "calle VARCHAR(200), " +
        //     "numero INT)";

        // let [result] = await connection.query(sql);
        // console.log("Tabla creada");
        // console.log(result);

        // AÑADO COLUMNA//

        // let sql = "ALTER TABLE direccion ADD column direc INT"
        // let [result] = await connection.query(sql);
        // console.log("Dato Insertado");
        // console.log(result);

        ////// DROP PARA BORRAR SÓLO UNA COLUMNA /////

        // let sql = "ALTER TABLE direccion DROP column direc"
        // let [result] = await connection.query(sql);
        // console.log("Dato Insertado");
        // console.log(result);


        //MODIFICO COLUMNA//

        // let sql = "UPDATE direccion "

        //BORRO COLUMNA//

        // let sql = "DROP TABLE direccion";
        // let [result] = await connection.query(sql);
        // console.log("Datos Borrados");
        // console.log(result);

        // SETEAR NOTAS ALUMNOS A '0' //

        // let sql = "UPDATE marks SET mark= 0";
        // let [result] = await connection.query(sql);
        // console.log("Dato Actualizado");
        // console.log(result);

        //OBTENER NOMBRE Y PRIMER APELLIDO DE TODOS LOS ESTUDIANTES//

        // let sql = "SELECT first_name, last_name FROM students";
        // let [result] = await connection.query(sql);
        // console.log("Datos Obtenidos");
        // console.log(result);

        //OBTENER TODOS LOS DATOS DE PROFESORES7/

        // let sql = "SELECT * FROM teachers";
        // let [result] = await connection.query(sql);
        // console.log("Datos Obtenidos");
        // console.log(result);

        //RETO 2 ELIMINAR DE LA BASE DE DATOS NOTAS CUYA FECHA TENGA MÁS DE 10 AÑOS//

        // let sql = "DELETE FROM marks WHERE date < '2013-01-01'";
        // let [result] = await connection.query(sql);
        // console.log("Datos Obtenidos");
        // console.log(result);

        //ACTUALIZAR DATOS EN LA TABLA TENIENDO EN CUENTA QUE LOS PROFESORES
        // VAN A PONER UN 5 A LOS ALUMNOS CUYA NOTA SEA INFERIOR A 5//

        // let sql = "UPDATE marks SET mark= 5 WHERE mark < 5";
        // let [result] = await connection.query(sql);
        // console.log("Datos Actualizados");
        // console.log(result);





        /////////  DIA2  ////////

        // CALCULAR NOTA MEDIA ALUMNOS ASIGNATURA 1 //

        // let sql = "SELECT AVG(mark) AS media_notas from marks";
        // let [result] = await connection.query(sql);
        // console.log("Datos Obtenidos");
        // console.log(result);

        // Calcular el número total de alumnos que hay en el bootcamp //

        // let sql = "SELECT COUNT(*) FROM students";
        // let [result] = await connection.query(sql);
        // console.log("Datos Obtenidos");
        // console.log(result);

        // Listar todos los campos de la tabla “groups” //

        // let sql = "SELECT * FROM grupis";
        // let [result] = await connection.query(sql);
        // console.log("Datos Obtenidos");
        // console.log(result);

        // Elimina todas las notas de la base de datos que estén por encima de 5 y que sean del año
        //pasado (no utilices BETWEEN).//

        // let sql = "DELETE FROM marks WHERE mark > 5 AND (date > '2022-01-01' AND date < '2022-12-31') ";
        // let [result] = await connection.query(sql);
        // console.log("Datos Obtenidos");
        // console.log(result);

        // Obtén los datos de todos los estudiantes que estén en el bootcamp este año. Para ello la tabla
        //de estudiantes debe tener un campo que sea el año de ingreso.//


        //  let sql = "ALTER TABLE students ADD column year INT"
        // let [result] = await connection.query(sql);
        // console.log("Dato Creado");
        // console.log(result);

        // let sql = "UPDATE students SET year = 2023";
        // let [result] = await connection.query(sql);
        // console.log("Datos Obtenidos");
        // console.log(result);

        // let sql = "SELECT * FROM students WHERE year = 2023";
        // let [result] = await connection.query(sql);
        // console.log("Datos Obtenidos");
        // console.log(result);


        // • Calcular el numero de profesores que hay por cada asignatura.//

        // let sql = "SELECT id_subject, COUNT(id_teacher) FROM subject_teacher GROUP BY id_subject";
        // let [result] = await connection.query(sql);
        // console.log("Datos Obtenidos");
        // console.log(result);


        //   RETO 2  //

        //Obtén el id y la nota de los alumnos que tengan un id entre 1 y 20, o que tenga una nota
        //mayor de 8 y la nota tenga fecha del año pasado.

        // let sql = "SELECT student_id, mark FROM marks WHERE student_id BETWEEN 1 AND 20 OR(mark >8 AND date BETWEEN '2022-01-01' AND '2022-12-31')"
        //  let [result] = await connection.query(sql);
        // console.log("Datos Obtenidos");
        // console.log(result);


       // Obtén la media de las notas que se han dado en el último año por asignatura.

        // let sql = "SELECT id_subject, AVG(mark) AS media_notas from marks WHERE date BETWEEN '2022-06-01' AND '2023-06-01' GROUP BY id_subject";
        // let [result] = await connection.query(sql);
        // console.log("Datos Obtenidos");
        // console.log(result);


// • Obtén la media aritmética de las notas que se han dado en el último año por alumno.

        // let sql = "SELECT student_id, AVG(mark) AS media_notas from marks WHERE date BETWEEN '2022-06-01' AND '2023-06-01' GROUP BY student_id";
        // let [result] = await connection.query(sql);
        // console.log("Datos Obtenidos");
        // console.log(result);



        // DIA 3 //

        // Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que
        // están apuntados.//

        // let sql = "SELECT first_name, last_name, title FROM students JOIN subject ON (students.id_students = subject.id_subject)";
        // let [result] = await connection.query(sql);
        // console.log("Datos Obtenidos");
        // console.log(result);

        // Obtén todos los nombres y apellidos de los profesores y los nombres de las asignaturas que imparten.
  
        // let sql = "SELECT first_name, last_name, title FROM teachers JOIN subject ON (teachers.id_teachers = subject.id_subject)";
        // let [result] = await connection.query(sql);
        // console.log("Datos Obtenidos");
        // console.log(result);

        // Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor que la imparte.

        // let sql = "SELECT title, teachers.first_name, teachers.last_name, COUNT(id_students) FROM teachers JOIN subject_teacher ON (teachers.id_teachers = subject_teacher.id_teacher) JOIN subject ON (subject.id_subject = subject_teacher.id_subject)JOIN grupis ON (grupis.id_grupis = subject_teacher.id_grupis) JOIN students ON (students.id_grupis = grupis.id_grupis) GROUP BY (id_students)";
        // let [result] = await connection.query(sql);
        // console.log("Datos Obtenidos");
        // console.log(result);

        ////////////// PROYECTO MUSEO /////////////

// para modificar un campo porque me hice caquita//

// let sqlMuseo = 'UPDATE estado SET estado = "prestado" WHERE estado != "prestada" AND estado != "prestamo"'
//         let [result] = await connection.query(sqlMuseo)
//         console.log("Dato insertado");
//         console.log(result)


// - Obtener un listado de todos los objetos que el museo tiene en préstamo, su localización dentro
// de la exposición, la fecha de expiración de este, la información básica (nombre, apellidos y
// email) de la persona que los ha prestado.

// let sql = `SELECT pi.nombre, pi.ubicacion, es.fecha_in, du.nombre, du.apellidos, du.email FROM piezas
// AS pi INNER JOIN estado AS es ON (es.id_piezas = pi.id_piezas)
// INNER JOIN dueño AS du ON (du.id_dueño = pi.id_dueño)
// WHERE estado = 'prestado'`
//         let [result] = await connection.query(sql);
//         console.log("Datos Obtenidos");
//         console.log(result);



// - Obtener de forma ordenada de mayor a menor, el número total de objetos o piezas agrupados
// por su situación dentro de la organización, esto es, cuántos hay expuestos, cuántos en
// itinerancia y cuántos almacenados.

// let sql = `SELECT ubicacion, COUNT(ubicacion) AS suma FROM piezas 
// GROUP BY ubicacion ORDER BY suma DESC`

// let [result] = await connection.query(sql);
//         console.log("Datos Obtenidos");
//         console.log(result);






 



    }
    catch (err) {
        console.log(err)
        await connection.end();
    }
}

main();


