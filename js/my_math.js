
/*
add(x, y)
subtract(x, y)
multiply(x, y)
divide(x, y)
pi // constant set to 3.14*/
module.exports =
{
    add:function(x, y) {
        return x + y;
    },

    subtract:function(x, y) {
        return x - y;
    },

    multiply:function(x, y) {
        return x * y;
    },

    divide:function (x, y) {
        if (y == 0) {
            throw new Error("y can't 0")
        }
        return x / y;
    },
};
 const pi = 3.14;
 module.exports.pi = pi;
