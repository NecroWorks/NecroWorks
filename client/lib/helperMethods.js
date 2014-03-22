Handlebars.registerHelper("setTitle", function(title) {
	if(typeof title === "string") {
      document.title = title;  
    }
    else {
      document.title = "NecroWorks"; 
    }
});