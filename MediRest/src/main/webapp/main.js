// Existing videos

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		displayVideos(this);
	}
};
xhttp.open("GET", "videos.xml", true);
xhttp.send();

function displayVideos(xml) {
	const xmlDoc = xml.responseXML;
	const videoContainer = document.getElementById("videos");
	const xmlVideos = xmlDoc.getElementsByTagName("video");
	const thisDate = new Date();
	for (let i = 0; i < xmlVideos.length; i++) {
		const videoElement = document.createElement("div");
		videoElement.classList.add("video");
		videoContainer.appendChild(videoElement);

		const xmlVideo = xmlVideos[i];

		const imageLink = document.createElement("a");
		const xmlLink = xmlVideo.getElementsByTagName("link")[0].childNodes[0].nodeValue;
		imageLink.setAttribute("href", xmlLink);
		videoElement.appendChild(imageLink);
		
		const imageElement = document.createElement("img");
		const imageName = xmlVideo.getElementsByTagName("thumbnail")[0].childNodes[0].nodeValue;
		imageElement.setAttribute("src", "images/thumbnail/" + imageName);
		imageLink.appendChild(imageElement);

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
		const videoYear = xmlVideo.getElementsByTagName("year")[0].childNodes[0].nodeValue;
		const videoMonth = xmlVideo.getElementsByTagName("month")[0].childNodes[0].nodeValue;
		const videoDay = xmlVideo.getElementsByTagName("day")[0].childNodes[0].nodeValue;
		const videoDate = new Date(videoYear, videoMonth, videoDay);
		const Difference_In_Time = thisDate.getTime() - videoDate.getTime(); 
		const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
		const dayDifference = Math.floor(Difference_In_Days);
		const weekDifference = Math.floor(dayDifference / 7);
		const monthDifference = Math.floor(weekDifference / 4);
		let time;
		if (weekDifference < 1) {
			time = dayDifference + " days ago";
		} else if (weekDifference == 1) {
			time = weekDifference + " week ago";
		} else if (weekDifference < 5) {
			time = weekDifference + " weeks ago";
		} else {
			time = monthDifference + " month ago";
		}
		timeElement.innerHTML = time;
		detailElement.appendChild(timeElement);
	}
}


// New video

const newElement = document.getElementById("place-holder");
const buttonElement = document.getElementsByTagName("button")[0];
newElement.addEventListener("click", e => {
    buttonElement.click();
});

const overlayElement = document.getElementById("overlay");
const overlayBackground = document.getElementById("overlay-background");
overlayBackground.addEventListener("click", returnFromOverlay);
const animation = document.getElementById("animation");
overlayBackground.addEventListener("dragover", function(){
	animation.setAttribute("state", "drag-out");
});

function addVideo() {
	overlayBackground.style.display = "block";
	overlayElement.style.display = "block";
}

const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", returnFromOverlay);

const fileDrop = document.getElementById("ytcp-uploads-dialog-file-picker");
fileDrop.addEventListener("dragover", function(){
	animation.setAttribute("state", "drag-in");
});

window.addEventListener("dragover",function(e){
	  e = e || event;
	  e.preventDefault();
	},false);
window.addEventListener("drop",function(e){
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

function returnFromOverlay() {
	overlayBackground.style.display = "none";
	overlayElement.style.display = "none";
}
