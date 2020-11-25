const issues = require ( '../models/issues.js' )();

module.exports = () => {
    const getController = async(req, res) => {
        const {issueslist, error} = await issues.get()
        if(error){
        return res.status(500).json({error})
        }
        res.json({issues:issueslist});
    };
    
    const getByIssueNumber = async ( req , res ) => {
        const {issueslist:issues} = await issues.get(req.params.issueNumber)
        if(error){ return res.status(500).json({error})
    }
    res.json({issueslist:issues});
    
    };  

    const populatedController = async ( reg , res ) => {
        const {issueslist:issues} =  await issues.aggregateWithProjects ()
        if(error){
            return res.status(500).json({error})
            }
            res.json({issueslist:issues});
        };
    
     
    const postController = async ( req , res ) => {
        const issueNumber = req.body.issueNumber;
        const title = req.body.title;
        const description = req.body.description;
        const status = req.body.status;
        const project_id = req.body.project_id;
        const result = await issues.add( issueNumber, title, description, status, project_id);


res.json(result);

    }
    return {
        getController,
        postController,
        populatedController,
        getByIssueNumber,
    }
}

