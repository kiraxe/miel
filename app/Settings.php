<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Settings extends Model
{
    protected $table = 'settings';

    public $timestamps = false;

    private $storagePath = "/storage/";
    private $storageSettingsPath = "settings/";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['from', 'to'];


    public function uploadBanner($element, $page, $input, $image) {


        if ($element && !empty($image)) {
            Storage::disk('public')->delete(str_replace($this->storagePath,"", $element));
            $element = $this->storagePath.$image->store("uploads/$this->storageSettingsPath"."$page", 'public');
        } elseif($element && is_null($input)) {
            Storage::disk('public')->delete(str_replace($this->storagePath,"", $element));
            $element = null;
        } elseif(!$element && !empty($image)) {
            $element = $this->storagePath.$image->store("uploads/$this->storageSettingsPath"."$page", 'public');
        }

        return $element;

    }

}
