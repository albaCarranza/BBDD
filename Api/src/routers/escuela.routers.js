const {Router} = require ('express')
const router = Router();
const escuelaCtrl = require('../controller/escuela.controller')
const marksCtrl = require('../controller/marks.controller')

router.get("/students", escuelaCtrl.getStudents);

router.get("/students/:id_students", escuelaCtrl.getStudents);

router.post("/students", escuelaCtrl.postStudents)

router.put("/students", escuelaCtrl.putStudents);

router.delete("/students", escuelaCtrl.deleteStudents);

///rutas marks///

router.get("/marks/:id_students", marksCtrl.getMarks);

router.get("/subject/:id_students", marksCtrl.getSubjectId);

router.get("/subject", marksCtrl.getSubject)

router.get("/teacher/:id_teacher", marksCtrl.getTeacherT);

router.get("/teacher", marksCtrl.getTeacher);

module.exports = router;