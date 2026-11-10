document.addEventListener("DOMContentLoaded", () => {
    loadChoices()
})

function saveChoice(element) {
    const { name, value, type, checked } = element

    if (type === "checkbox") {
        let choices = JSON.parse(localStorage.getItem(name) || "[]")
        if (checked){
            if (!choices.includes(value)) {
                choices.push(value)
            }
            } else {
                choices = choices.filter(item => item !== value)
            }
        localStorage.setItem(name, JSON.stringify(choices))
    } else {
        localStorage.setItem(name, value)
    }
}

function loadChoices() {
    const inputs = document.querySelectorAll('input')

    for (const input of inputs) {
        const storedValue = localStorage.getItem(input.name)
        if (!storedValue){
            continue
        }
        if (input.type === "checkbox") {
            const choices = JSON.parse(storedValue)
            input.checked = choices.includes(input.value)
        } else if (input.type === "radio") {
            input.checked = (input.value === storedValue)
        }
    }
}

function resetProject() {
    if (confirm("Are you sure you want to clear all data and start over?")) {
        localStorage.clear();
        window.location.href = '../step-1-basic/';
    }
}