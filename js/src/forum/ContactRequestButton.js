import Button from 'flarum/common/components/Button';
import icon from 'flarum/common/helpers/icon';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator'
import SentModal from './SentModal'

export default class ContactRequestButton extends Button {
  buttonText = ''
  loading = null

  oncreate() {
    this.buttonText = app.translator.trans('d-damien-contact-request.forum.send')
  }

  onclick() {
    if (this.loading !== null) {
      return
    }

    this.loading = true
    app.request({
      method: 'POST',
      url: '/u/' + this.attrs.userId + '/contact-request',
    })
    .then(_ => {
      app.modal.show(SentModal)
      this.buttonText = app.translator.trans('d-damien-contact-request.forum.sent')
      this.loading = false
    })
  }

  getButtonContent(children) {
    return [
      icon('fas fa-paper-plane', { className: 'Button-icon' }),
      children && <span onclick={e => this.onclick()} className="Button-label">{this.buttonText}</span>,
      this.loading && <LoadingIndicator size="small" display="inline" />,
    ];
  }
}

