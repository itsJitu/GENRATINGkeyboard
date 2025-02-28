document.addEventListener("DOMContentLoaded", function () {
    const noteText = document.getElementById("noteText");
    const colorPicker = document.getElementById("colorPicker");
    const notesContainer = document.getElementById("notesContainer");
    const noNotesMessage = document.getElementById("noNotesMessage");

    function updateNoNotesMessage() {
        noNotesMessage.style.display = notesContainer.children.length ? "none" : "block";
    }

    window.addNote = function () {
        const text = noteText.value.trim();
        if (!text) {
            alert("Please enter a note!");
            return;
        }

        const note = document.createElement("div");
        note.classList.add("note");
        note.style.backgroundColor = colorPicker.value;
        note.innerHTML = `
            <p>${text}</p>
            <button class="delete-btn" onclick="deleteNote(this)">×</button>
        `;

        notesContainer.appendChild(note);
        noteText.value = "";
        updateNoNotesMessage();
    };

    window.deleteNote = function (btn) {
        btn.parentElement.remove();
        updateNoNotesMessage();
    };

    updateNoNotesMessage();
});
