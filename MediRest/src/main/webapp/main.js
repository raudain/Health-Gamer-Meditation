const gethttp = new XMLHttpRequest();
gethttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		const xmlVideos = gethttp.responseXML.getElementsByTagName("video");
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
			imageLink.appendChild(thumbnail);

			const captionLink = document.createElement("a");
			const xmlCaption = xmlVideo.getElementsByTagName("caption")[0].childNodes[0].nodeValue;
			videoElement.addEventListener("dblclick", function() {
				deleteVideo("/" + xmlCaption);
				videoElement.remove();
			});
			captionLink.classList.add("video-title");
			captionLink.setAttribute("title", xmlCaption);
			captionLink.setAttribute("href", xmlLink);
			captionLink.innerHTML = xmlCaption;
			videoElement.appendChild(captionLink);

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
			videoElement.appendChild(timeElement);
		}
	}
};
const url = "http://localhost:8080/MediRest/webapi/videos";
gethttp.open("GET", url, true);
gethttp.send();

window.addEventListener("resize", e => document.getElementById("video-container").style.height = "1110px");

function postVideo() {
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", url, true);
	xhttp.setRequestHeader("Content-type", "application/xml");
	xhttp.onreadystatechange = function() {
		if(xhttp.readyState == 4 && xhttp.status == 200) {
			location.reload();
		}
	}
	const video = createVideo();
	xhttp.send(video);
}

function createVideo() {
    const xmlDoc = document.implementation.createDocument(null, "video");
	const video = xmlDoc.getElementsByTagName("video")[0];
	const form = document.getElementsByTagName("form")[0];
	
	const thumbnailElement = xmlDoc.createElement("staticThumbnail");
	video.appendChild(thumbnailElement);
	const thumbnailText = xmlDoc.createTextNode(form.elements[0].value);
	thumbnailElement.appendChild(thumbnailText);
	
	const linkElement = xmlDoc.createElement("link");
	video.appendChild(linkElement);
	const linkText = xmlDoc.createTextNode(form.elements[1].value);
	linkElement.appendChild(linkText);
	
	const captionElement = xmlDoc.createElement("caption");
	video.appendChild(captionElement);
	const captionText = xmlDoc.createTextNode(form.elements[2].value);
	captionElement.appendChild(captionText);
	
	const dateElement = xmlDoc.createElement("date");
	video.appendChild(dateElement);
	const dateText = xmlDoc.createTextNode(form.elements[3].value);
	dateElement.appendChild(dateText);
	
	return xmlDoc;
}

function deleteVideo(caption) {
	const xhttp = new XMLHttpRequest();
	xhttp.open("DELETE", url + caption, true);
	xhttp.send();
}
