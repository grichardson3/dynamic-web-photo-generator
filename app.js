window.scrollTo(0, 0); // Must scroll to the top to prevent issues with canvas render

const selector = document.querySelector("#templateSelector");
const inputField = document.querySelector("#textInput");
const textSize = document.querySelector("#textSize");
const lineHeight = document.querySelector("#lineHeight");
const submitButton = document.querySelector("#submitButton");
const template = document.querySelector("#capture");
const quoteArea = document.querySelector("#quoteArea");
const quote = document.querySelector("#quote");

const download = document.getElementById('download');

download.addEventListener('click', function(e) {
    var link = document.createElement('a');
    link.download = `${(inputField.value).replace(/[^a-zA-Z ]/g, "")}.png`; // RegEx removes special characters from file name so that it can be zipped
    link.href = document.querySelector("#canvasElement").toDataURL();
    link.click();
    link.delete;
});

quoteArea.style.fontSize = "78px";
quoteArea.style.lineHeight = 1.2;
quoteArea.style.marginBottom = ((770 - quoteArea.clientHeight) / 2) + "px";

const templateSelection = (value) => {
    if (value === "black") {
        template.style.background = 'url("img/black-template-bg.png")';
        quoteArea.style.fontSize = textSize.value + "px";
        quoteArea.style.lineHeight = lineHeight.value;
        quote.style.textTransform = "uppercase";
        quote.style.fontFamily = "BodoniXT";
        template.style.color = "white";
        quoteArea.style.marginBottom = ((770 - quoteArea.clientHeight) / 2) + "px";
    } else if (value === "white") {
        template.style.background = 'url("img/white-template-bg.png")';
        quoteArea.style.fontSize = textSize.value + "px";
        quoteArea.style.lineHeight = lineHeight.value;
        quote.style.textTransform = "uppercase";
        quote.style.fontFamily = "BodoniXT";
        template.style.color = "black";
        quoteArea.style.marginBottom = ((770 - quoteArea.clientHeight) / 2) + "px";
    } else if (value === "chalk") {
        template.style.background = 'url("img/question-template.png")';
        quoteArea.style.fontSize = textSize.value + "px";
        quoteArea.style.lineHeight = lineHeight.value;
        quote.style.textTransform = "none";
        quote.style.fontFamily = "DJB Chalk It Up";
        template.style.color = "white";
        quoteArea.style.marginBottom = 0;
    }
}

templateSelection(selector.value);

selector.addEventListener("change", () => {
    document.body.removeChild(document.querySelector("#canvasElement"));

    template.style.display = "flex";
    document.body.style.display = "block";

    if (selector.value === "black") {
        textSize.value = 78;
        lineHeight.value = 1.2;
    } else if (selector.value === "white") {
        textSize.value = 78;
        lineHeight.value = 1.2;
    } else if (selector.value === "chalk") {
        textSize.value = 108;
        lineHeight.value = 1.1;
    }

    templateSelection(selector.value);

    setTimeout(() => {
        html2canvas(document.querySelector("#capture")).then(canvas => {
            template.style.display = "none" // Removes original html element from document;
            document.body.appendChild(canvas);
            canvas.setAttribute("id", "canvasElement");
            document.body.style.display = "flex";
            document.body.style.justifyContent = "space-between";
        });
    }, 200);
});

submitButton.addEventListener("click", () => {
    window.scrollTo(0, 0); // Must scroll to the top to prevent issues with canvas render
    quote.textContent = inputField.value;

    document.body.removeChild(document.querySelector("#canvasElement"));

    template.style.display = "flex";
    document.body.style.display = "block";

    templateSelection(selector.value);
    setTimeout(() => {
        html2canvas(document.querySelector("#capture")).then(canvas => {
            template.style.display = "none"; // Removes original html element from document
            document.body.appendChild(canvas);
            canvas.setAttribute("id", "canvasElement");
            document.body.style.display = "flex";
            document.body.style.justifyContent = "space-between";
        });
    }, 200);
});

setTimeout(() => {
    html2canvas(template).then(canvas => {
        template.style.display = "none" // Removes original html element from document;
        document.body.appendChild(canvas);
        canvas.setAttribute("id", "canvasElement");
        document.body.style.display = "flex";
        document.body.style.justifyContent = "space-between";
    });
}, 200);