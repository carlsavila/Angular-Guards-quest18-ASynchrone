import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let guardResponse = false;

  const router = inject(Router);

  console.log('The navigation to a route monitored by CanActivate detected. Eg. Router\'s responses  :'
    , "queryParamMap : ", route.queryParamMap
    , "Component : ", route.component?.name
    , "Data : ", route.data
    , "State content : ", state
    , "State url : ", state.url
  );

  if (route.component?.name === '_SecuredComponent') {
    console.log("Blocage Synchrone: Accès non authorisé! Redirection vers notsecured ");
    router.navigate(['/notsecured']);
  }

  return guardResponse;
};
