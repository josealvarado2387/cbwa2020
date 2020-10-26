const db = require ( '../db' )();
const COLLECTION = "issues" ;
module.exports = () => {
    const get = async ( id = null ) => {
        console.log ( 'inside issues model');
        if (! id ) {
            const issues = await db.get ( COLLECTION );
            return issues ;
        }
    const issues= await db.get(COLLECTION,{id});
    return issues;
    }
    const add = async ( name , author ) => {
        const issuesCount = await db.count ( COLLECTION );
        const results = await db.add ( COLLECTION , {
            id: issuesCount + 1 ,
            name: name ,
            author: author
        });
        return results.result ;
    }
    return {
        get ,
        add
    }
};