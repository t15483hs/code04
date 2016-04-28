function R(a){
    var b = 3.14159;
    return a*2*b;
}

function CulArea(a){
    return a*a*Math.PI;
}

function CulMaxArea (a,b,c){
    var aa = CulArea(a);
    var ba = CulArea(b);
    var ca = CulArea(c);
    return Math.max(aa,ba,ca)
}
