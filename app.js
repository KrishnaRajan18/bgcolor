document.addEventListener('mousemove',function(e){
    const r=Math.round(e.pageX*255/window.innerWidth);
    
    const g=Math.round(e.pageY*255/window.innerHeight);
    const color=`rgb(${r},${g},0)`;
    document.body.style.background=color;
    console.log(e.pageX,e.pageY);
    
    })