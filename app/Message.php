<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $table = 'message';

    protected $primaryKey = 'message_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'message', 'client_id'
    ];

    public function client() {
        return $this->belongsTo(Client::class, 'client_id', 'id');
    }

}
