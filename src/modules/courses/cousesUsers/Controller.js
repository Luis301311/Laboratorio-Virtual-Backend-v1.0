const db = require ('../../../DB/mysql');
const table = 'Users_courses';
function getAll(){
    return db.getAll(table);
}

function getById(id){
    return db.getById(table, {Id_course : id});
}

/* function remove(body){
    return db.remove(table, {Id_course :body.Id_course});
} */

function add(data){
    return db.add(table, data);
}

function update(body, id){
    const courseUser = {
        Email: body.Email,
        Id_course : body.Id_course
    }
    return db.update(table,courseUser,{Email : id})
}
function query(id){
    return db.query(table, id);
}
module.exports ={
    getAll,
    getById,
    add, 
    update,
    query, 
}


