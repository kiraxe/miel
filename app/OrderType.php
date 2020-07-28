<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class OrderType extends Model
{
    protected $table = 'order_type';

    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name'];

}

