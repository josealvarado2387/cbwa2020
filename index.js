const express = require ( 'express' );
const bodyParser = require ( 'body-parser' );
const hostname = '0.0.0.0' ;
const port = process.env.PORT || 3000 ;
const projectsController = require ( './controllers/projects' )();
const issuesController = require ( './controllers/issues' )();
const app = module.exports = express ();
// logging
app.use (( req , res , next ) => {
    // Display log for requests
    console.log ( '[%s] %s -- %s' , new Date (), req.method , req.url );
    next ();
});
app.use ( bodyParser.json ())
// Get all books
app.get ( '/issues' , issuesController.getController );
// Add a book
app.post ( '/issues' , issuesController.postController );
// A book
app.get ( '/issues/:id' , issuesController.getById );
// Get all authors
app.get ( '/projects' , projectsController.getController );
// Add a author
app.post ( '/projects' , projectsController.postController );
app.listen ( port , hostname , () => {
    console.log ( `Server running at http:// ${ hostname } : ${ port } /` );
});
// 404
app.use (( req , res ) => {
    res . status (404).json ({
        error: 404 ,
        message: 'Route not found' ,
    });
});