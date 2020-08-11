@component('mail::message')

    Поступил новый заказ №{{$orderNumber}}

    Сумма : {{$orderPrice}}

@endcomponent
