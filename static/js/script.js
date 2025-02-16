
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

AOS.init({
    duration: 1000, 
    once: true, 
});

// Terminal typing animation
function initTerminalAnimation() {
    const terminal = document.getElementById('terminal');
    const commands = [
        "ls -l",
        "cd projects",
        "git clone https://github.com/yovitsa/aws-projects",
        "github-actions portfolio-deploy.yml",
        "echo 'Hi There, I'm Yovitsa'",
        "echo 'DevOps Engineer | Cloud Engineer'",
        "sudo 'Explore my profile below'"
    ];

    let index = 0;
    let line = 0;

    function typeCommand() {
        if (index < commands.length) {
            if (line < commands[index].length) {
                terminal.innerHTML += commands[index][line];
                line++;
                setTimeout(typeCommand, 100); 
            } else {
                terminal.innerHTML += '\n'; 
                index++;
                line = 0;
                setTimeout(typeCommand, 500); 
            }
        } else {
            terminal.innerHTML = ''; 
            index = 0;
            line = 0;
            setTimeout(typeCommand, 1000); 
        }
    }


    typeCommand();
}


initTerminalAnimation();


