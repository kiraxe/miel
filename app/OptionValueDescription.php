<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class OptionValueDescription extends Model
{
    protected $table = 'option_value_description';

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'option_id'
    ];

    public function optionValue()
    {
        return $this->belongsTo('App\OptionValue', 'option_value_id', 'option_value_id');
    }

}

