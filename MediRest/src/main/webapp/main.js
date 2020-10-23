const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		const xmlVideos = xhttp.responseXML.getElementsByTagName("video");
		for (let i = 0; i < xmlVideos.length; i++) {
			const videoElement = document.createElement("div");
			videoElement.classList.add("video");
			videoElement.addEventListener("dblclick", function() {
				videoElement.remove();
				xhttp.open("DELETE", "http://localhost:8080/MediRest/webapi/videos", true);
			});
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
xhttp.open("GET", "http://localhost:8080/MediRest/webapi/videos", true);
xhttp.send();

window.addEventListener("resize", e => document.getElementById("video-container").style.height = "70vh");