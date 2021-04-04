// Globals - No window!! - able to access anywhere in app

//__dirname   - path to current directory
//__filename  - file name
//require     - function to use modules
//module      - info about current module (file)
//process     - info about environment where the program is being executed

console.log(__filename);

setInterval(() => {
    console.log('hello world!')
}, 2000);