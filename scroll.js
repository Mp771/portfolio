document.addEventListener('DOMContentLoaded', function () {
    function animateClouds() {
        const clouds = document.querySelectorAll('.cloud');

        clouds.forEach(cloud => {
            let speed = 1 + Math.random() * 2; // Speed of horizontal movement
            let cloudWidth = cloud.offsetWidth;
            let screenWidth = window.innerWidth;

            function moveCloud() {
                let currentPos = parseFloat(window.getComputedStyle(cloud).left);

                // Move horizontally
                if (currentPos >= screenWidth) {
                    cloud.style.left = -cloudWidth + 'px';
                } else {
                    cloud.style.left = currentPos + speed + 'px';
                }

                // Apply vertical movement using CSS animation
                cloud.style.animation = `moveUpDown ${3 + Math.random() * 2}s ease-in-out infinite alternate`;

                requestAnimationFrame(moveCloud);
            }

            // Ensure the cloud is initially off the screen to the left
            cloud.style.left = -cloudWidth + 'px';
            moveCloud();
        });
    }

    animateClouds();
});


function openContactForm() {
    document.getElementById('popupForm').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popupForm').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}