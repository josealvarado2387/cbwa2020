const projects = require ( '../models/projects.js' )();
module.exports = () => {
    const getController = ( req , res ) => {
        res.setHeader ( 'Content-Type' , 'application/json' );
        res.json ( projects.get ());
    }
    const postController = ( req , res ) => {
        const name = req.body.name ;
        projects.add ( name );
        return res.end ( `POST: ${ name } ` );
    }
    return {
        getController ,
        postController ,
    }
}