function handleFormEvent(e) {
    e.preventDefault();
    console.log("form submitted!")
}

export default function FormEvent() {
    return (
        <form onSubmit={handleFormEvent}>
            <button>Submit</button>
        </form>
    )
}