"use strict";

function main() {
	prepUX();
	handleAlertsHover();
	handleBoldTextHover();
	handleCharterHover();
	//handleSymitarClick();
}

function prepUX() {

}

function handleAlertsHover() {
	if (document.getElementById("alert")) {
		let myTarget = document.getElementById("alert")
		myTarget.addEventListener("mouseover", function() {
			myTarget.style.backgroundColor = "red";
		});
		myTarget.addEventListener("mouseout", function() {
			myTarget.style.backgroundColor = "#f7e4e1";
		});
	}
}

function handleBoldTextHover() {
	if (document.getElementsByClassName("boldText")) {
		let myTargets = document.getElementsByClassName("boldText");
		for (let i=0; i < myTargets.length; i++) {
			myTargets[i].addEventListener("mouseover", function() {
				myTargets[i].style.fontWeight = "bold";
			});
			myTargets[i].addEventListener("mouseout", function() {
				myTargets[i].style.fontWeight = "normal";
			});
		}
	}
}

function handleCharterHover() {
	if (document.getElementById("charter")) {
		let myTarget = document.getElementById("charter");
		myTarget.addEventListener("mouseover", function() {
			myTarget.style.backgroundColor = "#ffffb0";
		});
		myTarget.addEventListener("mouseout", function() {
			myTarget.style.backgroundColor = "#ffffff";
		});
	}
}

function handleSymitarClick() {
	if (document.getElementById("symitar")) {
		let myTarget = document.getElementById("symitar");
		myTarget.addEventListener("click", function() {
			window.open("file://stfranciscu.org/Shares/Tellers/intranet/test.bat");
			console.log("Ran bat");
		});
	}
}

main();