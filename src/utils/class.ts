export const addClass = (elm:HTMLElement, cls:string) => {
    if(!elm.classList.contains(cls)) {
        elm.classList.add(cls);
    }
}

export const removeClass = (elm:HTMLElement, cls:string) => {
    if(elm.classList.contains(cls)) {
        elm.classList.remove(cls);
    }
}