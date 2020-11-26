const projects = require ( '../models/projects.js' )();

module.exports = () => {
    const getController = async ( req, res ) => {
        const {projectslist:projects} = await projects.get()
        if(error){
        return res.status(500).json({error})
        }
        res.json(projectslist);
    };
    const populatedController = async ( reg , res ) => {
        const {projectslist:projects} = await projects.aggregateWithIssues ()
        if(error){
        return res.status(500).json({error})
        }
        res.json(projectslist); 
        };
    const getBySlug = async ( req , res ) => {
        const {projectslist:projects} = await projects.get  ( req.params.slug )
        if(error){
            return res.status(500).json({error})
            }
            res.json(projectslist); 

    };
    const getBydue_date = async ( req , res ) => {
        const {projectslist:projects} = await projects.get  ( req.params.due_date )
        if(error){
            return res.status(500).json({error})
            }
            res.json(projectslist); 

    };
    const postController = async ( req , res ) => {
        const name = req.body.name;
        const slug = req.body.slug;
        const description = req.body.description;
        const description = req.body.due_date,
        const result = await projects.add ( name, slug, description, due_date );
        
        res.json ( result );
    };
    return {
        getController,
        postController,
        getBySlug,
        populatedController,
        getBydue_date,
    }
}