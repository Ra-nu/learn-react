import React from "react";
import ReactDOM from "react-dom/client";

//JSX - HTML or XML like syntax
//JSX code transpiled(converting to the code that browser can understand) before it reaches to js engine
//this transpilation is done by babel
// jsx converted -> React.createElement -> React Elemt - js object -> HTMLElement(render)
const jsxHeading = <h1 id="heading" className="testHead" tabIndex={5}>This is H1 tag</h1>;



// React Component- Everything is component in react like button, searchbar, heading, header, 
// input box everything
// there are 2 types of Comp. 1. classbased, 2nd is functional(this is javascript function which returns some jsx or we can say react element)
//React functional component

const HeadingComponent1 = ()=>{
    return <h1 id="funcName">I am react functional component1</h1>
};
const HeadingComponent2 = ()=>  <h1 id="funcName2">I am react functional component2</h1>;


//above 2 syntax are same


//component composition: component under component is called component composition
const HeadingComponent = ()=>   (   //React fragment behaves like an empty tag
     <>       
    <div id="container">
        <HeadingComponent2 />
            <h1 id="funcName">I am react functional component</h1>
    </div>
    <div id="container-2"></div>
   
    </>
);
const test= <div><h3>hiii</h3></div>;

const root= ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);  rendering react element


//root.render(test); //this is the way to call react element

root.render(<HeadingComponent />);// this is the way to call component




