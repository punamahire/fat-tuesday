/**
 *  eventList renders individual event objects as HTML
 */
 import { getEvent } from "./eventData.js"
 import { event } from "./event.js"
 
 export const eventList = () => {
 
     // Get a reference to the `<section class="eventList">` element
     const contentElement = document.querySelector(".eventList")
     const events = getEvent()
 
     // make sure we provided a valid html selector above
     if (contentElement) {
 
         // Declare a variable to hold on to the event HTML representation
         let eventHTMLRepresentation = "";
 
         // loop over the array of event
         for (const eachEvent of events) {
             console.log(eachEvent);
             eventHTMLRepresentation += `${event(eachEvent)}`    
         }
         // Set the dom equal to the variable containing the event html representations
         // Add to the existing HTML in the content element
         contentElement.innerHTML += `${eventHTMLRepresentation}`
         
         // return contentElement
     }
 }