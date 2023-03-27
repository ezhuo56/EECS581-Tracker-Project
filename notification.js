/*
  Name: notifications.js
  Description: This file contains the function for sending a notification
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 03/26/2023
  Date revised: 03/26/2023
  Preconditions: None
  Postconditions: Sends a notifcation to the users device
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/

export function sendNotification(token, title, body) {
    console.log("Sending Notification");
    fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Accept-Encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            to: token,
            data: {},
            title: title,
            body: body,
        }),
    })
};