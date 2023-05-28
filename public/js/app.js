(function() { 


    let ell = document.querySelectorAll(".view-page__logo")
    console.log("ell:", ell)
   
    
    let iframe = document.getElementById('home-widget')
    $('home-widget').contents().find("div.view-page__logo").remove();

    console.log("iframeWindow 1: ", iframe)
    $("#home-widget").contents().find( ".view-page__logo" ).css( "display", "none" )
    let iframeWindow = $("#home-widget").contents().find( ".view-page__logo" );

    iframeWindow.css( "display", "none" );

    console.log("iframeWindow 2: ", iframeWindow)
    if (iframe && iframe.contentDocument) {
        console.log("iframeWindow 4: ", iframe.contentDocument.body)
        // iframe.contentWindow.postMessage(event.target.value, "*");
        // iframe.contentDocument.body.prepend("Hello, world!")
    }
  
    
    $("#home-widget").contents().find(".view-page__logo").each(function(e) {
       
        $(this).parent().remove;
    });

    let der = $("#home-widget").contents().find(".view-page__logo").empty();
    $("#home-widget").contents().find( ".view-page__logo" ).css( "display", "none" );

    $("#home-widget").contents().find("view-page__logo").attr("style","display:none;")
    let docs = document.getElementsByClassName(".view-page__logo");
    console.log("iframeWindow 5: ", docs)
})();
