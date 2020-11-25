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
    const postController = async ( req , res ) => {
        const name = req.body.name;
        const slug = req.body.slug;
        const description = req.body.description;
        const result = await projects.add ( name, slug, description );
        
        res.json ( result );
    };
    return {
        getController,
        postController,
        getBySlug,
        populatedController,
    }
}