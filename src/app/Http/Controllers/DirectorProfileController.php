<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Director;

class DirectorProfileController extends Controller
{
  public function create(Request $request)
  {
    $director = new Director;
    $director->name = $request->name;
    $director->introduction = $request->introduction;
    // $director->save();
    return response()->json($director);
  }
}
