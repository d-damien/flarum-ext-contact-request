<?php

namespace DDamien\ContactRequest\Controller;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response;
use Flarum\Notification\NotificationSyncer;
use Flarum\Http\RequestUtil;
use Flarum\User\User;
use DDamien\ContactRequest\Notification\ContactRequestSent;

class SendController implements RequestHandlerInterface
{
    protected $notifications;

    public function __construct(NotificationSyncer $notifications)
    {
        $this->notifications = $notifications;
    }

    public function handle(Request $request): Response
    {
        if (! $actor = RequestUtil::getActor($request)) {
            return (new Response())->withStatus(401);
        }

        if (! $user = User::find($request->getQueryParams()['user'] ?? 0)) {
            return (new Response())->withStatus(400);
        }

        $this->notifications->sync(
            new ContactRequestSent($actor), [$user]
        );

        return (new Response());
    }
}
