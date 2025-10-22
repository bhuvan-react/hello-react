/**
 *
 * <div id='parent'>
 * <div id='child1'>
 * <h1>hello/h1>
 * <h2>hello/h2>
 * <h3>hello/h3>
 * </div>
 * <div id='child2'>
 * <h1>hello/h1>
 * <h2>hello/h2>
 * <h3>hello/h3>
 * </div>
 * </div>
 *
 *
 * if I want to create a nested elememts then the file would be like the below
 * React element is an Object
 * Now above div has one h1 tag what if it has more than one then the third arg of parent object should be an annary
 * const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
   [ React.createElement("h1", { id: "heading" }, "h1 tag"),React.createElement("h2", { id: "heading2" }, "h2 tag"), React.createElement("h3", { id: "heading3" }, "h3 tag")]
  )
);
now what if parent has two childs how to create ok lets see..!
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "h1 tag"),
    React.createElement("h2", { id: "heading2" }, "h2 tag"),
    React.createElement("h3", { id: "heading3" }, "h3 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "h1 tag"),
    React.createElement("h2", { id: "heading2" }, "h2 tag"),
    React.createElement("h3", { id: "heading3" }, "h3 tag"),
  ])]
); it will look like this. It will be ok with one parent with two child or two parents with three children it will look messy/untidy.
To achieve this there is something called JSX
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "h1 tag"),
    React.createElement("h2", { id: "heading2" }, "h2 tag"),
    React.createElement("h3", { id: "heading3" }, "h3 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "h1 tag"),
    React.createElement("h2", { id: "heading2" }, "h2 tag"),
    React.createElement("h3", { id: "heading3" }, "h3 tag"),
  ]),
]);
console.log(parent);
// const heading = React.createElement("h1", {id: 'heading'}, "Hello Hi React with CDN");
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
const ptag = React.createElement("p", { id: "ptag" }, "hi this is pargraph");
root.render(parent);
