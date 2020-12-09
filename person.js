module.exports = function (firstName, lastName) {
    
    this.fullName = function () { 
        return firstName + ' ' + lastName;
    }
}