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
    const get1 = async ( due_date = null ) => {
        console.log ( " inside projects model" );
        if (!due_date ) {
            try{
            const projects = await db.get ( COLLECTION );
            return {projectslist:projects};
            }catch(ex){
                return{error:ex} 
            }
        }
        const projects = await db.get ( COLLECTION , { due_date });
        return projects ;
    };
    const add = async ( name, slug, description, due_date ) => {
        if (name != null, slug != null, description != null, due_date != null){
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
            due_date: due_date,
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
        get1,
        get,
        add,
        aggregateWithIssues,
        
    };
}
