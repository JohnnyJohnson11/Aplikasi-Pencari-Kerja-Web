function formatText(command) {
    const editor = document.getElementById('editor');
    
    editor.focus();
    document.execCommand(command, false, null);
    updateToolbarState();
}

function updateToolbarState() {
    document.querySelectorAll('.toolbar button').forEach(button => {
        const command = button.getAttribute('data-command');
        if (document.queryCommandState(command)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

document.addEventListener('selectionchange', updateToolbarState);