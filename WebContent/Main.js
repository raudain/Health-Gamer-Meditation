// Pane
const paneElement = document.getElementById("pane");
paneElement.addEventListener("click", returnFromOverlay);
const bannerElement = document.getElementById("banner");
document.body.insertBefore(paneElement, bannerElement);

const newElement = document.getElementById("new");
const buttonElement = document.getElementsByTagName("button")[0];
newElement.addEventListener("click", e => {
    buttonElement.click();
});

function returnFromOverlay() {
	//appSwitcher.style.display = "none";
	pane.style.backgroundColor = "";
	pane.style.zIndex = -1;
	var workerOverlay = document.getElementById("worker-overlay");
	if (workerOverlay != null) {
		workerOverlay.style.display = "none";
	}
}


// Videos
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		displayVideos(this);
	}
};
xhttp.open("GET", "videos.xml", true);
xhttp.send();

function addVideo() {
	paneElement.style.zIndex = 2;
	paneElement.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

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
		const imageSource = xmlVideo.getElementsByTagName("source")[0].childNodes[0].nodeValue;
		imageElement.setAttribute("src", imageSource);
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
