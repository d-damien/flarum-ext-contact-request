import Notification from 'flarum/forum/components/Notification';

export default class ContactRequestSent extends Notification {
  icon() {
    return 'fas fa-paper-plane';
  }

  href() {
    const notification = this.attrs.notification;
    const sender = notification.subject();
    // const content = notification.content() || {};

    return app.route.user(sender);
  }

  content() {
    return app.translator.trans(
      'd-damien-contact-request.forum.notifications.sent',
      { user: this.attrs.notification.fromUser() }
    );
  }
}
