// JavaScript source code
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		myfunction(this);
	}
};
xhttp.open("GET", "videos.xml", true);
xhttp.send();

function myfunction(xml) {
	const xmlDoc = xml.responseXML;
	const videoContainer = document.getElementById("videos");
	const xmlVideos = xmlDoc.getElementsByTagName("video");
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

		const captionLink = document.createElement("a");
		const xmlCaption = xmlVideo.getElementsByTagName("caption")[0].childNodes[0].nodeValue;
		captionLink.classList.add("video-title");
		captionLink.setAttribute("title", xmlCaption);
		captionLink.setAttribute("href", xmlLink);
		captionLink.innerHTML = xmlCaption;
		videoElement.appendChild(captionLink);
	}
}