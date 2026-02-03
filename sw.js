// ... existing code ...

    if(e.key.toLowerCase() === "e") { 
        isEditMode = !isEditMode; 
        if(!isEditMode) {
            localStorage.setItem("remiTrailers", JSON.stringify(allTrailers));
            localStorage.setItem("remiWood", JSON.stringify(woodStacks));
            localStorage.setItem("remiDrivewayPoints", JSON.stringify(drivewayPoints));
            localStorage.setItem("remiMainDriveway", JSON.stringify(mainYardDriveway));
            // FIXED: Save the Loading Zone position when exiting edit mode
            localStorage.setItem("remiLoadingZone", JSON.stringify({x: loadingZone.x, y: loadingZone.y}));
            alert("Layout Saved!");
        }
    }

// ... existing code ...

// UPDATED: Load the saved position at the start of the script
const savedZone = JSON.parse(localStorage.getItem("remiLoadingZone"));
const loadingZone = { 
    x: savedZone ? savedZone.x : 3500, 
    y: savedZone ? savedZone.y : (lumberYard.y + (lumberYard.h / 2) - 100), 
    w: 400, 
    h: 200, 
    dragging: false 
};
