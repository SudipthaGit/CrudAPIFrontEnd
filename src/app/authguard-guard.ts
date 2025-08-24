import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('token') !== null)
      {
        return true;
      }
  else
    {
      alert('You are not authorized to access this page')
      return false;
    }
};
