const db = require ( "../db" )();
const COLLECTION = "projects";

const LOOKUP_ISSUES_PIPELINE = [
    {
        $lookup: {
            from: "issues" ,
            localField: "_id" ,
            foreignField: "project_id" ,
            as: "issues" ,
        },
    },
];


module.exports = () => {
    const get = async ( slug = null ) => {
        console.log ( " inside projects model" );
        if (!slug ) {
            try{
            const projects = await db.get ( COLLECTION );
            return {projectslist:projects};
            }catch(ex){
                return{error:ex} 
            }
        }
        const projects = await db.get ( COLLECTION , { slug });
        return projects ;
    };
    const add = async ( name, slug, description ) => {
        if (name != null, slug != null, description != null){
            let projects;
            try{
                projects = await get(slug);
            }catch(ex){
                console.log(" Null ");
                return{ex};
            }
            if(projects.length === 0){
                
            try{
        const projectsCount = await db.count ( COLLECTION );
        const results = await db.add ( COLLECTION , {
            id: projectsCount + 1 ,
            name: name,
            slug: slug,
            description: description,
        });
        return results.result;}catch(ex){
            console.log("error");
            return{error: ex};
            }
            }
        } 
    }

    const aggregateWithIssues = async () => {
        const projects = await db.aggregate ( COLLECTION , LOOKUP_ISSUES_PIPELINE );
        return projects ;
    };
    return {
        get,
        add,
        aggregateWithIssues,
        
    };
}
