<?php

namespace App\Http\Middleware;

use Closure;

class CheckSocialProvider
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!config('oauth.'.$request->provider.'.client_id')
            || !config('oauth.'.$request->provider.'.client_secret')) {
            return redirect()->route('login');
        }

        return $next($request);
    }
}
