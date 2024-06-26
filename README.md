# Contact Request
A [Flarum](http://flarum.org) extension. Adds a button to users profile that sends a request for contact/DM via email.

It is for you if...

- You want users to be able to contact each other directly
- Without exposing their email directly
- You don't want to manage in-forum DMs

## Installation
Merge the following in your root project composer.json :

```json
"autoload": {
    "psr-4": {
        "Flarum\\Notification\\": "vendor/d-damien/flarum-contact-request/src/Flarum/Notification/"
    },
    "exclude-from-classmap": ["vendor/flarum/core/src/Notification/NotificationMailer.php"]
},
```

Install with composer:

```sh
composer require d-damien/contact-request:"*"
```

## Updating

```sh
composer update d-damien/contact-request:"*"
php flarum cache:clear
```

## Links

- [Packagist](https://packagist.org/packages/d-damien/contact-request)
- [GitHub](https://github.com/d-damien/contact-request)
- [Discuss](https://discuss.flarum.org/d/PUT_DISCUSS_SLUG_HERE)
