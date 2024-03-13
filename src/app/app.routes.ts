import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ColorsComponent } from './components/colors/colors.component';

export const routes: Routes = [
    {path: 'calculator', component: CalculatorComponent}, 
    {path: 'colors', component: ColorsComponent} 
];
