<?php

namespace DDamien\ContactRequest\Controller;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response;

class SendController implements RequestHandlerInterface
{
    public function handle(Request $request): Response
    {
      return (new Response());
    }
}
