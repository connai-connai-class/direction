<?php

namespace App\Http\Controllers;

use App\Models\CreditCard;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CreditCardController extends Controller
{
  public function update(Request $request)
  {
    $credit_card = new CreditCard;
    // $credit_card->credit_card_uid = (string)Str::uuid();
    $credit_card->name = $request->name;
    $credit_card->card_number = $request->card_number;
    $credit_card->save();
    return response()->json($credit_card);
  }
}
