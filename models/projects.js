const db = require ( "../db" )();
const COLLECTION = "projects" ;
module.exports = () => {
const get = async ( id = null ) => {
console.log ( " inside projects model" );
if (! id ) {
const projects = await db.get ( COLLECTION );
return projects ;
}
const projects = await db.get ( COLLECTION , { id });
return projects ;
};
const add = async ( name ) => {
const projectsCount = await db.count ( COLLECTION );
const results = await db.add ( COLLECTION , {
id: authorCount + 1 ,
name: name ,
});
return results.result;
};
return {
get ,
add ,
};
};