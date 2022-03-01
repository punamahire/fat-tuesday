/*
 *  Event which renders individual event objects as HTML
 */
export const event = (eventObj) => {
    return `<div class="event-card">
                <h3 class="event-name">${eventObj.event}</h3>
                <ul>
                    <li class="event-details">${eventObj.date}</li>
                    <li class="event-details">${eventObj.time}</li>
                    <li class="event-details">${eventObj.venue}</li>
                    <li class="event-details">${eventObj.address}</li>
                    <li class="event-details">${eventObj.city}</li>
                </ul>
            </div>`
}