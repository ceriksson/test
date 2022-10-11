const saySomething = () => {
    console.log("HELLO WORLD!");
    document.body.style.backgroundColor = "pink";
};

window.saySomething = saySomething;