import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserPage from 'flarum/forum/components/UserPage';
import Button from 'flarum/common/components/Button';

class ContactRequest {
  static button(items, userId) {
    let actor = app.session.user
    if (actor && actor.id() !== userId) {
      items.add(
        'contact-request',
        <Button onclick={e => this.send(userId)} icon="fas fa-paper-plane">
          {this.buttonText}
        </Button>
      )
    }
  }

  static buttonText = app.translator.trans('d-damien-contact-request.forum.send')

  static send(userId) {
    app.request({
      method: 'POST',
      url: '/u/' + userId + '/contact-request',
    })
    .then(_ => {
      this.buttonText = app.translator.trans('d-damien-contact-request.forum.sent')
      m.redraw()
    })
  }
}



app.initializers.add('d-damien/contact-request', _ => {
  extend(UserPage.prototype, 'navItems', function (items) {
    ContactRequest.button(items, this.user.id())
  })
})
