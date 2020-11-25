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
        if(!issueNumber) {
            try{
                const issues = await db.get(COLLECTION);
            return {issueslist:issues};
            }catch(ex){
                return{error:ex}
                        }
        }
        try{
        const status = await db.get(COLLECTION,{issueNumber});
        return status;
        }catch (ex){
            return{ error:ex}
    }
}
const add = async(issueNumber, title, description, status, project_id) => {
    if (issueNumber != null, title != null, description != null, status != null, project_id != null){
        let issues;
        try{
            issues = await get(issueNumber);
        }catch(ex){
            console.log("It's NUll");
            return{ex};
        }
        if(issues.length === 0){
            
        try{

const issuesCount = await db.count( COLLECTION );
const results = await db.add( COLLECTION , {
id: issuesCount + 1,
issueNumber: issueNumber,
title: title,
description: description,
status: status,
project_id: project_id,
});
return (results.result ) ;
        }catch(ex){
        console.log("error");
        return{error: ex};
        }
        }
    } 
}
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
