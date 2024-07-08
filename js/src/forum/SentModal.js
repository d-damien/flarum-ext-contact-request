import Modal from 'flarum/common/components/Modal';

export default class SentModal extends Modal {
  className() {
    return 'contact-request-sent'
  }

  title() {
    return app.translator.trans('d-damien-contact-request.forum.sent')
  }

  content() {
    return <p>{app.translator.trans('d-damien-contact-request.forum.sent_body')}</p>
  }
}

