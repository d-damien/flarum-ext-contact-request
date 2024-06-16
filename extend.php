<?php

/*
 * This file is part of d-damien/contact-request.
 *
 * Copyright (c) 2024 d-damien.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace DDamien\ContactRequest;

use Flarum\Extend;
use Flarum\Api\Serializer\BasicUserSerializer;
use DDamien\ContactRequest\Controller\SendController;
use DDamien\ContactRequest\Notification\ContactRequestSent;


return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Routes('forum'))
        ->post('/u/{user}/contact-request', 'contact-request.send', SendController::class),
    (new Extend\Notification())
        ->type(ContactRequestSent::class, BasicUserSerializer::class, ['alert', 'email']),
    (new Extend\View)
        ->namespace('d-damien-contact-request', __DIR__.'/views'),
];
