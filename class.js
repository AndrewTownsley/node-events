// eventEmitter.on(event, handler);
// eventEmitter.addListener(event, handler);
// eventEmitter.emit(event, value);
// eventEmitter.eventNames();
// eventEmitter.getMaxListeners();
// eventEmitter.setMaxListeners();
// eventEmitter.listenerCount(event);

function addTicket(ticket, callBack) {
  insertTiketIntoDatabase(ticket, function(err) {
    if(err)
    return(handleError(err))
    
    TicketEvent.on('inserted', function(ticket) {
      emailUser(ticket)
    });
    TicketEvent.on('inserted', function(ticket) {
      notifySlack(ticket)
    });
  })
}