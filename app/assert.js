const assert = (condition, desc) =>{
    const li = document.createElement("li");
    li.className = condition ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.querySelector("#result").appendChild(li);
}

export {assert};