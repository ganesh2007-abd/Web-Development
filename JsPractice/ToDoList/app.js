let data = []
let bool = true
while (bool) {
    let choice = prompt("Enter a choice")
    switch (choice.toLowerCase()) {
        case "new":
            let task = prompt("Enter your task")
            if (data.includes(task)) {
                console.log("Already present in the list")
                alert("Already present in the list")
            }
            else {
                data.push(task)
                console.log(`Added ${task} to list`)
                alert(`Added ${task} to list`)
            }
            break

        case "list":
            if (data.length === 0) {
                console.log("No tasks present in the list")
                alert("No tasks present in the list")
            }
            for (let i = 0; i < data.length; i++) {
                console.log(`${i}   ${data[i]}`)
                alert(`${i}   ${data[i]}`)
            }
            break

        case "delete":
            let index = parseInt(prompt("Enter the task index number to delete"))
            while (isNaN(index) || index < 0 || index >= data.length) {
                index = parseInt(prompt("Enter a valid index"))
            }
            data.splice(index, 1)
            alert("Successfully deleted")
            break

        case "quit":
            bool = false
            break
        default:
            console.log("Invalid choice")
            alert("Invalid choice")
    }
}