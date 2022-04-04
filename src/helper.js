export function element(className = "", type = "div")
{
    let result = document.createElement(type);
    result.className = className;
    return result;
}

export function clear() {
    let content = document.getElementById("content");
    content.removeChild(content.childNodes[0]);
}
