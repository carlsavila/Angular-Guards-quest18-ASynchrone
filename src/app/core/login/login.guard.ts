import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../../service/user.service';

export const loginGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserService);

  console.log('The navigation, to secured component route monitored by LoginGuard, detected.'
    ,' \n Eg. route\'s argument content  :'
    , "\n\t Route content : ", route
    , "\n\t queryParamMap : ", route.queryParamMap
    , "\n\t  Component : ", route.component?.name
    , "\n\t  Data : ", route.data
    , "\n  Eg. state's argument content"
    , "\n\t  State content : ", state
    , "\n\t  State url : ", state.url
  );

  console.log("User login reponse : ",userService.login())
   return userService.login();
};
