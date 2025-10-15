function fitElementToScreen(element) {
  if (element) {
    element.style.width = window.innerWidth + "px";
    element.style.height = window.innerHeight + "px";
  }
}

export default fitElementToScreen;