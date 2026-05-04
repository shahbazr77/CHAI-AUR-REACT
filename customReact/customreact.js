const  container = document.querySelector("#root");

const ElementProperty = {
    type: "a",
    children: "Click Here",
    proprty: {
        href: "https://www.google.com",
        target: "_blank",
    }
}

function CreateElement(ElementProperty,container){

    // const Element_main = document.createElement(ElementProperty.type);
    // Element_main.innerHTML = ElementProperty.children;
    // Element_main.setAttribute("href",ElementProperty.proprty.href);
    // Element_main.setAttribute("target",ElementProperty.proprty.target);
    // container.appendChild(Element_main);

    const domElement = document.createElement(ElementProperty.type);
    domElement.innerHTML = ElementProperty.children;
    
    for(const myProp in ElementProperty.proprty){
        if(myProp === "children") continue;
        //console.log(myProp);
        //console.log(ElementProperty.proprty[myProp]);
        
        domElement.setAttribute(myProp,ElementProperty.proprty[myProp]);
    }
    container.appendChild(domElement);

}

CreateElement(ElementProperty,container);

