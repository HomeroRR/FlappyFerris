function emitSpacebarPress(targetElement = document.body) {
  // Create a new KeyboardEvent for keydown
  const keydownEvent = new KeyboardEvent("keydown", {
    key: " ", // The key value for spacebar
    code: "Space", // The physical key code
    keyCode: 32, // Deprecated, but still widely used for compatibility
    which: 32, // Deprecated, but still widely used for compatibility
    bubbles: true, // Allows the event to bubble up the DOM tree
    cancelable: true, // Allows the default action to be prevented
  });

  // Create a new KeyboardEvent for keyup
  const keyupEvent = new KeyboardEvent("keyup", {
    key: " ",
    code: "Space",
    keyCode: 32,
    which: 32,
    bubbles: true,
    cancelable: true,
  });

  // Dispatch the keydown event on the target element
  targetElement.dispatchEvent(keydownEvent);

  // Dispatch the keyup event after a short delay to simulate a press and release
  setTimeout(() => {
    targetElement.dispatchEvent(keyupEvent);
  }); // Adjust delay as needed
}

export default emitSpacebarPress;