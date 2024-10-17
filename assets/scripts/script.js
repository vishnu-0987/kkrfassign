const images = document.querySelectorAll(".two-images div img");

images.forEach((image) => {
  const hiddenText = image.parentElement.querySelector("#hiddenText");

  image.addEventListener("mouseenter", () => {
    hiddenText.classList.add("animate__slideInUp", "animated-visible");
  });

  image.addEventListener("mouseleave", () => {
    hiddenText.classList.remove("animate__slideInUp", "animated-visible");
  });
});

const images1 = [
  "/assets/images/image1a.png",
  "/assets/images/image1b.png",
  "/assets/images/image1c.png",
  "/assets/images/image1d.png",
];

const images2 = [
  "/assets/images/image2a.png",
  "/assets/images/image2b.png",
  "/assets/images/image2c.png",
  "/assets/images/image2d.png",
];

let index1 = 0;
let index2 = 0;

function changeFirstImage() {
  const img1 = document.getElementById("image1");

  // Apply zoom-out effect
  img1.classList.add("zoom-out");

  // Wait for zoom-out animation to finish, then change the image
  setTimeout(() => {
    index1 = (index1 + 1) % images1.length; // Increment index, loop back to 0 if necessary
    img1.src = images1[index1]; // Change the image

    // Remove zoom-out and add zoom-in effect
    img1.classList.remove("zoom-out");
    img1.classList.add("zoom-in");

    // Remove zoom-in class after the animation finishes (0.5s)
    setTimeout(() => {
      img1.classList.remove("zoom-in");
    }, 500);
  }, 500); // Wait for zoom-out to complete (0.5s)
}

function changeSecondImage() {
  const img2 = document.getElementById("image2");

  // Apply zoom-out effect
  img2.classList.add("zoom-out");

  // Wait for zoom-out animation to finish, then change the image
  setTimeout(() => {
    index2 = (index2 + 1) % images2.length; // Increment index, loop back to 0 if necessary
    img2.src = images2[index2]; // Change the image

    // Remove zoom-out and add zoom-in effect
    img2.classList.remove("zoom-out");
    img2.classList.add("zoom-in");

    // Remove zoom-in class after the animation finishes (0.5s)
    setTimeout(() => {
      img2.classList.remove("zoom-in");
    }, 500);
  }, 500); // Wait for zoom-out to complete (0.5s)
}

function changeImages() {
  // Change the first image immediately
  changeFirstImage();

  // Change the second image with a delay (0.5s delay to create the lag effect)
  setTimeout(() => {
    changeSecondImage();
  }, 500);
}

// Change images every 2 seconds (including transitions)
setInterval(changeImages, 2000);

// Initial call to start the image transition loop
changeImages();
