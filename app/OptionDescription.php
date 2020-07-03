<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class OptionDescription extends Model
{
    protected $table = 'option_description';

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    public function option()
    {
        return $this->belongsTo('App\Option', 'option_id', 'option_id');
    }

}
