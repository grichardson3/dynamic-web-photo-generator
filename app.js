// console.log(document.querySelector("#templateSelector").value);

const selector = document.querySelector("#templateSelector");
const inputField = document.querySelector("#textInput");
const textSize = document.querySelector("#textSize");
const lineHeight = document.querySelector("#lineHeight");
const submitButton = document.querySelector("#submitButton");
const template = document.querySelector("#capture");
const quoteArea = document.querySelector("#quoteArea");
const quote = document.querySelector("#quote");

quoteArea.style.fontSize = "78px";
quoteArea.style.lineHeight = 1.2;
quoteArea.style.marginBottom = ((770 - quoteArea.clientHeight) / 2) + "px";

const templateSelection = (value) => {
    if (value === "black") {
        template.style.background = 'url("img/black-template-bg.png")';
        quote.style.fontSize = textSize.value + "px";
        quoteArea.style.fontSize = "78px";
        quoteArea.style.lineHeight = 1.2;
        quote.style.textTransform = "uppercase";
        quote.style.fontFamily = "BodoniXT";
        template.style.color = "white";
        quoteArea.style.marginBottom = ((770 - quoteArea.clientHeight) / 2) + "px";
    } else if (value === "white") {
        template.style.background = 'url("img/white-template-bg.png")';
        quote.style.fontSize = textSize.value + "px";
        quoteArea.style.fontSize = "78px";
        quoteArea.style.lineHeight = 1.2;
        quote.style.textTransform = "uppercase";
        quote.style.fontFamily = "BodoniXT";
        template.style.color = "black";
        quoteArea.style.marginBottom = ((770 - quoteArea.clientHeight) / 2) + "px";
    } else if (value === "chalk") {
        template.style.background = 'url("img/question-template.png")';
        quote.style.fontSize = textSize.value + "px";
        quoteArea.style.fontSize = "96px";
        quoteArea.style.lineHeight = 1.1;
        quote.style.textTransform = "none";
        quote.style.fontFamily = "DJB Chalk It Up";
        template.style.color = "white";
        quoteArea.style.marginBottom = 0;
    }
}

templateSelection(selector.value);

selector.addEventListener("change", () => {
    console.log("changed");

    document.body.removeChild(document.querySelector("#canvasElement"));

    template.style.display = "flex";
    document.body.style.display = "block";

    templateSelection(selector.value);
    setTimeout(() => {
        html2canvas(document.querySelector("#capture")).then(canvas => {
            template.style.display = "none" // Removes original html element from document;
            document.body.appendChild(canvas);
            canvas.setAttribute("id", "canvasElement");
            document.body.style.display = "flex";
            document.body.style.justifyContent = "space-around";
        });
    }, 200);
});

submitButton.addEventListener("click", () => {
    quote.textContent = inputField.value;

    document.body.removeChild(document.querySelector("#canvasElement"));

    template.style.display = "flex";
    document.body.style.display = "block";

    templateSelection(selector.value);
    setTimeout(() => {
        html2canvas(document.querySelector("#capture")).then(canvas => {
            template.style.display = "none" // Removes original html element from document;
            document.body.appendChild(canvas);
            canvas.setAttribute("id", "canvasElement");
            document.body.style.display = "flex";
            document.body.style.justifyContent = "space-around";
        });
    }, 200);
});

setTimeout(() => {
    html2canvas(template).then(canvas => {
        template.style.display = "none" // Removes original html element from document;
        document.body.appendChild(canvas);
        canvas.setAttribute("id", "canvasElement");
        document.body.style.display = "flex";
        document.body.style.justifyContent = "space-around";
    });
}, 200);