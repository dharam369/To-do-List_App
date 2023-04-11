module.exports.getDate = getDate;

function getDate() {

    const today = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const day = today.toLocaleDateString("en-US", options);
    return day;
}


module.exports.getDay = function() {

    const today = new Date();
    const options = {
        weekday: 'long',
        };
    return today.toLocaleDateString("en-US", options);
    
}


exports.getD =function() {

    const today = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return today.toLocaleDateString("en-US", options);
    
}
