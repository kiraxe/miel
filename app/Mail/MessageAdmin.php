<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Message;

class MessageAdmin extends Mailable
{
    use Queueable, SerializesModels;


    public $message;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($message)
    {
        $this->message = $message;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('kiraxe@yandex.ru', 'Сайт сувенирной продукции Миель')
            ->markdown('emails.message.message')
            ->with([
                'n' => $this->message['name'],
                'mess' => $this->message['message'],
            ]);
    }
}
