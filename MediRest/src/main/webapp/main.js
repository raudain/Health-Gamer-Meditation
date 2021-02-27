const xmlhttp = new XMLHttpRequest();
var url = "http://localhost:8080/MediRest/api/videos";
xmlhttp.open("GET", url, true);
xmlhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		let videoObj;
		const isXml = this.responseXML != null;
		let videoList;

		if (isXml) {
			videoList = xmlhttp.responseXML.getElementsByTagName("video");
		} else {
			videoList = JSON.parse(this.responseText);
		}

		for (videoObj of videoList) {
			let objLink;
			let staticThumbnail;
			let objCaption;
			let objDate;

			if (isXml) {
				objLink = videoObj.getElementsByTagName("link")[0].childNodes[0].nodeValue;
				staticThumbnail = videoObj.getElementsByTagName("staticThumbnail")[0].childNodes[0].nodeValue;
				objCaption = videoObj.getElementsByTagName("caption")[0].childNodes[0].nodeValue;
				objDate = videoObj.getElementsByTagName("date")[0].childNodes[0].nodeValue;
			} else {
				objLink = videoObj.link;
				staticThumbnail = videoObj.staticThumbnail;
				objCaption = videoObj.caption;
				objDate = videoObj.date.toString();
			}

			const videoElement = createVideoElement();
			const imageLink = createImageLink(objLink, videoElement);
			createThumbnail(staticThumbnail, imageLink);
			createCaptionLink(objCaption, objLink, videoElement);
			createTimeElement(objDate, videoElement);
		}
	}
};

function createVideoElement() {
	const videoElement = document.createElement("div");
	videoElement.classList.add("video");
	document.getElementById("videos").appendChild(videoElement);
	return videoElement;
}

function createImageLink(objLink, videoElement) {
	const imageLink = document.createElement("a");
	imageLink.setAttribute("href", objLink);
	videoElement.appendChild(imageLink);
	return imageLink;
}

function createThumbnail(staticThumbnail, imageLink) {
	const thumbnail = document.createElement("img");
	thumbnail.setAttribute("src", staticThumbnail);
	/*thumbnail.addEventListener("mouseover", function() {
		thumbnail.setAttribute("src", videoObj.getElementsByTagName("animatedThumbnail")[0].childNodes[0].nodeValue);
	});*/
	thumbnail.addEventListener("mouseout", function(){ thumbnail.setAttribute("src", staticThumbnail); });
	imageLink.appendChild(thumbnail);
}

function createCaptionLink(objCaption, objLink, videoElement) {
	const captionLink = document.createElement("a");
	videoElement.addEventListener("dblclick", function() {
		deleteVideo("/" + objCaption);
		videoElement.remove();
	});
	captionLink.classList.add("video-title");
	captionLink.setAttribute("title", objCaption);
	captionLink.setAttribute("href", objLink);
	captionLink.innerHTML = objCaption;
	videoElement.appendChild(captionLink);
}

function createTimeElement(objDate, videoElement) {
	const timeElement = document.createElement("span");
	const todaysDate = new Date();
	const videoDate = new Date(objDate.slice(0,4), objDate.slice(4,6) - 1, objDate.slice(6,8));
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

xmlhttp.send();

window.addEventListener("resize", function(){ document.getElementById("video-container").style.height = "1110px";});

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
	const xmlVideo = xmlDoc.getElementsByTagName("video")[0];
	const form = document.querySelector('form');
	const formData = new FormData(form);
	const jsonVideo = Object.fromEntries(formData.entries());

	const thumbnailElement = xmlDoc.createElement("staticThumbnail");
	xmlVideo.appendChild(thumbnailElement);
	const thumbnailText = xmlDoc.createTextNode(jsonVideo.staticThumbnail);
	thumbnailElement.appendChild(thumbnailText);

	const linkElement = xmlDoc.createElement("link");
	xmlVideo.appendChild(linkElement);
	const linkText = xmlDoc.createTextNode(jsonVideo.link);
	linkElement.appendChild(linkText);

	const captionElement = xmlDoc.createElement("caption");
	xmlVideo.appendChild(captionElement);
	const captionText = xmlDoc.createTextNode(jsonVideo.caption);
	captionElement.appendChild(captionText);

	const dateElement = xmlDoc.createElement("date");
	xmlVideo.appendChild(dateElement);
	const dateText = xmlDoc.createTextNode(jsonVideo.date);
	dateElement.appendChild(dateText);

	return xmlDoc;
}

function deleteVideo(caption) {
	const xhttp = new XMLHttpRequest();
	xhttp.open("DELETE", url + caption, true);
	xhttp.send();
}
