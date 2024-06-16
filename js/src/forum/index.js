import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserPage from 'flarum/forum/components/UserPage';
import NotificationGrid from 'flarum/forum/components/NotificationGrid';
import ContactRequestSent from './ContactRequestSent'
import ContactRequestButton from './ContactRequestButton'


app.initializers.add('d-damien/contact-request', _ => {
  // matching server & browser
  app.notificationComponents.contactRequestSent = ContactRequestSent;
  // settings
  extend(NotificationGrid.prototype, 'notificationTypes', function (items) {
    items.add('contactRequestSent', {
      name: 'contactRequestSent',
      icon: 'fas fa-paper-plane',
      label: app.translator.trans('d-damien-contact-request.forum.settings.notify_sent')
    })
  })

  extend(UserPage.prototype, 'navItems', function (items) {
    if (app.session.user.id() === this.user.id()) {
      return
    }
    items.add('contact-request', <ContactRequestButton userId={this.user.id()} />)
  })
})
