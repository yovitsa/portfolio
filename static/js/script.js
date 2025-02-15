// // // Smooth scrolling for anchor links
// // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
// //     anchor.addEventListener('click', function (e) {
// //         e.preventDefault();
// //         document.querySelector(this.getAttribute('href')).scrollIntoView({
// //             behavior: 'smooth'
// //         });
// //     });
// // });

// // // Initialize AOS (Animate On Scroll)
// // AOS.init({
// //     duration: 1000, // Animation duration
// //     once: true, // Animations only happen once
// // });

// // // Uncomment and use this if you want to use particles.js
// // // particlesJS.load('hero', 'particles.json', function() {
// // //   console.log('callback - particles.js config loaded');
// // // });

// // // Three.js animation setup (optional - comment out if not needed)
// // function initThreeJS() {
// //     const scene = new THREE.Scene();
// //     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// //     const renderer = new THREE.WebGLRenderer();
// //     renderer.setSize(window.innerWidth, window.innerHeight);
// //     document.getElementById('hero').appendChild(renderer.domElement);

// //     const geometry = new THREE.BoxGeometry();
// //     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// //     const cube = new THREE.Mesh(geometry, material);
// //     scene.add(cube);

// //     camera.position.z = 5;

// //     const animate = function () {
// //         requestAnimationFrame(animate);
// //         cube.rotation.x += 0.01;
// //         cube.rotation.y += 0.01;
// //         renderer.render(scene, camera);
// //     };

// //     animate();
// // }

// // // Terminal typing animation
// // function initTerminalAnimation() {
// //     const terminal = document.getElementById('terminal');
// //     const commands = [
// //         "ls -la",
// //         "cd projects",
// //         "git clone https://github.com/yourusername/yourrepo",
// //         "ansible-playbook deploy.yml",
// //         "echo 'Automation is fun!'"
// //     ];

// //     let index = 0;
// //     let line = 0;

// //     function typeCommand() {
// //         if (index < commands.length) {
// //             if (line < commands[index].length) {
// //                 terminal.innerHTML += commands[index][line];
// //                 line++;
// //                 setTimeout(typeCommand, 100); // Typing speed (100ms per character)
// //             } else {
// //                 terminal.innerHTML += '\n'; // Move to the next line
// //                 index++;
// //                 line = 0;
// //                 setTimeout(typeCommand, 500); // Delay between commands (500ms)
// //             }
// //         } else {
// //             terminal.innerHTML = ''; // Reset animation
// //             index = 0;
// //             line = 0;
// //             setTimeout(typeCommand, 1000); // Restart delay (1 second)
// //         }
// //     }

// //     // Start the animation
// //     typeCommand();
// // }

// // // Initialize Three.js (optional - comment out if not needed)
// // // initThreeJS();

// // // Initialize Terminal Animation
// // initTerminalAnimation();

// // Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Initialize AOS (Animate On Scroll)
// AOS.init({
//     duration: 1000, // Animation duration
//     once: true, // Animations only happen once
// });

// // Uncomment and use this if you want to use particles.js
// // particlesJS.load('hero', 'particles.json', function() {
// //   console.log('callback - particles.js config loaded');
// // });

// // Three.js animation setup (optional - comment out if not needed)
// function initThreeJS() {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.getElementById('hero').appendChild(renderer.domElement);

//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);

//     camera.position.z = 5;

//     const animate = function () {
//         requestAnimationFrame(animate);
//         cube.rotation.x += 0.01;
//         cube.rotation.y += 0.01;
//         renderer.render(scene, camera);
//     };

//     animate();
// }

// // Terminal typing animation
// function initTerminalAnimation() {
//     const terminal = document.getElementById('terminal');
//     const commands = [
//         "ls -l",
//         "cd projects",
//         "git clone https://github.com/yovitsa/aws-projects",
//         "github-actions deploy.yml",
//         "echo 'Automation is Amazing!'",
//         "sudo 'Explore my profile below'"
//     ];

//     let index = 0;
//     let line = 0;

//     function typeCommand() {
//         if (index < commands.length) {
//             if (line < commands[index].length) {
//                 terminal.innerHTML += commands[index][line];
//                 line++;
//                 setTimeout(typeCommand, 100); // Typing speed (100ms per character)
//             } else {
//                 terminal.innerHTML += '\n'; // Move to the next line
//                 index++;
//                 line = 0;
//                 setTimeout(typeCommand, 500); // Delay between commands (500ms)
//             }
//         } else {
//             terminal.innerHTML = ''; // Reset animation
//             index = 0;
//             line = 0;
//             setTimeout(typeCommand, 1000); // Restart delay (1 second)
//         }
//     }

//     // Start the animation
//     typeCommand();
// }

// // Initialize Three.js (optional - comment out if not needed)
// // initThreeJS();

// // Initialize Terminal Animation
// initTerminalAnimation();

// Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         // Only prevent default behavior for anchor links
//         if (this.getAttribute('href').startsWith('#')) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         }
//         // External links (e.g., GitHub, LinkedIn) will work normally
//     });
// });

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
// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // Animation duration
    once: true, // Animations only happen once
});

// Uncomment and use this if you want to use particles.js
// particlesJS.load('hero', 'particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

// Three.js animation setup (optional - comment out if not needed)
// function initThreeJS() {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.getElementById('hero').appendChild(renderer.domElement);

//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);

//     camera.position.z = 5;

//     const animate = function () {
//         requestAnimationFrame(animate);
//         cube.rotation.x += 0.01;
//         cube.rotation.y += 0.01;
//         renderer.render(scene, camera);
//     };

//     animate();
// }

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
                setTimeout(typeCommand, 100); // Typing speed (100ms per character)
            } else {
                terminal.innerHTML += '\n'; // Move to the next line
                index++;
                line = 0;
                setTimeout(typeCommand, 500); // Delay between commands (500ms)
            }
        } else {
            terminal.innerHTML = ''; // Reset animation
            index = 0;
            line = 0;
            setTimeout(typeCommand, 1000); // Restart delay (1 second)
        }
    }

    // Start the animation
    typeCommand();
}

// Initialize Three.js (optional - comment out if not needed)
// initThreeJS();

// Initialize Terminal Animation
initTerminalAnimation();

// Smooth scrolling for anchor links
