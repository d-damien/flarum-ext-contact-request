<?php

namespace DDamien\ContactRequest\Controller;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Http\UrlGenerator;
use Flarum\Notification\NotificationSyncer;
use Flarum\Http\RequestUtil;
use Flarum\User\User;
use DDamien\ContactRequest\Notification\ContactRequestSent;

class SendController implements RequestHandlerInterface
{
    protected $notifications;
    public $settings;
    public $url;

    public function __construct(
      NotificationSyncer $notifications,
      SettingsRepositoryInterface $settings,
      UrlGenerator $url
    ) {
        $this->notifications = $notifications;
        $this->settings = $settings;
        $this->url = $url;
    }

    public function handle(Request $request): Response
    {
        if (! $actor = RequestUtil::getActor($request)) {
            return (new Response())->withStatus(401);
        }

        if (! $user = User::find($request->getQueryParams()['user'] ?? 0)) {
            return (new Response())->withStatus(400);
        }

        $actorProfileUrl = $this->url->to('forum')->route('user', ['username' => $actor->username]);
        $forumName = $this->settings->get('forum_title');

        $this->notifications->sync(
            new ContactRequestSent($actor, $forumName, $actorProfileUrl), [$user]
        );

        return (new Response());
    }
}
