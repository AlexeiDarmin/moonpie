exports.printMsg = function() {
    console.log("This is a message from the moonpie package");
}



// Also export {} is a handy way to make a file a module without importing anything.
// https://stackoverflow.com/questions/56577201/why-is-isolatedmodules-error-fixed-by-any-import/56577324
export {}