<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

// use App\Models\Director;


class DirectorProfileController extends Controller
{
  public function update(Request $request)
  {
    $director = auth()->user();
    $director->fill($request->all());
    // $request->all()の戻り値が連想配列、つまり["introduction"=>"入力値","name"=>"名前",]
    // fill()によってインスタンスに代入が行われる
    // all()はrequest値を連想配列で取得
    // 連想配列はkeyとvalueがある
    // $director->introduction = $request->introduction;
    $director->update();
    return Inertia::render('director/profile/Show', $director);
    // return $director;
    // return response()->json("",204);
    // 更新処理は204.
  }
}
