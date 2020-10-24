const db = require ( '../db' )();
module.exports = () => {
    const get = () => {
        console.log ( ' inside projects model' );
        return db.projects;
    }
    const add = ( name ) => {
        return db.projects.push ({
            id: db.authors.length + 1 ,
            name ,
        });
    }
    return {
        get ,
        add
    }
};