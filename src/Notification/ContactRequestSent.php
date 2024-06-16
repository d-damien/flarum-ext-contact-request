<?php

namespace DDamien\ContactRequest\Notification;

use Symfony\Contracts\Translation\TranslatorInterface;
use Flarum\Notification\Blueprint\BlueprintInterface;
use Flarum\Notification\MailableInterface;
use Flarum\User\User;

class ContactRequestSent implements BlueprintInterface, MailableInterface
{
    public $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function getSubject()
    {
        return $this->user;
    }

    public function getFromUser()
    {
        return $this->user;
    }

    public function getData()
    {
    }

    public static function getType()
    {
        return 'contactRequestSent';
    }

    public static function getSubjectModel()
    {
        return User::class;
    }

    /* MailableInterface */

    public function getEmailView()
    {
        return ['text' => 'd-damien-contact-request::emails.contactRequestSent'];
    }

    public function getEmailSubject(TranslatorInterface $translator)
    {
        return $translator->trans('d-damien-contact-request.email.contact_request_sent.subject');
    }
}