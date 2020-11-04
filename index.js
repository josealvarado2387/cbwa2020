const express = require ( 'express' );
const bodyParser = require ( 'body-parser' );

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const projectsController = require ( './controllers/projects' )();
const issuesController = require ( './controllers/issues' )();
const users = require ( "./models/users" )();
const usersController = require ( "./controllers/users" )();
const app = (module.exports = express ());

// logging
app.use (( req , res , next ) => {
    // Display log for requests
    console.log ( '[%s] %s -- %s' , new Date (), req.method , req.url );
    next ();
});

app.use ( async (req,res,next ) => {
    const FailedAuthMessage = {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
        error: "Failed Authentication" ,
        message: "Go away!" ,
        code: "xxx" , // Some useful error code
    };
    const suppliedKey = req.headers [ "x-api-key" ];
    const clientIp = req.headers [ "x-forwarded-for" ] || req.connection.remoteAddress;
    // Check Pre-shared key
    if (! suppliedKey ) {
        console.log (
            " [%s] FAILED AUTHENTICATION -- %s, No Key Supplied" ,
            new Date (),
            clientIp
            );
            FailedAuthMessage.code = "01" ;
            return res.status(401).json( FailedAuthMessage );
        }
        const user = await users.getByKey(suppliedKey);
        if (!user ) {
            console.log (
                " [%s] FAILED AUTHENTICATION -- %s, BAD Key Supplied" ,
                new Date (),
                clientIp
                );
                FailedAuthMessage.code = "02" ;
                return res.status(401).json(FailedAuthMessage);
            }
            next ();
        });
        app.use ( bodyParser.json ());
        app.get ( "/" , ( req , res ) => {
            res.json ({
                hello: "José Luis Alvarado Carranza(2020092) - Cloud Based Web Application (HDIP2020)- Lecturer: David Albert"
            });
        });
        // Get all books
        app.get ( '/issues', issuesController.getController);
        // Add a book
        app.post ( '/issues' , issuesController.postController );
        // A book
        
        app.get("/issues/:issueNumber", issuesController.getByIssueNumber);
        app.get ( "/issues/populated", issuesController.populatedController );
        
        
        // Get all authors
        app.get("/projects", projectsController.getController);
        // Get all authors with books
        app.get ( "/projects/populated", projectsController.populatedController );
        // Add a author
        app.post ( "/projects", projectsController.postController );
        // An Author
        app.get ( "/projects/:slug" , projectsController.getBySlug );

        // Get all users
        app.get("/users", usersController.getController);
        // Add a author
        app.post ( "/users", usersController.postController );
        // An Author
        app.get ( "/users/:email" , usersController.getByEmail );
        
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