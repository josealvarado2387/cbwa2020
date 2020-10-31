const db = require ( '../db' )();
const COLLECTION = "issues";
const issues = require('../controllers/issues');

const LOOKUP_PROJECTS_PIPELINE = [
    {
        $lookup: {
            from: 'projects' ,
            localField: 'project_id' ,
            foreignField: '_id' ,
            as: 'a'
        }
    },
    { $project: {
        issueNumber: 1 ,
        title: 1 ,
        description: {
            $arrayElemAt: [ "$a" , 0 ]
        },
    },
},
];

module.exports = () => {
    const get = async ( issueNumber = null ) => {
        console.log ( 'inside issues model');
        if (!issueNumber ) {
            const issues = await db.get(COLLECTION);
            return issues;
        }
        const status = await db.get(COLLECTION,{issueNumber});
        return status;
    }
    const add = async ( issueNumber , title, description, status, project_id, comments ) => {
        const issuesCount = await db.count ( COLLECTION );
        const results = await db.add ( COLLECTION , {
            id: issuesCount + 1 ,
            issueNumber: issueNumber ,
            title: title,
            description: description,
            status: status,
            project_id: project_id,
            comments: comments,
            
        });
        return results.results;
    };
        const aggregateWithProjects = async () => {
            const issues = await db.aggregate( COLLECTION, LOOKUP_PROJECTS_PIPELINE );
            return issues;
        }
return {
get,
add,
aggregateWithProjects ,
}
};
