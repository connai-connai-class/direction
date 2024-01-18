<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Director;

class DirectorProfileController extends Controller
{
  public function create(Request $request)
  {
    $introduction = new Director;
    $introduction->introduction = $request->profile_introduction;
    $introduction->save();
    return response()->json($introduction);
  }
}
