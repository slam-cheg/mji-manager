// Управление перетаскиванием рабочего окна по странице с помощью мыши
export const startDraggingDiv = (appVariables, event) => {
	appVariables.dragIco.style.cursor = "grabbing";
	let shiftX = event.clientX - appVariables.app.getBoundingClientRect().left;

	appVariables.html.addEventListener("mousemove", onMouseMove);
	appVariables.html.addEventListener("mouseup", () => {
		appVariables.html.removeEventListener("mousemove", onMouseMove);
		appVariables.dragIco.style.cursor = "grab";
		appVariables.dragIco.onmouseup = null;
	});

	function moveAt(screenX, screenY) {
		appVariables.app.style.left = screenX - 255 + "px";
		appVariables.app.style.top = screenY - 142 + "px";
	}

	function onMouseMove(event) {
		moveAt(event.screenX, event.screenY);
	}

	moveAt(event.screenX, event.screenY);
};

export const removeDefaultDrag = () => {
	return false;
};
