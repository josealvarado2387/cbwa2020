const issues = require ( '../models/issues.js' )();

module.exports = () => {
    const getController = async(req, res) => {
        res.json(await issues.get());
    }
    const getByIssueNumber = async ( req , res ) => {
        res.json ( await issues.get(req.params.issueNumber));
    }  
    const populatedController = async ( reg , res ) => {
        res.json ( await issues.aggregateWithProjects ());
        };
     
    const postController = async ( req , res ) => {
        const issueNumber = req.body.issueNumber;
        const title = req.body.title;
        const description = req.body.description;
        const status = req.body.status;
        const project_id = req.body.project_id;
        const result = await issues.add ( issueNumber, title, description,status, project_id );
        res.json ( result );
    }
    return {
        getController,
        postController,
        populatedController,
        getByIssueNumber,
    }
}
