document.addEventListener("DOMContentLoaded", function () {
    var searchButton = document.getElementById("searchButton");
    var searchInput = document.getElementById("searchInput");
    var imageContainer = document.getElementById("imageContainer");

    searchButton.addEventListener("click", function () {
        var searchTerm = searchInput.value.trim();
        if (searchTerm !== "") {
            // Change the text of the button to "Generating..."
            searchButton.textContent = "Generating...";
            
            query({ "inputs": searchTerm }).then((response) => {
                var imageURL = URL.createObjectURL(response);
                var imgElement = document.createElement("img");
                imgElement.src = imageURL;
                imgElement.classList.add("generated-image");
                imageContainer.innerHTML = "";
                imageContainer.appendChild(imgElement);
                
                // Change the text of the button back to "Generate Image"
                searchButton.textContent = "Generate Image";
            }).catch((error) => {
                console.error("Error fetching image:", error);
                // In case of error, change the text of the button back to "Generate Image"
                searchButton.textContent = "Generate Image";
            });
        }
    });
});
