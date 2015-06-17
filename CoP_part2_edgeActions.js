/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_page1}", "dblclick", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("contents");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_page2}", "dblclick", function(sym, e) {
         // insert code for mouse double click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("page4");

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_page3}", "dblclick", function(sym, e) {
         // insert code for mouse double click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("page3");

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_contents}", "dblclick", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("sites");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sites}", "dblclick", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("page2");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_contents}", "swipeleft", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sites}", "swipeleft", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_page2}", "swipeleft", function(sym, e) {
         sym.playReverse();
         // insert code to be run when a swipeleft event occurs on an element

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_page3}", "swipeleft", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text2}", "dblclick", function(sym, e) {
         sym.play("page5");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_page6}", "dblclick", function(sym, e) {
         sym.play("page6");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_html5-cheat-sheet}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.kongram.com", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_page7}", "dblclick", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("page7");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'page1'
   (function(symbolName) {   
   
   })("page1");
   //Edge symbol end:'page1'

   //=========================================================
   
   //Edge symbol: 'page2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_chrome1}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("https://dribbble.com/", "_blank");
         

      });
      //Edge binding end

   })("page2");
   //Edge symbol end:'page2'

   //=========================================================
   
   //Edge symbol: 'page3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Text4Copy5}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.csszengarden.com/", "_blank");
         

      });
      //Edge binding end

   })("page3");
   //Edge symbol end:'page3'

   //=========================================================
   
   //Edge symbol: 'contents'
   (function(symbolName) {   
   
   })("contents");
   //Edge symbol end:'contents'

   //=========================================================
   
   //Edge symbol: 'sites'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${__2}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://altti0.dothome.co.kr/wp-admin/theme-install.php", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://graphpaperpress.com/themes/", "_blank");
         

      });
      //Edge binding end

   })("sites");
   //Edge symbol end:'sites'

   //=========================================================
   
   //Edge symbol: 'page5'
   (function(symbolName) {   
   
   })("page5");
   //Edge symbol end:'page5'

   //=========================================================
   
   //Edge symbol: 'page6'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle3}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://social.lge.co.kr/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle3Copy2}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.naver.com/", "_blank");
         

      });
      //Edge binding end

   })("page6");
   //Edge symbol end:'page6'

   //=========================================================
   
   //Edge symbol: 'page7'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_selector2}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://jsfiddle.net/altti0/3x6awvdf/", "_blank");
         

      });
      //Edge binding end

   })("page7");
   //Edge symbol end:'page7'

})(jQuery, AdobeEdge, "EDGE-24907138");
