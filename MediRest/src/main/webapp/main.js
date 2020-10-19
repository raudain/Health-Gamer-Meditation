// Existing videos
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		const xmlVideos = xhttp.responseXML.getElementsByTagName("video");
		for (let i = 0; i < xmlVideos.length; i++) {
			const videoElement = document.createElement("div");
			videoElement.classList.add("video");
			document.getElementById("videos").appendChild(videoElement);

			const xmlVideo = xmlVideos[i];

			const imageLink = document.createElement("a");
			const xmlLink = xmlVideo.getElementsByTagName("link")[0].childNodes[0].nodeValue;
			imageLink.setAttribute("href", xmlLink);
			videoElement.appendChild(imageLink);
		
			const thumbnail = document.createElement("img");
			thumbnail.setAttribute("src", xmlVideo.getElementsByTagName("staticThumbnail")[0].childNodes[0].nodeValue);
			videoElement.addEventListener("mouseover", function() { 
				thumbnail.setAttribute("src", xmlVideo.getElementsByTagName("animatedThumbnail")[0].childNodes[0].nodeValue);
			});
			videoElement.addEventListener("mouseout", function() { 
				thumbnail.setAttribute("src", xmlVideo.getElementsByTagName("staticThumbnail")[0].childNodes[0].nodeValue);
			});
			imageLink.appendChild(thumbnail);
			
			const detailElement = document.createElement("div");
			detailElement.classList.add("detail");
			videoElement.appendChild(detailElement);
		
			const captionLink = document.createElement("a");
			const xmlCaption = xmlVideo.getElementsByTagName("caption")[0].childNodes[0].nodeValue;
			captionLink.classList.add("video-title");
			captionLink.setAttribute("title", xmlCaption);
			captionLink.setAttribute("href", xmlLink);
			captionLink.innerHTML = xmlCaption;
			detailElement.appendChild(captionLink);
		
			const timeElement = document.createElement("span");
			const xmlDate = xmlVideo.getElementsByTagName("date")[0].childNodes[0].nodeValue;
			const todaysDate = new Date();
			const videoDate = new Date(xmlDate.slice(0,4), xmlDate.slice(4,6) - 1, xmlDate.slice(6,8));
			const Difference_In_Days = (todaysDate.getTime() - videoDate.getTime()) / (1000 * 3600 * 24);
			const dayDifference = Math.floor(Difference_In_Days);
			const weekDifference = Math.floor(dayDifference / 7);
			const monthDifference = Math.floor(weekDifference / 4);
			let elapsedTime;
			if (weekDifference < 1) {
				elapsedTime = dayDifference + " days ago";
			} else if (weekDifference == 1) {
				elapsedTime = weekDifference + " week ago";
			} else if (weekDifference < 5) {
				elapsedTime = weekDifference + " weeks ago";
			} else {
				elapsedTime = monthDifference + " month ago";
			}
			timeElement.innerHTML = elapsedTime;
			detailElement.appendChild(timeElement);
		}
	}
};
xhttp.open("GET", "http://localhost:8080/MediRest/webapi/workers", true);
xhttp.send();


// New video

const overlayElement = document.getElementById("dialog");
const overlayBackground = document.getElementById("overlay-background");
overlayBackground.addEventListener("click", returnFromOverlay);
const animation = document.getElementById("animation");
overlayBackground.addEventListener("dragover", function() {
	animation.setAttribute("state", "drag-out");
});
document.getElementById("place-holder").addEventListener("click", function() {
	overlayBackground.style.display = "block";
	overlayElement.style.display = "block";
	setOverlayHeight();
});

const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", returnFromOverlay);

const fileDrop = document.getElementById("ytcp-uploads-dialog-file-picker");
fileDrop.addEventListener("dragover", function() {
	animation.setAttribute("state", "drag-in");
});

window.addEventListener("resize", setOverlayHeight);

window.addEventListener("dragover", function(e) {
	  e = e || event;
	  e.preventDefault();
	},false);
window.addEventListener("drop", function(e) {
	  e = e || event;
	  e.preventDefault();
	},false);
fileDrop.addEventListener("drop", e => {
    e.preventDefault();
    let inputElement = overlayElement.querySelector("input");
    if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        updateThumbnail(overlayElement, e.dataTransfer.files[0]);
    }

    overlayElement.classList.remove("drop-zone--over");
    animation.setAttribute("state", "idle");
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} overlayElement
 * @param {File} file
 */
function updateThumbnail(overlayElement, file) {

    let thumbnailElement = overlayElement.querySelector(".drop-zone__thumb");

    // First time - remove the prompt
    if (overlayElement.querySelector(".drop-zone__prompt")) {
        overlayElement.querySelector(".drop-zone__prompt").remove();
    }

    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone__thumb");
        overlayElement.appendChild(thumbnailElement);
    }

    thumbnailElement.dataset.label = file.name;

    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
    } else {
        thumbnailElement.style.backgroundImage = null;
    }
}

function setOverlayHeight() { overlayElement.style.height = window.innerHeight - 90 + "px";}

function returnFromOverlay() {
	overlayBackground.style.display = "none";
	overlayElement.style.display = "none";
}
