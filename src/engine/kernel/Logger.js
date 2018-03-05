import Event from './Event';

export default class Logger {
  constructor(eventLog) {
    this.eventLog = eventLog;
  }

  debug(message) {
    const event = new Event();

    event.priority = -1;
    event.message = message;

    this.eventLog.push(event);

    return this;
  }

  info(message) {
    const event = new Event();

    event.priority = 0;
    event.message = message;

    this.eventLog.push(event);

    return this;
  }

  eventLog() {
    return this.eventLog;
  }
}
