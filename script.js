	const navigationheight = document.querySelector('nav').offsetHeight;
	// console.log(document.documentElement);
	document.documentElement.style.setProperty('--scroll-padding', navigationheight + 'px');
	const scrollToTopButton = document.querySelector(".scroll-to-top");
  
	window.addEventListener("scroll", () => {
	  if (window.scrollY > 300) {
		scrollToTopButton.style.opacity = "1";
	  } else {
		scrollToTopButton.style.opacity = "0";
	  }
	});
  
	scrollToTopButton.addEventListener("click", () => {
	  window.scrollTo({ top: 0, behavior: "smooth" });
	});
