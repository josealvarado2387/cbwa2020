module.exports = () => {
    const projects = [
    { id: 1 , name: 'William Gibson' },
    { id: 2 , name: 'Neil Stephenson' }
    ];
    const issues = [
    { id: 1 , name: 'Snow Crash' , author: 2 },
    { id: 2 , name: 'Cryptonomicon' , author: 2 },
    { id: 3 , name: 'Neuromancer' , author: 1 }
    ];
    return {
    issues ,
    projects ,
    };
    };