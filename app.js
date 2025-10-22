const heading = React.createElement("h1", {id: 'heading'}, "Hello Hi React with CDN");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
const ptag = React.createElement("p", {id: 'ptag'}, "hi this is pargraph");
root.render(ptag);
