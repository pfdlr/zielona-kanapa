
var slider = tns({
  container: "#slider",
  items: 1,
  mouseDrag: true,
  slideBy: "page",
  autoHeight: true,
  gutter: 10,
  controlsText: ["<", ">"],
  responsive: {
    992: {
      items: 3
    }
  },
  prevButton: ".btn-prev",
  nextButton: ".btn-next"
});
var slider1 = tns({
	container: "#slider1",
	items: 1,
	mouseDrag: true,
	slideBy: "page",
	autoHeight: true,
	gutter: 10,
	controlsText: ["<", ">"],
	responsive: {
	  992: {
		items: 3
	  }
	},
	prevButton: ".btn-prev-zk",
	nextButton: ".btn-next-zk"
  });
