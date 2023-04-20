// Guardar, Actualizar, Leer o eliminar los datos en el storage
import { getDatabase, setDatabase } from './../utils/storage';

const dbName = 'db_teachers';

export function createTeacher(teacher) {
    const arrayTeachers = getDatabase(dbName);
    arrayTeachers.push(teacher);
    setDatabase(dbName, arrayTeachers);
}
