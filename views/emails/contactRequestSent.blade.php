{{ $translator->trans('d-damien-contact-request.email.body.sent', [
    'recipient_display_name' => $user->display_name,
    'forum_name' => $blueprint->forumName,
    'actor_display_name' => $blueprint->user->display_name,
    'actor_email' => $blueprint->user->email,
    'actor_profile_url' => $blueprint->actorProfileUrl,
]) }}
