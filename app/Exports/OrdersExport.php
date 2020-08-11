<?php

namespace App\Exports;
use Illuminate\Database\Eloquent\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class OrdersExport implements FromCollection, WithColumnFormatting,ShouldAutoSize
{

    use Exportable;

    /**
    * @return \Illuminate\Support\Collection
    */

    private $data;
    private $columns = ['Общее кол-во', 'Наименование', 'Описание для счета'];
    private $products = [];
    private $collect;

    public function __construct($data)
    {

        $this->data = $data;
    }

    public function collection()
    {



        foreach($this->data as $key => $value) {

            array_push($this->columns, $value['client']['company']);

            foreach ($value['cart']['cart_to_product'] as $k => $v) {
                array_push($this->products, $v['order_detail']['product_name']);
            }

        }


        $products = array_unique($this->products);
        $this->collect = [$this->columns];


        $product_total_count = 0;
        $arrResult = null;

        foreach ($products as $key => $value) {

            foreach($this->data as $k => $v) {
                foreach ($v['cart']['cart_to_product'] as $ky => $val) {
                    if($val['order_detail']['product_name'] === $value) {
                        $product_total_count += (int)$val['order_detail']['count'];
                    }
                }
            }

            $arrResult = [$product_total_count, $value, ""];

            $product_total_count = 0;

            foreach($this->data as $k => $v) {
                foreach ($v['cart']['cart_to_product'] as $ky => $val) {
                    if($val['order_detail']['product_name'] === $value) {
                        array_push($arrResult, $val['order_detail']['count']);
                    }
                }
            }

            array_push($this->collect, $arrResult);
        }


        return new Collection($this->collect);
    }

    /**
     * @return array
     */
    public function columnFormats(): array
    {
        return [
            'E'   => NumberFormat::FORMAT_TEXT,
            'F'   => NumberFormat::FORMAT_TEXT,
            'L'   => NumberFormat::FORMAT_TEXT,
        ];
    }
}
