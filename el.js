var el=HTMLElement.prototype.el=function(q)
{
    var type=q.substring(0,1);
    if(type=="#") return document.getElementById( q.substring(1,q.length) );
    if(type==".") return document.getElementsByClassName( q.substring(1,q.length) );
};

HTMLElement.prototype.hide=function()
{
    if(this.style.display && this.style.display!="none")this.style.displayPrevious=this.style.display;
    this.style.display="none";
};

HTMLElement.prototype.show=function()
{
    this.style.display=this.style.displayPrevious||"block";
};

HTMLElement.prototype.on=function(what,cb)
{
    this.addEventListener(what,cb,false);
};
