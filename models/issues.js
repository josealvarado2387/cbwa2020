const db = require ( '../db' )();
module.exports = () => {
    const get = ( id = null ) => {
        console.log ( ' inside issues model' );
        if (! id ) {
            return db.issues;
        }
        return db.issues [ parseInt ( id ) - 1 ];
    }
    const add = ( name , projects ) => {
        return db.issues.push ({
            id: db.issues.length + 1 ,
            name: name ,
            projects: projects
        });
    }
    return {
        get ,
        add
    }
};